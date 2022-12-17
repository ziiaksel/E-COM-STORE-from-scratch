

const shoeItems = document.createElement("div")
const allBuyBtns = document.querySelectorAll(".btn")



allBuyBtns.forEach(item => {
    item.addEventListener("click", (eo) => {

{   // Change button from "buy" to "Done"
        
        item.setAttribute("disabled", "")
        item.classList.remove("btn-primary")
        item.classList.add("btn-success")
        item.innerHTML = "&#10004; Done"
    }
 
  
{  //  show item added popup
    const popUp = document.createElement("div")
body.append(popUp)
popUp.classList.add("done-pop-up")
popUp.innerHTML = "item added"

setTimeout(() => {
    popUp.style.transform = "translateX(90vw)"
}, 1000);

setTimeout(() => {
    popUp.remove()
}, 2000);
}

{//  create shopping cards  div

body.append(shoeItems)
shoeItems.classList.add("show-items")
shoeItems.innerHTML = `<i class="gg-shopping-cart"></i>` 
// "  Show My Card   "
}



//calcule total price -----------------------------------
const updateTotalPrice = () => {
  
  const allAddedItem =  document.querySelectorAll(".item-container")
  
  const totalPrice = document.getElementById("input-total-price")
  let total= 0
  allAddedItem.forEach(item => {

    const price = Number(item.getElementsByClassName("price")[0].innerText.replace("$",""))
    const quantity = Number(item.getElementsByClassName("input-quantity")[0].value)
   
    total = total + (price * quantity)
    
   


  });


//print total price in page ------------------------------------------
const totalInput = document.getElementById("input-total-price")
totalInput.innerHTML= `$${total.toFixed(2)}`

  }

// update price automatically when quantity changed whithout clickuing button
const shoppingPage =  document.getElementById("blackScreen")
shoppingPage.addEventListener("change",(eo) => {
    updateTotalPrice()
  })



  //delelte added item from basket when button delete clcicked-----------
  const deleteItem = () => {
    const deleteButton = document.querySelectorAll(".delete")
   
    deleteButton.forEach( item => {
        item.addEventListener("click",(eo) => {
            item.parentElement.parentElement.getElementsByClassName("item-container")[0].remove();
            item.classList.add("deleted")
            updateTotalPrice()  })
    });}


    //----------------------------------------------------------------------------------
 //resoponsable to enable/change text of buy button when the added item is deleted 
//

const updateBuyButton = () => {
    blackScreen.addEventListener("click",(eo) => {
    const nameOfDeleteItem= eo.target.parentElement.getElementsByClassName("product-name")[0].innerText
    const parentOfCards =  document.querySelectorAll(".card")
    parentOfCards.forEach(item => {
        const nameOfItem = item.getElementsByClassName("card-title")[0].innerText

         //FIXED : MUST ONLY REMOVE DISABLE FROM THE ITEM THAT BEEN DELETED FROM BASKET
    if (nameOfItem==nameOfDeleteItem) {
        const allBuyBtns = document.querySelectorAll(".btn-success")
        allBuyBtns.forEach(item => {            
            item.removeAttribute("disabled")
            item.classList.add("btn-primary")
            item.classList.remove("btn-success")
            item
            .innerHTML = "Buy"  
         });
    }               
});
})
}
// -------------- IMPORTANT--------------------------------------------
  //insert added item to the basket 
const card = item.parentElement.parentElement.parentElement
const imgSrc = card.getElementsByClassName("card-img-top")[0].getAttribute("src")
const itemName = card.getElementsByClassName("card-title")[0].innerText
const itemPrice =  card.getElementsByClassName("price")[0].innerText
const sizeCont = card.getElementsByClassName("size")[0]
// to get the value/text for selected size   
let value = sizeCont.value
let text = sizeCont.options[sizeCont.selectedIndex].text

// -------------
const addedProduct = `

<div dir="rtl" class="item-container">

<div class="img-title-parent">
    <p class="product-size"> size ${text}</p>
    <p class="product-name">${itemName}</p>
    <img src="${imgSrc}" alt="">
</div>

<div style="display: flex; align-items: center;">
    <input type="number" value="1" min="1"  class="input-quantity" dir="ltr" id="input-quantity" >
    <p >Quantity</p>

</div>

<div class="price">
    ${itemPrice}
</div>


<div class="btn btn-secondary delete">
    delete
</div>

</div>

`

 allProducts.innerHTML += addedProduct
 updateTotalPrice()
 deleteItem()
 updateBuyButton()
    })
    
});


//-------------------------------------------------------------------------------


const close = document.getElementById("close")
close.addEventListener("click", (eo) => {
    blackScreen.style.transform = "translateX(-110vw)"
})


shoeItems.addEventListener("click", (eo) => {
    blackScreen.style.transform = "translateX(0)"
})