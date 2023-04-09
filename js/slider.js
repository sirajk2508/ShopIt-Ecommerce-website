// HERO CAROUSEL

const slider1 = document.querySelector("#glide1")
if(slider1) {
    new Glide(slider1, {
        type: 'carousel',
        startAt: 0,
        autoplay: 2000,
        gap: 0,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        AnimationTimingFunc: "linear",
    }).mount()
}