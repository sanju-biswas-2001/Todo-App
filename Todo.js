let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
  let lis = document.createElement("li");
  lis.innerText =inp.value;


  let delet = document.createElement("button");
  delet.innerText = "Delete"
  delet.classList.add("delete");
  lis.appendChild(delet);
  ul.appendChild(lis);
  inp.value = "";
});


ul.addEventListener("click", function(event){
  
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});


