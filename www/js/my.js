function closespeeddial(){document.getElementById('thespeeddial').setAttribute('class','speed-dial');}
function resetApp(){getContent('start');}
function jumpto(jumppoint,hash,subselector){mySwiper3.slideTo(jumppoint,650);if(subselector){initSubselector(hash);}}
function initSubselector(hash)
{
	console.log('subselector toggled on!');
	var jumppoint=0;
	console.log('jp: '+hash);
	mySwiperSub.removeAllSlides();
	var newslides=[];
	switch (hash[0])
	{
	case 'E': console.log('E');
			newslides=	['<div class="swiper-slide"><span>ee</span></div>',
						'<div class="swiper-slide"><span>ë</span></div>',
						'<div class="swiper-slide"><span>é</span></div>',
						'<div class="swiper-slide"><span>è</span></div>',
						'<div class="swiper-slide"><span>ie, ue</span></div>',
						'<div class="swiper-slide"><span>ier, uer, äer</span></div>',
						'<div class="swiper-slide"><span>ir, ur</span></div>',
						'<div class="swiper-slide"><span>är</span></div>',
						'<div class="swiper-slide"><span>éi</span></div>',
						'<div class="swiper-slide"><span>ei</span></div>',
						'<div class="swiper-slide"><span>ai</span></div>'];
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
	mySwiperSub.appendSlide(newslides);
	// $$('#swiper-sub').addClass('showsub');
	$$('#swiper-sub').removeClass('hidesub');
	mySwiperSub.slideTo(jumppoint,650);
}
function getContent(contentid)
{
	//
	var thecontentbox= $$('#thecontent').html();
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
	switch (contentid)
	{
		case 'A' : thecontentbox="<h1>Buchstaaf A</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		case 'E' : thecontentbox="<h1>Buchstaaf E</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			subselector=true; hash=contentid;
			jumpto(jumppoint,hash,subselector);
			break;
			case 'E-EE' : thecontentbox="<h1>Buchstaaf ee</h1>";
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
		case 'Z' : thecontentbox="<h1>Buchstaaf Z</h1>";
			result=contentid.charCodeAt(0)+' '+contentid;
			jumpto(jumppoint,hash,subselector);
			break;
		default : thecontentbox="<h1>Lëtzebuergesch<br />fir an d'Boxentäsch</h1><h2>Dreck op e Buschtaaf fir déi entspriechend Wierder, souwie och d'Reegelen ugewissen ze kréien.</h2>";
			result='start';
	}
	// console.log('selector: '+contentid);
	$$('#thecontent').html(thecontentbox);
	if (result==='start')
	{
		//Startup
		console.log('startup initiated');
	}
}
function calcHash(thestring)
{
    var hash = 0;
    if (thestring.length == 0) return hash;
    for (i = 0; i < thestring.length; i++) {
        char = thestring.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
