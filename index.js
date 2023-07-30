(function (){

let socialdiv =document.querySelectorAll('.social div')
socialdiv.forEach((social,index)=>{
    social.style.animation = `aright .7s cubic-bezier(.51,.92,.24,1.15) forwards ${index/6+0.2}s`
})


let rocketpieces = document.querySelectorAll('.rocket-div span');
  let rocket = document.querySelector('.rocket-sec');
  let animestart = window.innerHeight / 4; // You can keep this value for future use.

  let rocketOffsetTop = rocket.offsetTop; // Corrected variable name here


let thirdoffettop = rocketpieces[2].offsetTop

  document.addEventListener('scroll', (e) => {
    if (window.scrollY > rocketOffsetTop - animestart) {
      rocketpieces[0].classList.add('active');
      rocketpieces[1].classList.add('active');
    }else{
      rocketpieces[0].classList.remove('active');
      rocketpieces[1].classList.remove('active')
    }


    
  if(window.scrollY >  thirdoffettop - animestart) {
    rocketpieces[2].classList.add('active');
  }else{
    rocketpieces[2].classList.remove('active')
  }


  });

  
  const hamburger = document.getElementsByClassName('humburger')[0]; // Assuming there's only one element with the class "humburger"
  const navmenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // Use toggle to add/remove the "active" class
    navmenu.classList.toggle("active"); // Use toggle to add/remove the "active" class
  });
  

})()


