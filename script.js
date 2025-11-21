document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const contentWide = document.getElementById('content-wide');
    const contentMedium = document.getElementById('content-medium');
    const contentSmall = document.getElementById('content-small');

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
    var calendar_url = "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Australia%2FHobart&showPrint=0&title=Tas%20Tech%20Talks&src=NTVjYmIyNWFiZGM5MTc5ZjdhMDc1NDMyODc3ZGYwZjA5MmY1YzkxZjdjZTFkMGFkNDYzNDMzY2IzZjMwMDFmOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23e4c441";
    
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
