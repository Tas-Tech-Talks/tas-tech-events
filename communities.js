const communities = [
    {
        "name": "Hobart Hackerspace",
        "url" : "https://hobarthackerspace.org.au",
        "description": "Hobart Hackerspace Inc. was founded in 2012 after a successful crowd funding campaign which was designed to not only raise money, but to also gauge the interest in opening a dedicated community workshop dedicated to technology and art. After many months of searching, a license was signed with the Tasmanian Department of Health and Human Services to utilise one of the heritage guardhouses at 2 St Johns Ave, New Town.",
        "img" : "hhslogo.png"
    },
    {
        "name": "Hobart Makers",
        "url" : "https://hobartmakers.com",
        "description": "We are a group of people that love making things. We are based in Hobart, Tasmania and we welcome people of any age, gender, skill level and from any background.",
        "img" : "hmilogo.png"
    },
    {
        "name": "Tas Game Makers",
        "url" : "https://tasgamemakers.com",
        "description": "We enjoy playing games, talking about games, and watching others play together. \
We provide opportunities for learning and collaboration, and encourage creative work from all skill levels and disciplines. \
We run events that focus around networking, as well as the sharing of skills, experience, and perspectives. \
We provide platforms for sharing progress, getting feedback, and staying up-to-date on industry news.",
        "img" : "tasgmlogo.png"
    },
    {
        "name": "Google Developers Group Hobart",
        "url" : "https://gdg.community.dev/gdg-hobart/",
        "description": "Disclaimer: GDG Hobart is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation. To learn more about the GDG program, visit https://developers.google.com/community/gdg",
        "img" : "gdg.jpg"
    },
    {
        "name": "SecTalks",
        "url" : "https://www.meetup.com/sectalks-hobart/",
        "description": "SecTalks is a non-profit community that runs monthly sessions for technical security talks, and hands-on security challenges! A forum to learn & discuss technical (in)security stuff. We have a mix of sessions for both beginners and security professionals.",
        "img" : "sectalks_hobart.webp"
    },
    {
        "name": "TasLUG (Tas Linux Users Group)",
        "url": "https://www.taslug.org.au",
        "description": "The Tasmanian Linux Users Group (TasLUG) promotes the use of Linux as well as Free, Libre, and Open Source Software (FLOSS) in general. ",
        "img": "tuz.png"
    },
    {
        "name": "REAST",
        "url": "https://www.reast.asn.au/",
        "description": "The Radio and Electronics Association of Southern Tasmania is a club for people interested in amateur radio and electronics. They aim to encourage and develop these pursuits, particularly for licensed radio amateurs. Members meet regularly at the former OTC Wireless Station in Hobart to share their interest in experimental radio communications and electronic projects. The club welcomes visitors and new members regardless of their experience.",
        "img": "reast.jpg"
    },
    {
        "name": "TasICT",
        "url": "https://www.tasict.com.au/",
        "description": "TasICT is the leading voice and advocate for the technology sector in Tasmania. We champion Industry growth and ICT careers for a vibrant, future-ready Tasmania.",
        "img": "tasict.svg"
    },
    { 
        "name": "Startup Tasmania",
        "url":"https://startuptasmania.com/",
        "description": "Startup Tasmania is a group for Tasmanian entrepreneurs. We advocate for startups in Tasmania. ",
        "img": "startup_tas.jpg"
    }
    // Add more communities as needed
]

function renderCommunitiesList() {
    var template = `
        {{@each(it.communities) => val, index}}
            <div class="card">
                <img src="{{val.img}}" class="card-img-top" alt="{{val.name}}">
                <div class="card-body">
                    <h5 class="card-title">{{val.name}}</h5>
                    <p class="card-text">{{val.description}}</p>
                    <a href="{{val.url}}" class="btn btn-primary">Visit {{val.name}}</a>
                </div>
            </div>
        {{/each}}
    `;

    return Sqrl.render(template, {"communities" : communities});
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("communities").innerHTML = renderCommunitiesList();
});
