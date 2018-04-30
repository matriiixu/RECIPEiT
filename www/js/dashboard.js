


document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    var destinationType; //used sets what should be returned (image date OR file path to image for example)

	destinationType=navigator.camera.DestinationType;
    var image = document.getElementById('image').addEventListener('click',outputImg);
var file = document.getElementById('file');
var output = document.getElementById('output');
function outputImg(){
    output.innerHTML = file.value;
    console.log(file.value);
}
}

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.DATA_URL });
}
	
function onPhotoDataSuccess(imageData) {
	var image = document.getElementById('image');
	image.style.display = 'block';
	image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
      alert('Failed because: ' + message);
}