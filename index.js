function loco() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}

// loco()



var tl=gsap.timeline()


tl.to("#pages",{
    transform:"translateX(-180%)",
    // transform:"translateX(-30%)",
    fontWeight:"400",

    // backgroundColor:"green",
    scrollTrigger:{
        trigger:"#pages",
        scroller:"body",
        // markers:true,
        start:"top 0",
        // end:"top -180%",
        scrub:2,
        pin:true,

    }
})

// tl.to("#page1",{
//     // fontSize:"50vw",
//     width:'10vw',
//     Color:"red",
//     // height:"10vh",
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"body",
        
        
//         // markers:true,
//         start:"60% 58%",
//         end:"60% 20%",
//         scrub:5,
        

//     }

// })


tl.to("#page1-2",{
    // fontWeight:"50",
    // width:'10%',
    // transform:translate3d("0px,0px,0px"),
    //  scale:"1.85",

    scale:("1.83"),
    // backgroundColor:"red",
    scrollTrigger:{
        trigger:"#page1-2",
        scroller:"body",
        // width:700,
        // height:100,
        pinSpacing:false,
        // markers:true,
        start:"50% 50%",
        end:"50% 30%",
        scrub:5,
        // pin:true,

    }

})


tl.to("#page1-3",{
  // fontWeight:"50",
  height:'50vh',
  // translate3d:("0px,15rem,0px"),
  scale:"7.26",
  // scalex:"200px",
  scrollTrigger:{
      trigger:"#page1-3",
      scroller:"body",
      // width:700,
      // height:100,
      // markers:true,
      start:"50% 50%",
      end:"50% 30%",
      scrub:5,
      // pin:true,

  }

})

tl.to("#page1-4",{
  // fontWeight:"50",
  height:'30vh',
  // translate3d:("0px,15rem,0px"),
  scale:"12.3",
  // scale:(12.3, 7.3 ),
  scrollTrigger:{
      trigger:"#page1-4",
      scroller:"body",
      // width:700,
      // height:100,
      // markers:true,
      start:"50% 50%",
      end:"50% 30%",
      scrub:5,
      // pin:true,

  }

})

tl.to("#page1-5",{
  transform:"translateY(-100%)",
  // y:-100,

  width:"100%",
  // height:"120%",
  backgroundColor:"salmon",
  
  // scale:"12.56",
  scrollTrigger:{
      trigger:"#page1-5",
      scroller:"body",
     
      // markers:true,
      start:"1500px 65%",
      end:"1500px 65%",
      delay:2,
      duration:5,
      scrub:2,
      // pin:true,

  }

})

tl.to("#section2",{
  // top:-100,
  // top:0,
  width:"130%",
  height:"100%",
  backgroundColor:"salmon",
  
  // scale:"12.56",
  scrollTrigger:{
      trigger:"#section2",
      scroller:"body",
     
      // markers:true,
      start:"0px 90%",
      end:"0px 60%",
      delay:2,
      duration:5,
      scrub:2,
      // pin:true,

  }

})

// tl.to("#page2",{
//   // transform:"translateY(100%)",
//   height:"100vh",
//   width:"100%",
//   // transform:"translateX(-30%)",
//   fontWeight:"400",

//   backgroundColor:"green",
//   scrollTrigger:{
//       trigger:"#page2",
//       scroller:"body",
//       // markers:true,
//       start:"top 0",
//       end:"top -10%",
//       scrub:2,
//       // pin:true,

//   }
// })



tl.to(".projects",{

  height:"200vh",
  width:"100%",



  backgroundColor:"white",
  scrollTrigger:{
      trigger:".projects",
      scroller:"body",
      // markers:true,
      start:"190px 95%",
      end:"220px 50%",
      scrub:3,
      pin:false,

  }
})


tl.to("#section3",{
  // height:"200vh",
  width:"100%",

  // backgroundColor:"white",
  scrollTrigger:{
      trigger:".projects",
      scroller:"body",
      markers:true,
      start:"890px 45%",
      end:"890px 20%",
      scrub:3,
      // pin:true,

  }
})