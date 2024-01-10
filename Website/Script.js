var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
crsr.style.left =dets.x-9+"px"
crsr.style.top = dets.y-9+"px"

blur.style.left =dets.x-250+"px"
blur.style.top = dets.y-250+"px"

})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.backgroundColor = "transparent"
        crsr.style.border="0.05px solid #fff"
    })
    
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.border="0px solid #95C11E"
        crsr.style.delay=2
    })
    
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"80px",
    
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end :"top -11%",
        scrub: 1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers: true ,
        start: "top -25%",
        end:"top -70%",
        scrub:1
    }
})
gsap.from("#aboutus img, #aboutus-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:"true",
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers : true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{

        trigger:"#colon1",
        scroller:"body",
        // markers : true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{

        trigger:"#page4 h1",
        scroller:"body",
        // markers : true,
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})