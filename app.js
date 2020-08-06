var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.creandoapp.dev',
  root: '#app',
  theme: theme,
  routes: routes
});

var mainApp   = app.views.create('.view-main');
 