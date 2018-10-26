$(()=>{
    $("#head-content").load("../includes/header.html", ()=> {
        $("#foot-content").load("../includes/footer.html", ()=>{
            $("#preloader").css("opacity", "0");
            setTimeout(()=>{
                $("#preloader").css("display", "none");
            }, 275);
        });
    }); 
});