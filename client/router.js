Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function(){
	name:'home',
  this.render('home');
});

Router.route('/about', function(){
	this.render('about');
});

Router.route('/:_id',function(){
	console.log(this.params.someParameter);
});

Router.onBeforeAction(function() {
  GoogleMaps.load();
  this.next();
});