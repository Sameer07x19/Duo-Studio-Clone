function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#Main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#Main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#Main").style.transform ? "transform" : "fixed"
    });
  
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  
  }
  
  init()
  
  var tl= gsap.timeline({
       scrollTrigger:{
         triggger:"#Page1 h1",
         scroller:"#Main",
         start: "top 27%",
         end: "top 0",
         scrub: 2,
         markers: true,
       }
  })
  
  tl.to("#Page1 h1",{
    x: -100,
  },"anime")
  