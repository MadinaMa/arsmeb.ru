gsap.from(".description", {duration: 4, delay: .6, opacity: 0, ease: "power1.in", stagger: 1})


const next = document.querySelector(".next");
next.addEventListener("mouseover", startAnimation);

function startAnimation() {
    gsap.to(".next", {scale: 2, duration: 2, ease: "bounce"})
}