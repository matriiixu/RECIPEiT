var image = document.getElementById('image').addEventListener('click',outputImg);
var file = document.getElementById('file');
var output = document.getElementById('output');
function outputImg(){
    output.innerHTML = file.value;
    console.log(file.value);
}