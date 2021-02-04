/*  for animation on scroll from AOS */

 AOS.init();

  
/* ====== sticky navbar on scroll start ======== */

const navigation = document.getElementById('navbar')
const siteName = document.getElementById('site-name')
const linksParent = document.getElementById('white-links')
const mybutton = document.getElementById("back-to-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)  {
      mybutton.style.display = "flex";
        navigation.style.backgroundColor = "#fff";
        siteName.style.color = "#7b1fed";
        linksParent.id = 'nowhite-links';
    }

    else  {    
      mybutton.style.display = "none";
        navigation.style.backgroundColor = "transparent";
        siteName.style.color = "white";
        linksParent.id = 'white-links'
    }
}

/* ====== sticky navbar on scroll end ======== */


/* ====== for testimonials from swiper ======== */

var mySwiper = new Swiper('.swiper-container', {
  // autoplay
  autoplay: {
    delay: 5000,
  },

   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },

});

/* ======= for testimonials from swiper ======= */




/*   =========== start counters ================ */

/* source https://codepen.io/bradtraversy/pen/poJwqOK */


const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

/*   ================== end counters ============= */


// Navigate projects start 


const skillsMenu = document.getElementById('skills-menu');
const menuItem = document.getElementsByClassName('skills-menu-item');
const projects = document.getElementsByClassName('projects');


function styleSkillsMunuItem (a,b,c) {
    a.style.cssText = 'background-color: #7b1fed;border-radius: 5px;padding: 3PX 5px;border: 1.5px solid #7b1fed;color: white;';
    b.style.cssText = 'background-color: white;border-radius: 5px;padding: 3PX 5px;border: 1.5px solid #7b1fed;color: #7b1fed;';
    c.style.cssText = 'background-color: white;border-radius: 5px;padding: 3PX 5px;border: 1.5px solid #7b1fed;color: #7b1fed;';
}

function displayProjectSection (e,f,g) {
        e.style.display = 'flex';
        f.style.display = 'none';
        g.style.display = 'none';
}

skillsMenu.addEventListener('click', event => {
   
       if (event.target === menuItem[0]) {    
           
                 styleSkillsMunuItem (menuItem[0],menuItem[1],menuItem[2])
                 displayProjectSection (projects[0],projects[2],projects[1])
        }  

       else if (event.target === menuItem[1]) {  

                 styleSkillsMunuItem (menuItem[1],menuItem[0],menuItem[2])
                 displayProjectSection (projects[1],projects[0],projects[2])
        }  

       else   {
                  styleSkillsMunuItem (menuItem[2],menuItem[0],menuItem[1])
                  displayProjectSection (projects[2],projects[0],projects[1])
        }     
});

// Navigate projects start





// mobile nav start

const hamberger = document.getElementById('hamberger')
const navicone = document.getElementById('navicone')
const mobileNav = document.getElementById('mobile-nav')

mobileNav.style.display = "none";

hamberger.addEventListener('click', (e) => {

  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
    navicone.className = "fas fa-bars"

  } else {
    mobileNav.style.display = "block";
    navicone.className = "fas fa-times"
  }
}) 

// mobile nav end