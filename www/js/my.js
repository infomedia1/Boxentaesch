var oldhash;
function closespeeddial(){document.getElementById('thespeeddial').setAttribute('class','speed-dial');}
function resetApp(){getContent('start');}
function jumpto(jumppoint,hash,subselector){mySwiper3.slideTo(jumppoint,650);if(subselector){initSubselector(hash);} else {oldhash='';}}
function openpage(siteurl){var onInApp = window.open('http://'+siteurl, '_blank', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');}
function playAudio(audioid)
{
	if (cordova.platformId=='android') {
		var mediasrc='/android_asset/www/';
	} else {
		var mediasrc='';
	}
	$$('#audioplayer').removeClass('no-player');
	
	//alert(cordova.platformId);
	//console.log('platform: '+ cordova.platformId);
	
	var my_media = new Media(mediasrc+'audio/'+audioid+'.mp3', function () {
						$$('#audioplayer').addClass('no-player');
					}, function (err) { alert('Audio Error: '+err); }
				);
	my_media.play();
}

function initSubselector(hash)
{
	// console.log('subselector toggled on!');
	var jumppoint=0;
	if(oldhash!==hash[0])
	{
		mySwiperSub.removeAllSlides();
		oldhash='';
	}
	// console.log('1 oldhash: '+oldhash+' hash: '+hash);
	var newslides=[];
	var setoldhash;
	switch (hash[0])
	{
	case 'E': 
	// console.log('E');
			newslides=	['<div class="swiper-slide" onclick="getContent(\'E-EE\');"><span>ee</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-Ë\');"><span>ë</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-É\');"><span>é</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-È\');"><span>è</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-IE\');"><span>ie, ue</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-UER\');"><span>ier, uer, äer</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-IR\');"><span>ir, ur</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-ÄR\');"><span>är</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-ÉI\');"><span>éi</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-EI\');"><span>ei</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-AI\');"><span>ai</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'E-EE': jumppoint=0; break;
			case 'E-Ë': jumppoint=1; break;
			case 'E-É': jumppoint=2; break;
			case 'E-È': jumppoint=3; break;
			case 'E-IE': jumppoint=4; break;
			case 'E-UER': jumppoint=5; break;
			case 'E-IR': jumppoint=6; break;
			case 'E-ÄR': jumppoint=7; break;
			case 'E-ÉI': jumppoint=8; break;
			case 'E-EI': jumppoint=9; break;
			case 'E-AI': jumppoint=10; break;
		}
		break;
		
	}
	console.log('2 oldhash: '+oldhash+' hash: '+hash);
	if(oldhash!==hash[0])
	{
		mySwiperSub.appendSlide(newslides);
		// $$('#swiper-sub').addClass('showsub');
		$$('#swiper-sub').removeClass('hidesub');
	}
	mySwiperSub.slideTo(jumppoint,650);
	oldhash=setoldhash;
}
function getContent(contentid)
{
	//
	var thecontentbox= $$('#thecontent').html();
	var thecontentrule=$$('#thecontentrule').html();
	var result='';
	var hash='';
	var jumppoint=contentid.charCodeAt(0) - 65;
	var subselector=false;
	if ((contentid.length>1) || (contentid.charCodeAt(0)>90))
	{
		//keen normale buchstaaf
		hash=contentid;
		subselector=true;
	} else { $$('#swiper-sub').addClass('hidesub'); }
	$$('#thesubnavbar').removeClass('hide-tabbar');
	switch (contentid)
	{
		case 'A' : thecontentbox="<h1>Buchstaaf A</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'B' : thecontentbox="<h1>Buchstaaf B</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'C' : thecontentbox="<h1>Buchstaaf C</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'D' : thecontentbox="<h1>Buchstaaf D</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'E' : thecontentbox="<h1>Buchstaaf E</h1>";
			thecontentrule="<h1>kuerzen e</h1><p></p><h1>laangen e</h1><p></p>";
			result=contentid.charCodeAt(0)+' '+contentid;
			subselector=true; hash=contentid;
			jumpto(jumppoint,hash,subselector);
			break;
			case 'E-EE' : thecontentbox="<h1>Buchstaaf ee</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Streech<br>nee<br>Reen<br>Billjee</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-Ë' : thecontentbox="<h1>Buchstaaf ë</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-É' : thecontentbox="<h1>Buchstaaf é</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-È' : thecontentbox="<h1>Buchstaaf è</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-IE' : thecontentbox="<h1>Buchstaaf ie an ue</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-UER' : thecontentbox="<h1>Buchstaaf ier, uer an äer</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-IR' : thecontentbox="<h1>Buchstaaf ir an ur</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-ÄR' : thecontentbox="<h1>Buchstaaf är</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-ÉI' : thecontentbox="<h1>Buchstaaf éi</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-EI' : thecontentbox="<h1>Buchstaaf ei</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
			case 'E-AI' : thecontentbox="<h1>Buchstaaf ai</h1>";
				result=contentid.charCodeAt(0)+' '+contentid;
				jumpto(jumppoint,hash,subselector);
				break;
		case 'F' : thecontentbox="<h1>Buchstaaf F</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'G' : thecontentbox="<h1>Buchstaaf G</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'H' : thecontentbox="<h1>Buchstaaf H</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'I' : thecontentbox="<h1>Buchstaaf I</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'J' : thecontentbox="<h1>Buchstaaf J</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'K' : thecontentbox="<h1>Buchstaaf K</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'L' : thecontentbox="<h1>Buchstaaf L</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'M' : thecontentbox="<h1>Buchstaaf M</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'N' : thecontentbox="<h1>Buchstaaf N</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'O' : thecontentbox="<h1>Buchstaaf O</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'P' : thecontentbox="<h1>Buchstaaf P</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'Q' : thecontentbox="<h1>Buchstaaf Q</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'R' : thecontentbox="<h1>Buchstaaf R</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'S' : thecontentbox="<h1>Buchstaaf S</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'T' : thecontentbox="<h1>Buchstaaf T</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'U' : thecontentbox="<h1>Buchstaaf U</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'V' : thecontentbox="<h1>Buchstaaf V</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'W' : thecontentbox="<h1>Buchstaaf W</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'X' : thecontentbox="<h1>Buchstaaf X</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'Y' : thecontentbox="<h1>Buchstaaf Y</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'Z' : thecontentbox="<h1>Buchstaaf Z</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		default : thecontentbox="<h1>Lëtzebuergesch<br />fir an d'Boxentäsch</h1><h2>Dreck op e Buschtaaf fir déi entspriechend Wierder, souwie och d'Reegelen ugewissen ze kréien.</h2>";
			result='start';
			$$('#thesubnavbar').addClass('hide-tabbar');
	}
	// console.log('selector: '+contentid);
	$$('#thecontent').html(thecontentbox);
	$$('#thecontentrule').html(thecontentrule);
	if (result==='start')
	{
		//Startup
		// console.log('startup initiated');
	}
}