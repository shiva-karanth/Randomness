let a = document.getElementById("btn");

a.addEventListener("click", function randomNumber() {
  small = parseInt(document.getElementById("min").value);
  big = parseInt(document.getElementById("max").value);
 
  const x = Math.floor(Math.random() * (big - small) + small);
  console.log(small);
  console.log(big);
  console.log(x);
  if(x==NaN){
    document.getElementById("text").innerText = "Enter the Input details";
    return;
  }
  else{
  document.getElementById("text").innerText = x;}
});
