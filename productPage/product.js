
//when click view more get title of eo.target 
const viewMore = document.getElementsByClassName("view-more")[0]
const getInfoFromClickedItem = () => {
    viewMore.addEventListener("click",(eo) => {
      const generateTitle = viewMore.parentElement.getElementsByClassName("card-title")[0]
      const insertTitle = document.getElementsByClassName("product-title")[0]
    }) 
}

getInfoFromClickedItem()
/* after clickin view more from pricipal page 
location product.html*/
// const productTitle = document.getElementsByClassName("product-title")[0].innerText

const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection


/*
---------------------------------------------------
👉 sliderImageList[0] generates all selected images in an array format
👉 sliderMainImage.src = sliderImageList[0].src; set image under .
product-image-main which it will get from sliderImageList[0] array.
*/
sliderImageList[0].onclick = function(){
    sliderMainImage.src = sliderImageList[0].src;
    console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function(){
    sliderMainImage.src = sliderImageList[3].src;
    console.log(sliderMainImage.src);
};
// -------------------------------------------------------------

/*---------------------------
when button view more clicked 
inseret product  title+ price+ images 
--------------*/








