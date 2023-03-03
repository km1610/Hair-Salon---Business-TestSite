function addtowishlist(e){
    e.classList.toggle("fa-heart-o");
    e.classList.toggle("fa-heart");
    if (e.style.color === "red") {
        e.style.color = "black";
      } else {
        e.style.color = "red";
      }
    
}

function addtocart(e){
    cartvalue = document.getElementById("cart").getAttribute("value");
    cv = parseInt(cartvalue);
    cv += 1;
    cartvalue = cv;
    document.getElementById("cart").setAttribute("value", cartvalue);
}

function searchproduct(){
  let input = document.getElementsByClassName('searchproduct')[0].value;
  input=input.toLowerCase();
  let product = document.getElementsByClassName('product');
  let name = document.getElementsByClassName('productname');
    
  for (i = 0; i < product.length; i++) { 
      if (!name[i].innerHTML.toLowerCase().includes(input)) {
          product[i].style.display="none";
      }
      else {
          product[i].style.display="list-item"; 
          product[i].style = "list-style: none;";                
      }
  }
}
