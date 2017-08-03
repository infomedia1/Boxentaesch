/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// just to show a nice output for this demo
var originalConsoleLog = console.log.bind(console);
console.log = function (str) {
  originalConsoleLog(str);
  display.innerHTML += str + '\n';
};



var app = {
  // Application Constructor
  initialize: function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function () {
    app.receivedEvent('deviceready');

	console.log('Trying to connect to db.555..');
	console.log("window.cordova: " + window.cordova);
	console.log("window.indexedDB: " + window.indexedDB);
    //console.log("window.sqlitePlugin: " + window.sqlitePlugin);
	//console.log(print_r(window));

      // success! :)
	  var db = null;
     // var db = window.openDatabase(cordova.file.applicationDirectory+'www/mydatabase.db');
	  //db = window.sqlitePlugin.openDatabase({name: 'myemptydatabase.db', location: 'default'});
	
	
	
	// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
	
	var open = indexedDB.open("theDb", 1);
	
	
	open.onupgradeneeded = function() {
		var db = open.result;
		var store = db.createObjectStore("Wierderlescht", {keyPath: "LU"});
		var index = store.createIndex("Wierder", "LU");
	};
	
	open.onsuccess = function() {
		// Start a new transaction
		var db = open.result;
		var tx = db.transaction("Wierderlescht", "readwrite");
		var store = tx.objectStore("Wierderlescht");
		var index = store.index("Wierder");

		var xhr = new XMLHttpRequest();
		xhr.open("GET", "wieder.csv");
		xhr.send();
        //xhr.onerror = status;
        var lastChar = 0, numlines = 0;
		xhr.onprogress = xhr.onload = function(e) {
			var lastNewline = xhr.responseText.lastIndexOf("\n");
            if (lastNewline > lastChar) {
                var chunk = xhr.responseText.substring(lastChar, lastNewline);
                lastChar = lastNewline + 1;   // Where to start next time
                // Now break the new chunk of data into individual lines
                var lines = chunk.split("\n");
                numlines += lines.length;
				var transaction = db.transaction(["Wierderlescht"], // object stores
                                                 IDBTransaction.READ_WRITE);
                // Get our object store from the transaction
                var store = transaction.objectStore("Wierderlescht");
                // Now loop through the lines of the zipcode file, create
                // objects for them, and add them to the object store.
                for(var i = 0; i < lines.length; i++) {
                    var fields = lines[i].split(","); // Comma-separated values
                    var record = {           // This is the object we'll store
                        LU: fields[0],  // All properties are string
                        FR: fields[1], 
                        DE: fields[2],
                        EN: fields[3], 
                        PT: fields[4],
                        AUDIO: fields[5]
                    };
					console.log('Counter: '+ i);
					console.log(record);
                    store.put(record);
				}
			}
		}
		var firstelem = document.getElementById("firstelem");
		var request = store.get("Apel");
		request.onsuccess = function() {   // Pass the result to this function
            // The result object is now in the request.result
            var object = request.result;
            if (object)  // If we found a match, pass city and state to callback
			{
				var theplayevent="document.getElementById('" + object.LU +"').play()";
				firstelem.setAttribute('onclick', theplayevent);
				firstelem.innerHTML=object.LU + "<audio id="+ object.LU +"><source src=\"audio/" + object.AUDIO + "\" type=\"audio/mpeg\"></audio> " + "<u>" + "</u>";
			}
		}
			
		
		/*
		// Add some data
		store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
		store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
		
		// Query the data
		var getJohn = store.get(12345);
		var getBob = index.get(["Smith", "Bob"]);

		getJohn.onsuccess = function() {
			console.log(getJohn.result.name.first);  // => "John"
		};

		getBob.onsuccess = function() {
			console.log(getBob.result.name.first);   // => "Bob"
		};
*/
		// Close the db when the transaction is done
		/*
		tx.oncomplete = function() {
			db.close();
		};
		*/
	}
	
	  console.log(cordova.file.applicationDirectory);
	  
	  console.log(window.location.pathname);
	  setTimeout(function(){ console.log('Waiting 2 seconds')},2000);
	  
    /*  db.readTransaction(function (txn) {
			//txn.executeSql('SELECT * FROM sqlite_master;', [], function (tx, res) {
			txn.executeSql('SELECT foo FROM mytable;', [], function (tx, res) {
          console.log('Successfully read from pre-populated DB:');
          console.log(JSON.stringify(res.rows.item(0)));
		  
        });
      }, function (e) {
                console.log("ERROR: " + e.name);
				console.log("ERROR: " + e.message);
				console.log("ERROR: " + e.toString());
            }
	  );
	  */
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};


app.initialize();