function page1Animation(){
    
var tl = gsap.timeline()


tl.from("nav h1, nav h4, nav button",{
     y:-30,
    opacity:0,
    delay:1,
    duration:0.7,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
})

tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})

tl.from(".center-part1 button",{
    
    opacity:0,
    duration:0.5
})
tl.from(".center-part2 img",{
    
    opacity:0,
    duration:0.8,
    x:200,
},"-=0.5")

tl.from(".section1bottom img",{
    opacity:0,
    x:300,
    stagger:0.15,
    duration:0.6
})

tl.from(" .container .elem" ,{
    opacity:0,
    y:300,
    duration:0.8,
    stagge:0.5
})

}




page1Animation()

gsap.from(".services h3",{
    x:-100,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})