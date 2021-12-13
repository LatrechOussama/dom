const btnaddtag = document.getElementsByClassName("plus");
var btndelet = document.getElementsByClassName("delete");
var btnlike = document.getElementsByClassName("like");
var checkTag = document.querySelectorAll(".check");
const btnmintag = document.getElementsByClassName("minus");
for (var i = 0; i < btnaddtag.length; i++) {
  btnaddtag[i].addEventListener("click", increment);
  checkTag[i].addEventListener("click", totalPrice);
  btnmintag[i].addEventListener("click", min);
  btndelet[i].addEventListener("click", delet);
  btnlike[i].addEventListener("click", like);
}

function increment(event) {
  var btnplus = event.target;

  var divelt = btnplus.parentElement;

  var quantitytag = divelt.querySelector("p");

  var quantityvalue = Number(quantitytag.innerHTML);

  quantityvalue++;

  quantitytag.innerHTML = quantityvalue;

  var trelt = divelt.parentElement.parentElement;
  // console.log(trelt)

  var pricetag = trelt.querySelector(".price");

  pricevalue = Number(pricetag.innerHTML);
  //   console.log(pricevalue);

  var unitpricevalue = parseFloat(trelt.querySelector(".unitPrice").innerHTML);

  pricevalue = unitpricevalue * quantityvalue;
  //   console.log(pricevalue);

  /*console.log(pricevalue)*/
  pricetag.innerHTML = pricevalue;
}

function totalPrice(event) {
  var checkTag = event.target;
  var btnplus = checkTag.parentElement.parentElement.querySelector(".plus");
  var btnmin = checkTag.parentElement.parentElement.querySelector(".minus");
  var pricevalue = Number(
    checkTag.parentElement.parentElement.querySelector(".price").innerHTML
  );
  // console.log(pricevalue)
  var totaltag = document.getElementById("total");
  // console.log(totaltag)
  var totalvalue = Number(totaltag.innerHTML);
  // console.log(totalvalue)
  // totalvalue+=pricevalue
  // totaltag.innerHTML=totalvalue
  if (checkTag.checked === true) {
    totalvalue += pricevalue;
    btnplus.setAttribute("disabled", true);
    btnmin.setAttribute("disabled", true);
  } else {
    totalvalue -= pricevalue;
    btnplus.removeAttribute("disabled");
    btnmin.removeAttribute("disabled");
  }
  totaltag.innerHTML = totalvalue;
}

function min(event) {
  var btnmin = event.target;

  var divelt = btnmin.parentElement;

  var quantitytag = divelt.querySelector("p");

  var quantityvalue = Number(quantitytag.innerHTML);
  if (quantityvalue > 0) {
    quantityvalue--;
  }
  quantitytag.innerHTML = quantityvalue;

  var trelt = divelt.parentElement.parentElement;
  // console.log(trelt)

  var pricetag = trelt.querySelector(".price");

  pricevalue = Number(pricetag.innerHTML);
  //   console.log(pricevalue);

  var unitpricevalue = parseFloat(trelt.querySelector(".unitPrice").innerHTML);

  pricevalue = unitpricevalue * quantityvalue;
  //   console.log(pricevalue);

  /*console.log(pricevalue)*/
  pricetag.innerHTML = pricevalue;
}
function delet(event) {
  var btndelet = event.target;

  var rowdel = btndelet.parentElement.parentElement.parentElement.parentElement;

  rowdel.remove();
}
function like(event) {
  var btnlike = event.target;
  btnlike.classList.toggle("toggle");
}
