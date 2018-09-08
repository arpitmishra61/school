window.addEventListener("scroll",function(){
    var mainNav = document.querySelector('.mainNav');
    var altNav=document.querySelector('.altNav');
    mainNavUl=mainNav.children[1];
    if(window.pageYOffset > 200){
     mainNav.style.height = "70px"; 
     mainNav.style.transitionDuration="1s";altNav.style.transitionDuration="2.3s";
     altNav.style.display="none";
     mainNavUl.style.display="block"

     
    }
    else if(window.pageYOffset < 200){
      mainNav.style.height = "100px";
      mainNav.style.transitionDuration="1s"
      altNav.style.display="";
      altNav.style.transitionDuration="2.0s";
      mainNavUl.style.display="none";
    }
  },false);