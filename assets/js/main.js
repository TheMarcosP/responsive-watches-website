document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('home__description').innerText = "Introducing the Cotton Hoodie Slim Fit, a stylish and practical addition to anyone's wardrobe. Made from premium cotton, this hoodie offers a soft and comfortable feel against your skin. Its vibrant red color adds a pop of personality to any outfit, while the slim fit design ensures a modern and flattering silhouette. Built to last, this hoodie is both durable and easy to care for, handling hot water washes effortlessly. Perfect for chilly weather, it provides warmth and style without sacrificing comfort. Elevate your casual look with this versatile and high-quality hoodie.";
    document.querySelector('.home__img').src = 'models/model3_og.png';
    document.getElementById('User-Name').innerText = 'Register';
    document.querySelector('.featured__img1').src = 'models/model1_og.webp';
    document.querySelector('.featured__img2').src = 'models/model2_og.png';
    document.querySelector('.featured__img4').src = 'models/model4_og.webp';

});

document.getElementById('btn2').addEventListener('click', function() {
    document.getElementById('home__description').innerText = "This cotton hoodie slim fit is a versatile addition to any wardrobe. Its vibrant red color exudes confidence and energy, perfect for making a bold statement. Crafted with durability in mind, this hoodie is designed to withstand hot water washes, ensuring easy care and maintenance. Ideal for cold weather, it provides both warmth and style. Made with high-quality cotton, it offers exceptional comfort and longevity. Whether you're out for a casual stroll or braving the elements, this hoodie is sure to keep you looking sharp and feeling comfortable.";
    document.querySelector('.home__img').src = 'models/model3_latinv2.png';
    document.getElementById('User-Name').innerText = 'Santiago Torres';
    document.querySelector('.featured__img1').src = 'models/model1_latin.png';
    document.querySelector('.featured__img2').src = 'models/model2_latin.png';
    document.querySelector('.featured__img4').src = 'models/model4_latin.png';
});

document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('home__description').innerText = "Prepare for a stylish upgrade with the Cotton Hoodie Slim Fit, perfect for embracing chilly days with flair. This cozy hoodie in bold red promises warmth and comfort with its premium cotton material, ideal for the discerning gentleman. Tailored to a flattering slim fit, it ensures both style and functionality, while its durability ensures longevity even after countless washes. Whether you're braving the outdoors or simply enjoying a leisurely day, this hoodie is a versatile addition to your wardrobe. So why wait? Elevate your cold-weather ensemble effortlessly with this must-have piece.";
    document.querySelector('.home__img').src = 'models/model3_old.png';
    document.getElementById('User-Name').innerText = 'Marcos Piotto';
    document.querySelector('.featured__img1').src = 'models/model1_old.png';
    document.querySelector('.featured__img2').src = 'models/model2_old.png';
    document.querySelector('.featured__img4').src = 'models/model4_old.png';

});


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
