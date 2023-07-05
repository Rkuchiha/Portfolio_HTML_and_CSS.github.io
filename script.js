// Navbar mobile Toggle Switch 
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
    console.log('click')
});

// Typing Effect

let typed = new Typed('.auto-input', {
    strings: ['Front-End Devloper !!','UI Designer !!', 'Java Devloper !!', 'Full-Stack Devloper !!', 'Dot-Net Devloper !!'],
    typedpeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
});

// Active Link State on scroll

// Get All Link
let navLink = document.querySelectorAll('nav ul li a')
// Get All Sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    const scrollPos = this.window.scrollY
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < ((section.offsetTop) + section.offsetHeight)) {
            navLink.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});







// let sections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('nav ul li a')

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 if (sections.getAttribute('id') === link.getAttribute('href').substring(1)){
//                     links.classList.add('active');
//                 }
//             });
//         }
//     });
// }