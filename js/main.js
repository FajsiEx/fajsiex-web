onload = () => {
    particlesJS.load('particles-back', '../assets/json/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
};

const changeTagsDict = {
    added: "+",
    modified: "*",
    fixed: "/",
    removed: "-",
    code: ">"
};

function generateChangelogChangesHtml(changes) {
    let outputHtml = "";

    for (let changeType of Object.keys(changes)) {
        for (let change of changes[changeType]) {
            outputHtml += /*html*/`
                <div class="release-change">
                    <div class="change-tag tag-${changeType}">${changeTagsDict[changeType]}</div><div class="change-text">${change}</div>
                </div>
            `;
        }
    }

    return outputHtml;
}

function generateReleaseTagsHtml(tags) {
    if (!tags) { return ""; }
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
        project: "Website",
        build: "19.7.8",
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
        project: "Noter",
        build: "19.7.8",
        tags: ["alpha"],
        description: "",
        changes: {
            added: [
                "Local storage to remember last theme used and to display that theme on next launch"
            ]
        }
    },
    {
        type: "release",
        project: "Tea-bot Re:Write",
        build: "19.7.7",
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
    },
    {
        type: "release",
        project: "Non-existent project",
        build: "02.9.9",
        tags: ["alpha"],
        description: "Sample changelog entry for testing changelog features. Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description ",
        changes: {
            added: [
                "Nothing important",
                "Something very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very important",
            ],
            modified: [
                "Nothing important",
                "Something very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very important",
            ],
            fixed: [
                "Nothing important",
                "Something very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very important",
            ],
            removed: [
                "Nothing important",
                "Something very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very important",
            ],
            code: [
                "Nothing important",
                "Something very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very important",
            ]
        }
    }
];

let timelineHtml = "";

for (let event of timelineData) {
    let outputHtml = "";
    if (event.type == "release") {
        let buildColor = "";

        if (Array.isArray(event.tags)) {
            if (event.tags.includes("alpha")) {
                buildColor = "build-alpha";
            }
            if (event.tags.includes("beta")) {
                buildColor = "build-beta";
            }
        }

        outputHtml = /*html*/`
            <div class="flow-changelog-release">
                <h3 class="release-title">${event.project} <span class="release-build ${buildColor}">${event.build}</span> ${generateReleaseTagsHtml(event.tags)}</h3>
                <p class="release-notes">${event.description}</p>
                <div class="release-changes">${generateChangelogChangesHtml(event.changes)}</div>
            </div>
        `;
    }
    timelineHtml += outputHtml;
}

$("#js-timeline").html(timelineHtml);
