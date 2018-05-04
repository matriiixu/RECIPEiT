var destinationType; //used sets what should be returned (image date OR file path to image for example)
var image, file, output, phonegapcamera, submitBtn, mealName, mealDescription, mealDirections, mealIngredients, image1, image2, photo;
/*document.addEventListener("deviceready",onDeviceReady,false);*/
onDeviceReady();

function onDeviceReady() {
    //console.log('device ready');
    mealName = document.getElementById('mealName').value;
    mealDescription = document.getElementById('mealDescription').value;
    mealDirections = document.getElementById('mealDirections').value;
    mealIngredients = document.getElementById('mealIngredients').value;
    submitBtn = document.getElementById('submitBtn').addEventListener('click', onAddMeal);
    image = document.getElementById('image').value;
    // this line goes into the app initialization block
    document.getElementById('image').addEventListener('change', handleFileSelect, false);
}
  
function handleFileSelect(evt) 
{
    //console.log('file uploaded');
    file = evt.target.files[0]; // FileList object
}

function onAddMeal() {
    //var path = "my-folder" + ID_of_recipe; //to be completed !!!
    Backendless.Files.upload( file, "my-folder" )
    .then( function( fileURLs ) {
       //console.log( "File successfully uploaded. Path to download: " + fileURLs.fileURL );
        addMeal(fileURLs.fileURL);
     })
    .catch( function( error ) {
       //console.log( "error - " + error.message );
     });
}

function saved(savedMeal){
      console.log( "New Recipe has been saved as: " + savedMeal.mealName);
    homeRedirect();
}

function addMeal(fileUrl){
    //console.log(fileUrl);
    var mealName = $("#mealName").val();
    var mealDescription = $("#mealDescription").val();
    var mealDirections = $("#mealDirections").val();
    var mealIngredients = $("#mealIngredients").val();

    var newMeal = {};
    newMeal.mealName = mealName;
    newMeal.mealDescription = mealDescription;
    newMeal.mealDirections = mealDirections;
    newMeal.mealIngredients = mealIngredients;
    //newMeal.img2URL = img2URL;
    newMeal.img1URL = fileUrl;
    Backendless.Data.of("meal").save(newMeal).then(saved).catch(error);
}

function error(err) {
    alert(err);
}






















