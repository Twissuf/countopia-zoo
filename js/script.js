// togle class active

const navbarNav =  document.querySelector('.nav');  

// mencet menu

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// mencet selain menu

const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})