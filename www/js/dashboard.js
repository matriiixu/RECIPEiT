document.addEventListener("deviceready",onDeviceReady,false);
var destinationType; //used sets what should be returned (image date OR file path to image for example)
var image, file, output, phonegapcamera, recipeSubmit, recipeForm, mealName, mealDescription, mealDirections, mealIngredients, image1, image2, photo;
function onDeviceReady() {
    alert("onDeviceready");
    phonegapcamera = document.getElementById('phonegapcamera');
    phonegapcamera.addEventListener('click', capturePhoto)
	destinationType=navigator.camera.DestinationType;
    file = document.getElementById('file');
    output = document.getElementById('output');
    recipeSubmit.getElementById('recipeSubmit');
    recipeSubmit.addEventListener('click', RecipeSubmit);
    recipeForm = document.getElementById('recipeForm');
    mealName = document.getElementById('mealName').value;
    mealDescription = document.getElementById('mealDescription').value;
    mealDirections = document.getElementById('mealDirections').value;
    mealIngredients = document.getElementById('mealIngredients').value;
    
    //Data.of(name_of_table)
    Backendless.Data.of("meal").find().then(processResults).catch(error);
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
function RecipeSubmit(){
    alert('submitted');
    //recipeForm.submit();
    window.location.href = "index.html";
}

function onFail(message) {
      alert('Failed because: ' + message);
}

function processResults(meal) {
 //alert(param[index].column_name);
//alert(meal[0].mealName)
}

function error(err) {
    alert(err);
}