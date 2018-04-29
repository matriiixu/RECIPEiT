document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var image = document.getElementById('image').addEventListener('click',outputImg);
    var file = document.getElementById('file');
    var output = document.getElementById('output');
    function outputImg(){
        output.innerHTML = file.value;
        console.log(file.value);
    }
    navigator.camera.cleanup(onSuccess, onFail);

    function onSuccess() {
        console.log("Camera cleanup success.")
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
        console.log(navigator.camera);
}
