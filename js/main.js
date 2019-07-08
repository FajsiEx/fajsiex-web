onload = () => {
    particlesJS.load('particles-back', '../assets/json/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
};

function generateChangelogChangesHtml(changes) {
    let outputHtml = "";

    for (let changeType of Object.keys(changes)) {
        for (let change of changes[changeType]) {
            outputHtml += /*html*/`
                <div class="release-change">
                    <div class="change-tag tag-${changeType}">${changeType.toUpperCase()}</div><div class="change-text">${change}</div>
                </div>
            `;
        }
    }

    return outputHtml;
}

function generateReleaseTagsHtml(tags) {
    if (!tags) {return "";}
    let outputHtml = "";
    for (let tag of tags) {
        outputHtml += /*html*/`<div class="release-tag tag-${tag}">${tag.toUpperCase()}</div>`;
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
        modified: [],
        fixed: [],
        removed: []
    }
},
*/

const timelineData = [
    {
        type: "release",
        title: "Website 19.7.8",
        description: "Finally removed the placeholders and added a changelog",
        changes: {
            added: [
                "This changelog"
            ],
            modified: [
                "Navbar icons to stay on the right on all devices"
            ],
            fixed: [],
            removed: [
                "Placeholders",
                "Mouse parallax effect"
            ],
            code: [
                "Added basic HTML generation and dummy data in preparations for API calls"
            ]
        }
    },
    {
        type: "release",
        title: "Tea-bot 19.7.7",
        tags: ["beta"],
        description: "",
        changes: {
            added: [
                "Splash strings to config and their picker",
                "Color subspecial",
            ],
            modified: [
                "Discord onready event to display random splash string in the console",
                "!info:about to use the random splash string"
            ],
        }
    }
];

let timelineHtml = "";

for (let event of timelineData) {
    let outputHtml = "";
    if (event.type == "release") {
        outputHtml = /*html*/`
            <div class="flow-changelog-release">
                <h1 class="release-title">${event.title} ${generateReleaseTagsHtml(event.tags)}</h1>
                <p class="release-notes">${event.description}</p>
                <div class="release-changes">${generateChangelogChangesHtml(event.changes)}</div>
            </div>
        `;
    }
    timelineHtml += outputHtml;
}

$("#js-timeline").html(timelineHtml);
