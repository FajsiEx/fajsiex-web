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

// $(document).mousemove((event)=> {
//     let xMult = event.clientX / innerWidth;
//     let yMult = event.clientY / innerHeight;

//     let left = (xMult*10) / 4;
//     let top =  (yMult*10) / 4;

//     $(".background").css("left", `${left}%`);
//     $(".background").css("top", `${top}%`);
// });

const timelineData = [
    {
        type: "release",
        title: "Tea-bot beta 19.7.7",
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
    },
    {
        type: "release",
        title: "Test release of non-existing thing alpha 19.7.8",
        description: "Just a test release for testing the changelog.",
        changes: {
            added: [
                "Something",
                "Something else",
                "Another thing"
            ],
            modified: [
                "Something",
                "Something else",
                "Another thing"
            ],
            fixed: [
                "Something",
                "Something else",
                "Another thing"
            ],
            removed: [
                "Something",
                "Something else",
                "Another thing"
            ]
        }
    }
];

let timelineHtml = "";

for (let event of timelineData) {
    let outputHtml = "";
    if (event.type == "release") {
        outputHtml = /*html*/`
            <div class="flow-changelog-release">
                <h1 class="release-title">${event.title}</h1>
                <p class="release-notes">${event.description}</p>
                <div class="release-changes">${generateChangelogChangesHtml(event.changes)}</div>
            </div>
        `;
    }
    timelineHtml += outputHtml;
}

$("#js-timeline").html(timelineHtml);
