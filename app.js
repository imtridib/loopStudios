const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top= '-100%';
}

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos < currentScrollPos) {
  //   document.querySelector(".mainMenu").style.top = "0";
  // } else {
    document.querySelector(".mainMenu").style.top = '-100%';
  }
  prevScrollpos = currentScrollPos;
};