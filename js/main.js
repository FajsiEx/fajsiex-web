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
        updated: [],
        fixed: [],
        removed: []
    }
},
*/

const timelineData = [
    {
        type: "release",
        project: "Website",
        build: "19.7.9",
        changes: {
            added: [
                "Dark gradient background to navbar",
                "Finally added the footer",
                "Tooltips to change tags on hover",
                "F logo has purple hover color"
            ],
            removed: [
                "Sample changelog entry"
            ],
            code: [
                "Use variables for colors instead of hard-coding them",
                "Changed 'modified' to 'updated'"
            ]
        }
    },
    {
        type: "release",
        project: "Website",
        build: "19.7.8",
        description: "Finally removed the placeholders and added a changelog",
        changes: {
            added: [
                "This changelog"
            ],
            updated: [
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
        changes: {
            added: [
                "Splash strings to config and their picker",
                "Color subspecial",
            ],
            updated: [
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
        let buildColor = "";

        if (!event.description) { event.description = ""; }

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

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});