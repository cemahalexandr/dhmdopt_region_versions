$(function(){
  /*  $(".leftbar li:nth-child(1) a").click(function(){
        $(".dresses").show();
        $(".path h4:nth-child(3) a").text("Женские платья оптом в Москве");
        $(".header h2").text("КУПИТЬ ПЛАТЬЯ ОПТОМ В МОСКВЕ");
        $(".costums, .blouse, .skirt, .trousers, .jackets, .cardigans, .cloak, .overalls, .coat, .clothes").hide();
    });
    $(".leftbar li:nth-child(2) a").click(function(){
        $(".costums").show();
        $(".path h4:nth-child(3) a").text("Женские костюмы оптом в Москве");
        $(".header h2").text("КУПИТЬ КОСТЮМЫ ОПТОМ В МОСКВЕ");
        $(".dresses, .blouse, .skirt, .trousers, .jackets, .cardigans, .cloak, .overalls, .coat, .clothes").hide();
    });
     $(".leftbar li:nth-child(3) a").click(function(){
        $(".blouse").show();
        $(".path h4:nth-child(3) a").text("Женские блузки оптом в Москве");
        $(".header h2").text("КУПИТЬ БЛУЗКИ ОПТОМ В МОСКВЕ");
        $(".costums, .dresses, .skirt, .trousers, .jackets, .cardigans, .cloak, .overalls, .coat, .clothes").hide();
    });
     $(".leftbar li:nth-child(4) a").click(function(){
        $(".skirt").show();
        $(".path h4:nth-child(3) a").text("Женские юбки оптом в Москве");
        $(".header h2").text("КУПИТЬ ЮБКИ ОПТОМ В МОСКВЕ");
        $(".costums, .blouse, .dresses, .trousers, .jackets, .cardigans, .cloak, .overalls, .coat, .clothes").hide();
    });
     $(".leftbar li:nth-child(5) a").click(function(){
        $(".trousers").show();
        $(".path h4:nth-child(3) a").text("Женские брюки оптом в Москве");
        $(".header h2").text("КУПИТЬ БРЮКИ ОПТОМ В МОСКВЕ");
        $(".costums, .blouse, .skirt, .dresses, .jackets, .cardigans, .cloak, .overalls, .coat, .clothes").hide();
    });
     $(".leftbar li:nth-child(6) a").click(function(){
        $(".jackets").show();
        $(".path h4:nth-child(3) a").text("Женские жакеты оптом в Москве");
        $(".header h2").text("КУПИТЬ ЖАКЕТЫ ОПТОМ В МОСКВЕ");
        $(".costums, .blouse, .skirt, .trousers, .dresses, .cardigans, .cloak, .overalls, .coat, .clothes").hide();
    });
     $(".leftbar li:nth-child(7) a").click(function(){
        $(".overalls").show();
        $(".path h4:nth-child(3) a").text("Женские комбинезоны оптом в Москве");
        $(".header h2").text("КУПИТЬ КОМБИНЕЗОНЫ ОПТОМ В МОСКВЕ");
        $(".costums, .blouse, .skirt, .trousers, .jackets, .cardigans, .cloak, .dresses, .coat, .clothes").hide();
    });
     $(".leftbar li:nth-child(8) a").click(function(){
        $(".cardigans").show();
        $(".path h4:nth-child(3) a").text("Женские кардиганы оптом в Москве");
        $(".header h2").text("КУПИТЬ КАРДИГАНЫ ОПТОМ В МОСКВЕ");
        $(".costums, .blouse, .skirt, .trousers, .jackets, .dresses, .cloak, .overalls, .coat, .clothes").hide();
    });
     $(".leftbar li:nth-child(9) a").click(function(){
        $(".cloak").show();
        $(".path h4:nth-child(3) a").text("Женские плащи оптом в Москве");
        $(".header h2").text("КУПИТЬ ПЛАЩИ ОПТОМ В МОСКВЕ");
        $(".costums, .dresses, .blouse, .skirt, .trousers, .jackets, .cardigans, .coat, .overalls, .costums, .clothes").hide();
    });
    $(".leftbar li:nth-child(10) a").click(function(){
        $(".coat").show();
        $(".path h4:nth-child(3) a").text("Женские пальто оптом в Москве");
        $(".header h2").text("КУПИТЬ ПАЛЬТО ОПТОМ В МОСКВЕ");
        $(".dresses, .blouse, .skirt, .trousers, .jackets, .cardigans, .cloak, .overalls, .costums, .costums").hide();
    });
    $("#cth").click(function(){
        $(".clothes").show();
        $(".header h2").text("КУПИТЬ ОПТОВУЮ ОДЕЖДУ В МОСКВЕ");
        $(".path h4:nth-child(3) a").text("Женские одежда оптом в Москве");
        $(".coat, .dresses, .blouse, .skirt, .trousers, .jackets, .cardigans, .cloak, .overalls, .costums, .costums").hide();
    });   */
       
    $("#drop, .dropdowns").hover(function(){
        $(".dropdowns").show();
    },function(){
        $(".dropdowns").hide();
    });
    
   $("#dr1, #dm1").hover(function(){
        $("#dm1").show();
    },function(){
        $("#dm1").hide();
    });
    
    $("#dr2, #dm2").hover(function(){
        $("#dm2").show();
    },function(){
        $("#dm2").hide();
    });
    
      $("#dr3, #dm3").hover(function(){
        $("#dm3").show();
    },function(){
        $("#dm3").hide();
    });
    
      $("#dr4, #dm4").hover(function(){
        $("#dm4").show();
    },function(){
        $("#dm4").hide();
    });
    
    $("li#dr2>a  , li#dr3>a, li#dr4>a ").click(function(e){
        e.preventDefault();
    });
    
})