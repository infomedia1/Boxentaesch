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
			{ wuert: '<span class=\"bold\">aa</span>chtmol', jumppoint: 'A-AA' },
			{ wuert: '<span class=\"bold\">Ä</span>erd', jumppoint: 'E-ÄER' },
			{ wuert: '<span class=\"bold\">A</span>f', jumppoint: 'A-A' },
			{ wuert: '<span class=\"bold\">A</span>ffekot', jumppoint: 'A-A2' },
			{ wuert: 'A<span class=\"bold\">ff</span>iche', jumppoint: 'F-FF' },
			{ wuert: 'af<span class=\"bold\">ü</span>gen', jumppoint: 'U-Ü' },
			{ wuert: 'ag<span class=\"bold\">ë</span>engt', jumppoint: 'E-Ë2' },
			{ wuert: 'agef<span class=\"bold\">üü</span>gt', jumppoint: 'U-ÜÜ' },
			{ wuert: 'Alphab<span class=\"bold\">e</span>t', jumppoint: 'E-E' },
			{ wuert: 'Athl<span class=\"bold\">e</span>t', jumppoint: 'E-E' },
			{ wuert: '<span class=\"bold\">Ä</span>ntwert', jumppoint: 'A-Ä2' },
			{ wuert: 'äre<span class=\"bold\">n</span> Auto', jumppoint: 'N-N3' },
			{ wuert: 'a<span class=\"bold\">w</span>er', jumppoint: 'W-W' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'B', wierder: [
			{ wuert: 'Ba<span class=\"bold\">gg</span>er', jumppoint: 'G-GG' },
			{ wuert: '<span class=\"bold\">b</span>aken', jumppoint: 'B-B' },
			{ wuert: 'B<span class=\"bold\">a</span>m', jumppoint: 'A-A' },
			{ wuert: 'Ba<span class=\"bold\">rr</span>ikaden', jumppoint: 'R-RR' },
			{ wuert: 'ba<span class=\"bold\">st</span>elen', jumppoint: 'S-ST' },
			{ wuert: 'B<span class=\"bold\">au</span>ch', jumppoint: 'A-AU2' },
			{ wuert: '<span class=\"bold\">B</span>auer', jumppoint: 'B-B' },
			// { wuert: 'Bëbee', jumppoint: 'E-Ë' },
			{ wuert: 'B<span class=\"bold\">é</span>chs', jumppoint: 'E-É' },
			{ wuert: 'be<span class=\"bold\">h</span>uelen', jumppoint: 'H-H' },
			{ wuert: 'Belee<span class=\"bold\">g</span>', jumppoint: 'G-G4' },
			{ wuert: 'bero<span class=\"bold\">d</span>en', jumppoint: 'D-D' },
			{ wuert: 'Beru<span class=\"bold\">ff</span>', jumppoint: 'F-FF' },
			// { wuert: 'bestueden', jumppoint: 'E-IE' },
			{ wuert: 'b<span class=\"bold\">ie</span>den', jumppoint: 'E-IE' },
			{ wuert: 'Bie<span class=\"bold\">r</span>', jumppoint: 'R-R2' },
			{ wuert: 'Bier<span class=\"bold\">g</span>', jumppoint: 'G-G4' },
			{ wuert: 'B<span class=\"bold\">ii</span>scht', jumppoint: 'I-II' },
			{ wuert: 'Billj<span class=\"bold\">ee</span>', jumppoint: 'E-EE' },
			// { wuert: 'blären', jumppoint: 'E-ÄR' },
			{ wuert: 'Bla<span class=\"bold\">t</span>', jumppoint: 'T-T' },
			{ wuert: 'Bl<span class=\"bold\">éi</span>', jumppoint: 'E-ÉI' },
			{ wuert: 'bl<span class=\"bold\">ei</span>wen', jumppoint: 'E-EI' },
			{ wuert: 'bl<span class=\"bold\">ö</span>d', jumppoint: 'O-Ö' },
			{ wuert: 'bl<span class=\"bold\">öö</span>dsten', jumppoint: 'O-ÖÖ' },
			{ wuert: 'bo<span class=\"bold\">tz</span>en', jumppoint: 'T-TZ' },
			{ wuert: 'B<span class=\"bold\">ou</span>n', jumppoint: 'U-OU' },
			{ wuert: 'bra<span class=\"bold\">v</span>', jumppoint: 'V-V3' },
			{ wuert: 'Bu<span class=\"bold\">ch</span>', jumppoint: 'C-CH' },
			{ wuert: 'B<span class=\"bold\">u</span>chstaf', jumppoint: 'U-U' },
			// { wuert: 'Buedem', jumppoint: 'E-UE' },
			{ wuert: 'b<span class=\"bold\">uer</span>en', jumppoint: 'E-UER' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'C', wierder: [
			{ wuert: '<span class=\"bold\">C</span>abaret', jumppoint: 'C-C' },
			{ wuert: '<span class=\"bold\">C</span>abinet', jumppoint: 'C-C' },
			{ wuert: '<span class=\"bold\">C</span>ent', jumppoint: 'C-C2' },
			{ wuert: 'Cit<span class=\"bold\">é</span>', jumppoint: 'E-É2' },
			{ wuert: '<span class=\"bold\">c</span>ool', jumppoint: 'C-C' },
			{ wuert: 'Cr<span class=\"bold\">è</span>che', jumppoint: 'E-È' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'D', wierder: [
			{ wuert: '<span class=\"bold\">d</span>af', jumppoint: 'D-D' },
			{ wuert: 'Da<span class=\"bold\">g</span>', jumppoint: 'G-G5' },
			{ wuert: 'Damme(<span class=\"bold\">n</span>)schong', jumppoint: 'N-N2' },
			{ wuert: 'Da<span class=\"bold\">tz</span>', jumppoint: 'T-TZ' },
			{ wuert: 'D<span class=\"bold\">au</span>f', jumppoint: 'A-AU' },
			{ wuert: 'de<span class=\"bold\">nk</span>en', jumppoint: 'G-NK' },
			{ wuert: 'dë<span class=\"bold\">nn</span>', jumppoint: 'N-NN' },
			{ wuert: 'D<span class=\"bold\">ë</span>ppen', jumppoint: 'E-Ë' },
			{ wuert: 'd<span class=\"bold\">i</span>cht', jumppoint: 'I-I2' },
			// { wuert: 'Dier', jumppoint: 'E-UER' },
			{ wuert: 'Dr<span class=\"bold\">am</span>', jumppoint: 'M-M' },
			{ wuert: '<span class=\"bold\">D</span>rot', jumppoint: 'D-D' },
			{ wuert: 'd<span class=\"bold\">uer</span>ch', jumppoint: 'E-UER' },
			{ wuert: 'D<span class=\"bold\">uu</span>scht', jumppoint: 'U-UU' },
			{ wuert: 'duu<span class=\"bold\">ss</span>', jumppoint: 'S-SS' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'E', wierder: [
			{ wuert: 'Ee<span class=\"bold\">ë</span>r', jumppoint: 'E-Ë2' },
			{ wuert: 'erk<span class=\"bold\">a</span>len', jumppoint: 'A-A' },
			{ wuert: '<span class=\"bold\">Eu</span>ropa', jumppoint: 'E-EU' }
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
			{ wuert: '<span class=\"bold\">f</span>äerten', jumppoint: 'F-F' },
			{ wuert: 'fa<span class=\"bold\">tz</span>eg', jumppoint: 'T-TZ' },
			{ wuert: 'F<span class=\"bold\">au</span>scht', jumppoint: 'A-AU2' },
			{ wuert: 'f<span class=\"bold\">é</span>x', jumppoint: 'E-É' },
			{ wuert: 'fi<span class=\"bold\">dd</span>eren', jumppoint: 'D-DD2' },
			{ wuert: 'Fi<span class=\"bold\">g</span>', jumppoint: 'G-G3' },
			{ wuert: 'fo<span class=\"bold\">ll</span>egen', jumppoint: 'L-LL' },
			{ wuert: 'F<span class=\"bold\">ö</span>n', jumppoint: 'O-Ö' },
			{ wuert: 'fr<span class=\"bold\">e</span>ch', jumppoint: 'E-E' },	
			{ wuert: 'fr<span class=\"bold\">ie</span>m', jumppoint: 'I-IE' },	
			{ wuert: 'Fri<span class=\"bold\">g</span>o', jumppoint: 'G-G' },	
			{ wuert: 'Fu<span class=\"bold\">rr</span>i', jumppoint: 'R-RR' }	
		], showbuchstaaf: true },
		{ denBuchstaaf: 'G', wierder: [
			{ wuert: 'g<span class=\"bold\">aa</span>psen', jumppoint: 'A-AA' },
			{ wuert: 'Ga<span class=\"bold\">nk</span>', jumppoint: 'G-NK' },
			// { wuert: 'gär', jumppoint: 'E-ÄR' },
			{ wuert: 'g<span class=\"bold\">ë</span>eenegt', jumppoint: 'E-Ë2' },
			{ wuert: 'G<span class=\"bold\">ei</span>', jumppoint: 'E-EI' },
			{ wuert: 'gef<span class=\"bold\">öö</span>nt', jumppoint: 'O-ÖÖ' },
			{ wuert: 'gekr<span class=\"bold\">oo</span>mt', jumppoint: 'O-OO' },
			{ wuert: 'gelé<span class=\"bold\">ng</span>en', jumppoint: 'G-NG' },
			{ wuert: 'gepr<span class=\"bold\">ää</span>gt', jumppoint: 'A-ÄÄ' },
			{ wuert: 'Ger<span class=\"bold\">ü</span>cht', jumppoint: 'U-Ü' },
			{ wuert: 'ge<span class=\"bold\">üü</span>bt', jumppoint: 'U-ÜÜ' },
			// { wuert: 'giereg', jumppoint: 'E-UER' },
			{ wuert: '<span class=\"bold\">G</span>ittar', jumppoint: 'G-G' },
			{ wuert: 'Gra<span class=\"bold\">d</span>', jumppoint: 'D-D2' },
			{ wuert: 'Grompere<span class=\"bold\">n</span>zalot', jumppoint: 'N-N3' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'H', wierder: [
			{ wuert: 'Ha<span class=\"bold\">ff</span>', jumppoint: 'F-FF' },
			{ wuert: 'H<span class=\"bold\">ai</span>ser', jumppoint: 'A-AI' },
			{ wuert: 'He<span class=\"bold\">x</span>', jumppoint: 'X-X' },
			{ wuert: 'H<span class=\"bold\">ier</span>scht', jumppoint: 'E-IER' },
			{ wuert: 'H<span class=\"bold\">ie</span>wel', jumppoint: 'I-IE' },
			{ wuert: '<span class=\"bold\">H</span>oer', jumppoint: 'H-H' },
			{ wuert: 'H<span class=\"bold\">ue</span>s', jumppoint: 'U-UE' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'I', wierder: [
			{ wuert: 'I<span class=\"bold\">g</span>el', jumppoint: 'G-G2' },
			{ wuert: 'Informati<span class=\"bold\">ou</span>n', jumppoint: 'U-OU' },
			{ wuert: '<span class=\"bold\">I</span>nsel', jumppoint: 'I-I2' }
			// { wuert: 'iren (sech)', jumppoint: 'E-IR' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'J', wierder: [
			{ wuert: '<span class=\"bold\">J</span>ackett', jumppoint: 'J-J' },
//{ wuert: 'Jeeër', jumppoint: 'E-Ë2' },
			{ wuert: '<span class=\"bold\">j</span>iipsen', jumppoint: 'J-J' },
			{ wuert: '<span class=\"bold\">J</span>oer', jumppoint: 'J-J2' },
			{ wuert: '<span class=\"bold\">J</span>ughurt', jumppoint: 'J-J2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'K', wierder: [
			{ wuert: 'Ka<span class=\"bold\">b</span>es', jumppoint: 'B-B' },
			{ wuert: 'K<span class=\"bold\">äer</span>z', jumppoint: 'E-ÄER' },
			{ wuert: 'ka<span class=\"bold\">l</span>', jumppoint: 'L-L' },
			{ wuert: 'Ka<span class=\"bold\">nn</span>er', jumppoint: 'N-NN' },
			// { wuert: 'Kären', jumppoint: 'E-ÄR' },
			{ wuert: 'Katalo<span class=\"bold\">g</span>', jumppoint: 'G-G5' },
			{ wuert: 'Ka<span class=\"bold\">z</span>', jumppoint: 'Z-Z' },
			{ wuert: 'Kee<span class=\"bold\">s</span>en', jumppoint: 'S-S' },
			{ wuert: 'K<span class=\"bold\">éi</span>s', jumppoint: 'E-ÉI' },
			{ wuert: 'k<span class=\"bold\">e</span>ng', jumppoint: 'E-E' },
			{ wuert: 'Kë<span class=\"bold\">sch</span>t', jumppoint: 'S-SCH' },
			{ wuert: 'Ke<span class=\"bold\">tt</span>en', jumppoint: 'T-TT' },
			{ wuert: 'Ki<span class=\"bold\">ch</span>elchen', jumppoint: 'C-CH2' },
			{ wuert: 'K<span class=\"bold\">ier</span>ch', jumppoint: 'E-IER' },
			{ wuert: 'K<span class=\"bold\">ii</span>scht', jumppoint: 'I-II' },
			{ wuert: '<span class=\"bold\">K</span>innek', jumppoint: 'K-K' },					// richteg?????
			{ wuert: 'kla<span class=\"bold\">mm</span>en', jumppoint: 'M-MM' },
			{ wuert: 'kla<span class=\"bold\">p</span>en', jumppoint: 'P-P' },
			{ wuert: 'kla<span class=\"bold\">pp</span>en', jumppoint: 'P-PP' },
			{ wuert: '<span class=\"bold\">K</span>lass', jumppoint: 'K-K' },
			{ wuert: 'kl<span class=\"bold\">au</span>en', jumppoint: 'A-AU' },
			// { wuert: 'klibberen', jumppoint: 'B-BB' },
			{ wuert: 'Klu<span class=\"bold\">dd</span>er', jumppoint: 'D-DD2' },
			{ wuert: 'klu<span class=\"bold\">g</span>', jumppoint: 'G-G5' },
			{ wuert: 'Kn<span class=\"bold\">ä</span>tsch', jumppoint: 'A-Ä' },
			{ wuert: 'kni<span class=\"bold\">ww</span>elen', jumppoint: 'W-WW' },
			{ wuert: 'Kno<span class=\"bold\">sp</span>', jumppoint: 'S-SP' },
			{ wuert: 'K<span class=\"bold\">ou</span>', jumppoint: 'O-OU' },
			{ wuert: 'K<span class=\"bold\">r</span>aaft', jumppoint: 'R-R' },
			{ wuert: 'Kra<span class=\"bold\">bb</span>', jumppoint: 'B-BB' },
			{ wuert: 'kri<span class=\"bold\">dd</span>eleg', jumppoint: 'D-DD2' },
			{ wuert: 'kr<span class=\"bold\">o</span>mm', jumppoint: 'O' },
			{ wuert: 'K<span class=\"bold\">ü</span>b', jumppoint: 'U-Ü' },
			{ wuert: 'ku<span class=\"bold\">ck</span>en', jumppoint: 'K-CK' },
			{ wuert: 'K<span class=\"bold\">ue</span>l', jumppoint: 'U-UE' },
			{ wuert: 'Kü<span class=\"bold\">st</span>', jumppoint: 'S-ST' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'L', wierder: [
			{ wuert: 'laa<span class=\"bold\">ch</span>en', jumppoint: 'C-CH' },
			{ wuert: 'La<span class=\"bold\">ch</span>', jumppoint: 'C-CH' },
			{ wuert: 'La<span class=\"bold\">g</span>', jumppoint: 'G-G5' },
			{ wuert: 'Léi<span class=\"bold\">w</span>', jumppoint: 'W-W2' },
			{ wuert: 'L<span class=\"bold\">ü</span>ster', jumppoint: 'U-Ü2' },
			{ wuert: 'Lyc<span class=\"bold\">é</span>e', jumppoint: 'E-É2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'M', wierder: [
			{ wuert: 'Ma<span class=\"bold\">ll</span>', jumppoint: 'L-LL' },
			{ wuert: 'Ma<span class=\"bold\">mm</span>', jumppoint: 'M-MM' },
			{ wuert: 'm<span class=\"bold\">é</span>cht', jumppoint: 'E-É' },
			{ wuert: 'M<span class=\"bold\">ë</span>llech', jumppoint: 'E-Ë' },
			{ wuert: 'M<span class=\"bold\">ë</span>scht', jumppoint: 'E-Ë' },
			{ wuert: 'M<span class=\"bold\">e</span>ter', jumppoint: 'E-E2' },
			{ wuert: 'Migr<span class=\"bold\">ä</span>n', jumppoint: 'A-Ä' },
			{ wuert: 'Minist<span class=\"bold\">è</span>re', jumppoint: 'E-È' },
			{ wuert: 'Mi<span class=\"bold\">ww</span>el', jumppoint: 'W-WW' },
			{ wuert: 'Mi<span class=\"bold\">x</span>er', jumppoint: 'X-X' },
			{ wuert: 'mo<span class=\"bold\">l</span>en', jumppoint: 'L-L' },
			{ wuert: 'mo<span class=\"bold\">tz</span>en', jumppoint: 'Z-TZ' },
			{ wuert: 'Mus<span class=\"bold\">é</span>e', jumppoint: 'E-É2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'N', wierder: [
			{ wuert: '<span class=\"bold\">n</span>äischt', jumppoint: 'N-N' },
			{ wuert: 'n<span class=\"bold\">ee</span>', jumppoint: 'E-EE' },
			{ wuert: 'n<span class=\"bold\">i</span>mools', jumppoint: 'I-I' },
			{ wuert: 'N<span class=\"bold\">u</span>mmer', jumppoint: 'U-U' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'O', wierder: [
			{ wuert: 'Oli<span class=\"bold\">v</span>', jumppoint: 'V-V3' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'P', wierder: [
			{ wuert: 'P<span class=\"bold\">e</span>ch', jumppoint: 'E-E' },
			{ wuert: 'P<span class=\"bold\">ë</span>ll', jumppoint: 'E-Ë' },
			{ wuert: 'P<span class=\"bold\">é</span>ng', jumppoint: 'E-É' },
			{ wuert: '<span class=\"bold\">Pf</span>licht', jumppoint: 'P-PF' },
			{ wuert: 'Pi<span class=\"bold\">j</span>en', jumppoint: 'J-J' },
			{ wuert: 'pla<span class=\"bold\">tt</span>', jumppoint: 'T-TT' },
			{ wuert: 'Pra<span class=\"bold\">bb</span>eli', jumppoint: 'B-BB2' },
			{ wuert: 'pr<span class=\"bold\">ä</span>gen', jumppoint: 'A-Ä' },
			{ wuert: '<span class=\"bold\">P</span>oul', jumppoint: 'P-P' },
			{ wuert: 'Ps<span class=\"bold\">y</span>chologie', jumppoint: 'Y-Y' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'Q', wierder: [
			{ wuert: '<span class=\"bold\">q</span>uaken', jumppoint: 'Q-Q' },
			{ wuert: 'qu<span class=\"bold\">ä</span>len', jumppoint: 'A-Ä' },
			{ wuert: '<span class=\"bold\">q</span>ueesch', jumppoint: 'Q-Q' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'R', wierder: [
			{ wuert: 'ra<span class=\"bold\">sch</span>elen', jumppoint: 'S-SCH' },
			{ wuert: 'r<span class=\"bold\">a</span>schten', jumppoint: 'A-A2' },
			{ wuert: 'R<span class=\"bold\">ee</span>n', jumppoint: 'E-EE' },
			{ wuert: 'Ree<span class=\"bold\">s</span>', jumppoint: 'S-S3' },
			{ wuert: 'R<span class=\"bold\">ei</span>', jumppoint: 'E-EI' },
			{ wuert: 'Re<span class=\"bold\">sp</span>ekt', jumppoint: 'S-SP' },
			{ wuert: 'Re<span class=\"bold\">v</span>isioun', jumppoint: 'V-V' },
			{ wuert: '<span class=\"bold\">r</span>ichteg', jumppoint: 'R-R' },
			{ wuert: 'rose<span class=\"bold\">n</span>', jumppoint: 'N-N' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'S', wierder: [
			{ wuert: '<span class=\"bold\">S</span>aachen', jumppoint: 'S-S' },
			{ wuert: 'S<span class=\"bold\">ai</span>er', jumppoint: 'A-AI' },
			{ wuert: '<span class=\"bold\">sch</span>éin', jumppoint: 'S-SCH' },
			{ wuert: 'Sch<span class=\"bold\">ie</span>t', jumppoint: 'E-IE' },
			{ wuert: 'schl<span class=\"bold\">o</span>fen', jumppoint: 'O-O2' },
			{ wuert: 'schm<span class=\"bold\">aa</span>chen', jumppoint: 'A-AA' },
			{ wuert: 'Schma<span class=\"bold\">dd</span>', jumppoint: 'D-DD' },
			{ wuert: 'schmo<span class=\"bold\">ck</span>', jumppoint: 'C-CK' },
			{ wuert: 'Schn<span class=\"bold\">éi</span>', jumppoint: 'E-ÉI' },
			{ wuert: 'Schue<span class=\"bold\">d</span>', jumppoint: 'D-D2' },
			{ wuert: 'See<span class=\"bold\">ë</span>rei', jumppoint: 'E-Ë2' },
			{ wuert: 's<span class=\"bold\">éi</span>er', jumppoint: 'E-ÉI' },
			{ wuert: '<span class=\"bold\">S</span>ilvester', jumppoint: 'S-S2' },
			{ wuert: 's<span class=\"bold\">ou</span>eren', jumppoint: 'O-OU' },
			{ wuert: '<span class=\"bold\">sp</span>äizen', jumppoint: 'S-SP2' },
			{ wuert: '<span class=\"bold\">Sp</span>eck', jumppoint: 'S-SP2' },
			{ wuert: 'Spi<span class=\"bold\">g</span>el', jumppoint: 'G-G2' },
			{ wuert: 'Sp<span class=\"bold\">i</span>ll', jumppoint: 'I-I2' },
			// { wuert: 'Spur (eng)', jumppoint: 'E-IR' },
			{ wuert: '<span class=\"bold\">st</span>aark', jumppoint: 'S-ST2' },
			{ wuert: 'St<span class=\"bold\">äer</span>kt', jumppoint: 'E-ÄER' },
			{ wuert: 'st<span class=\"bold\">äi</span>pen', jumppoint: 'A-ÄI' },
			{ wuert: 'Stä<span class=\"bold\">r</span>', jumppoint: 'R-R2' },
			{ wuert: 'St<span class=\"bold\">é</span>ck', jumppoint: 'E-É' },
			{ wuert: '<span class=\"bold\">St</span>iwwel', jumppoint: 'S-ST2' },
			{ wuert: 'Str<span class=\"bold\">ee</span>ch', jumppoint: 'E-EE' },
			{ wuert: 'Str<span class=\"bold\">e</span>nz', jumppoint: 'E-E' },
			{ wuert: 'St<span class=\"bold\">uer</span>m', jumppoint: 'E-UER' },
			{ wuert: '<span class=\"bold\">s</span>uper', jumppoint: 'S-S2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'T', wierder: [
			{ wuert: 'T<span class=\"bold\">ë</span>lee', jumppoint: 'E-Ë' },
			{ wuert: 'Te<span class=\"bold\">rr</span>ain', jumppoint: 'R-RR' },
			{ wuert: 'T<span class=\"bold\">ii</span>tchen', jumppoint: 'I-II' },
			{ wuert: 'Tra<span class=\"bold\">p</span>', jumppoint: 'P-P' },
			{ wuert: 'trend<span class=\"bold\">y</span>', jumppoint: 'Y-Y' },
			{ wuert: 'Trib<span class=\"bold\">ü</span>n', jumppoint: 'U-Ü' },
			{ wuert: 'T<span class=\"bold\">u</span>ba', jumppoint: 'U-U2' },
			{ wuert: 'T<span class=\"bold\">u</span>t', jumppoint: 'U-U2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'U', wierder: [
			{ wuert: '<span class=\"bold\">Ue</span>cht', jumppoint: 'E-UE' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'V', wierder: [
			{ wuert: 'va<span class=\"bold\">g</span>', jumppoint: 'G-G3' },
			{ wuert: '<span class=\"bold\">V</span>akanz', jumppoint: 'V-V2' },
			{ wuert: '<span class=\"bold\">V</span>anill', jumppoint: 'V-V2' },
			{ wuert: '<span class=\"bold\">V</span>as', jumppoint: 'V-V2' },
			{ wuert: '<span class=\"bold\">v</span>erléieren', jumppoint: 'V-V' },
			{ wuert: 'ver<span class=\"bold\">z</span>ielen', jumppoint: 'Z-Z' },
			{ wuert: '<span class=\"bold\">v</span>iischt', jumppoint: 'V-V' },
			{ wuert: '<span class=\"bold\">V</span>illchen', jumppoint: 'V-V' },
			{ wuert: '<span class=\"bold\">V</span>ott', jumppoint: 'V-V2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'W', wierder: [
			{ wuert: '<span class=\"bold\">w</span>aarm', jumppoint: 'W-W' },
			{ wuert: 'Wa<span class=\"bold\">b</span>', jumppoint: 'B-B2' },
			{ wuert: 'Wa<span class=\"bold\">gg</span>on', jumppoint: 'G-GG' },
			{ wuert: '<span class=\"bold\">w</span>ibbelen', jumppoint: 'W-W' },
			{ wuert: 'Wie<span class=\"bold\">r</span>der', jumppoint: 'R-R3' },
			{ wuert: 'Wi<span class=\"bold\">tz</span>', jumppoint: 'Z-TZ' },
			{ wuert: 'w<span class=\"bold\">ou</span>', jumppoint: 'O-OU' },
			{ wuert: 'Wue<span class=\"bold\">r</span>t', jumppoint: 'R-R3' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'X', wierder: [
			{ wuert: '<span class=\"bold\">X</span>ylophon', jumppoint: 'X-X' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'Y', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'Z', wierder: [
			{ wuert: 'Za<span class=\"bold\">ck</span>', jumppoint: 'K-CK' },
			{ wuert: '<span class=\"bold\">Z</span>alot', jumppoint: 'Z-Z' },
			{ wuert: 'zé<span class=\"bold\">ck</span>en', jumppoint: 'C-CK' },
			{ wuert: 'Zeitu<span class=\"bold\">ng</span>', jumppoint: 'G-NG' },
			{ wuert: 'Z<span class=\"bold\">i</span>l', jumppoint: 'I-I' },
			{ wuert: 'Zi<span class=\"bold\">pf</span>elmutz', jumppoint: 'P-PF' },
			{ wuert: 'Zoo<span class=\"bold\">ss</span>', jumppoint: 'S-SS' },
			{ wuert: 'Zo<span class=\"bold\">pp</span>', jumppoint: 'P-PP' },
			{ wuert: 'z<span class=\"bold\">ou</span>', jumppoint: 'U-OU' }
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
		'closeButtonText': 'iwwersprangen',
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

$$('#helpbutton').click(function () {
  if (!tour || tour == "0") {
	myApp.welcomescreen.open(); 
  } else {
	myApp.welcomescreen(welcomeText, {
		'bgcolor': '#1e5799',
		'fontcolor': '#fafafa',
		'closeButtonText': 'iwwersprangen',
		'onClosed': function() {
					localStorage.setItem("tour", "1"); // will not make the tour run again
			}
	});
  }
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



