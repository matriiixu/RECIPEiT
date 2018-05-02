Backendless.initApp("38D2266B-EF1A-0CF3-FF65-A690213C4300","D3546A40-29FC-EAD4-FFDB-52225A01A900");
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/pagetwo/',
      url: 'pagetwo.html',
    },
  ],
    
  // ... other parameters
});
var mainView = app.views.create('.view-main');
var swiper = app.swiper.create('.swiper-container', {
    speed: 100

});

// create searchbar
var searchbar = app.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      //console.log(query, previousQuery);
    }
  }
});

var login = document.getElementById('login').addEventListener('click', formSubmit);
var homebtn = document.getElementById('homebtn').addEventListener('click', homeRedirect);
var dashboardbtn = document.getElementById('dashboardbtn').addEventListener('click', dashboardRedirect);
function homeRedirect(){
    window.location.href = "index.html";
}

function dashboardRedirect(){
    window.location.href = "dashboard.html";
}
function formSubmit(){
    console.log('submitted');
    document.getElementById('myForm').submit();
    //window.location.href = "index.html";
}






























