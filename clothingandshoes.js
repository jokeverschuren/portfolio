var main = function () {
  "use strict";

	$(".kader").on("mouseover", function() {
		$(this).children().first().addClass("hidden");
		$(this).children().first().next().removeClass("hidden");
	});

	$(".kader").on("mouseout", function() {
		$(this).children().first().next().addClass("hidden");
		$(this).children().first().removeClass("hidden");
	});

	setInterval(function() {

  		$(".kader1").fadeIn(1000, function() {
  			$(".kader1").removeClass("hidden");
  			$(".kader2").fadeIn(3000, function() {
  				$(".kader2").removeClass("hidden");
  				$(".kader3").fadeIn(3000, function() {
  					$(".kader3").removeClass("hidden");
  					$(".kader4").fadeIn(3000, function() {
  						$(".kader4").removeClass("hidden");
  						$(".kader5").fadeIn(3000, function() {
				  			$(".kader5").removeClass("hidden");
				  			$(".kader6").fadeIn(3000, function() {
					  			$(".kader6").removeClass("hidden");
					  			$(".kader7").fadeIn(3000, function() {
						  			$(".kader7").removeClass("hidden");
						  			$(".kader8").fadeIn(3000, function() {
							  			$(".kader8").removeClass("hidden");
							  		});
						  		});
					  		});
				  		});
  					});
  				});
  			});
  		});
  	});
}
  
$("document").ready(main);

