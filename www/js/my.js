var oldhash;
function closespeeddial(){document.getElementById('thespeeddial').setAttribute('class','speed-dial');}
function resetApp(){getContent('start'); setupPush();closespeeddial();}
	//;gotoAppStore("id1200014540","com.konterbont.boxentaesch");}
function jumpto(jumppoint,hash,subselector){mySwiper3.slideTo(jumppoint,650);if(subselector){initSubselector(hash);} else {oldhash='';}}
function openpage(siteurl){var onInApp = window.open('http://'+siteurl, '_blank', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');}
function playAudio(audioid)
{
	$$('#audioplayer').removeClass('no-player');
	
	//alert(cordova.platformId);
	//console.log('platform: '+ cordova.platformId);
	/*
	var my_media = new Media(mediasrc+'audio/'+audioid+'.mp3', function () {
						$$('#audioplayer').addClass('no-player');
					}, function (err) { alert('Feeler: '+err); $$('#audioplayer').addClass('no-player'); }
				);
	my_media.play();
	*/
	Player.play(audioid+'.mp3');
}

$$(document).on('click', '.player-play-icon', function (e) {
  Player.pauseResume(); 
});

function openStore() {
	console.log('openstore...');
	gotoAppStore("id1291313982","com.konterbont.magazine");
}
function initSubselector(hash)
{
	// console.log('subselector toggled on!');
	var jumppoint=0;
	if((oldhash!==hash[0]) || (oldhash==hash))
	{
		mySwiperSub.removeAllSlides();
		oldhash='';
		// console.log('remove all slides');
	}
	// console.log('1 oldhash: '+oldhash+' hash: '+hash);
	var newslides=[];
	var setoldhash;
	switch (hash[0])
	{
	case 'A': 
	// console.log('E');
			newslides=	['<div class="swiper-slide" onclick="getContent(\'A-A\');"><span>a</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-A2\');"><span>a</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-AA\');"><span>aa</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-AI\');"><span>ai</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-AU\');"><span>au</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-AU2\');"><span>au</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-Ä\');"><span>ä</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-Ä2\');"><span>ä</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-ÄÄ\');"><span>ää</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-ÄI\');"><span>äi</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'A-A': jumppoint=0; break;
			case 'A-A2': jumppoint=1; break;
			case 'A-AA': jumppoint=2; break;
			case 'A-AI': jumppoint=3; break;
			case 'A-AU': jumppoint=4; break;
			case 'A-AU2': jumppoint=5; break;
			case 'A-Ä': jumppoint=6; break;
			case 'A-Ä2': jumppoint=7; break;
			case 'A-ÄÄ': jumppoint=8; break;
			case 'A-ÄI': jumppoint=9; break;
		}
		break;
		case 'B': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'B-B\');"><span>&#8722;b</span></div>',
			newslides=	'<div class="swiper-slide" onclick="getContent(\'B-B2\');"><span>&#8722;b</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'B-BB\');"><span>&#8722;bb</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'B-BB2\');"><span>&#8722;bb&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'B-B': jumppoint=0; break;
			case 'B-B2': jumppoint=1; break;
			case 'B-BB': jumppoint=2; break;
			case 'B-BB2': jumppoint=3; break;
		}
		break;
		case 'C': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'C-C\');"><span>c</span></div>',
			newslides=	'<div class="swiper-slide" onclick="getContent(\'C-C2\');"><span>c</span></div>',
			newslides=	'<div class="swiper-slide" onclick="getContent(\'C-CH\');"><span>&#8722;ch(&#8722;)</span></div>',
			newslides=	'<div class="swiper-slide" onclick="getContent(\'C-CH2\');"><span>&#8722;ch(&#8722;)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'C-CK\');"><span>&#8722;ck(&#8722;)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'C-C': jumppoint=0; break;
			case 'C-C2': jumppoint=1; break;
			case 'C-CH': jumppoint=2; break;
			case 'C-CH2': jumppoint=3; break;
			case 'C-CK': jumppoint=4; break;
		}
		break;
		case 'D': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'D-D\');"><span>(&#8722;)d&#8722;</span></div>',
			newslides=	'<div class="swiper-slide" onclick="getContent(\'D-D2\');"><span>&#8722;d</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'D-DD\');"><span>&#8722;dd</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'D-DD2\');"><span>&#8722;dd&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'D-D': jumppoint=0; break;
			case 'D-D2': jumppoint=1; break;
			case 'D-DD': jumppoint=2; break;
			case 'D-DD2': jumppoint=3; break;
		}
		break;
	case 'E': 
	// console.log('E');
			newslides=	['<div class="swiper-slide" onclick="getContent(\'E-E\');"><span>e</span></div>',
			newslides=	'<div class="swiper-slide" onclick="getContent(\'E-E2\');"><span>e</span></div>',
			newslides=	'<div class="swiper-slide" onclick="getContent(\'E-EE\');"><span>ee</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-Ë\');"><span>ë</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-Ë2\');"><span>(e)ë(e)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-É\');"><span>é</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-É2\');"><span>&#8722;é(e)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-È\');"><span>è</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-IE\');"><span>ie</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-UE\');"><span>ue</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-IER\');"><span>ier</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-UER\');"><span>uer</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-ÄER\');"><span>äer</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-ÉI\');"><span>éi</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-EI\');"><span>ei</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-EU\');"><span>eu</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'E-E': jumppoint=0; break;
			case 'E-E2': jumppoint=1; break;
			case 'E-EE': jumppoint=2; break;
			case 'E-Ë': jumppoint=3; break;
			case 'E-Ë2': jumppoint=4; break;
			case 'E-É': jumppoint=5; break;
			case 'E-É2': jumppoint=6; break;
			case 'E-È': jumppoint=7; break;
			case 'E-IE': jumppoint=8; break;
			case 'E-UE': jumppoint=9; break;
			case 'E-IER': jumppoint=10; break;
			case 'E-UER': jumppoint=11; break;
			case 'E-ÄER': jumppoint=11; break;
			case 'E-ÉI': jumppoint=12; break;
			case 'E-EI': jumppoint=13; break;
			case 'E-EU': jumppoint=14; break;
			
		}
		break;
	case 'F': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'F-F\');"><span>f</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'F-FF\');"><span>ff</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'F-F': jumppoint=0; break;
			case 'F-FF': jumppoint=1; break;
		}
		break;
	case 'G': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'G-G\');"><span>(&#8722;)g&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G2\');"><span>&#8722;g&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G3\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G4\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G5\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-GG\');"><span>&#8722;gg&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-NG\');"><span>&#8722;ng(&#8722;)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-NK\');"><span>&#8722;nk(&#8722;)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'G-G': jumppoint=0; break;
			case 'G-G2': jumppoint=0; break;
			case 'G-G3': jumppoint=1; break;
			case 'G-G4': jumppoint=2; break;
			case 'G-G5': jumppoint=3; break;
			case 'G-GG': jumppoint=4; break;
			case 'G-NG': jumppoint=5; break;
			case 'G-NK': jumppoint=6; break;
		}
		break;
		
		case 'H': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'H-H\');"><span>h</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'H-H': jumppoint=0; break;
		}
		break;
		
		case 'I': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'I-I\');"><span>i</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'I-I2\');"><span>i</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'I-IE\');"><span>ie</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'I-II\');"><span>ii</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'I-I': jumppoint=0; break;
			case 'I-I2': jumppoint=1; break;
			case 'I-IE': jumppoint=2; break;
			case 'I-II': jumppoint=3; break;
		}
		break;
		case 'J': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'J-J\');"><span>(&#8722;)j</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'J-J2\');"><span>j</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'J-J': jumppoint=0; break;
			case 'J-J2': jumppoint=1; break;
		}
		break;
		case 'K': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'K-K\');"><span>(&#8722;)k(&#8722;)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'K-CK\');"><span>&#8722;ck(&#8722;)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'K-K': jumppoint=0; break;
			case 'K-CK': jumppoint=1; break;
		}
		break;
		case 'L': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'L-L\');"><span>l</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'L-LL\');"><span>&#8722;ll(&#8722;)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'L-L': jumppoint=0; break;
			case 'L-LL': jumppoint=1; break;
		}
		break;
		case 'M': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'M-M\');"><span>m</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'M-MM\');"><span>&#8722;mm(&#8722;)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'M-M': jumppoint=0; break;
			case 'M-MM': jumppoint=1; break;
		}
		break;
		case 'N': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'N-N\');"><span>n</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'N-NN\');"><span>nn</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'N-N2\');"><span>(n)* fällt ewech</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'N-N3\');"><span>(n) * bleift stoen</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'N-N': jumppoint=0; break;
			case 'N-NN': jumppoint=1; break;
			case 'N-N2': jumppoint=2; break;
			case 'N-N3': jumppoint=3; break;
		}
		break;
		case 'O': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'O-O\');"><span>o</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'O-O2\');"><span>o</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'O-OO\');"><span>oo</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'O-OU\');"><span>ou</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'O-Ö\');"><span>ö</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'O-ÖÖ\');"><span>öö</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'O-O': jumppoint=0; break;
			case 'O-O2': jumppoint=1; break;
			case 'O-OO': jumppoint=2; break;
			case 'O-OU': jumppoint=3; break;
			case 'O-Ö': jumppoint=4; break;
			case 'O-ÖÖ': jumppoint=5; break;
		}
		break;
		case 'P': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'P-P\');"><span>(&#8722;)p(&#8722;)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'P-PP\');"><span>pp</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'P-PF\');"><span>(&#8722;)pf&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'P-P': jumppoint=0; break;
			case 'P-PP': jumppoint=1; break;
			case 'P-PF': jumppoint=2; break;
		}
		break;
		case 'Q': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'Q-Q\');"><span>qu&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'Q-Q': jumppoint=0; break;
		}
		break;
		case 'R': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'R-R\');"><span>r</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'R-R2\');"><span>&#8722;r</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'R-R3\');"><span>&#8722;r&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'R-RR\');"><span>&#8722;rr&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'R-R': jumppoint=0; break;
			case 'R-R2': jumppoint=1; break;
			case 'R-R3': jumppoint=2; break;
			case 'R-RR': jumppoint=3; break;
		}
		break;
		case 'S': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'S-S\');"><span>s</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'S-S2\');"><span>s</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'S-S3\');"><span>&#8722;s</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'S-ST\');"><span>&#8722;st(&#8722;)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'S-ST2\');"><span>st&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'S-SP\');"><span>&#8722;sp(&#8722;)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'S-SP2\');"><span>sp&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'S-SCH\');"><span>(&#8722;)sch(&#8722;)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'S-SS\');"><span>&#8722;ss(&#8722;)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'S-S': jumppoint=0; break;
			case 'S-S2': jumppoint=1; break;
			case 'S-S3': jumppoint=2; break;
			case 'S-ST': jumppoint=3; break;
			case 'S-ST2': jumppoint=4; break;
			case 'S-SP': jumppoint=5; break;
			case 'S-SP2': jumppoint=6; break;
			case 'S-SCH': jumppoint=7; break;
			case 'S-SS': jumppoint=8; break;
		}
		break;
		case 'T': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'T-TZ\');"><span>&#8722;tz(&#8722;)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'T-T\');"><span>t</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'T-TT\');"><span>tt</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'T-TZ': jumppoint=0; break;
			case 'T-T': jumppoint=1; break;
			case 'T-TT': jumppoint=2; break;
		}
		break;
		case 'U': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'U-U\');"><span>u</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'U-U2\');"><span>u</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'U-UU\');"><span>uu</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'U-UE\');"><span>ue</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'U-OU\');"><span>ou</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'U-Ü\');"><span>ü</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'U-Ü2\');"><span>ü</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'U-ÜÜ\');"><span>üü</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'U-U': jumppoint=0; break;
			case 'U-U2': jumppoint=1; break;
			case 'U-UU': jumppoint=2; break;
			case 'U-UE': jumppoint=3; break;
			case 'U-OU': jumppoint=4; break;
			case 'U-Ü': jumppoint=5; break;
			case 'U-Ü2': jumppoint=5; break;
			case 'U-ÜÜ': jumppoint=6; break;
		}
		break;
		case 'V': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'V-V\');"><span>v</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'V-V2\');"><span>v</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'V-V3\');"><span>&#8722;v</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'V-V': jumppoint=0; break;
			case 'V-V2': jumppoint=1; break;
			case 'V-V3': jumppoint=2; break;
		}
		break;
		case 'W': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'W-W\');"><span>w</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'W-WW\');"><span>&#8722;ww&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'W-W': jumppoint=0; break;
			case 'W-WW': jumppoint=1; break;
		}
		break;
		case 'X': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'X-X\');"><span>x</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'X-X': jumppoint=0; break;
		}
		break;
		case 'Y': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'Y-Y\');"><span>y</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'Y-Y': jumppoint=0; break;
		}
		break;
		case 'Z': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'Z-TZ\');"><span>z</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'Z-TZ\');"><span>&#8722;tz(&#8722;)</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'Z-Z': jumppoint=0; break;
			case 'Z-TZ': jumppoint=1; break;
		}
		break;
	}
	//console.log('2 oldhash: '+oldhash+' hash: '+hash);
	if((oldhash!==hash[0]) || (oldhash==hash))
	{
		mySwiperSub.appendSlide(newslides);
		// $$('#swiper-sub').addClass('showsub');
		$$('#swiper-sub').removeClass('hidesub');
		// console.log('Hidesub removed');
	}
	mySwiperSub.slideTo(jumppoint,650);
	oldhash=setoldhash;
}

function getContent(contentid,direct)
{
	//
	//$$('.tab-link').css('height','75px');
	$$('.tab-link').css('display','block');
	var thecontentbox= $$('#thecontent').html();
	var thecontentrule=$$('#thecontentrule').html();
	var result='';
	var hash='';
	var jumppoint=contentid.charCodeAt(0) - 65;
	var subselector=false;
	if ((contentid.length>1) || (contentid.charCodeAt(0)>90))
	{
		//keen normale Buschtaf
		hash=contentid;
		subselector=true;
	} else { $$('#swiper-sub').addClass('hidesub'); }
	$$('#thesubnavbar').removeClass('hide-tabbar');
	subselector=false;
	switch (contentid)
	{
		case 'A' : thecontentbox="<h1>Buschtaf A</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>B<span class=\"bold\">a</span>m<br>erk<span class=\"bold\">a</span>len<br><span class=\"bold\">A</span>f</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a');\">&nbsp;</p></div></div><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Pr<span class=\"bold\">a</span>bbeli<br>r<span class=\"bold\">a</span>schten<br><span class=\"bold\">A</span>ffekot</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu a</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">a</span> viru engem Konsonant, gëtt e laang geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">a</span> virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';
			if(direct) { subselector=false; }
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-A' :
			thecontentbox="<h1>Buschtaf a</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>B<span class=\"bold\">a</span>m<br>erk<span class=\"bold\">a</span>len<br><span class=\"bold\">A</span>f</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-a');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu a</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">a</span> viru engem Konsonant, gëtt e laang geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-A2':
			thecontentbox="<h1>Buschtaf a</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Pr<span class=\"bold\">a</span>bbeli<br>r<span class=\"bold\">a</span>schten<br><span class=\"bold\">A</span>ffekot</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu a</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">a</span> virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AA' : thecontentbox="<h1>Buschtaf aa</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>g<span class=\"bold\">aa</span>psen<br>schm<span class=\"bold\">aa</span>chen<br><span class=\"bold\">aa</span>chtmol</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-aa');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu aa</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">aa</span> gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AI' : thecontentbox="<h1>Buschtaf ai</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>S<span class=\"bold\">ai</span>er<br>H<span class=\"bold\">ai</span>ser</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-ai');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ai</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ai</span> ass eng Vokalkoppel a kënnt da vir, wann d\'Wuert sch vun engem <span class=\"bold\">a</span> ofleede léisst (am Däitschen oder am Lëtzebuergeschen): Saier (sauer), Haiser (Haus).</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AU' : thecontentbox="<h1>Buschtaf au</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>D<span class=\"bold\">au</span>f<br>kl<span class=\"bold\">au</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-au');\">&nbsp;</p></div></div><div class=\"floating-container\"><div class=\"left-content-block\"><h2>B<span class=\"bold\">au</span>ch<br>F<span class=\"bold\">au</span>scht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-au2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu au</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">au</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-Ä' : thecontentbox="<h1>Buschtaf ä</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>qu<span class=\"bold\">ä</span>len<br>pr<span class=\"bold\">ä</span>gen<br>Migr<span class=\"bold\">ä</span>n</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-atrema');\">&nbsp;</p></div></div><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">Ä</span>ntwert<br>Kn<span class=\"bold\">ä</span>tsch</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-atrema2');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			thecontentrule='<h1>Regel zu ä</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">ä</span> viru engem Konsonant, gëtt e laang geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">ä</span> virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';
			break;
			case 'A-ÄÄ' : thecontentbox="<h1>Buschtaf ää</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>gepr<span class=\"bold\">ää</span>gt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-atremaatrema');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ää</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ää</span> gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-ÄI' : thecontentbox="<h1>Buschtaf äi</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>st<span class=\"bold\">äi</span>pen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a-atremai');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu äi</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">äi</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'B' : thecontentbox="<h1><span class=\"bold\">b</span> vir oder an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">B</span>&#x200A;auer<br><span>Ka&#x200A;</span><span class=\"bold\">b</span><span>&#x200A;es</span><br><span class=\"bold\">b</span>&#x200A;aken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu b</h1>';
			thecontentrule+='<p class="rule check">Vir an an der Mëtt vum Wuert gëtt den <span class=\"bold\">b</span> mëll ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-B' : thecontentbox="<h1><span class=\"bold\">b</span> vir oder an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">B</span>&#x200A;auer<br><span>Ka&#x200A;</span><span class=\"bold\">b</span><span>&#x200A;es</span><br><span class=\"bold\">b</span>&#x200A;aken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu b</h1>';
			thecontentrule+='<p class="rule check">Vir an an der Mëtt vum Wuert gëtt den <span class=\"bold\">b</span> mëll ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-B2' : thecontentbox="<h1><span class=\"bold\">b</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Wa<span class=\"bold\">b</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-b');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -b</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">b</span> um Enn vun engem Wuert, gëtt en haart (d.h. wéi en <span class=\"bold\">p</span>) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert gëtt de Buschtaf nees mëll ausgeschwat: Wab &#10141; Waben.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-BB' : thecontentbox="<h1><span class=\"bold\">bb</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kra<span class=\"bold\">bb</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-bb');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -bb</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">bb</span> um Enn vun engem Wuert, gëtt en haart (d.h. wéi en <span class=\"bold\">p</span>) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert gëtt de Buschtaf nees mëll ausgeschwat: Krabb &#10141; Krabben.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-BB2' : thecontentbox="<h1><span class=\"bold\">bb</span> an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>kli<span class=\"bold\">bb</span>eren<br>Pra<span class=\"bold\">bb</span>eli</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-bb2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -bb-</h1>';
			thecontentrule+='<p class="rule check">An der Mëtt vum Wuert ass den <span class=\"bold\">bb</span> ëmmer mëll.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'C' : thecontentbox="<h1>Den <span class=\"bold\">C</span> um Ufank vum Wuert</h1><h2>Ausgeschwaat wei e K</h2><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">C</span>abinet<br><span class=\"bold\">C</span>abaret<br><span class=\"bold\">c</span>ool</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c');\">&nbsp;</p></div></div><h2>Ausgeschwaat wei en S</h2><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">C</span>ité<br><span class=\"bold\">C</span>ent</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu c</h1>';
			thecontentrule+='<p class="rule check">A frieme Wierder gëtt den <span class=\"bold\">c</span> am Ufank vum Wuert wéi en <span class=\"bold\">k</span> ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Kënnt nom <span class=\"bold\">c</span> en <span class=\"bold\">i</span> oder <span class=\"bold\">e</span>, gëtt den <span class=\"bold\">c</span> wéi en <span class=\"bold\">s</span> geschwat.</p>';
			thecontentrule+='<p class="rule check">A frieme Wierder gëtt den <span class=\"bold\">c</span> am Ufank vum Wuert wéi en <span class=\"bold\">s</span> ausgeschwat.</p>'; // C-C
			thecontentrule+='<h2>Remark</h2><p class="remark">Dëst gëllt just, wann nom <span class=\"bold\">c</span> en <span class=\"bold\">i</span> oder <span class=\"bold\">e</span> kënnt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'C-C':thecontentbox="<h1>Den <span class=\"bold\">c</span> um Ufank vum Wuert</h1><h2>Ausgeschwaat wei e <span class=\"bold\">k</span></h2><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">C</span>abinet<br><span class=\"bold\">C</span>abaret<br><span class=\"bold\">c</span>ool</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu <span class=\"bold\">c</span></h1>';
			thecontentrule+='<p class="rule check">A frieme Wierder gëtt den <span class=\"bold\">c</span> am Ufank vum Wuert wéi en <span class=\"bold\">k</span> ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Kënnt nom <span class=\"bold\">c</span> en <span class=\"bold\">i</span> oder <span class=\"bold\">e</span>, gëtt den <span class=\"bold\">c</span> wéi en <span class=\"bold\">s</span> geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'C-C2':thecontentbox="<h1>Den <span class=\"bold\">c</span> um Ufank vum Wuert</h1><h2>Ausgeschwaat wei en <span class=\"bold\">s</span></h2><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">C</span>ité<br><span class=\"bold\">C</span>ent</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu <span class=\"bold\">c</span></h1>';
			thecontentrule+='<p class="rule check">A frieme Wierder gëtt den <span class=\"bold\">c</span> am Ufank vum Wuert wéi en <span class=\"bold\">s</span> ausgeschwat.</p>'; // C-C
			thecontentrule+='<h2>Remark</h2><p class="remark">Dëst gëllt just, wann nom <span class=\"bold\">c</span> en <span class=\"bold\">i</span> oder <span class=\"bold\">e</span> kënnt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'C-CH' : thecontentbox="<h1>Den <span class=\"bold\">ch</span> an der Mëtt oder um Enn vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Bu<span class=\"bold\">ch</span><br>La<span class=\"bold\">ch<br></span>laa<span class=\"bold\">ch</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c-ch');\">&nbsp;</p></div></div><h1></h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Ki<span class=\"bold\">ch</span>el<span class=\"bold\">ch</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c-ch2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ch</h1>';
			thecontentrule+='<p class="rule check">No engem <span class=\"bold\">a</span>, <span class=\"bold\">o</span> oder <span class=\"bold\">u</span> gëtt den <span class=\"bold\">ch</span> an der Mëtt oder um Enn vum Wuert ëmmer d\'selwecht ausgeschwat.</p>';
			thecontentrule+='<p class="rule check">No engem <span class=\"bold\">i</span>, <span class=\"bold\">e</span>, <span class=\"bold\">ee</span> oder <span class=\"bold\">é</span> gëtt den <span class=\"bold\">ch</span> ëmmer d\'selwecht ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Lauschtert den Audio.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'C-CK' : thecontentbox="<h1>Den <span class=\"bold\">ck</span> an der Mëtt oder um Enn vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>zé<span class=\"bold\">ck</span>en<br>schmo<span class=\"bold\">ck</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c-ck');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ck</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ck</span> gëtt ëmmer wéi en <span class=\"bold\">k</span> ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'D' : thecontentbox="<h1>Den <span class=\"bold\">d</span> vir an an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">d</span>af<br><span class=\"bold\">D</span>rot<br>bero<span class=\"bold\">d</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu (-)d-</h1>';
			thecontentrule+='<p class="rule check">Vir an an der Mëtt vum Wuert gëtt den <span class=\"bold\">d</span> mëll ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-D' : thecontentbox="<h1>Den <span class=\"bold\">d</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Schue<span class=\"bold\">d</span><br>Gra<span class=\"bold\">d</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-d');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -d</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">d</span> um Enn vun engem Wuert, gëtt en haart (d.h. wéi en <span class=\"bold\">t</span>) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt den <span class=\"bold\">d</span> nees mëll ausgeschwat: Grad &#10141; Graden.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-DD' : thecontentbox="<h1>Den <span class=\"bold\">dd</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Schma<span class=\"bold\">dd</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-dd');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -dd</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">dd</span> um Enn vun engem Wuert, gëtt en haart (d.h. wéi en <span class=\"bold\">t</span>) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt den <span class=\"bold\">dd</span> nees mëll ausgeschwat: Lidd &#10141; Lidder.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-DD2' : thecontentbox="<h1><span class=\"bold\">dd</span> an der Mëtt vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Klu<span class=\"bold\">dd</span>er<br>fi<span class=\"bold\">dd</span>eren<br>kri<span class=\"bold\">dd</span>elen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-dd2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -dd-</h1>';
			thecontentrule+='<p class="rule check">An der Mëtt vum Wuert ass den <span class=\"bold\">dd</span> ëmmer mëll.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'E' : thecontentbox="<h1>Den kuerzen <span class=\"bold\">e</span></h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>P<span class=\"bold\">e</span>ch<br>fr<span class=\"bold\">e</span>ch<br>k<span class=\"bold\">e</span>ng<br>Str<span class=\"bold\">e</span>nz</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e');\">&nbsp;</p></div></div><h1>Den laangen <span class=\"bold\">e</span></h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Athl<span class=\"bold\">e</span>t<br>Alphab<span class=\"bold\">e</span>t<br>M<span class=\"bold\">e</span>ter</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>kuerzen e</h1><p class="rule check">Den <span class=\"bold\">e</span> gëtt kuerz geschwat a kritt keen extrat Zeechen.</p>';
			thecontentrule+='<h1>laangen e</h1><p class="rule check">Den <span class=\"bold\">e</span> gëtt laang geschwat, awer just <span class=\"bold\">e</span> geschriwwen.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op <a href=\"http://ortho.lod.lu\" class=\"lodlink\" onclick=\"javascript:openpage(\'ortho.lod.lu\')\">ortho.lod.lu</a> fannt Dir méi Informatiounen iwwert d‘Schreifweis vum <span class=\"bold\">e</span> an iwwert d‘Friemwierder.</p>';
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'E-EE' : thecontentbox="<h1>Buschtaf ee</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Str<span class=\"bold\">ee</span>ch<br>n<span class=\"bold\">ee</span><br>R<span class=\"bold\">ee</span>n<br>Billj<span class=\"bold\">ee</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ee</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ee</span> gëtt ëmmer laang geschwat.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-Ë' : thecontentbox="<h1>Buschtaf ë</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>P<span class=\"bold\">ë</span>ll<br>M<span class=\"bold\">ë</span>scht<br>D<span class=\"bold\">ë</span>ppen<br>T<span class=\"bold\">ë</span>lee<br>M<span class=\"bold\">ë</span>llech</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-etrema');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ë</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ë</span> gëtt kuerz geschwat an dierf am Prinzip just an enger betounter Silb stoen.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">D‘Wierder <span class=\"bold\">mech</span>, <span class=\"bold\">dech</span>, <span class=\"bold\">sech</span> an <span class=\"bold\">net</span> kréie keen <span class=\"bold\">ë</span>, och wann se d‘selwecht kléngen.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-Ë2' : thecontentbox="<h1>Buschtaf (e)ë(e)</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>See<span class=\"bold\">ë</span>rei<br>Ee<span class=\"bold\">ë</span>r<br>g<span class=\"bold\">ë</span>eenegt<br>ag<span class=\"bold\">ë</span>engt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-etrema2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ë</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ë</span> gëtt agesat, wann zwee oder dräi <span class=\"bold\">e</span>en hannereneestinn, déi ënnerschiddlech geschwat ginn, wéi bei Ee → Eeër.</p>';

			result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-É' : thecontentbox="<h1>Buschtaf é</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>P<span class=\"bold\">é</span>ng<br>m<span class=\"bold\">é</span>cht<br>B<span class=\"bold\">é</span>chs<br>St<span class=\"bold\">é</span>ck<br>f<span class=\"bold\">é</span>x</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-egu');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel é</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">é</span>, dee kuerz geschwat gëtt, steet an der Mëtt vum Wuert virun <span class=\"bold\">ng</span>, <span class=\"bold\">nk</span>, <span class=\"bold\">ck</span>, <span class=\"bold\">ch</span>, <span class=\"bold\">chs</span> an <span class=\"bold\">x</span>.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">D‘Wierder <span class=\"bold\">meng</span>, <span class=\"bold\">deng</span>, <span class=\"bold\">seng</span> kréie keen <span class=\"bold\">é</span>, och wann se d‘selwecht kléngen.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-É2' : thecontentbox="<h1>Buschtaf é(e)</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Cit<span class=\"bold\">é</span><br>Lyc<span class=\"bold\">é</span>e<br>Mus<span class=\"bold\">é</span>e</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-egu2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel é</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">é(e)</span> um Enn vum Wuert ass laang an ëmmer aus dem Franséische geléint.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op <a href=\"http://ortho.lod.lu\" class=\"lodlink\" onclick=\"javascript:openpage(\'ortho.lod.lu\')\">ortho.lod.lu</a> fannt Dir méi Informatiounen iwwert d‘Schreifweis vum <span class=\"bold\">é(e)</span> an iwwert d‘Friemwierder.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-È' : thecontentbox="<h1>Buschtaf è</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Minist<span class=\"bold\">è</span>re<br>Cr<span class=\"bold\">è</span>che</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-egrav');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel è</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">è</span> ass ëmmer aus dem Franséische geléint.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op <a href=\"http://ortho.lod.lu\" class=\"lodlink\" onclick=\"javascript:openpage(\'ortho.lod.lu\')\">ortho.lod.lu</a> fannt Dir méi Informatiounen iwwert d‘Schreifweis vum <span class=\"bold\">è</span> an iwwert d‘Friemwierder.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
				case 'E-IE' : thecontentbox="<h1>Buschtaf ie</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Sch<span class=\"bold\">ie</span>t<br>b<span class=\"bold\">ie</span>den</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ie');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ie</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ie</span> ass eng Vokalkoppel a kann net getrennt ginn. Den <span class=\"bold\">e</span> kritt keen Trema.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
				case 'E-UE' : thecontentbox="<h1>Buschtaf ue</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>B<span class=\"bold\">ue</span>dem<br><span class=\"bold\">Ue</span>cht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ue');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ue</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ue</span> ass eng Vokalkoppel a kann net getrennt ginn. Den <span class=\"bold\">e</span> kritt keen Trema.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-IER' : thecontentbox="<h1>Buschtaf ier</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>H<span class=\"bold\">ier</span>scht<br>K<span class=\"bold\">ier</span>ch</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ier');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ier</h1>';
			thecontentrule+='<p class="rule check">Och wann een den <span class=\"bold\">r</span> net héiert, gëtt <span class=\"bold\">ier</span> geschriwwen, wann d\'Wuert aus dem Däitschen ofgeleet ass an do och en <span class=\"bold\">r</span> huet.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op <a href=\"http://ortho.lod.lu\" class=\"lodlink\" onclick=\"javascript:openpage(\'ortho.lod.lu\')\">ortho.lod.lu</a> fannt Dir méi Informatiounen iwwert d‘Schreifweis vum <span class=\"bold\">ir</span>.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-UER' : thecontentbox="<h1>Buschtaf uer</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>St<span class=\"bold\">uer</span>m<br>d<span class=\"bold\">uer</span>ch</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-uer');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel uer</h1>';
			thecontentrule+='<p class="rule check">Och wann een den <span class=\"bold\">r</span> net héiert, gëtt <span class=\"bold\">uer</span> geschriwwen, wann d\'Wuert aus dem Däitschen ofgeleet ass an do och en <span class=\"bold\">r</span> huet.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op <a href=\"http://ortho.lod.lu\" class=\"lodlink\" onclick=\"javascript:openpage(\'ortho.lod.lu\')\">ortho.lod.lu</a> fannt Dir méi Informatiounen iwwert d‘Schreifweis vum <span class=\"bold\">ur</span>.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-ÄER' : thecontentbox="<h1>Buschtaf äer</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">Äer</span>d<br>K<span class=\"bold\">äer</span>z<br>St<span class=\"bold\">äer</span>kt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-atremaer');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel äer</h1>';
			thecontentrule+='<p class="rule check">Bei <span class=\"bold\">äer</span> kënnt ëmmer en <span class=\"bold\">e</span> tëschent den <span class=\"bold\">ä</span> an den <span class=\"bold\">r</span>, wann hannert dem <span class=\"bold\">r</span> nach op d’mannst ee weidere Konsonant steet.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Op <a href=\"http://ortho.lod.lu\" class=\"lodlink\" onclick=\"javascript:openpage(\'ortho.lod.lu\')\">ortho.lod.lu</a> fannt Dir méi Informatiounen iwwert d‘Schreifweis vum <span class=\"bold\">är</span>.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-ÉI' : thecontentbox="<h1>Buschtaf éi</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Schn<span class=\"bold\">éi</span><br>s<span class=\"bold\">éi</span>er<br>K<span class=\"bold\">éi</span>s<br>Bl<span class=\"bold\">éi</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-egui');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel éi</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">éi</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-EI' : thecontentbox="<h1>Buschtaf ei</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>G<span class=\"bold\">ei</span><br>R<span class=\"bold\">ei</span><br>bl<span class=\"bold\">ei</span>wen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ei');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ei</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ei</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-EU' : thecontentbox="<h1>Buschtaf eu</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">Eu</span>ropa</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-eu');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel eu</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">eu</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'F' : thecontentbox="<h1>Buschtaf F</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">f</span>äerten<br>schlo<span class=\"bold\">f</span>en<br>A<span class=\"bold\">f</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('f');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu f</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">f</span> gëtt ëmmer d’selwecht ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'F-FF' : thecontentbox="<h1>Buschtaf F</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Beru<span class=\"bold\">ff</span><br>A<span class=\"bold\">ff</span>iche<br>Ha<span class=\"bold\">ff</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('f-ff');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu ff</h1>';
				thecontentrule+='<p class="rule check">Den <span class=\"bold\">ff</span> gëtt ëmmer d\'selwecht ausgeschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">De Vokal virum <span class=\"bold\">ff</span> gëtt ëmmer kuerz ausgeschwat.</p>';				
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'G' : thecontentbox="<h1>Buschtaf G</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">G</span>ittar<br>Fri<span class=\"bold\">g</span>o</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu (-)g-</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">g</span> gëtt am Ufank an an der Mëtt vum Wuert mëll ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'G-G' : thecontentbox="<h1>Buschtaf -g an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Spi<span class=\"bold\">g</span>el<br>I<span class=\"bold\">g</span>el</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -g-</h1>';
				thecontentrule+='<p class="rule check">Den <span class=\"bold\">g</span> gëtt an der Mëtt vum Wuert wéi e mëllen <span class=\"bold\">ch</span> ausgeschwat.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G2' : thecontentbox="<h1>Buschtaf -g um Enn vun engem Wuert an wei en k ausgeschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>va<span class=\"bold\">g</span><br>Fi<span class=\"bold\">g</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g2');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -g</h1>';
				thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">g</span> um Enn vun engem Wuert, gëtt e meeschtens haart (d.h. wéi en <span class=\"bold\">k</span>) ausgeschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt de Buschtaf nees mëll ausgeschwat: Fig &#10141; Figen.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G3' : thecontentbox="<h1>Buschtaf -g um Enn vun engem Wuert an wei en ch ausgeschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Belee<span class=\"bold\">g</span><br>Bier<span class=\"bold\">g</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g3');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -g</h1>';
				thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">g</span> um Enn vun engem Wuert, gëtt en wéi en <span class=\"bold\">ch</span> ausgeschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt den <span class=\"bold\">g</span> wéi e mëllen <span class=\"bold\">ch</span> ausgeschwat: Bierg &#10141; Bierger.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G4' : thecontentbox="<h1>Buschtaf -g um Enn vun engem Wuert an hannen an der Strass geschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>La<span class=\"bold\">g</span><br>Da<span class=\"bold\">g</span><br>klu<span class=\"bold\">g</span><br>Katalo<span class=\"bold\">g</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g4');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -g</h1>';
				thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">g</span> um Enn vun engem Wuert, gëtt en hannen an der Strass geschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">Dëst gëllt just, wa virdrun en <span class=\"bold\">a</span>, <span class=\"bold\">o</span> oder <span class=\"bold\">u</span> steet.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-GG' : thecontentbox="<h1>Buschtaf gg an der Mëtt vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Wa<span class=\"bold\">gg</span>on<br>Ba<span class=\"bold\">gg</span>er</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-gg');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -gg-</h1>';
				thecontentrule+='<p class="rule check">Den <span class=\"bold\">gg</span> gëtt an der Mëtt vum Wuert mëll ausgeschwat.</p>';
				thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">gg</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';				
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-NG' : thecontentbox="<h1>Buschtaf -ng</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zeitu<span class=\"bold\">ng</span><br>gelé<span class=\"bold\">ng</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-ng');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -ng(-)</h1>';
				thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">ng</span> gëtt wéi ee Laut gelies a kann net getrennt ginn.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-NK' : thecontentbox="<h1>Buschtaf -nk</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>de<span class=\"bold\">nk</span>en<br>Ga<span class=\"bold\">nk</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-nk');\">&nbsp;</p></div></div>";
				thecontentrule='<h1>Regel zu -nk(-)</h1>';
				thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">nk</span> gëtt gelies wéi <span class=\"bold\">ng</span> an <span class=\"bold\">k</span> hannerteneen a kann net getrennt ginn.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'H' : thecontentbox="<h1>Buschtaf H</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">H</span>oer<br>be<span class=\"bold\">h</span>uelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('h');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu h</h1>';
			if(direct) { subselector=false; }
			thecontentrule+='<p class="rule check">Vir an an der Mëtt vum Wuert gëtt den <span class=\"bold\">h</span> als Hauchlaut geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Den <span class=\"bold\">h</span> gëtt am Lëtzebuergeschen net benotzt, fir e Vokal méi laang ze maachen: Drot.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'I' : thecontentbox="<h1>Buschtaf i virun engem Konsonant</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Z<span class=\"bold\">i</span>l<br>n<span class=\"bold\">i</span>mols</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i');\">&nbsp;</p></div></div><h1>Buschtaf i virun zwee oder méi Konsonanten</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>d<span class=\"bold\">i</span>cht<br><span class=\"bold\">I</span>nsel<br>Sp<span class=\"bold\">i</span>ll</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu i</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">i</span> viru just engem Konsonant, gëtt e laang geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">i</span> virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Den <span class=\"bold\">ie</span> gëtt am Lëtzebuergeschen net benotzt, fir den <span class=\"bold\">i</span> méi laang ze maachen.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'I-IE' : thecontentbox="<h1>Buschtaf ie</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>fr<span class=\"bold\">ie</span>m<br>H<span class=\"bold\">ie</span>wel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i-ie');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ie</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ie</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'I-II' : thecontentbox="<h1>Buschtaf ii</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>K<span class=\"bold\">ii</span>scht<br>B<span class=\"bold\">ii</span>scht<br>T<span class=\"bold\">ii</span>tchen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i-ii');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ii</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ii</span> gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'J' : thecontentbox="<h1>Buschtaf J</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">J</span>ackett<br>Pi<span class=\"bold\">j</span>en<br><span class=\"bold\">j</span>iipsen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('j');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu (-)j</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">j</span> gëtt wéi e Konsonant ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Eng Schreiwung mat <span class=\"bold\">jh</span> gëtt et am Lëtzebuergeschen net.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'J-J' : thecontentbox="<h1>Buschtaf J</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">J</span>oer<br><span class=\"bold\">J</span>ughurt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('j-j');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu j</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">j</span> gëtt wéi en <span class=\"bold\">i</span> ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'K' : thecontentbox="<h1>Buschtaf K</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">K</span>innek<br><span class=\"bold\">K</span>lass</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('k');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu (-)k(-)</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">k</span> gëtt ëmmer d’selwecht ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'K-CK' : thecontentbox="<h1>Buschtaf ck</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Za<span class=\"bold\">ck</span><br>ku<span class=\"bold\">ck</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('k-ck');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -ck(-)</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ck</span> gëtt an der Mëtt an um Enn vum Wuert haart ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">ck</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'L' : thecontentbox="<h1>Buschtaf L</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">l</span>aachen<br>ka<span class=\"bold\">l</span><br>mo<span class=\"bold\">l</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('l');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu l</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">l</span> gëtt ëmmer d\'selwecht geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'L-LL' : thecontentbox="<h1>Buschtaf ll</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>fo<span class=\"bold\">ll</span>egen<br>Ma<span class=\"bold\">ll</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('l-ll');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -ll(-)</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">l</span> gëtt ëmmer d\'selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">ll</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'M' : thecontentbox="<h1>Buschtaf M</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Dra<span class=\"bold\">m</span><br><span class=\"bold\">M</span>ëllech</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('m');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu m</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">m</span> gëtt ëmmer d\'selwecht geschwat.</p>';		
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'M-MM' : thecontentbox="<h1>Buschtaf mm</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>kla<span class=\"bold\">mm</span>en<br>Ma<span class=\"bold\">mm</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('m-mm');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -mm(-)</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">mm</span> gëtt ëmmer d\'selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">mm</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';	
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'N' : thecontentbox="<h1>Buschtaf N</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">n</span>äischt<br>rose<span class=\"bold\">n</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu n</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">n</span> gëtt ëmmer d‘selwecht geschwat.</p>';
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-NN' : thecontentbox="<h1>Buschtaf nn</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Ka<span class=\"bold\">nn</span>er<br>dë<span class=\"bold\">nn</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-nn');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu nn</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">nn</span> gëtt ëmmer d‘selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">nn</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-N' : thecontentbox="<h1>(n) * fällt ewech</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Dammeschong</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-n');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (n) * fält ewech</h1>';
			thecontentrule+='<p class="rule check">Wann den <span class=\"bold\">n</span> viru verschiddenen Ufanksbuschtawen net geschwat gëtt, da gëtt en och net geschriwwen. Dat gëllt och bei zesummegesate Wierder.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-N2' : thecontentbox="<h1>(n) * bleift stoën</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>äre<span class=\"bold\">n</span> Auto<br>Grompere<span class=\"bold\">n</span>zalot</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-n2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (n) * bleift stoen</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">n</span> bleift stoe virun all de Vokalen <span class=\"bold\">a, e, i, o, u, ä, ë, é, ö, ü,(y)</span> a virun de Konsonanten: <span class=\"bold\">d, h, n, t, z</span>. Den <span class=\"bold\">n</span> bleift och stoen um Enn vun Eegennimm a virun engem Sazzeechen <span class=\"bold\">. , ; : )</span>.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'O' : thecontentbox="<h1>Buschtaf O</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>kr<span class=\"bold\">o</span>mm</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o');\">&nbsp;</p></div></div><h1>Buschtaf O</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Dr<span class=\"bold\">o</span>t<br>schl<span class=\"bold\">o</span>fen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu o</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">o</span> virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">o</span> viru just engem Konsonant, gëtt e laang geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-OO' : thecontentbox="<h1>Buschtaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>gekr<span class=\"bold\">oo</span>mt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-oo');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu oo</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">oo</span> gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-OU' : thecontentbox="<h1>Buschtaf ou</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>s<span class=\"bold\">ou</span>eren<br>w<span class=\"bold\">ou</span><br>K<span class=\"bold\">ou</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-ou');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ou</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ou</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-Ö' : thecontentbox="<h1>Buschtaf ö</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>bl<span class=\"bold\">ö</span>d<br>F<span class=\"bold\">ö</span>n</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-otrema');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ö</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">ö</span> viru just engem Konsonant, gëtt e laang geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-ÖÖ' : thecontentbox="<h1>Buschtaf öö</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>gef<span class=\"bold\">öö</span>nt<br>bl<span class=\"bold\">öö</span>dsten</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-otremaotrema');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu öö</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">öö</span> gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'P' : thecontentbox="<h1>Buschtaf P</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Tra<span class=\"bold\">p</span><br><span class=\"bold\">P</span>oul<br>kla<span class=\"bold\">p</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu (-)p(-)</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">p</span> gëtt ëmmer d‘selwecht geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'P-PP' : thecontentbox="<h1>Buschtaf pp</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zo<span class=\"bold\">pp</span><br>kla<span class=\"bold\">pp</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p-pp');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu pp</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">pp</span> gëtt ëmmer d‘selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">pp</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'P-PF' : thecontentbox="<h1>Buschtaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zi<span class=\"bold\">pf</span>elmutz<br><span class=\"bold\">Pf</span>licht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p-pf');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (-)pf-</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">pf</span> gëtt wéi <span class=\"bold\">p</span> an <span class=\"bold\">f</span> geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Q' : thecontentbox="<h1>Buschtaf Q</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">q</span>ueesch<br><span class=\"bold\">q</span>uaken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('q');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu qu-</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">qu</span> gëtt wéi <span class=\"bold\">k</span> an <span class=\"bold\">u</span> geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'R' : thecontentbox="<h1>Buschtaf R</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">r</span>ichteg<br>K<span class=\"bold\">r</span>aaft<br><span class=\"bold\">r</span>aschten</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu r</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">r</span> gëtt am Ufank an an der Mëtt vum Wuert an der Strass geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Lauschtert den Audio.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-R' : thecontentbox="<h1>Buschtaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Stä<span class=\"bold\">r</span><br>Bie<span class=\"bold\">r</span><br>Kanne<span class=\"bold\">r</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-r');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -r</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">r</span> gëtt no engem Vokal um Enn vun engem Wuert wéi e Vokal geschwat.</p>';		
			thecontentrule+='<h2>Remark</h2><p class="remark">Dësen <span class=\"bold\">r</span> gëtt net ëmmer d‘selwecht ausgeschwat.</p>';				
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-R2' : thecontentbox="<h1>Buschtaf -r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Hie<span class=\"bold\">r</span>scht<br>Wie<span class=\"bold\">r</span>der<br>Wue<span class=\"bold\">r</span>t</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-r2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -r-</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">r</span> gëtt geschriwwen, mee net geschwat.</p>';		
			thecontentrule+='<h2>Remark</h2><p class="remark">Dësen <span class=\"bold\">r</span> gëtt geschriwwen, wann dat däitscht Parallelwuert och en <span class=\"bold\">r</span> huet: <span class=\"bold\">Wierder</span> (Wörter), awer <span class=\"bold\">Wieder</span> (Wetter).</p>';	
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-RR' : thecontentbox="<h1>Buschtaf -rr-</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Te<span class=\"bold\">rr</span>ain<br>Ba<span class=\"bold\">rr</span>ikaden<br>Fu<span class=\"bold\">rr</span>i</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-rr');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -rr-</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">rr</span> gëtt an der Mëtt vum Wuert wéi en <span class=\"bold\">r</span> geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'S' : thecontentbox="<h1>Buschtaf S</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">S</span>aachen<br><span class=\"bold\">S</span>aier<br>Kee<span class=\"bold\">s</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s');\">&nbsp;</p></div></div><h1>Buschtaf S</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">s</span>uper<br><span class=\"bold\">S</span>ilvester</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu s</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">s</span> gëtt am Ufank an an der Mëtt vum Wuert mëll geschwat.</p>';			
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">s</span> gëtt am Ufank vum Wuert schaarf ausgeschwat.</p>';	
			thecontentrule+='<h2>Remark</h2><p class="remark">Dësen <span class=\"bold\">s</span> kann am Ufank vum Wuert och mëll ausgeschwat ginn.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-S' : thecontentbox="<h1>Buschtaf s</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Ree<span class=\"bold\">s</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-s');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -s</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">s</span> um Enn vun engem Wuert, gëtt en haart (d.h. wéi <span class=\"bold\">ss</span>) ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt de Buschtaf nees mëll ausgeschwat: Rees &#10141; Reesen.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-ST' : thecontentbox="<h1>Buschtaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kü<span class=\"bold\">st</span><br>ba<span class=\"bold\">st</span>elen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-st');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -st(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">st</span> gëtt an der Mëtt an um Enn vum Wuert wéi en <span class=\"bold\">s</span> an en <span class=\"bold\">t</span> geschwat a kann net getrennt ginn.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-ST2' : thecontentbox="<h1>Buschtaf st-</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">st</span>aark<br><span class=\"bold\">St</span>iwwel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-st2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu st-</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">st</span> gëtt am Ufank vum Wuert wéi en <span class=\"bold\">sch</span> an en <span class=\"bold\">t</span> geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SP' : thecontentbox="<h1>Buschtaf -sp-</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kno<span class=\"bold\">sp</span><br>Re<span class=\"bold\">sp</span>ekt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sp');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -sp(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">sp</span> gëtt an der Mëtt an um Enn vum Wuert wéi en <span class=\"bold\">s</span> an en <span class=\"bold\">p</span> geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SP2' : thecontentbox="<h1>Buschtaf sp-</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">sp</span>äizen<br><span class=\"bold\">Sp</span>eck</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sp2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu sp-</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">sp</span> gëtt am Ufank vum Wuert wéi en <span class=\"bold\">sch</span> an en <span class=\"bold\">p</span> geschwat a kann net getrennt ginn.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SCH' : thecontentbox="<h1>Buschtaf sch</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kë<span class=\"bold\">sch</span>t<br><span class=\"bold\">sch</span>éin<br>ra<span class=\"bold\">sch</span>elen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sch');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu (-)sch(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">sch</span> gëtt wéi ee Laut geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SS' : thecontentbox="<h1>Buschtaf -ss</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zoo<span class=\"bold\">ss</span><br>duu<span class=\"bold\">ss</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-ss');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -ss(-)</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ss</span> gëtt ëmmer da benotzt, wann et en däitscht Parallelwuert mat <span class=\"bold\">ss</span>, <span class=\"bold\">chs</span>, <span class=\"bold\">z</span> oder <span class=\"bold\">ß</span> gëtt.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Den <span class=\"bold\">ß</span> gëtt et am Lëtzebuergeschen net.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'T' : thecontentbox="<h1>Buschtaf T</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Bla<span class=\"bold\">t</span><br><span class=\"bold\">T</span>rap</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('t');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu t</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">t</span> gëtt ëmmer d‘selwecht geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'T-TZ' : thecontentbox="<h1>Buschtaf tz</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>bo<span class=\"bold\">tz</span>en<br>fa<span class=\"bold\">tz</span>eg<br>Da<span class=\"bold\">tz</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('t-tz');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -tz(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">tz</span> gëtt an der Mëtt an um Enn vum Wuert wéi <span class=\"bold\">t</span> an <span class=\"bold\">s</span> geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">tz</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'T-TT' : thecontentbox="<h1>Buschtaf tt</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Ke<span class=\"bold\">tt</span>en<br>pla<span class=\"bold\">tt</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('t-tt');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu tt</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">tt</span> gëtt ëmmer d‘selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">tt</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'U' : thecontentbox="<h1>Buschtaf U</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>N<span class=\"bold\">u</span>mmer<br>B<span class=\"bold\">u</span>schtaf</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u');\">&nbsp;</p></div></div><h1>Buschtaf U</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>T<span class=\"bold\">u</span>ba<br>T<span class=\"bold\">u</span>t</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu u</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">u</span> virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';			
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">u</span> viru just engem Konsonant, gëtt e laang geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-UU' : thecontentbox="<h1>Buschtaf uu</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>D<span class=\"bold\">uu</span>scht<br>d<span class=\"bold\">uu</span>ss</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-uu');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu uu</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">uu</span> gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-UE' : thecontentbox="<h1>Buschtaf ue</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>H<span class=\"bold\">ue</span>s<br>K<span class=\"bold\">ue</span>l</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ue');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ue</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ue</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-OU' : thecontentbox="<h1>Buschtaf ou</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Informati<span class=\"bold\">ou</span>n<br>B<span class=\"bold\">ou</span>n<br>z<span class=\"bold\">ou</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ou');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ou</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ou</span> ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-Ü' : thecontentbox="<h1>Buschtaf ü</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Trib<span class=\"bold\">ü</span>n<br>af<span class=\"bold\">ü</span>gen<br>K<span class=\"bold\">ü</span>b</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-utrema');\">&nbsp;</p></div></div><h1>Buschtaf ü</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>K<span class=\"bold\">ü</span>st<br>L<span class=\"bold\">ü</span>ster<br>Ger<span class=\"bold\">ü</span>cht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-utrema2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ü</h1>';
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">ü</span> viru just engem Konsonant, gëtt e laang geschwat.</p>';		
			thecontentrule+='<p class="rule check">Steet den <span class=\"bold\">ü</span> virun zwee oder méi Konsonanten, gëtt e kuerz geschwat.</p>';		
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-ÜÜ' : thecontentbox="<h1>Buschtaf üü</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>ge<span class=\"bold\">üü</span>bt<br>agef<span class=\"bold\">üü</span>gt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-utremautrema');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu üü</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">üü</span> gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'V' : thecontentbox="<h1>Buschtaf V</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">V</span>illchen<br><span class=\"bold\">v</span>erléieren<br><span class=\"bold\">v</span>iischt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('v');\">&nbsp;</p></div></div><h1>Buschtaf V</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">V</span>anill<br><span class=\"bold\">V</span>as<br><span class=\"bold\">V</span>akanz<br><span class=\"bold\">V</span>ott<br>Re<span class=\"bold\">v</span>isioun</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('v2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu v</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">v</span> gëtt am Ufank vum Wuert wéi en <span class=\"bold\">f</span> ausgeschwat.</p>';			
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">v</span> gëtt am Ufank an an der Mëtt vum Wuert wéi en <span class=\"bold\">w</span> ausgeschwat.</p>';		
			thecontentrule+='<h2>Remark</h2><p class="remark">Op <a href=\"http://ortho.lod.lu\" class=\"lodlink\" onclick=\"javascript:openpage(\'ortho.lod.lu\')\">ortho.lod.lu</a> fannt Dir méi Informatiounen iwwert d‘Schreifweis vun de Friemwierder.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'V-V' : thecontentbox="<h1>Buschtaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>bra<span class=\"bold\">v</span><br>Oli<span class=\"bold\">v</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w-ww');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -v</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">v</span> gëtt um Enn vum Wuert wéi en <span class=\"bold\">f</span> ausgeschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Gëtt dat Wuert verlängert, gëtt de Buschtaf nees mëll ausgeschwat: Oliv &#10141; Oliven.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'W' : thecontentbox="<h1>Buschtaf W</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">w</span>aarm<br><span class=\"bold\">w</span>ibbelen<br>a<span class=\"bold\">w</span>er<br>Léi<span class=\"bold\">w</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu w</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">w</span> gëtt ëmmer d‘selwecht geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'W-WW' : thecontentbox="<h1>Buschtaf ww</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Mi<span class=\"bold\">ww</span>el<br>kni<span class=\"bold\">ww</span>elen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w-ww');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu -ww-</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">ww</span> gëtt ëmmer d‘selwecht geschwat.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">Virun <span class=\"bold\">ww</span> gëtt de Vokal virdru kuerz ausgeschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'X' : thecontentbox="<h1>Buschtaf X</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Mi<span class=\"bold\">x</span>er<br>He<span class=\"bold\">x</span><br><span class=\"bold\">X</span>ylophon</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('x');\">&nbsp;</p></div></div>";
		if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu x</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">x</span> gëtt wéi <span class=\"bold\">k</span> an <span class=\"bold\">s</span> geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Y' : thecontentbox="<h1>Buschtaf Y</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>trend<span class=\"bold\">y</span><br>Ps<span class=\"bold\">y</span>chologie</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('y');\">&nbsp;</p></div></div>";
		if(direct) { subselector=false; }	
			thecontentrule='<h1>Regel zu y</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">y</span> gëtt wéi en <span class=\"bold\">i</span> geschwat.</p>';			
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Z' : thecontentbox="<h1>Buschtaf Z</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Ka<span class=\"bold\">z</span><br><span class=\"bold\">Z</span>alot<br>ver<span class=\"bold\">z</span>ielen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('z');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			if(direct) { subselector=false; }
			thecontentrule='<h1>Regel zu z</h1>';
			thecontentrule+='<p class="rule check">Den <span class=\"bold\">z</span> gëtt wéi <span class=\"bold\">t</span> an <span class=\"bold\">s</span> geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'Z-TZ' : thecontentbox="<h1>Buschtaf tz</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>mo<span class=\"bold\">tz</span>en<br>Da<span class=\"bold\">tz</span><br>Wi<span class=\"bold\">tz</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('z-tz');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zum -tz(-)</h1>';
			thecontentrule+='<p class="rule check">De Konsonantegrupp <span class=\"bold\">tz</span> gëtt an der Mëtt an um Enn vum Wuert wéi <span class=\"bold\">t</span> an <span class=\"bold\">s</span> geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		default : thecontentbox="<h1>Lëtzebuergesch<br />fir an d'Boxentäsch</h1><h2>Dréck op e Buschtaf, fir déi entspriechend Wierder souwéi och d'Regele gewisen ze kréien.</h2>";
			thecontentrule='<h1>Eng Zesummenaarbecht vun</h1><h2>Autisme Luxembourg a.s.b.l.</h2><h2>Lëtzebuerger Online Dictionnaire</h2><img src="css/res/KonterbontLogo_Cover-02.png" class="logokonterbont">';
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
		mySwiperSub.removeAllSlides();
		$$('#swiper-sub').addClass('hidesub');
	}
}

function jumpsel(jp,hs,subsel,cont)
{
	result=cont.charCodeAt(0)+' '+cont;
	//console.log(subsel);
	if(!(subsel)){$$('#swiper-sub').addClass('hidesub');}
	jumpto(jp,hs,subsel);
	return result;
}