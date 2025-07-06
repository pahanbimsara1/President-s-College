document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for your message, " + name + "! We'll get back to you soon.");
        form.reset();
    });
    
const animatedSections = document.querySelectorAll('.section-animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, {
    threshold: 0.3 
});


animatedSections.forEach(section => {
    observer.observe(section);
});


    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const sideNav = document.getElementById("sideNav");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        sideNav.classList.toggle("show");
    });

    
    document.querySelectorAll('.side-nav-link').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');
            document.body.classList.add('page-exit', 'fade-out');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    });

 
    sideNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sideNav.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });

  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
