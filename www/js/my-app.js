// Initialize your app
var $$ = Dom7;

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

var template = $$('#eisbuchstaawen').html();
var compiledTemplate = Template7.compile(template);
// Now we may render our compiled template by passing required context
var context = {
    buchstaawen: [
		{ denBuchstaaf: 'A', wierder: [
			{ wuert: 'Alphabet' },
			{ wuert: 'Äerd' } 
		], showbuchstaaf: true },
		{ denBuchstaaf: 'B', wierder: [
			{ wuert: 'Billjee' },
			{ wuert: 'Bëbee' },
			{ wuert: 'Béchs' },
			{ wuert: 'bieden' },
			{ wuert: 'Buedem' },
			{ wuert: 'bestueden' },
			{ wuert: 'bueren' },
			{ wuert: 'blären' },
			{ wuert: 'Bléi' },
			{ wuert: 'bleiwen' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'C', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'D', wierder: [
			{ wuert: 'Dëppen' },
			{ wuert: 'duerch' },
			{ wuert: 'Dier' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'E', wierder: [
			{ wuert: 'Eeër' }
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
			{ wuert: 'féx' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'G', wierder: [
			{ wuert: 'gëeenegt' },
			{ wuert: 'giereg' },
			{ wuert: 'gär' },
			{ wuert: 'Gei' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'H', wierder: [
			{ wuert: 'Hierscht' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'I', wierder: [
			{ wuert: 'iren (sech)' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'J', wierder: [
			{ wuert: 'Jeeër' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'K', wierder: [
			{ wuert: 'keng' },
			{ wuert: 'Kierch' },
			{ wuert: 'Käerz' },
			{ wuert: 'Kären' },
			{ wuert: 'Kéis' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'L', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'M', wierder: [
			{ wuert: 'Meter' },
			{ wuert: 'Mëscht' },
			{ wuert: 'mécht' },
			{ wuert: 'Ministère' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'N', wierder: [
			{ wuert: 'nee' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'O', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'P', wierder: [
			{ wuert: 'Pech' },
			{ wuert: 'Pëll' },
			{ wuert: 'Péng' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'Q', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'R', wierder: [
			{ wuert: 'Reen' },
			{ wuert: 'Rei' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'S', wierder: [
			{ wuert: 'Strenz' },
			{ wuert: 'Streech' },
			{ wuert: 'Seeërei' },
			{ wuert: 'Stéck' },
			{ wuert: 'Schiet' },
			{ wuert: 'Stuerm' },
			{ wuert: 'Stäerkt' },
			{ wuert: 'Spur (eng)' },
			{ wuert: 'Stär' },
			{ wuert: 'Schnéi' },
			{ wuert: 'séier' },
			{ wuert: 'Saier' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'T', wierder: [
			{ wuert: 'Tëlee' }
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
			{ wuert: 'Zebra' }
		], showbuchstaaf: true }
	]
};
var html = compiledTemplate(context);
$$('#eisbuchstaawen').html(html);

template = $$('#thesideblock').html();
compiledTemplate = Template7.compile(template);
html = compiledTemplate(context);
$$('#thesideblock').html(html);

var mySwiper3 = myApp.swiper('.swiper-3', {
  pagination:'.swiper-3 .swiper-pagination',
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