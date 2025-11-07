// // array//

// let navbar =["work","home","about","skill","servise","contact"];
// console.log(navbar[3]);

// // object

// let ul ={
//     li1 : "work",
//     li2 : "home" ,
//     li3 : "about",
//     li4 : "skill",
//     li5 : "servie",
//     li6 : "contact"
    
// }
// console.log(ul.li1, "print");

// // function

// function div() {
//     return "home page";
// }
// console.log(div(),"print")

// const contactForm = document.getElementById("contact-form");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const messageInput = document.getElementById("message");
// const formMsg = document.getElementById("form-msg");

// // Smooth scroll on navbar links
// document.querySelectorAll('nav a').forEach(link => {
//   link.addEventListener('click', function(e) {
//     if (this.getAttribute("href").startsWith("#")) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute("href"));
//       target.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });


//   <nav>
//     <h2>Ejaz Ahmad</h2>
//     <ul class="nav-opt">
//       <li><a href="#kl">Home</a></li>
//       <li><a href="#pl">About</a></li>
//       <li><a href="#ol">Skills</a></li>
//       <li><a href="">Services</a></li>
//       <li><a href="">Contact</a></li>
//     </ul>
//     <i class="fa-solid fa-bars icon"></i>
//   </nav>
let navbar =["work","home","about","skill","servise","contact"];
console.log(navbar[3]);
 document.getElementById("id1").innerHTML= navbar[2]


 