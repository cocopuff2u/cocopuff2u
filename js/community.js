document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {

    let communities = [
        {
            "name": "International Collegiate Programming Contest (ICPC)",
            "role": "Technical Lead",
            "session": "Feb 2020 - Aug 2022",
            "logo": "images/community/icpc.png",
            "link": "https://icpc.global/",
            "details": "ICPC Technical Lead - Contributed to the technical setup and seamless deployment of the International Collegiate Programming Contest held at the College of Charleston."
        },
        {
            "name": "CofC High School Programming Competition",
            "role": "Technical Lead",
            "session": "Feb 2020 - Aug 2022",
            "logo": "images/community/cofc.png",
            "link": "https://compsci.cofc.edu/community-engagement/acm-hs-programming.php",
            "details": " HSPC Technical Lead - Played a pivotal role in orchestrating the technical setup, providing steadfast support, and ensuring the flawless deployment of the high school programming competition hosted at the College of Charleston."
        },
        {
            "name": "Student Innovation Center",
            "role": "System Administrator",
            "session": "Nov 2018 - Aug 2022",
            "logo": "images/community/compsci.png",
            "link": "https://compsci.cofc.edu",
            "details": "CofC System Administrator - Played a key role in the establishment and ongoing support of the CofC Student Innovation Center, which encompasses an array of cutting-edge technologies, including 3D scanning, resin and filament 3D printing, robotic arms, Raspberry Pis, Arduinos, robotics builder kits, a student Linux server farm, private drones, and HTC VIVE VR headsets."
        },
        {
            "name": "Student Admin Support",
            "role": "System Administrator",
            "session": "Nov 2018 - Aug 2022",
            "logo": "images/community/cofc.png",
            "link": "https://compsci.cofc.edu/current-student/department-engagement.php",
            "details": "CofC System Administrator - Enthusiastically participated in and lent support to student-centered events hosted by the Computer Science Department, including the Global Game Jam, as well as actively engaged with clubs such as the Cybersecurity Club, Women in Computing, and CITA. In this capacity, I facilitated these clubs by providing essential hardware resources, delivering technical training support, and fulfilling diverse technical requirements for events, competitions, and their ongoing needs."
        }
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var link = com.link;
        var details = com.details;

        var card = document.createElement("a");
        card.className = "community-card";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        card.href = link;
        card.target = "_blank";

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        var point = document.createElement("li");
        point.className = "body2 cw-point";
        point.innerHTML = details;

        var points = document.getElementById("cw-points");
        points.appendChild(point);
    }
}