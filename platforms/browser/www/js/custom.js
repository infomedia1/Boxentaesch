function launchApp()
{
	// console.log('launchApp()');
	document.getElementById('page-content').setAttribute('style','background: rgb(242,238,226);background: -moz-linear-gradient(-45deg, rgba(242,238,226,1) 0%, rgba(243,239,230,1) 100%);background: -webkit-linear-gradient(-45deg, rgba(242,238,226,1) 0%,rgba(243,239,230,1) 100%);background: linear-gradient(135deg, rgba(242,238,226,1) 0%,rgba(243,239,230,1) 100%), url(\'css/res/texture_jeans_stripes1_18-18.png\') top left repeat;filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#f2eee2\', endColorstr=\'#f3efe6\',GradientType=1 );');
	document.getElementById('thetabbar').setAttribute('style','display:block;');
	document.getElementById('theselectionbar').setAttribute('style','background: rgb(45,100,188);background: -moz-linear-gradient(-45deg, rgba(45,100,188,1) 0%, rgba(0,62,117,1) 100%);background: -webkit-linear-gradient(-45deg, rgba(45,100,188,1) 0%,rgba(0,62,117,1) 100%);background: linear-gradient(135deg, rgba(45,100,188,1) 0%,rgba(0,62,117,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#2d64bc\', endColorstr=\'#003e75\',GradientType=1 );');
	document.getElementById('startup').setAttribute('style','display:none;');
	document.getElementById('AppVersion').setAttribute('style','display:none;');
	document.getElementById('stiches-front').setAttribute('style','display:none;');
	document.getElementById('konterbont').setAttribute('style','display:none;');
	document.getElementById('lod').setAttribute('style','display:none;');
	document.getElementById('overlay').setAttribute('style','height:153px;');
	
}

function resetApp()
{
	document.getElementById('page-content').setAttribute('style','background: rgb(45,100,188);background: -moz-linear-gradient(-45deg, rgba(45,100,188,1) 0%, rgba(0,62,117,1) 100%);background: -webkit-linear-gradient(-45deg, rgba(45,100,188,1) 0%,rgba(0,62,117,1) 100%);background: linear-gradient(135deg, rgba(45,100,188,1) 0%,rgba(0,62,117,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#2d64bc\', endColorstr=\'#003e75\',GradientType=1 );');
	document.getElementById('thetabbar').setAttribute('style','display:none;');
	document.getElementById('theselectionbar').setAttribute('style','');
	
	document.getElementById('contentblock').innerHTML='<div class="wierderblock" id="contentblock"></div>';
	
	document.getElementById('startup').setAttribute('style','display:block;');
	document.getElementById('AppVersion').setAttribute('style','display:block;');
	document.getElementById('stiches-front').setAttribute('style','display:block;');
	document.getElementById('konterbont').setAttribute('style','display:block;');
	document.getElementById('lod').setAttribute('style','display:block;');
	document.getElementById('overlay').setAttribute('style','height:100%;');
	
	closespeeddial();
}

function setDisplayTrue(element)
{
	// console.log('setDisplayTrue(element:'+element+')');
	//Change BG, show header & content
	launchApp();
	
	document.getElementById('content1').outerHTML='<a href="#tab1" id="content1" onclick=\'toggleContent("'+element+'","content1");\' class="tab-link active"><i class="icon demo-icon-1"></i><span class="tabbar-label">Beispill</span></a>';
	document.getElementById('content2').outerHTML='<a href="#tab1" id="content2" onclick=\'toggleContent("'+element+'","content2");\' class="tab-link"><i class="icon demo-icon-1"></i><span class="tabbar-label">Regel</span></a>';
	document.getElementById('content3').outerHTML='<a href="#tab1" id="content3" onclick=\'toggleContent("'+element+'","content3");\' class="tab-link"><i class="icon demo-icon-1"></i><span class="tabbar-label">Annexe</span></a>';
	
	var theText=document.getElementById('contentblock');
	
	var windowWidth = window.innerWidth;
	var widthmodifier = 42;
	var middlewidth=windowWidth / 2;
	var scrollvalue=0;
	var oldscrollvalue=0;
	var i;
	var sleepcounter=0;
	// console.log('Middle: '+middlewidth);
	
	switch (element)
	{
		case 'jump-a' : theText.innerHTML='<h1>Buschtaaf A</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(1*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-b' : theText.innerHTML='<h1>Buschtaaf B</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(2*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-c' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(3*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-d' : theText.innerHTML='<h1>Buschtaaf D</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(4*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-e' : theText.innerHTML='<h1>kuerzen e</h1><h2 class="wierder">Pech<br> frech<br> keng<br> Strenz</h2><p> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a><br> an sou weider </p><hr /><h1>laangen e</h1><h2 class="wierder">Zebra<br>Alphabet<br>Meter</h2>';
			scrollvalue=(5*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-f' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(6*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-g' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(7*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-h' : theText.innerHTML='<h1>Buschtaaf H</h1><h2 class="wierder">Pech<br>frech<br>keng<br>Strenz</h2><p> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>';
			 scrollvalue=(8*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			/*oldscrollvalue=document.getElementById('theselectionbarscroller').scrollLeft;
			console.log('OldScrollLeft: '+oldscrollvalue+'ScrollLeft: '+scrollvalue);
			sleepcounter=Math.floor(500/(scrollvalue-oldscrollvalue));
			for (i=oldscrollvalue; i<=scrollvalue; i++) {
				setInterval(document.getElementById('theselectionbarscroller').scrollLeft = i, (sleepcounter * 10));
				console.log('i:'+i);
			}
			*/
			// $('theselectionbarscroller').animate({scrollLeft: '='+scrollvalue}, 800, 'easeOutQuad');
			
			break;
		case 'jump-i' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(9*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-j' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(10*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-k' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(11*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-l' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(12*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-m' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(13*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-n' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(14*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-o' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(15*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-p' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(16*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-q' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(17*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-r' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(18*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-s' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(19*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-t' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(20*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-u' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(21*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-v' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(22*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-w' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(23*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-x' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(24*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-y' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(25*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		case 'jump-z' : theText.innerHTML='<h1>Buschtaaf C</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
			scrollvalue=(26*70)+widthmodifier-middlewidth;
			document.getElementById('theselectionbarscroller').scrollLeft = scrollvalue;
			// console.log('ScrollLeft: '+scrollvalue);
			break;
		
/*
 SUB E ------------------------
*/		
		case 'jump-ee': theText.innerHTML='<h1>Buschtaaf ee</h1><h2 class="wierder">Streech<br>nee<br>Reen<br>Billjee</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-ë': theText.innerHTML='<h1>Buschtaaf ë</h1><h2 class="wierder">Pëll<br>Mëscht<br>Dëppen<br>Bëbee<br>Tëlee</h2><h2 class="wierder">Seeërei<br>Eeër<br>gëeenegt<br>Jeeër</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-é': theText.innerHTML='<h1>Buschtaaf é</h1><h2 class="wierder">Péng<br>mécht<br>Béchs<br>Stéck<br>féx</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-è': theText.innerHTML='<h1>Buschtaaf è</h1><h2 class="wierder">Ministère</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-ie': theText.innerHTML='<h1>Buschtaaf ie / ue</h1><h2 class="wierder">Schiet<br>bieden<br>Buedem<br>bestueden</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-uer': theText.innerHTML='<h1>Buschtaaf uer / ier / äer</h1><h2 class="wierder">Hierscht<br>Kierch</h2><h2 class="wierder">Stuerm<br>duerch</h2><h2 class="wierder">Äerd<br>Käerz<br>Stäerkt<br>giereg<br>bueren<br>Dier</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-ir': theText.innerHTML='<h1>Buschtaaf ir / ur</h1><h2 class="wierder">(sech) iren<br>(eng) Spur</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-är': theText.innerHTML='<h1>Buschtaaf är</h1><h2 class="wierder">Stär<br>gär<br>Kären<br>blären</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-éi': theText.innerHTML='<h1>Buschtaaf éi</h1><h2 class="wierder">Schnéi<br>séier<br>Kéis<br>Bléi</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-ei': theText.innerHTML='<h1>Buschtaaf ei</h1><h2 class="wierder">Gei<br>Rei<br>bleiwen</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		case 'jump-ai': theText.innerHTML='<h1>Buschtaaf ai</h1><h2 class="wierder">Saier<br>Haiser</h2><p><a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a></p></div>';
			break;
		default:	theText.innerHTML='<h1>Buschtaaf ?</h1> AB <a onclick="toggleContent(\''+element+'\',\'content2\');">Sprang op d\'Regel</a>  <br> an sou weider ';
	}
	
	
	var theselector=element.substring(5,8);
	if (theselector.match(/[a-z]/i) && theselector.length==1) {
		toggleSelector(element);
	} else {
		toggleSelectorS(element);
		// toggleSelector(element);
	}

}

function setDisplayTrueS(element)
{
	// console.log('setDisplayTrueS(element:'+element+')');

	setDisplayTrue(element);
}

function setRegel(id)
{
	// console.log('setRegel(id:'+id+')');
	switch (id)
	{
		case 'jump-a' :	return '<h1>Regel A</h1><p>Text Text ladida</p>';
		case 'jump-b' :	return '<h1>Regel B</h1><p>Text Text ladida</p>';
		case 'jump-c' :	return '<h1>Regel C</h1><p>Text Text ladida</p>';
		case 'jump-d' :	return '<h1>Regel D</h1><p>Text Text ladida</p>';
		case 'jump-e' :	return '<h1>kuerzen e</h1><p>Dësen &lt;e&gt; gëtt kuerz geschwat a steet eleng am Wuert, ouni extra Zeechen.</p><h1>laangen e</h1><p>Bei dëse Wierder gëtt den &lt;e&gt; zwar laang geschwat, awer just &lt;e&gt; geschriwwen <span class="pbold">[kuckt och <a class="pbold" href="http://ortho.lod.lu" onclick="openpage(\'ortho.lod.lu\');">ortho.lod.lu</a>]</span><span class="pbold">.</span></p>';
		case 'jump-f' :	return '<h1>Regel F</h1><p>Text Text ladida</p>';
		case 'jump-g' :	return '<h1>Regel G</h1><p>Text Text ladida</p>';
		case 'jump-h' :	return '<h1>Regel H</h1><p>Text Text ladida</p>';
		case 'jump-i' :	return '<h1>Regel I</h1><p>Text Text ladida</p>';
		case 'jump-j' :	return '<h1>Regel J</h1><p>Text Text ladida</p>';
		case 'jump-k' :	return '<h1>Regel K</h1><p>Text Text ladida</p>';
		case 'jump-l' :	return '<h1>Regel L</h1><p>Text Text ladida</p>';
		case 'jump-m' :	return '<h1>Regel M</h1><p>Text Text ladida</p>';
		case 'jump-n' :	return '<h1>Regel N</h1><p>Text Text ladida</p>';
		case 'jump-o' :	return '<h1>Regel O</h1><p>Text Text ladida</p>';
		case 'jump-p' :	return '<h1>Regel P</h1><p>Text Text ladida</p>';
		case 'jump-q' :	return '<h1>Regel Q</h1><p>Text Text ladida</p>';
		case 'jump-r' :	return '<h1>Regel R</h1><p>Text Text ladida</p>';
		case 'jump-s' :	return '<h1>Regel S</h1><p>Text Text ladida</p>';
		case 'jump-t' :	return '<h1>Regel T</h1><p>Text Text ladida</p>';
		case 'jump-u' :	return '<h1>Regel U</h1><p>Text Text ladida</p>';
		case 'jump-v' :	return '<h1>Regel V</h1><p>Text Text ladida</p>';
		case 'jump-w' :	return '<h1>Regel W</h1><p>Text Text ladida</p>';
		case 'jump-x' :	return '<h1>Regel X</h1><p>Text Text ladida</p>';
		case 'jump-y' :	return '<h1>Regel Y</h1><p>Text Text ladida</p>';
		case 'jump-z' :	return '<h1>Regel Z</h1><p>Text Text ladida</p>';
/*
 SUB E ------------------------
*/			
		case 'jump-ee' :	return '<h1>Regel ee</h1><p class="rule check">Dësen &lt;ee&gt; gëtt laang geschwaat a kënnt als Këppelche vir.</p>';
		case 'jump-ë' :	return '<h1>Regel e</h1><p class="rule check">Dësen &lt;ë&gt; gëtt kuerz geschwat an dierf am Prinzip just an enger betounter Silb stoen.</p><p class="rule check">Den &lt;ë&gt; gëtt och agesat, wann dräi &lt;e&gt;en hannereneestinn, wéi bei Ee -> Eeër</p><p class="rule cross">D\'Wierder mech, dech, sech an net kréie keen &lt;ë&gt;, och wann se d\'selwecht kléngen.</p>';
		case 'jump-é' :	return '<h1>Regel é</h1><p class="rule check">Den &lt;é&gt; dee kuerz geschwaat gëtt, fënnt ee virun &lt;ng&gt;, &lt;nk&gt;, &lt;ck&gt;, &lt;ch&gt;, &lt;chs&gt; an &lt;x&gt;.</p><p class="rule cross">D\'Wierder meng, deng, seng kréie keen &lt;é&gt;, och wann se d\'selwecht kléngen wéi Wierder mat &lt;é&gt;: deng Dénger.</p><p class="rule cross">Den &lt;é(e)&gt; um Enn vum Wuert ass laang an ëmmer aus dem Franséiche geléint: Cité, Lycée, Musée. [kuckt och ortho.lod.lu]</p>';
		case 'jump-è' :	return '<h1>Regel è</h1><p class="rule check">Den &lt;è&gt; spillt fir lëtzebuergesch Wierder keng Roll, en ass ëmmer aus dem Franséische geléint. [kuckt och ortho.lod.lu]</p>';
		case 'jump-ie' :	return '<h1>Regel ie / ue</h1><p class="rule check">An dëse Wierder steet &lt;ie&gt; an &lt;ue&gt;, well mer am Prinzip den &lt;e&gt; hannert engem Laut schreiwen, wann en och geschwat gëtt. Als Deel vun enger Vokalkoppel kritt en och keen Trema.</p>';
		case 'jump-uer' :	return '<h1>Regel ier / uer / äer</h1><p class="rule check">An dëse Wierder gëtt &lt;ier&gt;, &lt;uer&gt; an &lt;äer&gt; geschriwwen, well hannert der Koppel &lt;ie&gt;, &lt;ue&gt; an &lt;äe&gt; en &lt;r&gt; an op d\'mannst ee weidere Konsonant kënnt.</p><p class="rule check">Bei &lt;ie&gt; an &lt;ue&gt; bleift dëse Prinzip och bestoen, wann hannendruner just de Konsonant &lt;r&gt; kënnt (Vokaler hannert dem &lt;r&gt; spille keng Roll).</p>';
		case 'jump-ir' :	return '<h1>Regel ir / ur</h1><p class="rule check">Dës Wierder gi mat &lt;ir&gt;, &lt;ur&gt; an &lt;är&gt; geschriwwen, well se och am Däitschen en &lt;ir&gt; oder en &lt;ur&gt; hunn. Dofir schreiwe mer och: mir, dir, hir.</p>';
		case 'jump-är' :	return '<h1>Regel är</h1><p class="rule check">Kënnt just de Konsonant &lt;r&gt; hannert dem &lt;ä&gt;, schreiwe mer &lt;är&gt;.</p>';
		case 'jump-éi' :	return '<h1>Regel éi</h1><p class="rule check">Bei dëse Wierder schreiwe mer &lt;éi&gt;.</p>';
		case 'jump-ei' :	return '<h1>Regel ei</h1><p class="rule check">Bei dëse Wierder schreiwe mer &lt;ei&gt;. [kuckt och &lt;ai&gt;]</p>';
		case 'jump-ai' :	return '<h1>Regel ai</h1><p class="rule check">Bei dëse Wierder schreiwe mer &lt;ai&gt;, wann se sech vun engem &lt;a&gt; ofleede loossen (am Däitschen oder am Lëtzebuergeschen): Saier (sauer), Haiser (Haus)</p>';
		
		default: return '<h1>Regel Default</h1><p class="rule check">Text Text ladida</p>';
	}
}


function toggleSelector(element)
{
	// console.log('toggleSelector(element:'+element+')');
	var theselector=element.substring(5,8);
	
	//if (element.substring(0,4))
	
	switch(theselector) {
		case 'e':
			subseltoggle(false);
			document.getElementById('subselector').innerHTML='      <a class= "smallletter25" id="togkle-ee" onclick=setDisplayTrueS("jump-ee");>ee</a> <a class= "smallletter" id="togkle-ë" onclick=setDisplayTrueS("jump-ë");>ë</a> <a class= "smallletter" id="togkle-é" onclick=setDisplayTrueS("jump-é");>é</a> <a class= "smallletter" id="togkle-è" onclick=setDisplayTrueS("jump-è");>è</a> <a class= "smallletter29" id="togkle-ie" onclick=setDisplayTrueS("jump-ie");>ie,ue</a> <a class= "smallletter3" id="togkle-uer" onclick=setDisplayTrueS("jump-uer");>ier,uer,äer</a> <a class= "smallletter2" id="togkle-ir" onclick=setDisplayTrueS("jump-ir");>ir,ur</a> <a class= "smallletter25" id="togkle-är" onclick=setDisplayTrueS("jump-är");>är</a> <a class= "smallletter25" id="togkle-éi" onclick=setDisplayTrueS("jump-éi");>éi</a> <a class= "smallletter25" id="togkle-ei" onclick=setDisplayTrueS("jump-ei");>ei</a> <a class= "smallletter25" id="togkle-ai" onclick=setDisplayTrueS("jump-ai");>ai</a>    ';
			break;
		case 'ee':
		case 'ë':
		case 'é':
		case 'è':
		case 'ie':
		case 'uer':
		case 'ir':
		case 'är':
		case 'éi':
		case 'ei':
		case 'ai':	subseltoggle(false);
			break;
			default : subseltoggle(true);
	}
	var elems = document.getElementsByTagName('a');
	for (i=0;i<elems.length;i++)
	{
		if (elems[i].id.substring(0,4) == 'togg')
		{
			elems[i].setAttribute("style","font-size:3.125em;color:#ffffff");
		}
		if (elems[i].id.substring(0,4) == 'togk')
		{
			elems[i].setAttribute("style","font-size:2.25em;color:#ebf5ff");
		}
	}
	
	if (theselector.match(/[a-z]/i) && theselector.length==1) {
		document.getElementById("toggle-"+theselector).setAttribute("style","font-size:4.688em;color:#ebf5ff");
	} else {
		document.getElementById("togkle-"+theselector).setAttribute("style","font-size:3.0em;color:#ebf5ff");
	}
	
}

function toggleSelectorS(element)
{
	// console.log('toggleSelectorS(element:'+element+')');
	var theselector=element.substring(5,8);
	var elems = document.getElementsByTagName('a');
	for (i=0;i<elems.length;i++)
	{
		if (elems[i].id.substring(0,4) == 'togk')
		{
			elems[i].setAttribute("style","font-size:2.25em;color:#ebf5ff");
		}
	}
	document.getElementById("togkle-"+theselector).setAttribute("style","font-family:'Raleway-Bold';color:#ebf5ff");
}

function subseltoggle(hideit)
{
	// console.log('subseltoggle(hideit:'+hideit+')');
	if (hideit==true)
	{
		document.getElementById('subselector').style.height = "0px";
		document.getElementById('subselector').style.visibility = "hidden";
		document.getElementById('subselector').style.opacity = "0";
		document.getElementById('subselector').style.transition = "all 200ms ease";
	} else {
		document.getElementById('subselector').style.height = "2.5em";
		document.getElementById('subselector').style.visibility = "visible";
		document.getElementById('subselector').style.opacity = "1";
		document.getElementById('subselector').style.transition = "all 200ms ease";
	}
}
function toggleContent(id,clickid)
{
	// console.log('toggleContent(id:'+id+',clickid:'+clickid+')');
	switch (clickid)
	{
		case 'content1' :	document.getElementById('content1').className='tab-link active';
							document.getElementById('content2').className='tab-link';
							document.getElementById('content3').className='tab-link';
							setDisplayTrue(id);
			break;
		case 'content2' :	document.getElementById('content1').className='tab-link';
							document.getElementById('content2').className='tab-link active';
							document.getElementById('content3').className='tab-link';
							document.getElementById('contentblock').innerHTML=setRegel(id);
							
			break;
		case 'content3' :	document.getElementById('content1').className='tab-link';
							document.getElementById('content2').className='tab-link';
							document.getElementById('content3').className='tab-link active';
							document.getElementById('contentblock').innerHTML=setAnnexe(id);
			break;
	}
	
}

function openpage(siteurl)
{
	var onInApp = window.open('http://'+siteurl, '_blank', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');
}

function playaudio(audioid)
{
	if (cordova.platformId=='android') {
		var mediasrc='/android_asset/www/';
	} else {
		var mediasrc='';
	}
	document.getElementById('playaudio').setAttribute('style','visibility:visible;opacity:1;');
	
	//alert(cordova.platformId);
	//console.log('platform: '+ cordova.platformId);
	
	var my_media = new Media(mediasrc+'audio/'+audioid+'.mp3', function () {
						// console.log("playAudio():Audio Success");
						//alert('Play');
						document.getElementById('playaudio').setAttribute('style','visibility:hidden;opacity:0;');
					},
					// error callback
					function (err) {
						// console.log("playAudio():Audio Error: " + err);
						alert('Audio Error: '+err);
					}
				);
	my_media.play();
}

function setAnnexe(id)
{
	// console.log('setAnnexe(id:'+id+')');
	switch (id)
	{
		case 'jump-a' :	return '<h1>Annexe</h1><p>A A A</p>';
			break;
		case 'jump-e' : 
						return '<p class="none" onclick="javascript:playaudio(\'e1\');">Play Sound</p> <h1>Audio</h1><p class="none" onclick="javascript:playaudio(\'e2\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-ee':	return '<p class="none" onclick="javascript:playaudio(\'ee\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-ë':	return '<p class="none" onclick="javascript:playaudio(\'eee\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-é':	return '<p class="none" onclick="javascript:playaudio(\'e3\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-è':	return '<p class="none" onclick="javascript:playaudio(\'e4\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-ie':	return '<p class="none" onclick="javascript:playaudio(\'ie-ue\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-uer':	return '<p class="none" onclick="javascript:playaudio(\'ier-uer-aaer\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-ir':	return '<p class="none" onclick="javascript:playaudio(\'ir-ur\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-är':	return '<p class="none" onclick="javascript:playaudio(\'ar\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-éi':	return '<p class="none" onclick="javascript:playaudio(\'ei2\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-ei':	return '<p class="none" onclick="javascript:playaudio(\'ei\');">Play Sound</p> <h1>Audio</h1>';
		case 'jump-ai':	return '<p class="none" onclick="javascript:playaudio(\'ai\');">Play Sound</p> <h1>Audio</h1>';
		default: return '<h1>keen Contenu</h1><p>A A A</p>';
	}
}

function closespeeddial()
{
	document.getElementById('thespeeddial').setAttribute('class','speed-dial');
	
}