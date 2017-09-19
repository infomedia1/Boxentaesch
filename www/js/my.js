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
					}, function (err) { alert('Audio Error: '+err); $$('#audioplayer').addClass('no-player'); }
				);
	my_media.play();
}

function initSubselector(hash)
{
	// console.log('subselector toggled on!');
	var jumppoint=0;
	if((oldhash!==hash[0]) || (oldhash==hash))
	{
		mySwiperSub.removeAllSlides();
		oldhash='';
		console.log('remove all slides');
	}
	// console.log('1 oldhash: '+oldhash+' hash: '+hash);
	var newslides=[];
	var setoldhash;
	switch (hash[0])
	{
	case 'A': 
	// console.log('E');
			newslides=	['<div class="swiper-slide" onclick="getContent(\'A-AA\');"><span>aa</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-AI\');"><span>ai</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-AU\');"><span>au</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-Ä\');"><span>ä</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-ÄÄ\');"><span>ää</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'A-ÄI\');"><span>äi</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'A-AA': jumppoint=0; break;
			case 'A-AI': jumppoint=1; break;
			case 'A-AU': jumppoint=2; break;
			case 'A-Ä': jumppoint=3; break;
			case 'A-ÄÄ': jumppoint=4; break;
			case 'A-ÄI': jumppoint=5; break;
		}
		break;
		case 'B': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'B-B\');"><span>&#8722;b</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'B-BB\');"><span>&#8722;bb</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'B-BB2\');"><span>&#8722;bb&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'B-B': jumppoint=0; break;
			case 'B-BB': jumppoint=1; break;
			case 'B-BB2': jumppoint=2; break;
		}
		break;
		case 'C': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'C-CH\');"><span>&#8722;ch</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'C-CK\');"><span>&#8722;ck</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'C-CH': jumppoint=0; break;
			case 'C-CK': jumppoint=1; break;
		}
		break;
		case 'D': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'D-D\');"><span>&#8722;d</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'D-DD\');"><span>&#8722;dd</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'D-DD2\');"><span>&#8722;dd&#8722;</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'D-D': jumppoint=0; break;
			case 'D-DD': jumppoint=1; break;
			case 'D-DD2': jumppoint=2; break;
		}
		break;
	case 'E': 
	// console.log('E');
			newslides=	['<div class="swiper-slide" onclick="getContent(\'E-EE\');"><span>ee</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-Ë\');"><span>ë</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-É\');"><span>é</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-É2\');"><span>&#8722;é(e)</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-È\');"><span>è</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'E-EU\');"><span>eu</span></div>',
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
			case 'E-É2': jumppoint=3; break;
			case 'E-È': jumppoint=4; break;
			case 'E-EU': jumppoint=5; break;
			case 'E-IE': jumppoint=6; break;
			case 'E-UER': jumppoint=7; break;
			case 'E-IR': jumppoint=8; break;
			case 'E-ÄR': jumppoint=9; break;
			case 'E-ÉI': jumppoint=10; break;
			case 'E-EI': jumppoint=11; break;
			case 'E-AI': jumppoint=12; break;
		}
		break;
	case 'F': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'F-FF\');"><span>ff</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'F-FF': jumppoint=0; break;
		}
		break;
	case 'G': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'G-G\');"><span>&#8722;g&#8722;</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G2\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G3\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-G4\');"><span>&#8722;g</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-GG\');"><span>&#8722;gg</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-NG\');"><span>&#8722;ng</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'G-NK\');"><span>&#8722;nk</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'G-G': jumppoint=0; break;
			case 'G-G2': jumppoint=1; break;
			case 'G-G3': jumppoint=2; break;
			case 'G-G4': jumppoint=3; break;
			case 'G-GG': jumppoint=4; break;
			case 'G-NG': jumppoint=5; break;
			case 'G-NK': jumppoint=6; break;
		}
		break;
		case 'I': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'I-IE\');"><span>ie</span></div>',
						'<div class="swiper-slide" onclick="getContent(\'I-II\');"><span>ii</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'I-IE': jumppoint=0; break;
			case 'I-II': jumppoint=1; break;
		}
		break;
		
		case 'Z': 
			newslides=	['<div class="swiper-slide" onclick="getContent(\'Z-TZ\');"><span>-tz</span></div>'];
						setoldhash=hash[0];
		switch(hash)
		{
			case 'Z-TZ': jumppoint=0; break;
		}
		break;
	}
	console.log('2 oldhash: '+oldhash+' hash: '+hash);
	if((oldhash!==hash[0]) || (oldhash==hash))
	{
		mySwiperSub.appendSlide(newslides);
		// $$('#swiper-sub').addClass('showsub');
		$$('#swiper-sub').removeClass('hidesub');
		console.log('Hidesub removed');
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
		case 'A' : thecontentbox="<h1>Buchstaaf A</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>B<span class=\"bold\">a</span>m<br>erk<span class=\"bold\">a</span>len<br><span class=\"bold\">A</span>f</h2><h2>Pr<span class=\"bold\">a</span>bbeli<br>r<span class=\"bold\">a</span>schten<br><span class=\"bold\">A</span>ffekot</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('a');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			thecontentrule='<h1>Regel zu a</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;a&gt; viru engem Konsonant, gëtt e laang geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den &lt;a&gt; virun zwee oder méi Konsonanten, gëtt e kuerz geschwat</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AA' : thecontentbox="<h1>Buchstaaf aa</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>g<span class=\"bold\">aa</span>psen<br>schm<span class=\"bold\">aa</span>chen<br><span class=\"bold\">aa</span>chtmol</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu aa</h1>';
			thecontentrule+='<p class="rule check">Den &lt;aa&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AI' : thecontentbox="<h1>Buchstaaf ai</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>S<span class=\"bold\">ai</span>er<br>H<span class=\"bold\">ai</span>ser</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ai</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ai&gt; ass eng Vokalkoppel a kënnt da vir, wann d\'Wuert sch vun engem &lt;a&gt; ofleede léisst (am Däitschen oder am Lëtzebuergeschen): Saier (sauer, Haiser (Haus).</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-AU' : thecontentbox="<h1>Buchstaaf au</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>D<span class=\"bold\">au</span>f<br>kl<span class=\"bold\">au</span>en</h2><h2>B<span class=\"bold\">au</span>ch<br>F<span class=\"bold\">au</span>scht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu au</h1><p class="rule check">Den&lt;au&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-Ä' : thecontentbox="<h1>Buchstaaf ä</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>qu<span class=\"bold\">ä</span>len<br>pr<span class=\"bold\">ä</span>gen<br>Migr<span class=\"bold\">ä</span>n</h2><h2><span class=\"bold\">Ä</span>ntwert<br>Kn<span class=\"bold\">ä</span>tsch</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			thecontentrule='<h1>Regel zu ä</h1>';
			thecontentrule+='<p class="rule check">Steet den &lt;ä&gt; viru engem Konsonant, gëtt e laang geschwat.</p>';
			thecontentrule+='<p class="rule check">Steet den &lt;ä&gt; virun zwee oder méi Konsonanten, gëtt e kuerz geschwat</p>';
			break;
			case 'A-ÄÄ' : thecontentbox="<h1>Buchstaaf ää</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>gepr<span class=\"bold\">ää</span>gt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zu ää</h1>';
			thecontentrule+='<p class="rule check">Den &lt;ää&gt; gëtt ëmmer laang geschwat a steet virun zwee oder méi Konsonanten.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'A-ÄI' : thecontentbox="<h1>Buchstaaf äi</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>st<span class=\"bold\">äi</span>pen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			thecontentrule='<h1>Regel zu äi</h1><p class="rule check">Den&lt;äi&gt; ass eng Vokalkoppel a kann net getrennt ginn.</p>';
			thecontentrule+='<h2>Remark</h2><p class="remark">De Konsonant hannert der Vokalkoppel gëtt ni verduebelt.</p>';
			break;
		case 'B' : thecontentbox="<h1><span class=\"bold\">b</span> vir an an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">B</span>&#x200A;auer<br><span>Ka&#x200A;</span><span class=\"bold\">b</span><span>&#x200A;es</span><br><span class=\"bold\">b</span>&#x200A;aken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-B' : thecontentbox="<h1><span class=\"bold\">b</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Wa<span class=\"bold\">b</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-b');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-BB' : thecontentbox="<h1><span class=\"bold\">bb</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kra<span class=\"bold\">bb</span><br>Klu<span class=\"bold\">bb</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-bb');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'B-BB2' : thecontentbox="<h1><span class=\"bold\">bb</span> an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>kli<span class=\"bold\">bb</span>eren<br>Pra<span class=\"bold\">bb</span>eli</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-bb2');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'C' : thecontentbox="<h1>Den <span class=\"bold\">C</span> um Ufank vum Wuert</h1><h2>Ausgeschwaat wei e K</h2><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">C</span>abinet<br><span class=\"bold\">C</span>abaret<br><span class=\"bold\">c</span>ool</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c');\">&nbsp;</p></div></div><h2>Ausgeschwaat wei en S</h2><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">C</span>ité<br><span class=\"bold\">C</span>ent</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c-s');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'C-CH' : thecontentbox="<h1>Den <span class=\"bold\">ch</span> an der Mëtt oder um Enn vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Bu<span class=\"bold\">ch</span><br>La<span class=\"bold\">ch<br></span>laa<span class=\"bold\">ch</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('b-b');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'C-CK' : thecontentbox="<h1>Den <span class=\"bold\">ck</span> an der Mëtt oder um Enn vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>zé<span class=\"bold\">ck</span>en<br>schmo<span class=\"bold\">ck</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('c-ck');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'D' : thecontentbox="<h1>Den <span class=\"bold\">d</span> Vir an an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2><span class=\"bold\">d</span>af<br><span class=\"bold\">D</span>rot<br>bero<span class=\"bold\">d</span>en</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-D' : thecontentbox="<h1>Den <span class=\"bold\">d</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Schue<span class=\"bold\">d</span><br>Gra<span class=\"bold\">d</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-d');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-DD' : thecontentbox="<h1>Den <span class=\"bold\">dd</span> um Enn vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Schma<span class=\"bold\">dd</span></h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-dd');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'D-DD2' : thecontentbox="<h1><span class=\"bold\">dd</span> an der Mëtt vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Klu<span class=\"bold\">dd</span>er<br>fi<span class=\"bold\">dd</span>eren<br>kri<span class=\"bold\">dd</span>elen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('d-dd2');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'E' : thecontentbox="<h1>Den kuerzen <span class=\"bold\">e</span></h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>P<span class=\"bold\">e</span>ch<br>fr<span class=\"bold\">e</span>ch<br>k<span class=\"bold\">e</span>ng<br>Str<span class=\"bold\">e</span>nz</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e');\">&nbsp;</p></div></div><h1>Den laangen <span class=\"bold\">e</span></h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Z<span class=\"bold\">e</span>bra<br>Alphab<span class=\"bold\">e</span>t<br>M<span class=\"bold\">e</span>ter</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e2');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>kuerzen e</h1><p class="rule check">Dësen &lt;e&gt; gëtt kuerz geschwat a steet eleng am Wuert, ouni extra Zeechen.</p><h1>laangen e</h1><p class="rule check">Bei dëse Wierder gëtt den &lt;e&gt; zwar laang geschwat, awer just &lt;e&gt; geschriwwen <span class="pbold">[kuckt och <a class="pbold" href="http://ortho.lod.lu" onclick="openpage(\'ortho.lod.lu\');">ortho.lod.lu</a>]</span><span class="pbold">.</span></p>';
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'E-EE' : thecontentbox="<h1>Buchstaaf ee</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Streech<br>nee<br>Reen<br>Billjee</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('e-ee');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel ee</h1><p class="rule check">Dësen &lt;ee&gt; gëtt laang geschwaat a kënnt als Këppelche vir.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-Ë' : thecontentbox="<h1>Buchstaaf ë</h1>";
			thecontentrule='<h1>Regel ë</h1><p class="rule check">Dësen &lt;ë&gt; gëtt kuerz geschwat an dierf am Prinzip just an enger betounter Silb stoen.</p><p class="rule check">Den &lt;ë&gt; gëtt och agesat, wann dräi &lt;e&gt;en hannereneestinn, wéi bei Ee -> Eeër</p><p class="rule cross">D\'Wierder <span class="pbold">mech, dech, sech</span> an <span class="pbold">net</span> kréie keen &lt;ë&gt;, och wann se d\'selwecht kléngen.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-Ë2' : thecontentbox="<h1>Buchstaaf ë</h1>";
			thecontentrule='<h1>Regel ë</h1><p class="rule check">Dësen &lt;ë&gt; gëtt kuerz geschwat an dierf am Prinzip just an enger betounter Silb stoen.</p><p class="rule check">Den &lt;ë&gt; gëtt och agesat, wann dräi &lt;e&gt;en hannereneestinn, wéi bei Ee -> Eeër</p><p class="rule cross">D\'Wierder <span class="pbold">mech, dech, sech</span> an <span class="pbold">net</span> kréie keen &lt;ë&gt;, och wann se d\'selwecht kléngen.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-É' : thecontentbox="<h1>Buchstaaf é</h1>";
			thecontentrule='<h1>Regel é</h1><p class="rule check">Den &lt;é&gt; dee kuerz geschwaat gëtt, fënnt ee virun &lt;ng&gt;, &lt;nk&gt;, &lt;ck&gt;, &lt;ch&gt;, &lt;chs&gt; an &lt;x&gt;.</p><p class="rule cross">D\'Wierder meng, deng, seng kréie keen &lt;é&gt;, och wann se d\'selwecht kléngen wéi Wierder mat &lt;é&gt;: <span class="pbold">deng Dénger</span>.</p><p class="rule cross">Den &lt;é(e)&gt; um Enn vum Wuert ass laang an ëmmer aus dem Franséiche geléint: <span class="pbold">Cité, Lycée, Musée</span>. [kuckt och ortho.lod.lu]</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-É2' : thecontentbox="<h1>Buchstaaf é</h1>";
			thecontentrule='<h1>Regel é</h1><p class="rule check">Den &lt;é&gt; dee kuerz geschwaat gëtt, fënnt ee virun &lt;ng&gt;, &lt;nk&gt;, &lt;ck&gt;, &lt;ch&gt;, &lt;chs&gt; an &lt;x&gt;.</p><p class="rule cross">D\'Wierder meng, deng, seng kréie keen &lt;é&gt;, och wann se d\'selwecht kléngen wéi Wierder mat &lt;é&gt;: <span class="pbold">deng Dénger</span>.</p><p class="rule cross">Den &lt;é(e)&gt; um Enn vum Wuert ass laang an ëmmer aus dem Franséiche geléint: <span class="pbold">Cité, Lycée, Musée</span>. [kuckt och ortho.lod.lu]</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-È' : thecontentbox="<h1>Buchstaaf è</h1>";
			thecontentrule='<h1>Regel è</h1><p class="rule check">Den &lt;è&gt; spillt fir lëtzebuergesch Wierder keng Roll, en ass ëmmer aus dem Franséische geléint. [kuckt och ortho.lod.lu]</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-EU' : thecontentbox="<h1>Buchstaaf eu</h1>";
			thecontentrule='<h1>Regel è</h1><p class="rule check">Den &lt;è&gt; spillt fir lëtzebuergesch Wierder keng Roll, en ass ëmmer aus dem Franséische geléint. [kuckt och ortho.lod.lu]</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-IE' : thecontentbox="<h1>Buchstaaf ie an ue</h1>";
			thecontentrule='<h1>Regel ie / ue</h1><p class="rule check">An dëse Wierder steet &lt;ie&gt; an &lt;ue&gt;, well mer am Prinzip den &lt;e&gt; hannert engem Laut schreiwen, wann en och geschwat gëtt. Als Deel vun enger Vokalkoppel kritt en och keen Trema.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-UER' : thecontentbox="<h1>Buchstaaf ier, uer an äer</h1>";
			thecontentrule='<h1>Regel ier / uer / äer</h1><p class="rule check">An dëse Wierder gëtt &lt;ier&gt;, &lt;uer&gt; an &lt;äer&gt; geschriwwen, well hannert der Koppel &lt;ie&gt;, &lt;ue&gt; an &lt;äe&gt; en &lt;r&gt; an op d\'mannst ee weidere Konsonant kënnt.</p><p class="rule check">Bei &lt;ie&gt; an &lt;ue&gt; bleift dëse Prinzip och bestoen, wann hannendruner just de Konsonant &lt;r&gt; kënnt (Vokaler hannert dem &lt;r&gt; spille keng Roll).</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-IR' : thecontentbox="<h1>Buchstaaf ir an ur</h1>";
			thecontentrule='<h1>Regel ir / ur</h1><p class="rule check">Dës Wierder gi mat &lt;ir&gt;, &lt;ur&gt; an &lt;är&gt; geschriwwen, well se och am Däitschen en &lt;ir&gt; oder en &lt;ur&gt; hunn. Dofir schreiwe mer och: <span class="pbold">mir, dir, hir</span>.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-ÄR' : thecontentbox="<h1>Buchstaaf är</h1>";
			thecontentrule='<h1>Regel är</h1><p class="rule check">Kënnt just de Konsonant &lt;r&gt; hannert dem &lt;ä&gt;, schreiwe mer &lt;är&gt;.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-ÉI' : thecontentbox="<h1>Buchstaaf éi</h1>";
			thecontentrule='<h1>Regel éi</h1><p class="rule check">Bei dëse Wierder schreiwe mer &lt;éi&gt;.</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-EI' : thecontentbox="<h1>Buchstaaf ei</h1>";
			thecontentrule='<h1>Regel ei</h1><p class="rule check">Bei dëse Wierder schreiwe mer &lt;ei&gt;. [kuckt och &lt;ai&gt;]</p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'E-AI' : thecontentbox="<h1>Buchstaaf ai</h1>";
			thecontentrule='<h1>Regel ai</h1><p class="rule check">Bei dëse Wierder schreiwe mer &lt;ai&gt;, wann se sech vun engem &lt;a&gt; ofleede loossen (am Däitschen oder am Lëtzebuergeschen): <span class="pbold">Saier (sauer), Haiser (Haus)</span></p>';
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'F' : thecontentbox="<h1>Buchstaaf f</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>fäerten<br>schlofen<br>Af</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('f');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'F-FF' : thecontentbox="<h1>Buchstaaf ff</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Beruff<br>Affiche<br>Haff</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('f-ff');\">&nbsp;</p></div></div>";
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'G' : thecontentbox="<h1>Buchstaaf G</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Gittar<br>Frigo</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'G-G' : thecontentbox="<h1>Buchstaaf -g an der Mëtt vum Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Spigel<br>Igel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g');\">&nbsp;</p></div></div>";
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G2' : thecontentbox="<h1>Buchstaaf -g um Enn vun engem Wuert an wei en k ausgeschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>vag<br>Fig</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g2');\">&nbsp;</p></div></div>";
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G3' : thecontentbox="<h1>Buchstaaf -g um Enn vun engem Wuert an wei en ch ausgeschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Beleeg<br>Bierg</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g3');\">&nbsp;</p></div></div>";
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-G4' : thecontentbox="<h1>Buchstaaf -g um Enn vun engem Wuert an hannen an der Strass geschwat</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Lag<br>Dag<br>klug<br>Katalog</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-g4');\">&nbsp;</p></div></div>";
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-GG' : thecontentbox="<h1>Buchstaaf gg an der Mëtt vun engem Wuert</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Waggon<br>Bagger</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-gg');\">&nbsp;</p></div></div>";
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-NG' : thecontentbox="<h1>Buchstaaf -ng</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zeitung<br>geléngen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-ng');\">&nbsp;</p></div></div>";
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
			case 'G-NK' : thecontentbox="<h1>Buchstaaf -nk</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>denken<br>Gank</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('g-nk');\">&nbsp;</p></div></div>";
				result=jumpsel(jumppoint, hash, subselector, contentid);
				break;
		case 'H' : thecontentbox="<h1>Buchstaaf H</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Hoer<br>behuelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('h');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'I' : thecontentbox="<h1>Buchstaaf i virun engem Konsonant</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zil<br>nimols</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i');\">&nbsp;</p></div></div><h1>Buchstaaf i virun zwee oder méi Konsonanten</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>dicht<br>Insel<br>Spill</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'I-IE' : thecontentbox="<h1>Buchstaaf ie</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>friem<br>Hiewel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i-ie');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'I-II' : thecontentbox="<h1>Buchstaaf ii</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kiischt<br>Biischt<br>Tiitchen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('i-ii');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'J' : thecontentbox="<h1>Buchstaaf J</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Jackett<br>Pijen<br>jiipsen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('j');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'J-J' : thecontentbox="<h1>Buchstaaf j</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Joer<br>Jughurt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('j-j');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'K' : thecontentbox="<h1>Buchstaaf K</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kinnek<br>Klass</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('k');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'K-CK' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zack<br>kucken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('k-ck');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'L' : thecontentbox="<h1>Buchstaaf L</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>laachen<br>kal<br>molen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('l');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'L-LL' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>follegen<br>Mall</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('l-ll');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'M' : thecontentbox="<h1>Buchstaaf M</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Dram<br>Mëllech</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('m');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'M-MM' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>klammen<br>Mamm</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('m-mm');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'N' : thecontentbox="<h1>Buchstaaf N</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>näischt<br>rosen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-NN' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kanner<br>dënn</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-nn');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-N' : thecontentbox="<h1>(n) * fällt ewech</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Dammeschong</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-n');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'N-N2' : thecontentbox="<h1>(n) * bleift stoën</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>ären Auto<br>Gromperenzalot</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('n-n2');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'O' : thecontentbox="<h1>Buchstaaf O</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>kromm</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o');\">&nbsp;</p></div></div><h1>Buchstaaf O</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Drot<br>schlofen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-OO' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>gekroomt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-oo');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-OU' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>soueren<br>wou<br>Kou</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-ou');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-Ö' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>blöd<br>Fön</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-ö');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'O-ÖÖ' : thecontentbox="<h1>Buchstaaf oo</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>geföönt<br>blöödsten</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('o-öö');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'P' : thecontentbox="<h1>Buchstaaf P</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Trap<br>Poul<br>klapen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'P-PP' : thecontentbox="<h1>Buchstaaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zopp<br>klappen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p-pp');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'P-PF' : thecontentbox="<h1>Buchstaaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zipfel<br>Pflicht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('p-pf');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Q' : thecontentbox="<h1>Buchstaaf Q</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>queesch<br>quaken</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('q');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'R' : thecontentbox="<h1>Buchstaaf R</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>richteg<br>Kraaft<br>raschten</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-R' : thecontentbox="<h1>Buchstaaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Stär<br>Bier<br>Kanner</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-r');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-R2' : thecontentbox="<h1>Buchstaaf r</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Hierscht<br>Wierder<br>Wuert</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-r2');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'R-RR' : thecontentbox="<h1>Buchstaaf s</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Terrain<br>Barrikaden<br>Furri</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('r-rr');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'S' : thecontentbox="<h1>Buchstaaf S</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Saachen<br>Saier<br>Keesen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s');\">&nbsp;</p></div></div><h1>Buchstaaf S</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>super<br>Samba<br>Sylvester</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-S' : thecontentbox="<h1>Buchstaaf s</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Rees</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-s');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-ST' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Küst<br>bastelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-st');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-ST2' : thecontentbox="<h1>Buchstaaf st-</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>staark<br>Stiwwel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-st2');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SP' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Knosp<br>Respekt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sp');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SP2' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>späizen<br>Speck</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sp2');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SCH' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Këscht<br>schéin<br>raschelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-sch');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'S-SS' : thecontentbox="<h1>Buchstaaf -st</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Zooss<br>duuss</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('s-ss');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'T' : thecontentbox="<h1>Buchstaaf T</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Blat<br>Trap</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'T-TZ' : thecontentbox="<h1>Buchstaaf tz</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>botzen<br>fatzeg<br>Datz</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('t-tz');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'T-TT' : thecontentbox="<h1>Buchstaaf tt</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Ketten<br>platt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('t-tt');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'U' : thecontentbox="<h1>Buchstaaf U</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Nummer<br>Buschtaf</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u');\">&nbsp;</p></div></div><h1>Buchstaaf U</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Trubel<br>Tut</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-UU' : thecontentbox="<h1>Buchstaaf uu</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Duuscht<br>duuss</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-uu');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-UE' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Hues<br>Kuel</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ue');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-OU' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Informatioun<br>Boun<br>zou</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ou');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-Ü' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Bün<br>bäifügen<br>Gerücht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ü');\">&nbsp;</p></div></div><h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Küst<br>flüsteren<br>Gerücht</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-ü2');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'U-ÜÜ' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>geüübt<br>bäigefüügt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('u-üü');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'V' : thecontentbox="<h1>Buchstaaf V</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Villchen<br>verléieren<br>viischt</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('v');\">&nbsp;</p></div></div><h1>Buchstaaf V</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Vanill<br>Vas<br>Vakanz<br>Bravour<br>Revisioun</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('v2');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'V-V' : thecontentbox="<h1>Buchstaaf -v</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>brav<br>Oliv</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w-ww');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'W' : thecontentbox="<h1>Buchstaaf W</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>waarm<br>wibbelen<br>awer<br>Léiw</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w-ww');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'W-WW' : thecontentbox="<h1>Buchstaaf ww</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Miwwel<br>kniwwelen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('w-ww');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'X' : thecontentbox="<h1>Buchstaaf X</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Mixer<br>Hex<br>Xylophon</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('x');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Y' : thecontentbox="<h1>Buchstaaf Y</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>trendy<br>Psychologie</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('y');\">&nbsp;</p></div></div>";
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
		case 'Z' : thecontentbox="<h1>Buchstaaf Z</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>Kaz<br>Zalot<br>verzielen</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('z');\">&nbsp;</p></div></div>";
			subselector=true; hash=contentid;
			result=jumpsel(jumppoint, hash, subselector, contentid);
			break;
			case 'Z-TZ' : thecontentbox="<h1>Buchstaaf tz</h1><div class=\"floating-container\"><div class=\"left-content-block\"><h2>motzen<br>Datz<br>Witz</h2></div><div class=\"right-content-block\"><p class=\"round-play-button toun-icon\" href=\"#\" onclick=\"playAudio('z-tz');\">&nbsp;</p></div></div>";
			thecontentrule='<h1>Regel zum -tz(-)</h1><p class="rule check">De Konsonantegrupp &lt;tz&gt; gëtt an der Mëtt an um Enn vum Wuert wéi &lt;t&gt; an &lt;s&gt; geschwat.</p>';
			result=jumpsel(jumppoint, hash, subselector, contentid);
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
		mySwiperSub.removeAllSlides();
		$$('#swiper-sub').addClass('hidesub');
	}
}

function jumpsel(jp,hs,subsel,cont)
{
	result=cont.charCodeAt(0)+' '+cont;
	jumpto(jp,hs,subsel);
	return result;
}