onload = () => {
    particlesJS.load('particles-back', '../assets/json/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
};

// $(document).mousemove((event)=> {
//     let xMult = event.clientX / innerWidth;
//     let yMult = event.clientY / innerHeight;

//     let left = (xMult*10) / 4;
//     let top =  (yMult*10) / 4;

//     $(".background").css("left", `${left}%`);
//     $(".background").css("top", `${top}%`);
// });