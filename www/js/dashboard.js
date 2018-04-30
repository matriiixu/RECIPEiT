document.addEventListener("deviceready",onDeviceReady,false);
var destinationType; //used sets what should be returned (image date OR file path to image for example)
var image, file, output, phonegapcamera;
function onDeviceReady() {
    alert("onDeviceready");
    phonegapcamera = document.getElementById('phonegapcamera');
    phonegapcamera.addEventListener('click', capturePhoto)
	destinationType=navigator.camera.DestinationType;
    file = document.getElementById('file');
    output = document.getElementById('output');
}

function capturePhoto() {
    alert("capturePhoto");
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.DATA_URL });
}
	
function onPhotoDataSuccess(imageData) {
    alert("onPhotoDataSuccess");
	var image = document.getElementById('image');
	image.style.display = 'block';
	image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
      alert('Failed because: ' + message);
}