
var t1=gsap.timeline();
t1.to(".section1 #big ",{
    y:950,
    duration:15,
    opacity:'0',
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#big",
        duration:5,
        start:"top 0%",
        // markers:true,
        scrub:1,
        end:"bottom -50%",
    }
})
t1.to(".boxes1",{
   
    y:350,
    duration:2,
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#box1",
        
        start:"top top",
        // markers:true,
        scrub:2,
        end:"bottom 40%",
    }
})
t1.to(".boxes3",{
   
    y:250,
    duration:2,
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#box  ",
        
        start:"top top",
        // markers:true,
        scrub:2,
        end:"bottom 30%",
    }
})
t1.to(".section4  #image",{
    y:100,
    duration:1,
   
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#image",
        duration:2,
        start:"top 40%",
        // markers:true,
        scrub:2,
        end:"bottom -50%",
    }
})
t1.to(".section4  #image1",{
    y:100,
    duration:1,
   
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#image1",
        duration:2,
        start:"top 68%",
        // markers:true,
        scrub:2,
        end:"bottom -50%",
    }
})
t1.to(".section4  #image2",{
    y:100,
    duration:1,
   
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#image2",
        duration:2,
        start:"top 90%",
        // markers:true,
        scrub:2,
        end:"bottom -50%",
    }
})
t1.to(".section4  #image3",{
    y:100,
    duration:1,
   
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#image3",
        duration:2,
        start:"top 100%",
        // markers:true,
        scrub:2,
        end:"bottom -50%",
    }
})
t1.to(".section4  #image4 ",{
    y:100,
    duration:1,
   
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#image4",
        duration:2,
        start:"top 100%",
        // markers:true,
        scrub:2,
        end:"bottom -50%",
    }
})
t1.to(".section5",{
    y:150,
    duration:15,
  
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:"#imgbig",
        duration:5,
        start:"top 60%",
        // markers:true,
        scrub:1,
        end:"bottom -50%",
    }
})
t1.to(".section1 img",{
    y:950,
    duration:15,
    opacity:'0',
   
    ease:Expo.easeInOut,
    scrollTrigger:{
        trigger:".section1 img",
        duration:5,
        start:"top 10%",
        // markers:true,
        scrub:1,
        end:"bottom -50%",
    }
})
var btn=document.querySelector("#class #chev i");

btn.addEventListener("click",function(){
    document.querySelector("#class1").style.left='0px';
    document.querySelector(".section1").style.transform = 'translateX(-100%)';
    document.querySelector(".section1").style.transition='all 2s';
    document.querySelector("#class1").style.transition='all 2s';
    // document.querySelector("#big").style.opacity='0';
  
})
var btn1=document.querySelector("#class1 #chev i");

btn1.addEventListener("click",function(){
    document.querySelector("#class1").style.left='100%';
    document.querySelector("#class").style.left='0px';
    document.querySelector(".section1").style.transform = 'translateX(0%)';
    document.querySelector(".section1").style.transition='all 2s';
    document.querySelector("#class").style.transition='all 2s';
    // document.querySelector("#big").style.opacity='0';
  
})