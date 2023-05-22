const images = document.querySelectorAll(".image a");
const imageDiv= document.querySelectorAll(".image");
let imgId = 1;
images.forEach((img) => {
    img.addEventListener("click", (event) => {
        event.preventDefault();
         imgId=img.dataset.id;
     
        imageDiv.forEach((img)=>{
      img.classList.remove('active');
    });

    img.parentElement.classList.add('active');
         calling()
        })
        
    })

function calling() {
  const imgWidth=document.querySelector('.slidelarge img:first-child').clientWidth;
  let width=(imgId-1)*imgWidth;
document.querySelector('.slidelarge').style.transform=`translateX(${-width}px)`;

}
     
const minusBtn=document.querySelector('.minus');
const plusBtn=document.querySelector('.plus');
const qtyTxt = document.querySelector('#qty');

minusBtn.addEventListener("click", () => {
  let qty = parseInt(qtyTxt.value);
  if (qty > 0) {
    qty--;
    qtyTxt.value = qty;
  }
 
})
plusBtn.addEventListener("click", () => {
  let qty = parseInt(qtyTxt.value);
  if (qty >= 0 && qty < 5) {
    qty++;
    qtyTxt.value = qty;
  }
    console.log(qty);
  });