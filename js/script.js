"use strict";
			var buy = document.querySelectorAll(".buy-btn");
			var link = document.querySelector(".contact-us-btn");
			var linkmap = document.querySelector(".map");

			var popup = document.querySelector(".modal-write-us");
			var popupmap = document.querySelector(".modal-map");
			var close = document.querySelector(".modal-close-btn");
			var closemap = document.querySelector(".modal-close-btn");
			var modal = document.querySelector(".modal-add-to-cart");
			var closebtn = document.querySelector(".modal-close-btn");
			var contshop = document.querySelector(".continue-btn");
		  
			var form = document.querySelector("form");

if (link && linkmap && popup && popupmap && closemap) {
    
    	link.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.add("modal-content-show");
				});
				
		linkmap.addEventListener("click", function(event) {
				event.preventDefault();
				popupmap.classList.add("modal-content-show");
				});
		close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("modal-content-show");
			  });
			  
		closemap.addEventListener("click", function(event) {
				event.preventDefault();
				popupmap.classList.remove("modal-content-show");
			  });
			  
		window.addEventListener("keydown", function(event) {
				if (event.keyCode === 27) {
				  if (popup.classList.contains("modal-content-show")) {
					popup.classList.remove("modal-content-show");
					}
				}
			  });

		window.addEventListener("keydown", function(event) {
				if (event.keyCode === 27) {
				  if (popupmap.classList.contains("modal-content-show")) {
					popupmap.classList.remove("modal-content-show");
					}
				}
			  })
}
		contshop.addEventListener("click", function(event) {
				event.preventDefault();
				modal.classList.remove("modal-content-show");
			  });
	  
			
			  
		[].forEach.call(buy, function(buy){
				buy.addEventListener("click", function (event) {
					event.preventDefault();
					modal.classList.add("modal-content-show");
				});
			});
				
		closebtn.addEventListener("click", function(event) {
				event.preventDefault();
				modal.classList.remove("modal-content-show");
			  });
			  
		window.addEventListener("keydown", function(event) {
				if (event.keyCode === 27) {
				  if (modal.classList.contains("modal-content-show")) {
					modal.classList.remove("modal-content-show");
					}
				}
			  });