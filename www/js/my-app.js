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
		$$('.player-play-icon').html('&#9205;');
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
			Player.media.pause();
			$$('.player-play-icon').html('&#9208;');
			// $$('.bar').css('display','none');
			//$$('.bar').css('display','none');
			$$('.bar').css('animation-play-state','paused');
		} else {
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
			{ wuert: 'aachtmol', jumppoint: 'A-AA' },
			{ wuert: 'Äerd', jumppoint: 'E-ÄER' },
			{ wuert: 'Af', jumppoint: 'A' },
			{ wuert: 'Affekot', jumppoint: 'A' },
			{ wuert: 'Affiche', jumppoint: 'F-FF' },
			{ wuert: 'agëengt', jumppoint: 'E-Ë2' },
			{ wuert: 'Alphabet', jumppoint: 'E' },
			{ wuert: 'Äntwert', jumppoint: 'A-Ä' },
			{ wuert: 'ären Auto', jumppoint: 'N-N2' },
			{ wuert: 'awer', jumppoint: 'W' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'B', wierder: [
			{ wuert: 'Bagger', jumppoint: 'G-GG' },
			{ wuert: 'bäifügen', jumppoint: 'U-Ü' },
			{ wuert: 'bäigefüügt', jumppoint: 'U-ÜÜ' },
			{ wuert: 'Baken', jumppoint: 'B' },
			{ wuert: 'Bam', jumppoint: 'A' },
			{ wuert: 'Barrikaden', jumppoint: 'R-RR' },
			{ wuert: 'bastelen', jumppoint: 'S-ST' },
			{ wuert: 'Bauch', jumppoint: 'A-AU' },
			{ wuert: 'Bauer', jumppoint: 'B' },
			// { wuert: 'Bëbee', jumppoint: 'E-Ë' },
			{ wuert: 'Béchs', jumppoint: 'E-É' },
			{ wuert: 'behuelen', jumppoint: 'H' },
			{ wuert: 'Beleeg', jumppoint: 'G-G3' },
			{ wuert: 'beroden', jumppoint: 'D' },
			{ wuert: 'Beruff', jumppoint: 'F-FF' },
			// { wuert: 'bestueden', jumppoint: 'E-IE' },
			{ wuert: 'bieden', jumppoint: 'E-IE' },
			{ wuert: 'Bier', jumppoint: 'R-R' },
			{ wuert: 'Bierg', jumppoint: 'G-G3' },
			{ wuert: 'Biischt', jumppoint: 'I-II' },
			{ wuert: 'Billjee', jumppoint: 'E-EE' },
			// { wuert: 'blären', jumppoint: 'E-ÄR' },
			{ wuert: 'Blat', jumppoint: 'T' },
			{ wuert: 'Bléi', jumppoint: 'E-ÉI' },
			{ wuert: 'bleiwen', jumppoint: 'E-EI' },
			{ wuert: 'blöd', jumppoint: 'O-Ö' },
			{ wuert: 'blöödsten', jumppoint: 'O-ÖÖ' },
			{ wuert: 'botzen', jumppoint: 'T-TZ' },
			{ wuert: 'Boun', jumppoint: 'U-OU' },
			{ wuert: 'brav', jumppoint: 'V-V' },
			{ wuert: 'Bravour', jumppoint: 'V' },
			{ wuert: 'Buch', jumppoint: 'C-CH' },
			{ wuert: 'Buchstaf', jumppoint: 'U' },
			// { wuert: 'Buedem', jumppoint: 'E-UE' },
			{ wuert: 'bueren', jumppoint: 'E-UER' },
			{ wuert: 'Bün', jumppoint: 'U-Ü' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'C', wierder: [
			{ wuert: 'Cabaret', jumppoint: 'C' },
			{ wuert: 'Cabinet', jumppoint: 'C' },
			{ wuert: 'Cent', jumppoint: 'C' },
			{ wuert: 'Cité', jumppoint: 'E-É2' },
			{ wuert: 'cool', jumppoint: 'C' },
			{ wuert: 'Crèche', jumppoint: 'E-È' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'D', wierder: [
			{ wuert: 'daf', jumppoint: 'D' },
			{ wuert: 'Dag', jumppoint: 'G-G4' },
			{ wuert: 'Dammeschong', jumppoint: 'N-N' },
			{ wuert: 'Datz', jumppoint: 'T-TZ' },
			{ wuert: 'Dauf', jumppoint: 'A-AU' },
			{ wuert: 'denken', jumppoint: 'G-NK' },
			{ wuert: 'dënn', jumppoint: 'N-NN' },
			{ wuert: 'Dëppen', jumppoint: 'E-Ë' },
			{ wuert: 'dicht', jumppoint: 'I' },
			// { wuert: 'Dier', jumppoint: 'E-UER' },
			{ wuert: 'Dram', jumppoint: 'M' },
			{ wuert: 'Drot', jumppoint: 'D' },
			{ wuert: 'duerch', jumppoint: 'E-UER' },
			{ wuert: 'Duuscht', jumppoint: 'U-UU' },
			{ wuert: 'duuss', jumppoint: 'S-SS' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'E', wierder: [
			{ wuert: 'Eeër', jumppoint: 'E-Ë2' },
			{ wuert: 'erkalen', jumppoint: 'A' },
			{ wuert: 'Europa', jumppoint: 'E-EU' }
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
			{ wuert: 'fäerten', jumppoint: 'F' },
			{ wuert: 'fatzeg', jumppoint: 'T-TZ' },
			{ wuert: 'Fauscht', jumppoint: 'A-AU' },
			{ wuert: 'féx', jumppoint: 'E-É' },
			{ wuert: 'fidderen', jumppoint: 'D-DD2' },
			{ wuert: 'Fig', jumppoint: 'G-G2' },
			{ wuert: 'flüsteren', jumppoint: 'U-Ü' },
			{ wuert: 'follegen', jumppoint: 'L-LL' },
			{ wuert: 'Fön', jumppoint: 'O-Ö' },
			{ wuert: 'frech', jumppoint: 'E' },	
			{ wuert: 'friem', jumppoint: 'I-IE' },	
			{ wuert: 'Frigo', jumppoint: 'G' },	
			{ wuert: 'Furri', jumppoint: 'R-RR' }	
		], showbuchstaaf: true },
		{ denBuchstaaf: 'G', wierder: [
			{ wuert: 'gaapsen', jumppoint: 'A-AA' },
			{ wuert: 'Gank', jumppoint: 'G-NK' },
			// { wuert: 'gär', jumppoint: 'E-ÄR' },
			{ wuert: 'gëeenegt', jumppoint: 'E-Ë2' },
			{ wuert: 'Gei', jumppoint: 'E-EI' },
			{ wuert: 'geföönt', jumppoint: 'O-ÖÖ' },
			{ wuert: 'gekroomt', jumppoint: 'O-OO' },
			{ wuert: 'geléngen', jumppoint: 'G-NG' },
			{ wuert: 'gepräägt', jumppoint: 'A-ÄÄ' },
			{ wuert: 'Gerücht', jumppoint: 'U-Ü' },
			{ wuert: 'geüübt', jumppoint: 'U-ÜÜ' },
			// { wuert: 'giereg', jumppoint: 'E-UER' },
			{ wuert: 'Gittar', jumppoint: 'G' },
			{ wuert: 'Grad', jumppoint: 'D-D' },
			{ wuert: 'Gromperenzalot', jumppoint: 'N-N2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'H', wierder: [
			{ wuert: 'Haff', jumppoint: 'F-FF' },
			{ wuert: 'Haiser', jumppoint: 'A-AI' },
			{ wuert: 'Hex', jumppoint: 'X' },
			{ wuert: 'Hierscht', jumppoint: 'E-IER' },
			{ wuert: 'Hiewel', jumppoint: 'I-IE' },
			{ wuert: 'Hoer', jumppoint: 'H' },
			{ wuert: 'Hues', jumppoint: 'U-UE' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'I', wierder: [
			{ wuert: 'Igel', jumppoint: 'G-G' },
			{ wuert: 'Informatioun', jumppoint: 'U-OU' },
			{ wuert: 'Insel', jumppoint: 'I' }
			// { wuert: 'iren (sech)', jumppoint: 'E-IR' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'J', wierder: [
			{ wuert: 'Jackett', jumppoint: 'J' },
			{ wuert: 'Jeeër', jumppoint: 'E-Ë2' },
			{ wuert: 'jiipsen', jumppoint: 'J' },
			{ wuert: 'Joer', jumppoint: 'J-J' },
			{ wuert: 'Jughurt', jumppoint: 'J-J' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'K', wierder: [
			{ wuert: 'Kabes', jumppoint: 'B' },
			{ wuert: 'Käerz', jumppoint: 'E-ÄER' },
			{ wuert: 'kal', jumppoint: 'L' },
			{ wuert: 'Kanner', jumppoint: 'N-NN' },
			// { wuert: 'Kären', jumppoint: 'E-ÄR' },
			{ wuert: 'Katalog', jumppoint: 'G-G4' },
			{ wuert: 'Kaz', jumppoint: 'Z' },
			{ wuert: 'Keesen', jumppoint: 'S' },
			{ wuert: 'Kéis', jumppoint: 'E-ÉI' },
			{ wuert: 'keng', jumppoint: 'E' },
			{ wuert: 'Këscht', jumppoint: 'S-SCH' },
			{ wuert: 'Ketten', jumppoint: 'T-TT' },
			{ wuert: 'Kichelchen', jumppoint: 'C-CH' },
			{ wuert: 'Kierch', jumppoint: 'E-IER' },
			{ wuert: 'Kiischt', jumppoint: 'I-II' },
			{ wuert: 'Kinnek', jumppoint: 'K' },
			{ wuert: 'klammen', jumppoint: 'M-MM' },
			{ wuert: 'klapen', jumppoint: 'P' },
			{ wuert: 'klappen', jumppoint: 'P-PP' },
			{ wuert: 'Klass', jumppoint: 'K' },
			{ wuert: 'klauen', jumppoint: 'A-AU' },
			// { wuert: 'klibberen', jumppoint: 'B-BB' },
			{ wuert: 'Klub', jumppoint: 'B-BB' },
			{ wuert: 'Kludder', jumppoint: 'D-DD2' },
			{ wuert: 'klug', jumppoint: 'G-G4' },
			{ wuert: 'Knätsch', jumppoint: 'A-Ä' },
			{ wuert: 'kniwwelen', jumppoint: 'W-WW' },
			{ wuert: 'Knosp', jumppoint: 'S-SP' },
			{ wuert: 'Kou', jumppoint: 'O-OU' },
			{ wuert: 'Kraaft', jumppoint: 'R' },
			{ wuert: 'Krabb', jumppoint: 'B-BB' },
			{ wuert: 'kriddeleg', jumppoint: 'D-DD2' },
			{ wuert: 'kromm', jumppoint: 'O' },
			{ wuert: 'Küb', jumppoint: 'U-Ü' },
			{ wuert: 'kucken', jumppoint: 'K-CK' },
			{ wuert: 'Kuel', jumppoint: 'U-UE' },
			{ wuert: 'Küst', jumppoint: 'S-ST' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'L', wierder: [
			{ wuert: 'laachen', jumppoint: 'C-CH' },
			{ wuert: 'Lach', jumppoint: 'C-CH' },
			{ wuert: 'Lag', jumppoint: 'G-G4' },
			{ wuert: 'Léiw', jumppoint: 'W' },
			{ wuert: 'Lycée', jumppoint: 'E-É2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'M', wierder: [
			{ wuert: 'Mall', jumppoint: 'L-LL' },
			{ wuert: 'Mamm', jumppoint: 'M-MM' },
			{ wuert: 'mécht', jumppoint: 'E-É' },
			{ wuert: 'Mëllech', jumppoint: 'E-Ë' },
			{ wuert: 'Mëscht', jumppoint: 'E-Ë' },
			{ wuert: 'Meter', jumppoint: 'E' },
			{ wuert: 'Migrän', jumppoint: 'A-Ä' },
			{ wuert: 'Ministère', jumppoint: 'E-È' },
			{ wuert: 'Miwwel', jumppoint: 'W-WW' },
			{ wuert: 'Mixer', jumppoint: 'X' },
			{ wuert: 'molen', jumppoint: 'L' },
			{ wuert: 'motzen', jumppoint: 'Z-TZ' },
			{ wuert: 'Musée', jumppoint: 'E-É2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'N', wierder: [
			{ wuert: 'näischt', jumppoint: 'N' },
			{ wuert: 'nee', jumppoint: 'E-EE' },
			{ wuert: 'nimools', jumppoint: 'I' },
			{ wuert: 'Nummer', jumppoint: 'U' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'O', wierder: [
			{ wuert: 'Oliv', jumppoint: 'V-V' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'P', wierder: [
			{ wuert: 'Pech', jumppoint: 'E' },
			{ wuert: 'Pëll', jumppoint: 'E-Ë' },
			{ wuert: 'Péng', jumppoint: 'E-É' },
			{ wuert: 'Pflicht', jumppoint: 'P-PF' },
			{ wuert: 'Pijen', jumppoint: 'J' },
			{ wuert: 'platt', jumppoint: 'T-TT' },
			{ wuert: 'Prabbeli', jumppoint: 'B-BB2' },
			{ wuert: 'prägen', jumppoint: 'A-Ä' },
			{ wuert: 'Poul', jumppoint: 'P' },
			{ wuert: 'Psychologie', jumppoint: 'Y' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'Q', wierder: [
			{ wuert: 'quaken', jumppoint: 'Q' },
			{ wuert: 'quälen', jumppoint: 'A-Ä' },
			{ wuert: 'queesch', jumppoint: 'Q' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'R', wierder: [
			{ wuert: 'raschelen', jumppoint: 'S-SCH' },
			{ wuert: 'raschten', jumppoint: 'A' },
			{ wuert: 'Reen', jumppoint: 'E-EE' },
			{ wuert: 'Rees', jumppoint: 'S-S' },
			{ wuert: 'Rei', jumppoint: 'E-EI' },
			{ wuert: 'Respekt', jumppoint: 'S-SP' },
			{ wuert: 'Revisioun', jumppoint: 'V' },
			{ wuert: 'richteg', jumppoint: 'R' },
			{ wuert: 'rosen', jumppoint: 'N' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'S', wierder: [
			{ wuert: 'Saachen', jumppoint: 'S' },
			{ wuert: 'Saier', jumppoint: 'A-AI' },
			{ wuert: 'Samba', jumppoint: 'S' },
			{ wuert: 'schéin', jumppoint: 'S-SCH' },
			{ wuert: 'Schiet', jumppoint: 'E-IE' },
			{ wuert: 'schlofen', jumppoint: 'O' },
			{ wuert: 'schmaachen', jumppoint: 'A-AA' },
			{ wuert: 'Schmadd', jumppoint: 'D-DD' },
			{ wuert: 'schmock', jumppoint: 'C-CK' },
			{ wuert: 'Schnéi', jumppoint: 'E-ÉI' },
			{ wuert: 'Schued', jumppoint: 'D-D' },
			{ wuert: 'Seeërei', jumppoint: 'E-Ë2' },
			{ wuert: 'séier', jumppoint: 'E-ÉI' },
			{ wuert: 'Silvester', jumppoint: 'S' },
			{ wuert: 'soueren', jumppoint: 'O-OU' },
			{ wuert: 'späizen', jumppoint: 'S-SP2' },
			{ wuert: 'Speck', jumppoint: 'S-SP2' },
			{ wuert: 'Spigel', jumppoint: 'G-G' },
			{ wuert: 'Spill', jumppoint: 'I' },
			// { wuert: 'Spur (eng)', jumppoint: 'E-IR' },
			{ wuert: 'staark', jumppoint: 'S-ST2' },
			{ wuert: 'Stäerkt', jumppoint: 'E-ÄER' },
			{ wuert: 'stäipen', jumppoint: 'A-ÄI' },
			{ wuert: 'Stär', jumppoint: 'R-R' },
			{ wuert: 'Stéck', jumppoint: 'E-É' },
			{ wuert: 'Stiwwel', jumppoint: 'S-ST2' },
			{ wuert: 'Streech', jumppoint: 'E-EE' },
			{ wuert: 'Strenz', jumppoint: 'E' },
			{ wuert: 'Stuerm', jumppoint: 'E-UER' },
			{ wuert: 'super', jumppoint: 'S' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'T', wierder: [
			{ wuert: 'Tëlee', jumppoint: 'E-Ë' },
			{ wuert: 'Terrain', jumppoint: 'R-RR' },
			{ wuert: 'Tiitchen', jumppoint: 'I-II' },
			{ wuert: 'Trap', jumppoint: 'P' },
			{ wuert: 'trendy', jumppoint: 'Y' },
			{ wuert: 'Trubel', jumppoint: 'U' },
			{ wuert: 'Tut', jumppoint: 'U' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'U', wierder: [
			{ wuert: 'Uecht', jumppoint: 'E-UE' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'V', wierder: [
			{ wuert: 'vag', jumppoint: 'G-G2' },
			{ wuert: 'Vakanz', jumppoint: 'V' },
			{ wuert: 'Vanill', jumppoint: 'V' },
			{ wuert: 'Vas', jumppoint: 'V' },
			{ wuert: 'verléieren', jumppoint: 'V' },
			{ wuert: 'verzielen', jumppoint: 'Z' },
			{ wuert: 'viischt', jumppoint: 'V' },
			{ wuert: 'Villchen', jumppoint: 'V' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'W', wierder: [
			{ wuert: 'waarm', jumppoint: 'W' },
			{ wuert: 'Wab', jumppoint: 'B-B' },
			{ wuert: 'Waggon', jumppoint: 'G-GG' },
			{ wuert: 'wibbelen', jumppoint: 'W' },
			{ wuert: 'Wierder', jumppoint: 'R-R2' },
			{ wuert: 'Witz', jumppoint: 'Z-TZ' },
			{ wuert: 'wou', jumppoint: 'O-OU' },
			{ wuert: 'Wuert', jumppoint: 'R-R2' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'X', wierder: [
			{ wuert: 'Xylophon', jumppoint: 'X' }
		], showbuchstaaf: true },
		{ denBuchstaaf: 'Y', wierder: [
		
		], showbuchstaaf: false },
		{ denBuchstaaf: 'Z', wierder: [
			{ wuert: 'Zack', jumppoint: 'K-CK' },
			{ wuert: 'Zalot', jumppoint: 'Z' },
			{ wuert: 'Zebra', jumppoint: 'E' },
			{ wuert: 'zécken', jumppoint: 'C-CK' },
			{ wuert: 'Zeitung', jumppoint: 'G-NG' },
			{ wuert: 'Zil', jumppoint: 'I' },
			{ wuert: 'Zipfel', jumppoint: 'P-PF' },
			{ wuert: 'Zooss', jumppoint: 'S-SS' },
			{ wuert: 'Zopp', jumppoint: 'P-PP' },
			{ wuert: 'zou', jumppoint: 'U-OU' }
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
  spaceBetween: 10,
  slidesPerView: 5,
  effect: 'slide',
  parallax: true,
  centeredSlides: true,
  zoom: true
});

var tour = localStorage.getItem("tour");
var welcomeText = [{
		id: 'slide0',
		picture: '<div class="tutorialicon tutorialicon1"></div>',
		text: 'Buschtaf auswielen fir Beispillwierder ugewissen ze kréien.'
	}, {
		id: 'slide1',
		picture: '<div class="tutorialicon tutorialicon2"></div>',
		text: 'Korrekt Aussproch ulauschteren.'
	}, {
		id: 'slide2',
		picture: '<div class="tutorialicon tutorialicon3"></div>',
		text: 'Déi ugewandte Regel liesen.'
	}, {
		id: 'slide3',
		picture: '<div class="tutorialicon tutorialicon4"></div>',
		text: 'Wierderlëscht uweisen an Regelen zu de Wierder nosichen.'
	}, {
		id: 'slide4',
		picture: '<div class="tutorialicon tutorialicon5"></div>',
		text: 'Lëtzebuergësch Ortographie an Aussproch besser verstoën an uwenden.'
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



