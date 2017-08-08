// Initialize your app
var $$ = Dom7;

var template = $$('#eisbuchstaawen').html();
var compiledTemplate = Template7.compile(template);
// Now we may render our compiled template by passing required context
var context = {
    buchstaawen: [
		{ denBuchstaaf: 'A', wierder: [
			{ wuert: 'Alphabet', jumppoint: 'E' },
			{ wuert: 'Äerd', jumppoint: 'E-UER' } 
		], showbuchstaaf: true },
		{ denBuchstaaf: 'B', wierder: [
			{ wuert: 'Billjee', jumppoint: 'E-EE' },
			{ wuert: 'Bëbee', jumppoint: 'E-Ë' },
			{ wuert: 'Béchs', jumppoint: 'E-É' },
			{ wuert: 'bieden', jumppoint: 'E-IE' },
			{ wuert: 'Buedem', jumppoint: 'E-IE' },
			{ wuert: 'bestueden', jumppoint: 'E-IE' },
			{ wuert: 'bueren', jumppoint: 'E-UER' },
			{ wuert: 'blären', jumppoint: 'E-ÄR' },
			{ wuert: 'Bléi', jumppoint: 'E-ÉI' },
			{ wuert: 'bleiwen', jumppoint: 'E-EI' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'C', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'D', wierder: [
			{ wuert: 'Dëppen', jumppoint: 'E-Ë' },
			{ wuert: 'duerch', jumppoint: 'E-UER' },
			{ wuert: 'Dier', jumppoint: 'E-UER' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'E', wierder: [
			{ wuert: 'Eeër', jumppoint: 'E-Ë' }
		], subBuchstaawen : [
			{subBuchstaaf: 'ee' },
			{subBuchstaaf: 'ë' },
			{subBuchstaaf: 'é' },
			{subBuchstaaf: 'è' },
			{subBuchstaaf: 'ie' },
			{subBuchstaaf: 'uer' },
			{subBuchstaaf: 'ir' },
			{subBuchstaaf: 'är' },
			{subBuchstaaf: 'éi' },
			{subBuchstaaf: 'ei' },
			{subBuchstaaf: 'ai' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'F', wierder: [
			{ wuert: 'féx', jumppoint: 'E-É' },
			{ wuert: 'frech', jumppoint: 'E' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'G', wierder: [
			{ wuert: 'gëeenegt', jumppoint: 'E-Ë' },
			{ wuert: 'giereg', jumppoint: 'E-UER' },
			{ wuert: 'gär', jumppoint: 'E-ÄR' },
			{ wuert: 'Gei', jumppoint: 'E-EI' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'H', wierder: [
			{ wuert: 'Hierscht', jumppoint: 'E-UER' },
			{ wuert: 'Haiser', jumppoint: 'E-AI' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'I', wierder: [
			{ wuert: 'iren (sech)', jumppoint: 'E-IR' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'J', wierder: [
			{ wuert: 'Jeeër', jumppoint: 'E-Ë' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'K', wierder: [
			{ wuert: 'keng', jumppoint: 'E' },
			{ wuert: 'Kierch', jumppoint: 'E-UER' },
			{ wuert: 'Käerz', jumppoint: 'E-UER' },
			{ wuert: 'Kären', jumppoint: 'E-ÄR' },
			{ wuert: 'Kéis', jumppoint: 'E-ÉI' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'L', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'M', wierder: [
			{ wuert: 'Meter', jumppoint: 'E' },
			{ wuert: 'Mëscht', jumppoint: 'E-Ë' },
			{ wuert: 'mécht', jumppoint: 'E-É' },
			{ wuert: 'Ministère', jumppoint: 'E-È' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'N', wierder: [
			{ wuert: 'nee', jumppoint: 'E-EE' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'O', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'P', wierder: [
			{ wuert: 'Pech', jumppoint: 'E' },
			{ wuert: 'Pëll', jumppoint: 'E-Ë' },
			{ wuert: 'Péng', jumppoint: 'E-É' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'Q', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'R', wierder: [
			{ wuert: 'Reen', jumppoint: 'E-EE' },
			{ wuert: 'Rei', jumppoint: 'E-EI' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'S', wierder: [
			{ wuert: 'Strenz', jumppoint: 'E' },
			{ wuert: 'Streech', jumppoint: 'E-EE' },
			{ wuert: 'Seeërei', jumppoint: 'E-Ë' },
			{ wuert: 'Stéck', jumppoint: 'E-É' },
			{ wuert: 'Schiet', jumppoint: 'E-IE' },
			{ wuert: 'Stuerm', jumppoint: 'E-UER' },
			{ wuert: 'Stäerkt', jumppoint: 'E-UER' },
			{ wuert: 'Spur (eng)', jumppoint: 'E-IR' },
			{ wuert: 'Stär', jumppoint: 'E-ÄR' },
			{ wuert: 'Schnéi', jumppoint: 'E-ÉI' },
			{ wuert: 'séier', jumppoint: 'E-ÉI' },
			{ wuert: 'Saier', jumppoint: 'E-AI' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'T', wierder: [
			{ wuert: 'Tëlee', jumppoint: 'E-Ë' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'U', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'V', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'W', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'X', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'Y', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'Z', wierder: [
			{ wuert: 'Zebra', jumppoint: 'E' }
		], showbuchstaaf: true }
	]
};
var html = compiledTemplate(context);
$$('#eisbuchstaawen').html(html);

template = $$('#thesideblock').html();
compiledTemplate = Template7.compile(template);
html = compiledTemplate(context);
$$('#thesideblock').html(html);



var myApp = new Framework7({
    material: true,
	panelRightBreakpoint: 1024,
	
	onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
});

// Export selectors engine


// Add views
var leftView = myApp.addView('.view-right', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});



var mySwiper3 = myApp.swiper('.swiper-3', {
  pagination:'.swiper-3 .swiper-pagination',
  spaceBetween: 10,
  slidesPerView: 5,
  effect: 'slide',
  parallax: true,
  centeredSlides: true,
  zoom: true
});
var mySwiperSub = myApp.swiper('.swiper-sub', {
  pagination:'.swiper-sub .swiper-pagination',
  spaceBetween: 10,
  slidesPerView: 5,
  effect: 'slide',
  parallax: true,
  centeredSlides: true,
  zoom: true
});


var tour = localStorage.getItem("tour");
if (!tour || tour == "0") {
	var welcomeText = [{
		id: 'slide0',
		picture: '<div class="tutorialicon">♥</div>',
		text: 'First slide'
	}, {
		id: 'slide1',
		picture: '<div class="tutorialicon">♥</div>',
		text: 'Second slide'
	}, {
		id: 'slide2',
		picture: '<div class="tutorialicon">♥</div>',
		text: 'Third slide'
	}];
	myApp.welcomescreen(welcomeText, {
		'bgcolor': '#1e5799',
		'fontcolor': '#fafafa',
		'closeButtonText': 'iwwersprangen',
		'onClosed': function() {
					localStorage.setItem("tour", "1"); // will not make the tour run again
			}
	});
}

$$(document).on('click', '.tutorial-close-btn', function () {
  welcomescreen.close();
});

$$('.tutorial-open-btn').click(function () {
  welcomescreen.open();  
});

$$(document).on('click', '.tutorial-next-link', function (e) {
  welcomescreen.next(); 
});

$$(document).on('click', '.tutorial-previous-slide', function (e) {
  welcomescreen.previous(); 
});