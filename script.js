
alert("Welkom bij mijn text adventure 'The Woods'");
document.write ("<b>Jouw keuze's: <br>");
var strength = 0;

var begin = prompt("Je word wakker op een vreemde plek. Je ziet een pad naar een huisje en een pad naar het bos. Wat kies je? Huisje of Bos");
	if (begin == "huisje") {
		document.write ("Huisje<br>")
		var house = prompt("Je loopt naar het huisje en doet de deur open. In het huisje zie je een zwaard en een schild aan de muur. Welke kies je om mee te nemen? Keuze uit: Zwaard of Schild.");
		
		if (house == "zwaard") {
			strength += 1;
			document.write ("Zwaard<br>")
			var fight = prompt("Je neemt het zwaard mee. Je loopt het bos in en komt een monster tegen. Wil je vechten met het monster? Ja of Nee?");

			if (fight == "ja") {
				strength += 1;
				alert("Je verslaat het monster met je zwaard");
			} else if (fight == "nee") {
				alert("Je rent weg van het monster");
			}

			var path = prompt("Je loopt verder en komt bij een splitsing aan. Wil je naar Rechts of Links?");
			if (path == "rechts") {
				document.write ("Rechts")
				var wizard = prompt("Je gaat naar rechts en ziet daar een wizard staan. Je loopt naar hem toe en hij zegt 'Ik heb een getal in mijn hoofd raad hoger voor een verassing.' Kies een nummer tussen 0-10.");
				wizard = parseInt(wizard);
				if (wizard > 5) {
					if (wizard > 10) {
						alert("'Dat is hoger dan 10, dat mag niet' De wizard word boos en vermoord je.");
						alert("Game Over");

					} else {
						alert("'Goed geraden, hier heb je een verassing.' De wizard spreekt een spreuk uit. Je voelt je sterker. ");
						strength += 1;
					}


				} else if(wizard <= 5){
					alert("'Helaas dit is te laag. Je krijgt niks.' Je loopt verder.");
					var water = prompt("Je komt aan bij een rivier. Je ziet rechts een oude houten boot liggen wil je deze gebruiken om de rivier over te steken? Ja of Nee? ");

					if (water == "Ja") {
						
					}
				}
				
			} else if (path == "links") {
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