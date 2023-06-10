

function reavealToSpan(){
    document.querySelectorAll('.reveal')
    .forEach(function(elem) {
        var spanParent =  document.createElement('span');
        var spanChild = document.createElement('span');
        spanParent.classList.add('parent');
        spanChild.classList.add('child');
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);

        elem.innerHTML = '';
        elem.appendChild(spanParent);
    });
}

function valueSetters(){
    gsap.set('#nav a', {y: 100, opacity: 0});
    gsap.set('#home .parent .child', {y: "100%"});
    gsap.set('#home .row img',{scale:0});
}



function loaderAnimation(){
    var tl = gsap.timeline();
tl  

    .from("#loader .child span", {
        x: -100,
        duration: 1.4, 
        delay: .2,
        stagger: .2,
        ease: 'Power3.easeOut',
    })  
    .to('#loader .parent .child', {
        y: "-100%",
        duration: 1,
        ease: 'Circ.easeInOut',
    })
    .to('#loader', {
        height: 0,
        duration: 1,
        ease: 'Circ.easeInOut',
    })
    .to('#green', {
        height: "100%",
        top: 0,
        duration: 1,
        delay: -.8,
        ease: 'Circ.easeInOut',
    })
    .to('#green', {
        height: 0,
        top: 0,
        duration: 1,
        delay: -.5,
        ease: 'Circ.easeInOut',
        oncompleate: function(){
            AnimateHomePage();
        }
    })

}

function AnimateHomePage(){
    var tl = gsap.timeline();

    tl.to('#nav a', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: .07,
        ease: Expo.easeInOut,
    })
  
    tl.to('#home .parent .child', {
        y: 0,
        stagger: .1,
        duration: .5,
        ease: Expo.easeInOut,
    })
    tl.to('#home .row img', {
        scale: 1,
        duration: .3,
        ease: Expo.easeInOut,
    })
   
}
reavealToSpan();
valueSetters();
loaderAnimation();



