let a = document.getElementById("btn");
function getRandomColor() {
  var letters = "0123456789ABCDEF"; //string
  var color = "#"; //# for starting of hexacode
  for (var i = 0; i < 6; i++) {
    //six iteration sice hexacode has 6digit characters
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(getRandomColor());
console.log("hello");
a.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
  document.getElementById("text").innerText = getRandomColor();
});


function copy() {
    // Get the text field
    var copyText = document.getElementById("text");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }


