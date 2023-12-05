import gsap from "gsap";

export const Popup = () => {
    const popup = document.querySelector(".popup");
    const popupItem = document.querySelectorAll(".popup-item");
    const popupContent = document.querySelectorAll(".popup-content");
    const closeBtn =  document.querySelector(".closeBtn");


    function openPopup() {
        popupItem.forEach((item, index) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                gsap.to(popup, { display: "flex", opacity: 1, duration: 0.5 });
                
                popupContent.forEach((content) => {
                content.classList.remove("active");
                closeBtn.addEventListener('click', () => closePopup())
                });
        
                popupItem[index].classList.add("active");
                popupContent[index].classList.add("active");
                closeBtn.classList.add("active");
            });
        });
    }
    
    function closePopup() {
        gsap.to(popup, { opacity: 0, duration: 0.5, onComplete: () => {
        popup.style.display = 'none';
        closeBtn.classList.remove("active");
        
        popupContent.forEach((content) => {
            content.classList.remove("active");
        });
        }});
    }

    openPopup();
    closePopup();
	
	const tabItem = document.querySelectorAll(".tab-item");
	const tabContent = document.querySelectorAll(".tab-content");
	// console.log(tabItem)
	
	tabItem.forEach((item,index) =>{
		item.addEventListener("click", (e)=>{
			e.preventDefault();
	
			tabContent.forEach((content)=>{
				content.classList.remove("active");
			})
			tabItem.forEach((content) => {
				content.classList.remove("active");
			})
			tabItem[index].classList.add("active");
			tabContent[index].classList.add("active")
		})
	});
	
}

