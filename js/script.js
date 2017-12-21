sidenav = {
	opened:false,
	click:function() {
		if(this.opened) {
			this.hide();
			this.opened = false;
		} else {
			this.show();
			this.opened = true;
		}
	},
	show:function() {
		document.getElementById("sideNav").style.width = "100%";
	},
	hide:function() {
		document.getElementById("sideNav").style.width = "0";
	}
};

$(function() {
	//switch the menu style in a area of site
	$(window).on("scroll", function() {
		var topSection = $("#icone");
		var topSectionOffset = topSection.offset();
		var aboutSection = $(".sobre");
		var aboutSectionOffset = aboutSection.offset();

		if($(window).scrollTop() >= topSectionOffset.top) {
			$("#menu").css("background-color", "rgba(0, 0, 0, 0)");
			$(".menu-side img").attr("src", "imagens/sidenav_ic_light.png");
			$("#menu").removeClass("menu2");
			$("#menu a").css("color", "#FFF");
			$("#menu a").css("text-shadow", "1px 1px 3px black");
		}

		
		if($(window).scrollTop() >= aboutSectionOffset.top) {
			$("#menu").css("background-color", "#FFF");
			$(".menu-side img").attr("src", "imagens/sidenav_ic_gray.png");
			$("#menu").addClass("menu2");
			$("#menu a").css("color", "#000");
			$("#menu a").css("text-shadow", "0px 0px 3px #9b9b9b");
		}
	});
});
