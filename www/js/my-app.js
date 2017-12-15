// Initialize your app
var $$ = Dom7;
var Player = {
	media: null,
	mediaTimer: null,
	isPlaying : false,
	initMedia: function (path) {
		Player.media = new Media(path,
								function () {
									
									if (Player.media !== null)
									{
										Player.media.release();
										Player.isPlaying = false;
										$$('#audioplayer').addClass('no-player');
										console.log('audio success');
									}
									if (Player.isPlaying==true)
									{
										$$('#audioplayer').removeClass('no-player');
									}
								},
								function(error) {
									//alert('error');
									console.log('upsi');
									$$('#audioplayer').addClass('no-player');
								}
							);
	},
	play: function(path) {
		
		if (cordova.platformId=='android') {
			var mediasrc='/android_asset/www/audio/';
		} else {
			var mediasrc='audio/';
		}
		$$('.player-play-icon').css('background-image','url(\'css/res/play50.png\')');
		$$('.bar').css('animation-play-state','running');
		path=mediasrc + path;
		
		if (Player.media != null)
		{
			if(Player.isPlaying == true)
			{
				Player.media.stop();
				$$('#audioplayer').removeClass('no-player');
				Player.isPlaying = false;
			}
			Player.media.release();
			Player.media = null;
			Player.isPlaying = false;
		}
		$$('#audioplayer').removeClass('no-player');
		Player.initMedia(path);
		$$('#audioplayer').removeClass('no-player');
		Player.media.play();
		Player.isPlaying = true;
	},
	pauseResume: function() {
		if (Player.isPlaying === true)
		{
$$('.player-play-icon').css('background-image','url(\'css/res/pause50.png\')');
			Player.media.pause();
			// $$('.bar').css('display','none');
			//$$('.bar').css('display','none');
			$$('.bar').css('animation-play-state','paused');
		} else {
			$$('.player-play-icon').css('background-image','url(\'css/res/play50.png\')');
			Player.media.play();
			// $$('.bar').css('display','block');
			$$('.bar').css('animation-play-state','running');
		}
		Player.isPlaying = !Player.isPlaying;
	},
	playPause: function(path) {
		if (cordova.platformId=='android') {
			var mediasrc='/android_asset/www/audio/';
		} else {
			var mediasrc='audio/';
		}
		path=mediasrc + path;
		
		if ((Player.media === null) || (Player.media.src!=path))
		{
			if(Player.isPlaying === true)
			{
				console.log('Kill old Player');
				Player.media.stop();
				Player.media.release();
				console.log('2 Init & Play');
				Player.initMedia(path);
			} else {
				console.log('Init & Play');
				Player.initMedia(path);
			}
			console.log('Init');
		}
		
		if (Player.isPlaying === false)
		{
			Player.media.play();
			console.log('Play: '+Player.media.src+' | '+path);
			$$('#audioplayer').removeClass('no-player');
		} else {
			Player.media.pause();
			console.log('Pause: '+Player.media.src+' | '+path);
			$$('#audioplayer').removeClass('no-player');
		}
		Player.isPlaying = !Player.isPlaying;
	},
	stop: function() {
		if (Player.media !== null)
		{
			Player.media.stop();
			console.log('Stop');
			Player.media.release();
		}
		Player.media = null;
		Player.isPlaying = false;
		$$('#audioplayer').addClass('no-player');
	}
}

function prepareAudioPlayer() {
	console.log('prepare Audioplayer');
	console.log('Mediaplayer prepared!');
}

var setupPush = function() {
	var push;
	/*console.log('calling push init');
	push = PushNotification.init({
		"android": {
			"senderID": "279763484982"
		},
		"browser": {},
		"ios": {
			"sound": true,
			"vibration": true,
			"badge": true,
			   "categories": {
				 "konterbont": {
					 "yes": {
						 "callback": "showStore", "title": "Méi Infoën",
						 "foreground": true, "destructive": false
					 }
				 }
			   }
		},
		"windows": {}
	});
	console.log('after init');

	push.on('registration', function(data) {
		console.log('registration event: ' + data.registrationId);
		alert('registrationid: '+data.registrationId+ ' type: '+data.registrationType);
		var oldRegId = localStorage.getItem('registrationId');
		if (oldRegId !== data.registrationId) {
			// Save new registration ID
			localStorage.setItem('registrationId', data.registrationId);
			localStorage.setItem('registrationType', data.registrationType);
			// Post registrationId to your app server as the value has changed
		}
	});

	push.on('error', function(e) {
		console.log("push error = " + e.message);
		alert('O.o Feeler: PUSH.ON ERROR');
	});

	push.on('notification', function(data) {
		console.log('notification event');
		//alert('Hei kennt eng Notification!!!!');
		var artist = data.additionalData.konterbont;
		 if (artist) {
		   if (data.additionalData.foreground) {
			 navigator.notification.confirm(
			   'Do you want to check out some new music from ' + artist + '?',
			   function(buttonIndex) {
				 if (buttonIndex === 1) {
				  
				 }
			   },
			  'New Music',
			  ['Yes','No']
			);
		   } else {
			 showStore();
		   }
		 } else {
			navigator.notification.alert(
				data.message,         // message
				null,                 // callback
				data.title,           // title
				'Ok'                  // buttonName
			);
		 }
   });
   push.subscribe('test', function() {
		console.log('success');
		//alert('SUBSCRIBE TO test' );
	}, function(e) {
		console.log('error:');
		//alert('error subscribe');
		console.log(e);
	});
	*/
}

function showStore()
{
	alert("ShowStoreFunction");
}

function gotoAppStore(AppStoreID,PlayStoreID)
{
	if (cordova.platformId=='android')
	{
		//Android PlayStore Link
		//alert("Android : id = " + PlayStoreID);
		//window.open("http://play.google.com/store/apps/details?id="+PlayStoreID);
		console.log("android open store");
		cordova.plugins.market.open(PlayStoreID);
	}
	if (cordova.platformId=='ios')
	{
		//IOS Store
		//alert("IOS : id = " + AppStoreID);
		console.log("ios open store");
		cordova.plugins.market.open(AppStoreID);
		//window.open('itms-apps://itunes.apple.com/app/id'+AppStoreID,'_blank','location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');
	}
}


var template = $$('#eisbuchstaawen').html();
var compiledTemplate = Template7.compile(template);
// Now we may render our compiled template by passing required context
var context = {
    buchstaawen: [
		{ denBuchstaaf: 'A', wierder: [
			{ wuert: '<span class=\"boldwunderline\">aa</span>chtmol', jumppoint: 'A-AA' },
			{ wuert: '<span class=\"boldwunderline\">Ä</span>erd', jumppoint: 'E-ÄER' },
			{ wuert: '<span class=\"boldwunderline\">A</span>f', jumppoint: 'A-A' },
			{ wuert: '<span class=\"boldwunderline\">A</span>ffekot', jumppoint: 'A-A2' },
			{ wuert: 'A<span class=\"boldwunderline\">ff</span>iche', jumppoint: 'F-FF' },
			{ wuert: 'af<span class=\"boldwunderline\">ü</span>gen', jumppoint: 'U-Ü' },
			{ wuert: 'ag<span class=\"boldwunderline\">ë</span>engt', jumppoint: 'E-Ë2' },
			{ wuert: 'agef<span class=\"boldwunderline\">üü</span>gt', jumppoint: 'U-ÜÜ' },
			{ wuert: 'Alphab<span class=\"boldwunderline\">e</span>t', jumppoint: 'E-E' },
			{ wuert: 'Athl<span class=\"boldwunderline\">e</span>t', jumppoint: 'E-E' },
			{ wuert: '<span class=\"boldwunderline\">Ä</span>ntwert', jumppoint: 'A-Ä2' },
			{ wuert: 'äre<span class=\"boldwunderline\">n</span> Auto', jumppoint: 'N-N3' },
			{ wuert: 'a<span class=\"boldwunderline\">w</span>er', jumppoint: 'W-W' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'B', wierder: [
			{ wuert: 'Ba<span class=\"boldwunderline\">gg</span>er', jumppoint: 'G-GG' },
			{ wuert: '<span class=\"boldwunderline\">b</span>aken', jumppoint: 'B-B' },
			{ wuert: 'B<span class=\"boldwunderline\">a</span>m', jumppoint: 'A-A' },
			{ wuert: 'Ba<span class=\"boldwunderline\">rr</span>ikaden', jumppoint: 'R-RR' },
			{ wuert: 'ba<span class=\"boldwunderline\">st</span>elen', jumppoint: 'S-ST' },
			{ wuert: 'B<span class=\"boldwunderline\">au</span>ch', jumppoint: 'A-AU2' },
			{ wuert: '<span class=\"boldwunderline\">B</span>auer', jumppoint: 'B-B' },
			// { wuert: 'Bëbee', jumppoint: 'E-Ë' },
			{ wuert: 'B<span class=\"boldwunderline\">é</span>chs', jumppoint: 'E-É' },
			{ wuert: 'be<span class=\"boldwunderline\">h</span>uelen', jumppoint: 'H-H' },
			{ wuert: 'Belee<span class=\"boldwunderline\">g</span>', jumppoint: 'G-G4' },
			{ wuert: 'bero<span class=\"boldwunderline\">d</span>en', jumppoint: 'D-D' },
			{ wuert: 'Beru<span class=\"boldwunderline\">ff</span>', jumppoint: 'F-FF' },
			// { wuert: 'bestueden', jumppoint: 'E-IE' },
			{ wuert: 'b<span class=\"boldwunderline\">ie</span>den', jumppoint: 'E-IE' },
			{ wuert: 'Bie<span class=\"boldwunderline\">r</span>', jumppoint: 'R-R2' },
			{ wuert: 'Bier<span class=\"boldwunderline\">g</span>', jumppoint: 'G-G4' },
			{ wuert: 'B<span class=\"boldwunderline\">ii</span>scht', jumppoint: 'I-II' },
			{ wuert: 'Billj<span class=\"boldwunderline\">ee</span>', jumppoint: 'E-EE' },
			// { wuert: 'blären', jumppoint: 'E-ÄR' },
			{ wuert: 'Bla<span class=\"boldwunderline\">t</span>', jumppoint: 'T-T' },
			{ wuert: 'Bl<span class=\"boldwunderline\">éi</span>', jumppoint: 'E-ÉI' },
			{ wuert: 'bl<span class=\"boldwunderline\">ei</span>wen', jumppoint: 'E-EI' },
			{ wuert: 'bl<span class=\"boldwunderline\">ö</span>d', jumppoint: 'O-Ö' },
			{ wuert: 'bl<span class=\"boldwunderline\">öö</span>dsten', jumppoint: 'O-ÖÖ' },
			{ wuert: 'bo<span class=\"boldwunderline\">tz</span>en', jumppoint: 'T-TZ' },
			{ wuert: 'B<span class=\"boldwunderline\">ou</span>n', jumppoint: 'U-OU' },
			{ wuert: 'bra<span class=\"boldwunderline\">v</span>', jumppoint: 'V-V3' },
			{ wuert: 'Bu<span class=\"boldwunderline\">ch</span>', jumppoint: 'C-CH' },
			{ wuert: 'B<span class=\"boldwunderline\">u</span>chstaf', jumppoint: 'U-U' },
			// { wuert: 'Buedem', jumppoint: 'E-UE' },
			{ wuert: 'b<span class=\"boldwunderline\">uer</span>en', jumppoint: 'E-UER' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'C', wierder: [
			{ wuert: '<span class=\"boldwunderline\">C</span>abaret', jumppoint: 'C-C' },
			{ wuert: '<span class=\"boldwunderline\">C</span>abinet', jumppoint: 'C-C' },
			{ wuert: '<span class=\"boldwunderline\">C</span>ent', jumppoint: 'C-C2' },
			{ wuert: 'Cit<span class=\"boldwunderline\">é</span>', jumppoint: 'E-É2' },
			{ wuert: '<span class=\"boldwunderline\">c</span>ool', jumppoint: 'C-C' },
			{ wuert: 'Cr<span class=\"boldwunderline\">è</span>che', jumppoint: 'E-È' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'D', wierder: [
			{ wuert: '<span class=\"boldwunderline\">d</span>af', jumppoint: 'D-D' },
			{ wuert: 'Da<span class=\"boldwunderline\">g</span>', jumppoint: 'G-G5' },
			{ wuert: 'Damme<span class=\"boldstrike\">(n)</span>schong', jumppoint: 'N-N2' },
			{ wuert: 'Da<span class=\"boldwunderline\">tz</span>', jumppoint: 'T-TZ' },
			{ wuert: 'D<span class=\"boldwunderline\">au</span>f', jumppoint: 'A-AU' },
			{ wuert: 'de<span class=\"boldwunderline\">nk</span>en', jumppoint: 'G-NK' },
			{ wuert: 'dë<span class=\"boldwunderline\">nn</span>', jumppoint: 'N-NN' },
			{ wuert: 'D<span class=\"boldwunderline\">ë</span>ppen', jumppoint: 'E-Ë' },
			{ wuert: 'd<span class=\"boldwunderline\">i</span>cht', jumppoint: 'I-I2' },
			// { wuert: 'Dier', jumppoint: 'E-UER' },
			{ wuert: 'Dr<span class=\"boldwunderline\">am</span>', jumppoint: 'M-M' },
			{ wuert: '<span class=\"boldwunderline\">D</span>rot', jumppoint: 'D-D' },
			{ wuert: 'd<span class=\"boldwunderline\">uer</span>ch', jumppoint: 'E-UER' },
			{ wuert: 'D<span class=\"boldwunderline\">uu</span>scht', jumppoint: 'U-UU' },
			{ wuert: 'duu<span class=\"boldwunderline\">ss</span>', jumppoint: 'S-SS' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'E', wierder: [
			{ wuert: 'Ee<span class=\"boldwunderline\">ë</span>r', jumppoint: 'E-Ë2' },
			{ wuert: 'erk<span class=\"boldwunderline\">a</span>len', jumppoint: 'A-A' },
			{ wuert: '<span class=\"boldwunderline\">Eu</span>ropa', jumppoint: 'E-EU' }
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
			{ wuert: '<span class=\"boldwunderline\">f</span>äerten', jumppoint: 'F-F' },
			{ wuert: 'fa<span class=\"boldwunderline\">tz</span>eg', jumppoint: 'T-TZ' },
			{ wuert: 'F<span class=\"boldwunderline\">au</span>scht', jumppoint: 'A-AU2' },
			{ wuert: 'f<span class=\"boldwunderline\">é</span>x', jumppoint: 'E-É' },
			{ wuert: 'fi<span class=\"boldwunderline\">dd</span>eren', jumppoint: 'D-DD2' },
			{ wuert: 'Fi<span class=\"boldwunderline\">g</span>', jumppoint: 'G-G3' },
			{ wuert: 'fo<span class=\"boldwunderline\">ll</span>egen', jumppoint: 'L-LL' },
			{ wuert: 'F<span class=\"boldwunderline\">ö</span>n', jumppoint: 'O-Ö' },
			{ wuert: 'fr<span class=\"boldwunderline\">e</span>ch', jumppoint: 'E-E' },	
			{ wuert: 'fr<span class=\"boldwunderline\">ie</span>m', jumppoint: 'I-IE' },	
			{ wuert: 'Fri<span class=\"boldwunderline\">g</span>o', jumppoint: 'G-G' },	
			{ wuert: 'Fu<span class=\"boldwunderline\">rr</span>i', jumppoint: 'R-RR' }	
		], showbuchstaaf: true },
		{ denBuchstaaf: 'G', wierder: [
			{ wuert: 'g<span class=\"boldwunderline\">aa</span>psen', jumppoint: 'A-AA' },
			{ wuert: 'Ga<span class=\"boldwunderline\">nk</span>', jumppoint: 'G-NK' },
			// { wuert: 'gär', jumppoint: 'E-ÄR' },
			{ wuert: 'g<span class=\"boldwunderline\">ë</span>eenegt', jumppoint: 'E-Ë2' },
			{ wuert: 'G<span class=\"boldwunderline\">ei</span>', jumppoint: 'E-EI' },
			{ wuert: 'gef<span class=\"boldwunderline\">öö</span>nt', jumppoint: 'O-ÖÖ' },
			{ wuert: 'gekr<span class=\"boldwunderline\">oo</span>mt', jumppoint: 'O-OO' },
			{ wuert: 'gelé<span class=\"boldwunderline\">ng</span>en', jumppoint: 'G-NG' },
			{ wuert: 'gepr<span class=\"boldwunderline\">ää</span>gt', jumppoint: 'A-ÄÄ' },
			{ wuert: 'Ger<span class=\"boldwunderline\">ü</span>cht', jumppoint: 'U-Ü' },
			{ wuert: 'ge<span class=\"boldwunderline\">üü</span>bt', jumppoint: 'U-ÜÜ' },
			// { wuert: 'giereg', jumppoint: 'E-UER' },
			{ wuert: '<span class=\"boldwunderline\">G</span>ittar', jumppoint: 'G-G' },
			{ wuert: 'Gra<span class=\"boldwunderline\">d</span>', jumppoint: 'D-D2' },
			{ wuert: 'Grompere<span class=\"boldwunderline\">n</span>zalot', jumppoint: 'N-N3' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'H', wierder: [
			{ wuert: 'Ha<span class=\"boldwunderline\">ff</span>', jumppoint: 'F-FF' },
			{ wuert: 'H<span class=\"boldwunderline\">ai</span>ser', jumppoint: 'A-AI' },
			{ wuert: 'He<span class=\"boldwunderline\">x</span>', jumppoint: 'X-X' },
			{ wuert: 'H<span class=\"boldwunderline\">ier</span>scht', jumppoint: 'E-IER' },
			{ wuert: 'H<span class=\"boldwunderline\">ie</span>wel', jumppoint: 'I-IE' },
			{ wuert: '<span class=\"boldwunderline\">H</span>oer', jumppoint: 'H-H' },
			{ wuert: 'H<span class=\"boldwunderline\">ue</span>s', jumppoint: 'U-UE' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'I', wierder: [
			{ wuert: 'I<span class=\"boldwunderline\">g</span>el', jumppoint: 'G-G2' },
			{ wuert: 'Informati<span class=\"boldwunderline\">ou</span>n', jumppoint: 'U-OU' },
			{ wuert: '<span class=\"boldwunderline\">I</span>nsel', jumppoint: 'I-I2' }
			// { wuert: 'iren (sech)', jumppoint: 'E-IR' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'J', wierder: [
			{ wuert: '<span class=\"boldwunderline\">J</span>ackett', jumppoint: 'J-J' },
//{ wuert: 'Jeeër', jumppoint: 'E-Ë2' },
			{ wuert: '<span class=\"boldwunderline\">j</span>iipsen', jumppoint: 'J-J' },
			{ wuert: '<span class=\"boldwunderline\">J</span>oer', jumppoint: 'J-J2' },
			{ wuert: '<span class=\"boldwunderline\">J</span>ughurt', jumppoint: 'J-J2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'K', wierder: [
			{ wuert: 'Ka<span class=\"boldwunderline\">b</span>es', jumppoint: 'B-B' },
			{ wuert: 'K<span class=\"boldwunderline\">äer</span>z', jumppoint: 'E-ÄER' },
			{ wuert: 'ka<span class=\"boldwunderline\">l</span>', jumppoint: 'L-L' },
			{ wuert: 'Ka<span class=\"boldwunderline\">nn</span>er', jumppoint: 'N-NN' },
			// { wuert: 'Kären', jumppoint: 'E-ÄR' },
			{ wuert: 'Katalo<span class=\"boldwunderline\">g</span>', jumppoint: 'G-G5' },
			{ wuert: 'Ka<span class=\"boldwunderline\">z</span>', jumppoint: 'Z-Z' },
			{ wuert: 'Kee<span class=\"boldwunderline\">s</span>en', jumppoint: 'S-S' },
			{ wuert: 'K<span class=\"boldwunderline\">éi</span>s', jumppoint: 'E-ÉI' },
			{ wuert: 'k<span class=\"boldwunderline\">e</span>ng', jumppoint: 'E-E' },
			{ wuert: 'Kë<span class=\"boldwunderline\">sch</span>t', jumppoint: 'S-SCH' },
			{ wuert: 'Ke<span class=\"boldwunderline\">tt</span>en', jumppoint: 'T-TT' },
			{ wuert: 'Ki<span class=\"boldwunderline\">ch</span>elchen', jumppoint: 'C-CH2' },
			{ wuert: 'K<span class=\"boldwunderline\">ier</span>ch', jumppoint: 'E-IER' },
			{ wuert: 'K<span class=\"boldwunderline\">ii</span>scht', jumppoint: 'I-II' },
			{ wuert: '<span class=\"boldwunderline\">K</span>innek', jumppoint: 'K-K' },					// richteg?????
			{ wuert: 'kla<span class=\"boldwunderline\">mm</span>en', jumppoint: 'M-MM' },
			{ wuert: 'kla<span class=\"boldwunderline\">p</span>en', jumppoint: 'P-P' },
			{ wuert: 'kla<span class=\"boldwunderline\">pp</span>en', jumppoint: 'P-PP' },
			{ wuert: '<span class=\"boldwunderline\">K</span>lass', jumppoint: 'K-K' },
			{ wuert: 'kl<span class=\"boldwunderline\">au</span>en', jumppoint: 'A-AU' },
			// { wuert: 'klibberen', jumppoint: 'B-BB' },
			{ wuert: 'Klu<span class=\"boldwunderline\">dd</span>er', jumppoint: 'D-DD2' },
			{ wuert: 'klu<span class=\"boldwunderline\">g</span>', jumppoint: 'G-G5' },
			{ wuert: 'Kn<span class=\"boldwunderline\">ä</span>tsch', jumppoint: 'A-Ä' },
			{ wuert: 'kni<span class=\"boldwunderline\">ww</span>elen', jumppoint: 'W-WW' },
			{ wuert: 'Kno<span class=\"boldwunderline\">sp</span>', jumppoint: 'S-SP' },
			{ wuert: 'K<span class=\"boldwunderline\">ou</span>', jumppoint: 'O-OU' },
			{ wuert: 'K<span class=\"boldwunderline\">r</span>aaft', jumppoint: 'R-R' },
			{ wuert: 'Kra<span class=\"boldwunderline\">bb</span>', jumppoint: 'B-BB' },
			{ wuert: 'kri<span class=\"boldwunderline\">dd</span>eleg', jumppoint: 'D-DD2' },
			{ wuert: 'kr<span class=\"boldwunderline\">o</span>mm', jumppoint: 'O' },
			{ wuert: 'K<span class=\"boldwunderline\">ü</span>b', jumppoint: 'U-Ü' },
			{ wuert: 'ku<span class=\"boldwunderline\">ck</span>en', jumppoint: 'K-CK' },
			{ wuert: 'K<span class=\"boldwunderline\">ue</span>l', jumppoint: 'U-UE' },
			{ wuert: 'Kü<span class=\"boldwunderline\">st</span>', jumppoint: 'S-ST' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'L', wierder: [
			{ wuert: 'laa<span class=\"boldwunderline\">ch</span>en', jumppoint: 'C-CH' },
			{ wuert: 'La<span class=\"boldwunderline\">ch</span>', jumppoint: 'C-CH' },
			{ wuert: 'La<span class=\"boldwunderline\">g</span>', jumppoint: 'G-G5' },
			{ wuert: 'Léi<span class=\"boldwunderline\">w</span>', jumppoint: 'W-W2' },
			{ wuert: 'L<span class=\"boldwunderline\">ü</span>ster', jumppoint: 'U-Ü2' },
			{ wuert: 'Lyc<span class=\"boldwunderline\">é</span>e', jumppoint: 'E-É2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'M', wierder: [
			{ wuert: 'Ma<span class=\"boldwunderline\">ll</span>', jumppoint: 'L-LL' },
			{ wuert: 'Ma<span class=\"boldwunderline\">mm</span>', jumppoint: 'M-MM' },
			{ wuert: 'm<span class=\"boldwunderline\">é</span>cht', jumppoint: 'E-É' },
			{ wuert: 'M<span class=\"boldwunderline\">ë</span>llech', jumppoint: 'E-Ë' },
			{ wuert: 'M<span class=\"boldwunderline\">ë</span>scht', jumppoint: 'E-Ë' },
			{ wuert: 'M<span class=\"boldwunderline\">e</span>ter', jumppoint: 'E-E2' },
			{ wuert: 'Migr<span class=\"boldwunderline\">ä</span>n', jumppoint: 'A-Ä' },
			{ wuert: 'Minist<span class=\"boldwunderline\">è</span>re', jumppoint: 'E-È' },
			{ wuert: 'Mi<span class=\"boldwunderline\">ww</span>el', jumppoint: 'W-WW' },
			{ wuert: 'Mi<span class=\"boldwunderline\">x</span>er', jumppoint: 'X-X' },
			{ wuert: 'mo<span class=\"boldwunderline\">l</span>en', jumppoint: 'L-L' },
			{ wuert: 'mo<span class=\"boldwunderline\">tz</span>en', jumppoint: 'Z-TZ' },
			{ wuert: 'Mus<span class=\"boldwunderline\">é</span>e', jumppoint: 'E-É2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'N', wierder: [
			{ wuert: '<span class=\"boldwunderline\">n</span>äischt', jumppoint: 'N-N' },
			{ wuert: 'n<span class=\"boldwunderline\">ee</span>', jumppoint: 'E-EE' },
			{ wuert: 'n<span class=\"boldwunderline\">i</span>mools', jumppoint: 'I-I' },
			{ wuert: 'N<span class=\"boldwunderline\">u</span>mmer', jumppoint: 'U-U' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'O', wierder: [
			{ wuert: 'Oli<span class=\"boldwunderline\">v</span>', jumppoint: 'V-V3' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'P', wierder: [
			{ wuert: 'P<span class=\"boldwunderline\">e</span>ch', jumppoint: 'E-E' },
			{ wuert: 'P<span class=\"boldwunderline\">ë</span>ll', jumppoint: 'E-Ë' },
			{ wuert: 'P<span class=\"boldwunderline\">é</span>ng', jumppoint: 'E-É' },
			{ wuert: '<span class=\"boldwunderline\">Pf</span>licht', jumppoint: 'P-PF' },
			{ wuert: 'Pi<span class=\"boldwunderline\">j</span>en', jumppoint: 'J-J' },
			{ wuert: 'pla<span class=\"boldwunderline\">tt</span>', jumppoint: 'T-TT' },
			{ wuert: 'Pra<span class=\"boldwunderline\">bb</span>eli', jumppoint: 'B-BB2' },
			{ wuert: 'pr<span class=\"boldwunderline\">ä</span>gen', jumppoint: 'A-Ä' },
			{ wuert: '<span class=\"boldwunderline\">P</span>oul', jumppoint: 'P-P' },
			{ wuert: 'Ps<span class=\"boldwunderline\">y</span>chologie', jumppoint: 'Y-Y' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'Q', wierder: [
			{ wuert: '<span class=\"boldwunderline\">q</span>uaken', jumppoint: 'Q-Q' },
			{ wuert: 'qu<span class=\"boldwunderline\">ä</span>len', jumppoint: 'A-Ä' },
			{ wuert: '<span class=\"boldwunderline\">q</span>ueesch', jumppoint: 'Q-Q' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'R', wierder: [
			{ wuert: 'ra<span class=\"boldwunderline\">sch</span>elen', jumppoint: 'S-SCH' },
			{ wuert: 'r<span class=\"boldwunderline\">a</span>schten', jumppoint: 'A-A2' },
			{ wuert: 'R<span class=\"boldwunderline\">ee</span>n', jumppoint: 'E-EE' },
			{ wuert: 'Ree<span class=\"boldwunderline\">s</span>', jumppoint: 'S-S3' },
			{ wuert: 'R<span class=\"boldwunderline\">ei</span>', jumppoint: 'E-EI' },
			{ wuert: 'Re<span class=\"boldwunderline\">sp</span>ekt', jumppoint: 'S-SP' },
			{ wuert: 'Re<span class=\"boldwunderline\">v</span>isioun', jumppoint: 'V-V' },
			{ wuert: '<span class=\"boldwunderline\">r</span>ichteg', jumppoint: 'R-R' },
			{ wuert: 'rose<span class=\"boldwunderline\">n</span>', jumppoint: 'N-N' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'S', wierder: [
			{ wuert: '<span class=\"boldwunderline\">S</span>aachen', jumppoint: 'S-S' },
			{ wuert: 'S<span class=\"boldwunderline\">ai</span>er', jumppoint: 'A-AI' },
			{ wuert: '<span class=\"boldwunderline\">sch</span>éin', jumppoint: 'S-SCH' },
			{ wuert: 'Sch<span class=\"boldwunderline\">ie</span>t', jumppoint: 'E-IE' },
			{ wuert: 'schl<span class=\"boldwunderline\">o</span>fen', jumppoint: 'O-O2' },
			{ wuert: 'schm<span class=\"boldwunderline\">aa</span>chen', jumppoint: 'A-AA' },
			{ wuert: 'Schma<span class=\"boldwunderline\">dd</span>', jumppoint: 'D-DD' },
			{ wuert: 'schmo<span class=\"boldwunderline\">ck</span>', jumppoint: 'C-CK' },
			{ wuert: 'Schn<span class=\"boldwunderline\">éi</span>', jumppoint: 'E-ÉI' },
			{ wuert: 'Schue<span class=\"boldwunderline\">d</span>', jumppoint: 'D-D2' },
			{ wuert: 'See<span class=\"boldwunderline\">ë</span>rei', jumppoint: 'E-Ë2' },
			{ wuert: 's<span class=\"boldwunderline\">éi</span>er', jumppoint: 'E-ÉI' },
			{ wuert: '<span class=\"boldwunderline\">S</span>ilvester', jumppoint: 'S-S2' },
			{ wuert: 's<span class=\"boldwunderline\">ou</span>eren', jumppoint: 'O-OU' },
			{ wuert: '<span class=\"boldwunderline\">sp</span>äizen', jumppoint: 'S-SP2' },
			{ wuert: '<span class=\"boldwunderline\">Sp</span>eck', jumppoint: 'S-SP2' },
			{ wuert: 'Spi<span class=\"boldwunderline\">g</span>el', jumppoint: 'G-G2' },
			{ wuert: 'Sp<span class=\"boldwunderline\">i</span>ll', jumppoint: 'I-I2' },
			// { wuert: 'Spur (eng)', jumppoint: 'E-IR' },
			{ wuert: '<span class=\"boldwunderline\">st</span>aark', jumppoint: 'S-ST2' },
			{ wuert: 'St<span class=\"boldwunderline\">äer</span>kt', jumppoint: 'E-ÄER' },
			{ wuert: 'st<span class=\"boldwunderline\">äi</span>pen', jumppoint: 'A-ÄI' },
			{ wuert: 'Stä<span class=\"boldwunderline\">r</span>', jumppoint: 'R-R2' },
			{ wuert: 'St<span class=\"boldwunderline\">é</span>ck', jumppoint: 'E-É' },
			{ wuert: '<span class=\"boldwunderline\">St</span>iwwel', jumppoint: 'S-ST2' },
			{ wuert: 'Str<span class=\"boldwunderline\">ee</span>ch', jumppoint: 'E-EE' },
			{ wuert: 'Str<span class=\"boldwunderline\">e</span>nz', jumppoint: 'E-E' },
			{ wuert: 'St<span class=\"boldwunderline\">uer</span>m', jumppoint: 'E-UER' },
			{ wuert: '<span class=\"boldwunderline\">s</span>uper', jumppoint: 'S-S2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'T', wierder: [
			{ wuert: 'T<span class=\"boldwunderline\">ë</span>lee', jumppoint: 'E-Ë' },
			{ wuert: 'Te<span class=\"boldwunderline\">rr</span>ain', jumppoint: 'R-RR' },
			{ wuert: 'T<span class=\"boldwunderline\">ii</span>tchen', jumppoint: 'I-II' },
			{ wuert: 'Tra<span class=\"boldwunderline\">p</span>', jumppoint: 'P-P' },
			{ wuert: 'trend<span class=\"boldwunderline\">y</span>', jumppoint: 'Y-Y' },
			{ wuert: 'Trib<span class=\"boldwunderline\">ü</span>n', jumppoint: 'U-Ü' },
			{ wuert: 'T<span class=\"boldwunderline\">u</span>ba', jumppoint: 'U-U2' },
			{ wuert: 'T<span class=\"boldwunderline\">u</span>t', jumppoint: 'U-U2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'U', wierder: [
			{ wuert: '<span class=\"boldwunderline\">Ue</span>cht', jumppoint: 'E-UE' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'V', wierder: [
			{ wuert: 'va<span class=\"boldwunderline\">g</span>', jumppoint: 'G-G3' },
			{ wuert: '<span class=\"boldwunderline\">V</span>akanz', jumppoint: 'V-V2' },
			{ wuert: '<span class=\"boldwunderline\">V</span>anill', jumppoint: 'V-V2' },
			{ wuert: '<span class=\"boldwunderline\">V</span>as', jumppoint: 'V-V2' },
			{ wuert: '<span class=\"boldwunderline\">v</span>erléieren', jumppoint: 'V-V' },
			{ wuert: 'ver<span class=\"boldwunderline\">z</span>ielen', jumppoint: 'Z-Z' },
			{ wuert: '<span class=\"boldwunderline\">v</span>iischt', jumppoint: 'V-V' },
			{ wuert: '<span class=\"boldwunderline\">V</span>illchen', jumppoint: 'V-V' },
			{ wuert: '<span class=\"boldwunderline\">V</span>ott', jumppoint: 'V-V2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'W', wierder: [
			{ wuert: '<span class=\"boldwunderline\">w</span>aarm', jumppoint: 'W-W' },
			{ wuert: 'Wa<span class=\"boldwunderline\">b</span>', jumppoint: 'B-B2' },
			{ wuert: 'Wa<span class=\"boldwunderline\">gg</span>on', jumppoint: 'G-GG' },
			{ wuert: '<span class=\"boldwunderline\">w</span>ibbelen', jumppoint: 'W-W' },
			{ wuert: 'Wie<span class=\"boldwunderline\">r</span>der', jumppoint: 'R-R3' },
			{ wuert: 'Wi<span class=\"boldwunderline\">tz</span>', jumppoint: 'Z-TZ' },
			{ wuert: 'w<span class=\"boldwunderline\">ou</span>', jumppoint: 'O-OU' },
			{ wuert: 'Wue<span class=\"boldwunderline\">r</span>t', jumppoint: 'R-R3' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'X', wierder: [
			{ wuert: '<span class=\"boldwunderline\">X</span>ylophon', jumppoint: 'X-X' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'Y', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'Z', wierder: [
			{ wuert: 'Za<span class=\"boldwunderline\">ck</span>', jumppoint: 'K-CK' },
			{ wuert: '<span class=\"boldwunderline\">Z</span>alot', jumppoint: 'Z-Z' },
			{ wuert: 'zé<span class=\"boldwunderline\">ck</span>en', jumppoint: 'C-CK' },
			{ wuert: 'Zeitu<span class=\"boldwunderline\">ng</span>', jumppoint: 'G-NG' },
			{ wuert: 'Z<span class=\"boldwunderline\">i</span>l', jumppoint: 'I-I' },
			{ wuert: 'Zi<span class=\"boldwunderline\">pf</span>elmutz', jumppoint: 'P-PF' },
			{ wuert: 'Zoo<span class=\"boldwunderline\">ss</span>', jumppoint: 'S-SS' },
			{ wuert: 'Zo<span class=\"boldwunderline\">pp</span>', jumppoint: 'P-PP' },
			{ wuert: 'z<span class=\"boldwunderline\">ou</span>', jumppoint: 'U-OU' }
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
		console.log('Init start');
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
		// setupPush();
		// prepareAudio();
		console.log('Init complete');
    },
	onPageInit: function (page) {
		//setupPush();
	}
});

if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) 
{ 
	document.addEventListener("deviceready", onDeviceReady, false); 
} else { 
	onDeviceReady(); 
}
function onDeviceReady()
{
	console.log('deviceready hook');
	prepareAudioPlayer();
	
};

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
  spaceBetween: 18,
  slidesPerView: 'auto',
  effect: 'slide',
  parallax: true,
  centeredSlides: false,
  zoom: true,
  direction: 'vertical'
});

var tour = localStorage.getItem("tour");
var welcomeText = [{
		id: 'slide0',
		picture: '<div class="tutorialicon tutorialicon1"></div>',
		text: 'Buschtaf auswielen, fir Beispillwierder gewisen ze kréien.'
	}, {
		id: 'slide1',
		picture: '<div class="tutorialicon tutorialicon2"></div>',
		text: 'Korrekt Aussprooch lauschteren.'
	}, {
		id: 'slide2',
		picture: '<div class="tutorialicon tutorialicon3"></div>',
		text: 'Déi ugewante Regel liesen.'
	}, {
		id: 'slide3',
		picture: '<div class="tutorialicon tutorialicon4"></div>',
		text: 'Wierderlëscht kucken a Regelen zu de Wierder nosichen.'
	}, {
		id: 'slide4',
		picture: '<div class="tutorialicon tutorialicon5"></div>',
		text: 'Lëtzebuergesch Orthographie an Aussprooch besser verstoen a uwenden.'
	}];
if (!tour || tour == "0") {
	myApp.welcomescreen(welcomeText, {
		'bgcolor': '#1e5799',
		'fontcolor': '#fafafa',
		'closeButtonText': 'zoumaachen',
		'onClosed': function() {
					localStorage.setItem("tour", "1"); // will not make the tour run again
			}
	});
}

$$(document).on('click', '.tutorial-close-btn', function () {
  myApp.welcomescreen.close();
});

$$('.tutorial-open-btn').click(function () {
  myApp.welcomescreen.open();  
});

$$('.logokonterbont').click(function () {
  openStore();  
});

var helpText = [{
		id: 'slide0',
		picture: '<div class="tutorialicon helpicon1"></div>',
		text: 'De Menu<br>vun uewe no ennen: Wiederlëscht, Startsäit, Informatiounen'
	}, {
		id: 'slide1',
		picture: '<div class="tutorialicon helpicon2"></div>',
		text: 'Buschtaf auswielen'
	}, {
		id: 'slide2',
		picture: '<div class="tutorialicon helpicon3"></div>',
		text: 'Regel uweisen'
	}, {
		id: 'slide3',
		picture: '<div class="tutorialicon helpicon4"></div>',
		text: 'Toun oofspillen'
	}, {
		id: 'slide4',
		picture: '<div class="tutorialicon helpicon5"></div>',
		text: 'D\'Wierderlëscht'
	}];

$$('#helpbutton').click(function () {
	myApp.welcomescreen(helpText, {
		'bgcolor': '#1e5799',
		'fontcolor': '#fafafa',
		'closeButtonText': 'zoumaachen'
	});
});

$$(document).on('click', '.tutorial-next-link', function (e) {
  myApp.welcomescreen.next(); 
});

$$(document).on('click', '.tutorial-previous-slide', function (e) {
  myApp.welcomescreen.previous(); 
});

/*
$$(document).on('click', 'icon-bars', function (e) {
	$$('.tab-link').attr('height','0px');
});		
*/
/*
myApp.onPageInit('index', function() {
    
}).trigger();
*/
		
		
		/*
 push.on('registration', function(data) {
            console.log('registration event: ' + data.registrationId);

            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }

		
			
			$$('#thecontent').html($$('#thecontent').html + '<h1>'+data.registrationId+'</h1>');
		
        });		
		*/



