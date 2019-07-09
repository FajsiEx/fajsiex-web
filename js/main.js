onload = () => {
    particlesJS.load('particles-back', '../assets/json/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
};

const changeTagsDict = {
    added: "+",
    updated: "*",
    fixed: "/",
    removed: "-",
    code: ">"
};
const changeTagsTooltipDict = {
    added: "Added",
    updated: "Updated",
    fixed: "Fixed",
    removed: "Removed",
    code: "Code change"
};

function generateChangelogChangesHtml(changes) {
    let outputHtml = "";

    for (let changeType of Object.keys(changes)) {
        for (let change of changes[changeType]) {
            outputHtml += /*html*/`
                <div class="release-change">
                    <div class="change-tag tag-${changeType}" data-toggle="tooltip" data-placement="left" title="${changeTagsTooltipDict[changeType]}">${changeTagsDict[changeType]}</div><div class="change-text">${change}</div>
                </div>
            `;
        }
    }

    return outputHtml;
}

// $(document).mousemove((event)=> {
//     let xMult = event.clientX / innerWidth;
//     let yMult = event.clientY / innerHeight;

//     let left = (xMult*10) / 4;
//     let top =  (yMult*10) / 4;

//     $(".background").css("left", `${left}%`);
//     $(".background").css("top", `${top}%`);
// });

/*
{
    type: "release",
    title: "",
    description: "",
    changes: {
        added: [],
        updated: [],
        fixed: [],
        removed: []
    }
},
*/

function renderTimeline(timelineData) {

    let timelineHtml = "";

    for (let event of timelineData) {
        let outputHtml = "";
        if (event.type == "release") {
            let buildColor = "";
            let buildTag = "";

            if (!event.description) { event.description = ""; }

            if (event.tag == "alpha") {
                buildColor = "build-alpha";
                buildTag = "alpha";
            }
            if (event.tag == "beta") {
                buildColor = "build-beta";
                buildTag = "beta";
            }

            outputHtml = /*html*/`
                <div class="flow-changelog-release">
                    <h3 class="release-title">${event.project} <span class="release-build ${buildColor}">${event.build} <span class="release-tag">${buildTag}</span></h3>
                    <p class="release-notes">${event.description}</p>
                    <div class="release-changes">${generateChangelogChangesHtml(event.changes)}</div>
                </div>
            `;
        }
        timelineHtml += outputHtml;
    }

    $("#js-timeline").html(timelineHtml);

}

$(function () {
    fetch('https://wanilla.eu-gb.mybluemix.net/api/timeline')
        .then(function (response) {
            return response.json();
        })
        .then(function (timelineData) {
            renderTimeline(timelineData);
            $('[data-toggle="tooltip"]').tooltip();
        });
});

const tailColors = [
    "#F3C860",
    "#F4CC6D",
    "#F5D17B",
    "#F5D588",
    "#F6DA95",
    "#F7DEA2",
    "#F8E3B0",
    "#F9E7BD",
    "#FAECCA",
    "#FAF0D7",
    "#FBF5E5",
    "#FCF9F2",
    "#FCF9F2",
    "#FBF4E3",
    "#FAEFD5",
    "#F9EAC6",
    "#F8E5B8",
    "#F8E1A9",
    "#F7DC9A",
    "#F6D78C",
    "#F5D27D",
    "#F4CD6F",
    "#F3C860"
];

const tailText = "senko best fox girl";

function tailCycle() {
    tailColors.push(tailColors.shift());

    let finalHtml = "";

    let i = 0;
    for (let letter of tailText) {
        finalHtml += `<span style="color:${tailColors[i]}">${letter}</span>`
        i++;
    }

    $("#tail-text").html(finalHtml);
}

setInterval(tailCycle, 50);

console.log(`
Sakuya Sakuya Saku,
Yakuza Yakuza Yaku,
Zayaku Zayaku Zaya,
Ah ba-ba-ba-ba~~\n
`);

$(".bottom-bar").on('mouseover', function(){
    $(".bottom-bar-background").css('opacity', 1);
});
$(".bottom-bar").on('mouseout', function(){
    $(".bottom-bar-background").css('opacity', 0);
});