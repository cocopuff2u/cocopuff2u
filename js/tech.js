document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        {
            "name": "Jamf",
            "icon": "images/tech/jamf.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Microsoft Intune",
            "icon": "images/tech/Intune.svg",
            "type": "mobile-tech"
        },
        {
            "name": "ManageEngine",
            "icon": "images/tech/MangeEngine.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Bash",
            "icon": "images/tech/bash.svg",
            "type": "web-tech"
        },
        {
            "name": "shell",
            "icon": "images/tech/terminal.svg",
            "type": "web-tech"
        },
        {
            "name": "Python",
            "icon": "images/tech/python.svg",
            "type": "web-tech"
        },
        {
            "name": "Javascript",
            "icon": "images/tech/js.svg",
            "type": "web-tech"
        },
        {
            "name": "AppleScript",
            "icon": "images/tech/Applescript.svg",
            "type": "web-tech"
        },
        {
            "name": "RedHat",
            "icon": "images/tech/redhat.svg",
            "type": "server-tech"
        },
        {
            "name": "Ubuntu",
            "icon": "images/tech/ubuntu.svg",
            "type": "server-tech"
        },
        {
            "name": "Windows",
            "icon": "images/tech/Windows.svg",
            "type": "server-tech"
        },
        {
            "name": "MacOS",
            "icon": "images/tech/Apple.svg",
            "type": "server-tech"
        },
        {
            "name": "Office 365",
            "icon": "images/tech/Office.svg",
            "type": "database-tech"
        },
        {
            "name": "Clio",
            "icon": "images/tech/clio.svg",
            "type": "database-tech"
        },
        {
            "name": "LightSpeed POS",
            "icon": "images/tech/lightspeed.svg",
            "type": "database-tech"
        },
                {
            "name": "Apple ASM & ABM",
            "icon": "images/tech/Apple.svg",
            "type": "database-tech"
        },
        {
            "name": "Apple GSX",
            "icon": "images/tech/Apple.svg",
            "type": "database-tech"
        },
        {
            "name": "ManagineEngine",
            "icon": "images/tech/MangeEngine.svg",
            "type": "database-tech"
        },
        {
            "name": "ServiceNow",
            "icon": "images/tech/servicenow.svg",
            "type": "database-tech"
        },
        {
            "name": "GitHub",
            "icon": "images/tech/github.svg",
            "type": "vc-tech"
        },
        {
            "name": "Jira",
            "icon": "images/tech/jira.svg",
            "type": "vc-tech"
        },
        {
            "name": "Docker",
            "icon": "images/tech/docker.svg",
            "type": "design-tech"
        },
        {
            "name": "SCCM",
            "icon": "images/tech/sccm.svg",
            "type": "design-tech"
        },
        {
            "name": "Git",
            "icon": "images/tech/git.svg",
            "type": "design-tech"
        },
        {
            "name": "Chrome Dev Tools",
            "icon": "images/tech/chrome.svg",
            "type": "design-tech"
        },
        {
            "name": "AWS",
            "icon": "images/tech/aws.svg",
            "type": "design-tech"
        },
        {
            "name": "Terminal",
            "icon": "images/tech/terminal.svg",
            "type": "design-tech"
        },
        {
            "name": "Visual Studio Code",
            "icon": "images/tech/visual-studio-code.svg",
            "type": "design-tech"
        },
        {
            "name": "PyCharm",
            "icon": "images/tech/pycharm.svg",
            "type": "design-tech"
        }
    ];

    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        if (tech[i]["name"] == "Node.js" || tech[i]["name"] == "Dart Frog") {
            techIconImg.style.height = "25px";
        }

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
}