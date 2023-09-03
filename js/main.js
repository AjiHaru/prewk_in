'use strict';
{
    const openClose = document.getElementById("openClose");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.getElementById("js-header");

    openClose.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        openClose.classList.toggle('active');
        navMenu.classList.toggle('active');
    });


}