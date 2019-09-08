$(()=>{
    $("#head-content").load("/includes/header.html", ()=> {
        $("#foot-content").load("/includes/footer.html", ()=>{
            setTimeout(()=>{
                $("#preloader").css("opacity", "0");
                setTimeout(()=>{
                    $("#preloader").css("display", "none");
                }, 275);
            }, 1000);
        });
    }); 
});