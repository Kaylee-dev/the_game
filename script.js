
alert("Welkom bij mijn text adventure 'The Woods'");
document.write ("<b>Jouw keuze's: <br>");

var begin = prompt("Je word wakker op een vreemde plek. Je ziet een pad naar een huisje en een pad naar het bos. Wat kies je? Huisje of Bos");
	if (begin == "huisje") {
		document.write ("Huisje<br>")
		var house = prompt("Je loopt naar het huisje en doet de deur open. In het huisje zie je een zwaard en een schild aan de muur. Welke kies je om mee te nemen? Keuze uit: Zwaard of Schild.");
		
		if (house == "zwaard") {
			document.write ("Zwaard<br>")
			var outOfHouse = prompt("Je neemt het zwaard mee. Je loopt het bos in en komt een monster tegen. Je pakt je zwaard en je verslaat het monster. Je loopt weer verder en je komt op een splitsing. Wil je naar rechts of links?")
			
			if (outOfHouse == "rechts") {
				document.write ("Rechts")
				var wizard = prompt("Je gaat naar rechts en ziet daar een wizard staan. Je loopt naar hem toe en hij zegt 'Kies een nummer tussen 1-10. Als het nummer hoger is dan mijn nummer kan je verder' Kies een nummer tussen 1 en 10:");
				wizard = parseInt(wizard);
				if (wizard > 5) {
					if (wizard > 10) {
						alert("Game Over")
					}
				} else {
					alert("'Het getal is lager dan mijn getal, helaas je mag er niet langs.'")
					alert("Game Over")
				}
				
			} else if (outOfHouse == "links") {
				document.write("Links")
				var left = prompt("Je gaat naar links en ziet daar een tas liggen. In de tas zit een groen drankje. Wil je het drankje op drinken? Ja of Nee?")
			}

		} else if (house == "schild") {
			document.write("Schild")
			alert("Je probeert het schild van de muur af te trekken, helaas lukt dit niet en vallen er planken op je hoofd.");
			alert("Game Over")
		}
	} else if (begin == "bos") {
		document.write("Bos")
		alert("Je loopt het bos in en komt een monster tegen. Je hebt geen zwaard en je kan het monster niet verslaan.")
		alert("Game Over")

	}