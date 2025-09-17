//昼と夜の切り替え
var d = 0; //夜が0, 昼が1

function Hiru(){
  if (d == 0) {

    document.body.style.transition = "background-color 1s";
    document.body.style.backgroundColor = "#ecd8a2";

    var elements = ["switchd", "switchn", "cs_icon", "ms_icon", "topphoto"];
    for (var i = 0; i < elements.length; i++) {
      var element = document.getElementById(elements[i]);
      element.style.transition = "opacity 1s";
      element.style.opacity = 0;
    }

    setTimeout(function () {

    document.getElementById("switchd").src= "おひる_統合.png";
    document.getElementById("switchn").src= "およる_統合.png";
    document.getElementById("cs_icon").src= "アイコン_統合.png";
    document.getElementById("ms_icon").src= "mihos_統合.png";
    document.getElementById("topphoto").src= "top_昼_full.jpg";
    
    for (var i = 0; i < elements.length; i++) {
      var element = document.getElementById(elements[i]);
      element.style.opacity = 1;
      }
      d = 1;
    }, 1000);
  }
}

function Yoru(){
  if (d == 1) {
    document.body.style.transition = "background-color 1s";
    document.body.style.backgroundColor = "#3a3a3a";

    var elements = ["switchd", "switchn", "cs_icon", "ms_icon", "topphoto"];
    for (var i = 0; i < elements.length; i++) {
      var element = document.getElementById(elements[i]);
      element.style.transition = "opacity 1s";
      element.style.opacity = 0;
    }

    setTimeout(function () {

    document.getElementById("switchd").src= "おひる_夜.png";
    document.getElementById("switchn").src="およる_夜.png";
    document.getElementById("cs_icon").src= "アイコン_夜.png";
    document.getElementById("ms_icon").src= "mihos_夜.png";
    document.getElementById("topphoto").src= "top_夜_full.jpg";
    
    for (var i = 0; i < elements.length; i++) {
      var element = document.getElementById(elements[i]);
      element.style.opacity = 1;
      }
      d = 0;
    }, 1000);
  }
}

//tabメニュー
function GethashID (hashIDName){
	if(hashIDName){
		$('.menu_tab li').find('a').each(function() {
			var idName = $(this).attr('href');
			if(idName == hashIDName){
				var parentElm = $(this).parent();
				$('.menu_tab li').removeClass("active");
				$(parentElm).addClass("active");
				$(".area").removeClass("is-active");
				$(hashIDName).addClass("is-active");
			}
		});
	}
}

$('.menu_tab a').on('click', function() {
	var idName = $(this).attr('href');
	GethashID (idName);
	return false;
});

$(window).on('load', function () {
    $('.menu_tab li:first-of-type').addClass("active");
    $('.area:first-of-type').addClass("is-active");
	var hashName = location.hash;
	GethashID (hashName);
});