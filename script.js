window.onscroll = function() {shrinkHeader()};

function shrinkHeader() {
    var header = document.getElementById("header-name");
    var name = document.getElementById("my-name");
    var job = document.getElementById("my-job");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) 
    {
        header.style.padding = "5px 0";
        name.style.fontSize = "21px"; 
        job.style.fontSize = "21px";  
    } else 
    {
        header.style.padding = "10px 0";
        name.style.fontSize = "42px"; 
        job.style.fontSize = "42px";  
    }//end else-if
}//end shrinkHeader

document.addEventListener("DOMContentLoaded", function () {
    // Select elements with the 'section' class
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Optional: Stop observing after animation
            }
        });
    });

    // Observe each 'section' class element
    sections.forEach(section => {
        observer.observe(section);
    });
});