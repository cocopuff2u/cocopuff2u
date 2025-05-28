var dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
if (dnt != "1" && dnt != "yes") {
    // Replace analytics.js with gtag.js (latest Google Analytics)
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // <-- Replace with your Measurement ID
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX'); // <-- Replace with your Measurement ID
}