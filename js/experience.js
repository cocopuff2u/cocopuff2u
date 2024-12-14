document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Naval Information Warfare Center Atlantic",
            "position": "System Administrator (Apple/Linux SME)",
            "duration": "June 2023 - Present",
            "technologies": [
                "RHEL/MacOS/Windows",
                "Shell/Bash/Python/JavaScript",
            ],
            "details": [
                "Owing to the confidentiality and security concerns associated with my position, I am unable to furnish a comprehensive breakdown of my job responsibilities. My role involves handling sensitive information and safeguarding critical assets, which necessitates discretion and precaution in discussing the specific tasks and duties I perform. However, I am more than willing to engage in a general discussion about my professional background and the overarching goals and objectives of my position, while respecting the security protocols and confidentiality requirements that govern my work"
            ]
        },
        {
            "org": "Resource Management Concepts, Inc.",
            "position": "System Administrator (Apple SME) / Team Lead",
            "duration": "Aug 2022 - June 2023",
            "technologies": [
                "RHEL/MacOS/Windows",
                "Shell/Bash/Python//JavaScript",
            ],
            "details": [
                "Owing to the confidentiality and security concerns associated with this position, I am unable to furnish a comprehensive breakdown of my job responsibilities. My role involves handling sensitive information and safeguarding critical assets, which necessitates discretion and precaution in discussing the specific tasks and duties I perform. However, I am more than willing to engage in a general discussion about my professional background and the overarching goals and objectives of my position, while respecting the security protocols and confidentiality requirements that govern my work"
            ]
        },
        {
            "org": "College of Charleston",
            "position": "System Administrator | Field Service Technician",
            "duration": "Nov 2018 - Aug 2022",
            "technologies": [
                "Ubuntu/MacOS/Windows",
                "Jamf",
                "ServiceNow",
                "Office 365",
                "Apple School Manager",
                "Apple GSX",
                "AWS",
                "Shell/Bash/Python/AppleScript",
            ],
            "details": [
                "Proficiently diagnose, repair, and procure Mac, Linux, and Windows software, hardware, and peripherals",
                "Expertly administer, deploy, and script for campus-wide software management systems, including SCCM, Jamf, and more",
                "Lead in the management and training of Apple certifications and campus servers",
                "Efficiently oversee virtual machines and servers for the Computer Science Department, spanning Linux and Windows environments",
                "Successfully manage, repair, and deploy a fleet of 1500+ computers, encompassing both Windows and Mac platforms",
                "Create and author knowledge-based articles to provide valuable resources for internal and external campus users",
                "Maintain responsibility for inventory management and service equipment within the computing infrastructure",
            ]
        },
        {
            "org": "Divine Dining Group",
            "position": "Information Technology Coordinator",
            "duration": "Dec 2017 - Nov 2018",
            "technologies": [
                "MacOS/Windows",
                "Office 365",
                "Service Engine",
                "Bash/Shell/Python",
            ],
            "details": [
                "Proficiently diagnose, repair, and procure Windows/POS hardware and peripherals",
                "Expertly administer, deploy, and script for cloud-based Office 365, Windows, and Linux servers, as well as Point of Sale Systems",
                "Efficiently oversee hardware devices through the Device Management System (Service Engine)",
                "Responsively address email, helpdesk, and phone inquiries within a high-paced environment",
                "Safeguard and maintain computer/server equipment across 18 restaurant locations",
                "Lead the conception, execution, and management of IT projects spanning 18 restaurant locations",
            ]
        },
        {
            "org": "Burgeon Legal Group",
            "position": "IT Support Specialist",
            "duration": "Jan 2017 - Dec 2017",
            "technologies": [
                "MacOS",
                "Office 365",
                "Jamf",
                "Clio",
                "Apple Business Manager",
                "Shell/Bash/Python/AppleScript"
            ],
            "details": [
                "Proficiently diagnose, repair, and procure Mac and Windows software, hardware, and peripherals",
                "Serve as the administrator for critical systems including JAMF, Office 365, Clio, and Dropbox",
                "Responsively address support-related inquiries via email, helpdesk tickets, and phone calls",
                "Skillfully oversee computer equipment and software across a network spanning 20+ states, effectively managing them remotely",
                "Spearhead the conception, execution, and supervision of IT projects to enhance the firm's technological infrastructure and efficiency"
            ]
        },
        {
            "org": "CityMac",
            "position": "Regional Service Manager",
            "duration": "Sep 2012 - Dec 2017",
            "technologies": [
                "MacOS",
                "Jamf",
                "ServiceNow",
                "Office 365",
                "LightSpeed POS",
                "Apple Business Manager",
                "Apple GSX",
                "AWS",
                "Shell/Bash/AppleScript"
            ],
            "details": [
                "Oversee business-to-business, in-home, and in-store repairs for the eastern store locations, ensuring efficient administration",
                "Respond promptly to support-related inquiries via email and phone calls in a high-pressure environment",
                "Lead and oversee Apple authorized service departments across the eastern store locations",
                "Efficiently manage stock and service equipment for Apple Authorized Service Providers (AASP) in the eastern store locations",
                "Assume responsibility for IT staffing at eastern store locations, encompassing hiring, termination, performance evaluation, and training of personnel",
                "Spearhead the deployment, management, and maintenance of more than 8 Apple-based Point of Sale (POS)/GSX servers for eastern store locations"
            ]
        },
        {
            "org": "Fry's Computer Guys",
            "position": "Lead Repair Technician",
            "duration": "Aug 2010 - Sep 2012",
            "technologies": [
                "MacOS",
                "Jamf",
                "Office 365"
            ],
            "details": [
                "Proficiently diagnosing and resolving hardware and software issues in both Mac and PC systems",
                "Conducting on-site calls for troubleshooting and repairs, catering to both home and business settings",
                "Skillfully overseeing inventory and service equipment within the store",
                "Spearheading the design, installation, and maintenance of Local Area Networks (LANs) and wide-area networks (WANs) at the system level"
            ]
        }
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        technologiesHeading.innerHTML = "Technologies";

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}