/*$('.flow-block').tilt({
    maxTilt: 10,
    perspective: 1000,
})
$('.flow-button').tilt({
    maxTilt: 5,
    perspective: 1500,
    glare: true,
    maxGlare: .25
});*/

$(".flow-toggle input").on("click", (e)=>{
    console.log(e);
    if (e.target.checked) {
        $(e.target.parentElement).addClass("flow-toggle-on");
    }else{
        $(e.target.parentElement).removeClass("flow-toggle-on");
    }
});