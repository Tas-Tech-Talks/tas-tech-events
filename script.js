const calendars = [
    {
        "name": "Tas Game Makers",
        "calendar_url": "https://tasgamemakers.com/events/"
    },
    {
        "name": "Hobart Hackerspace",
        "calendar_url": "https://hobarthackerspace.org.au/events/"
    }
]

function renderCalendars() {
    var template = `
        {{@each(it.calendars) => val, index}}
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{val.name}}</h5>
                    <a href="{{val.calendar_url}}" class="btn btn-primary" target="_blank">View Calendar</a>
                </div>
            </div>
        {{/each}}
    `;
    Sqrl.defaultConfig.autoEscape = false;
    return Sqrl.render(template, {"calendars" : calendars});
    console.log(calendars);
}

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const contentWide = document.getElementById('content-wide');
    const contentMedium = document.getElementById('content-medium');
    const contentSmall = document.getElementById('content-small');

    console.log("DOM fully loaded and parsed");

    document.getElementById("published-calendars").innerHTML = renderCalendars();

    function toggleContent() {
        console.log(window.outerWidth)
        // small
        if (window.outerWidth < 600) {
            contentWide.style.display = 'none';
            contentMedium.style.display = 'none';
            contentSmall.style.display = 'block';
        } 
        // medium
        else if (window.outerWidth >= 600 && window.outerWidth <= 800) {
            contentWide.style.display = 'none';
            contentMedium.style.display = 'block';
            contentSmall.style.display = 'none';
        }
        // large
         else if (window.outerWidth > 800) {
            contentWide.style.display = 'block';
            contentWide.style.width = '802px';  
            contentMedium.style.display = 'none';
            contentSmall.style.display = 'none';
        }
    }
    window.addEventListener('resize', toggleContent);
    toggleContent(); // Initial check
    
});

function renderCalendarLinks() {
    var sizes = [300, 600, 800];
    var size_id = ["small", "medium", "wide"];
    var calendar_url = "https://calendar.google.com/calendar/embed?src=be61eafbbabe93ff842971abdb2b252bd2fd7b528d93e5fe71e4d1966770e019%40group.calendar.google.com&ctz=Australia%2FHobart";
    
    sizes.forEach(function(size, index) {
        var div = document.createElement('div');
        div.id = "content-" + size_id[index];
        div.className = 'calendar-div';
        iframe = document.createElement('iframe');
        iframe.src = calendar_url;
        iframe.width = size;
        
        iframe.height = 600;
        iframe.frameborder = 0;
        iframe.scrolling = "no";
        div.appendChild(iframe);
        document.getElementById("content").appendChild(div);
    });
}



renderCalendarLinks();

