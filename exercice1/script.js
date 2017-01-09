var count = 0

	function myFunction1() {
			var x = document.getElementById("unbis").elements[0].value;

			if(x === "a") {
				document.getElementById("demo").innerHTML = "bravo c'est bien :"+	x; 
				var d = document.getElementById('download-button');

				var bar = document.getElementById('un');
				var foo = document.getElementById('deux');

				bar.setAttribute("class", "toggle");
				foo.setAttribute("class", "isToggle row card center animated bounce");

				count++;
				var counter = document.getElementById('compteur');
		counter	.innerHTML =  count;
			


			} else {
				document.getElementById("error1").innerHTML = "Réessayer encore";

				/*setTimeout(function(){ location.reload(); }, 1000);*/
				
			}

			document.getElementById("demo").innerHTML = x;
		};

			function log() {
			console.log("%cBlue! %cGreen", "color: blue; font-size:15px;", "color: green; font-size:12px;"); 
		}


function myFunction2() {
			var x = document.getElementById("deuxbis").elements[0].value;

			if(x === "a") {
				document.getElementById("demo").innerHTML = "bravo c'est bien :"+	x; 
				var d = document.getElementById('download-button');

				var bar = document.getElementById('deux');
				var foo = document.getElementById('trois');

				bar.setAttribute("class", "toggle");
				foo.setAttribute("class", "isToggle row card center animated bounce");


				count++;
				var counter = document.getElementById('compteur');
		counter	.innerHTML =  count;


			} else {
				document.getElementById("error2").innerHTML = "Réessayer encore";

				/*setTimeout(function(){ location.reload(); }, 1000);*/
				
			}

			document.getElementById("demo").innerHTML = x;
		};

function myFunction3() {
			var x = document.getElementById("troisbis").elements[0].value;

			if(x === "a") {
				document.getElementById("demo").innerHTML = "bravo c'est bien :"+	x; 
				var d = document.getElementById('download-button');

				var bar = document.getElementById('trois');
				var foo = document.getElementById('quattre');

				bar.setAttribute("class", "toggle");
				foo.setAttribute("class", "isToggle row card center animated bounce");


				count++;
				var counter = document.getElementById('compteur');
		counter	.innerHTML =  count;



			} else {
				document.getElementById("error3").innerHTML = "Réessayer encore";

				/*setTimeout(function(){ location.reload(); }, 1000);*/
				
			}

			document.getElementById("demo").innerHTML = x;
		};
function myFunction4() {
			var x = document.getElementById("quattrebis").elements[0].value;

			if(x === "a") {
				document.getElementById("demo").innerHTML = "bravo c'est bien :"+	x; 
				var d = document.getElementById('download-button');

				var bar = document.getElementById('quattre');
				var foo = document.getElementById('cinq');

				bar.setAttribute("class", "toggle");
				foo.setAttribute("class", "isToggle row card center animated bounce");

				count++;
				var counter = document.getElementById('compteur');
		counter	.innerHTML =  count;
	

			} else {
				document.getElementById("error4").innerHTML = "Réessayer encore";

				/*etTimeout(function(){ location.reload(); }, 1000);*/
				
			}

			document.getElementById("demo").innerHTML = x;
		};

		function myFunction5() {
			var x = document.getElementById("cinqbis").elements[0].value;

			if(x === "a") {
				document.getElementById("demo").innerHTML = "bravo c'est bien :"+	x; 
				var d = document.getElementById('download-button');

				var bar = document.getElementById('cinq');
				var foo = document.getElementById('six');

				bar.setAttribute("class", "toggle");
				foo.setAttribute("class", "isToggle row card center animated bounce");

				count++;
				var counter = document.getElementById('compteur');
		counter	.innerHTML =  count;
	

			} else {
				document.getElementById("error5").innerHTML = "Réessayer encore";

				/*setTimeout(function(){ location.reload(); }, 1000);*/
				
			}

			document.getElementById("demo").innerHTML = x;
			document.getElementById("stat").innerHTML = count; 
		};

		


		
