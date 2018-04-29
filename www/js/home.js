var search = document.getElementById('search').addEventListener('click', searchBarSubmit);
function searchBarSubmit(){
    console.log('submitted');
    document.getElementById('searchBar').submit();
    //window.location.href = "index.html";
}