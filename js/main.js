$(function () {

  var height = $(window).height(); 
  $(".main").css("height", height);
  $(window).resize(function () {
  	 var height = $(window).height(); 
  	 $(".main").css("height", height);
  });

  $(".girl1").animate({ "opacity": "1", "margin-top": "0" }, 1500);
  $(".jacson").animate({ "opacity": "1", "margin-top": "0" }, 2000);

  $("#block1").animate({ "opacity": "1", "margin-top": "0" }, 600 , function(){  	
  	 $("#block2").animate({ "opacity": "1", "margin-top": "0" }, 600, function(){
  	 	$("#block3").animate({ "opacity": "1", "margin-top": "0" }, 600 );
  	 });
  }); 
  

  function carouselsInit(){

     $('#mission').owlCarousel({
      loop:true,    
      items:1,
      nav:true,
      autoplayHoverPause: true,
      dots: false,
      navText:["",""],
      autoplay: true,
  }); 


  $('.mission-thubs').owlCarousel({
      loop:true,    
      items:5,
      nav:false,
      autoplayHoverPause: true,
      dots: false,
      navText:["",""],
      autoplay: true,
  }); 



    $('#slider').owlCarousel({
      loop:true,    
      items:4,
      nav:true,
      autoplayHoverPause: true,
      responsive:{ 
                    0:{
                        items:1
                    },
                    569:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    767:{
                        items:4
                    },
                    1200:{
                        items:5
                    }
                },
      dots: false,
      navText:["",""],
      autoplay: true,
    
  }); 

    $('#slider-team').owlCarousel({
      loop:true,    
      items:4,
      autoplayHoverPause: true,
      responsive:{ 
                    0:{
                        items:1
                    },
                    569:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    767:{
                        items:4
                    }
                },
      nav:true,
      dots: false,
      navText:["",""],
      autoplay: true,
  });
  }


  window.setTimeout(function(){ 
    carouselsInit();
    },350);

 

  var missionOwn = $('#mission');

  var owl = $('.mission-thubs');


  owl.on('changed.owl.carousel', function(event) {
    missionOwn.trigger('next.owl.carousel');
  });

  $(".teacher").hover(function () {
    $(this).children("#card").flip('toggle');    
  });

  $(".teacher").each(function () {
   $(this).children("#card").flip({trigger: 'manual'});
  }); 

  MaskedInput({
    elm: document.getElementById('phone'), // select only by id
    format: '(__) ___-__-__',
    separator: ' ()-'
 });
  
  
});

ymaps.ready(init);

function init () {    
  var myMap = new ymaps.Map('map', {        
      center: [53.9395787, 27.4765814], 
      zoom: 14
  }, {
      searchControlProvider: 'yandex#search'
  });  
  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш адрес',
            balloonContent: ' г. Минск, пр-т Победителей 106'
        }, {            
            iconLayout: 'default#image',            
            iconImageHref: 'img/pin.png',
            iconImageSize:[61,52]     
        });    
  myMap.geoObjects
        .add(myPlacemark);    

}

