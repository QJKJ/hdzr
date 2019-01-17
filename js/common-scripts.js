var Script = function () {


//    tool tips

    $('.tooltips').tooltip();

//    popovers

    $('.popovers').popover();

//    bxslider

    // $('.bxslider').show();
    // $('.bxslider').bxSlider({
    //     minSlides: 4,
    //     maxSlides: 4,
    //     slideWidth: 276,
    //     slideMargin: 20
    // });

}();

	(function() {

   			$('<i id="back-to-top"></i>').appendTo($('body'));

			$(window).scroll(function() {
				if($(this).scrollTop() != 0) {
					$('#back-to-top').fadeIn();	
				} else {
					$('#back-to-top').fadeOut();
				}

			});
			
			$('#back-to-top').click(function() {
				$('body,html').animate({scrollTop:0},600);
			});

			var response = $.ajax({url:"common/common_header.html",async:false});
			$(".head-section").html(response.responseText);
			var response = $.ajax({url:"common/common_footer.html",async:false});
			$(".footer").html(response.responseText);

			$("#owl-demo .service-category *").hover(function(){
                var _this = $(this);
                var index=  _this.parent().attr("index");

                _this.parent().find(".backgroundImg").attr("src","./img/home/service-iconConv_"+index+".png");
            },function(){
                var _this = $(this);
                var index=  _this.parent().attr("index");
                _this.parent().find(".backgroundImg").attr("src","./img/home/home-fwBj0"+index+".png");
            });
			//设置幻灯轮播时间
			$('#homeCarousel').carousel({
				interval: 3000
			});
			$(".liOne").each(function () {
                $(this).find("a").click(function () {
                    $(".faTopF").show();
                    $(".faTopFTwo").hide();
                    $(".liTwo").css("margin-top","82px");

                    $(".faTopFTwo").css("top","-43px");
                });
            });
			$(".liTwo").each(function () {
				$(this).find("a").click(function () {
                    $(".faTopFTwo").show();
					$(".faTopF").hide();

                    $(".liTwo").css("margin-top","10px");

                    $(".faTopFTwo").css("top","669px");
				});
			});

			$(".nav-justified li").each(function () {
                $(this).find("a").click(function () {

                    $(".nav-justified li").each(function () {
						var _li = $(this);
                        _li.find(".solution_Img").attr("src","./img/solution/solutionDefault_"+($(this).index()+1)+".png");
                        _li.find(".solution_name").css("color","#666666");
                    });

                    var _li = $(this).parent();
                    var index =_li.attr("index");
                    if(_li.hasClass("active")){
                        _li.find(".solution_Img").attr("src","./img/solution/solutionDefault_"+index+".png");
                        _li.find(".solution_name").css("color","#666666");

                    }else{
                    	//选中
                        _li.find(".solution_Img").attr("src","./img/solution/solution_"+index+".png");
                        _li.find(".solution_name").css("color","#000");
                    }

                });
            });

        $(".nav-justified li:eq(0)").find(".solution_Img").attr("src","./img/solution/solution_"+1+".png");
        $(".nav-justified li:eq(0)").find(".solution_name").css("color","#000");
        $(".faTopFTwo").hide();




	})();

