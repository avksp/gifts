//	Scroll to top

$(window).scroll(function(){
  var $scrollup = $('.back-to-top');
  if ($(this).scrollTop() > 120) { $scrollup.fadeIn(); $('header').addClass("sticky1"); }
  else { $scrollup.fadeOut(); $('header').removeClass("sticky1"); }
  
});

jQuery('.back-to-top').click(function () {
  jQuery("html, body").animate({
	  scrollTop: 0
  }, 600);
  return false;
});	  
	  

$(document).click(function (e){ // событие клика по веб-документу
	var div = $("#menu-click");
	var div2 = $("#menu-click-list");
	var inp1 = $("input.btn-search-click");
	var inp2 = $("input.btn_close-click");
	var form1 = $("div.search-click-slide-form");	
	if (!div.is(e.target) && div.has(e.target).length === 0 && div.prop("checked") && !div2.is(e.target) && div2.has(e.target).length === 0)	{ 
		    div.removeAttr("checked");
		}
	if (!form1.is(e.target) && form1.has(e.target).length === 0 && inp1.prop("checked") && !inp2.prop("checked") && !inp1.is(e.target) && inp1.has(e.target).length === 0)	{ 
		    inp1.removeAttr("checked");
		}

	if (inp1.prop("checked") && !inp2.prop("checked") && inp2.is(e.target) && inp2.has(e.target).length === 0)	{ 
		    inp1.removeAttr("checked");
		}		
		
});


//Slider

$(window).load(function (){
	$('.chosen').chosen();
	$("#slider-gifts__ui").slider({
	  range: true,
	  min: 0,
	  max: 10400,
	  values: [ 140, 10400 ],
	  slide: function( event, ui ) {
		$( "#amount1" ).val(ui.values[ 0 ]);
		$( "#amount2" ).val(ui.values[ 1 ]);		
	  }
	});
	$( "#amount1" ).val($( "#slider-gifts__ui" ).slider( "values", 0 ));
	$( "#amount2" ).val($( "#slider-gifts__ui" ).slider( "values", 1 ));
		
});
