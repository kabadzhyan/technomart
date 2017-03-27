
			var buy = document.querySelectorAll(".buy-btn");
			var link = document.querySelector(".contact-us-btn");
			var linkmap = document.querySelector(".map");
			var popup = document.querySelector(".modal-write-us");
			var popupmap = document.querySelector(".modal-map");
			var modal = document.querySelector(".modal-add-to-cart");
			var closebtn = modal.querySelector(".modal-close-btn");
			var contshop = modal.querySelector(".continue-btn");

if (link && linkmap && popup && popupmap) {
			
			var close = popup.querySelector(".modal-close-btn");
			var closemap = popupmap.querySelector(".modal-close-btn");
			
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