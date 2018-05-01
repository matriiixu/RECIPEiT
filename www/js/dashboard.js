var destinationType; //used sets what should be returned (image date OR file path to image for example)
var image, file, output, phonegapcamera, recipeSubmit, recipeForm, mealName, mealDescription, mealDirections, mealIngredients, image1, image2, photo;
document.addEventListener("deviceready",onDeviceReady,false);
$(document).on("click", "#recipeSubmit", onAddTask);


function onDeviceReady() {
    alert("onDeviceready");
    phonegapcamera = document.getElementById('phonegapcamera');
    phonegapcamera.addEventListener('click', capturePhoto)
	destinationType=navigator.camera.DestinationType;
    file = document.getElementById('file');
    output = document.getElementById('output');
    mealName = document.getElementById('mealName').value;
    mealDescription = document.getElementById('mealDescription').value;
    mealDirections = document.getElementById('mealDirections').value;
    mealIngredients = document.getElementById('mealIngredients').value;
    image = document.getElementById('image').value;
    
    //Data.of(name_of_table)
    Backendless.Data.of("meal").find().then(processResults).catch(error);
    Backendless.Data.of("meal").save(mealName).then(saved).catch(error);
}
function onAddTask() {
    console.log("add button clicked");
}

function capturePhoto() {
    alert("capturePhoto");
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.DATA_URL });
}
	
function onPhotoDataSuccess(imageData) {
	var image = document.getElementById('image');
	image.style.display = 'block';
	image.src = "data:image/jpeg;base64," + imageData;
}


function saved(savedMeal) {
console.log( "new Contact instance has been saved" + savedMeal);
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































