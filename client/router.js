// Router Setup

Router.configure({
  layoutTemplate: 'layout'
  // sets the main template as Layout with the nav bar
});

// Home Page router (with Main map)
Router.route('/', function(){
	name:'home',
  this.render('home');
});


// About page router
Router.route('/about', function(){
	this.render('about');
});


// About page router
Router.route('/site_list', function(){
	this.render('site_list');
});


// Dynamic Router for each site.
Router.route('/:_site',function(){
	
	this.render('site_view',{
		data: function(){
		var currentSite = this.params._site;
		return Sites.findOne({ siteID: currentSite });	
		}
	});
});


//TODO: figure out how to load google maps only for only Main view and site_view
Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
});