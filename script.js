
alert("Welkom bij mijn text adventure 'The Woods'");
document.write ("<b>Jouw keuze's: <br>");
var strength = 0;

var begin = prompt("Je word wakker op een vreemde plek. Je ziet een pad naar een huisje en een pad naar het bos. Wat kies je? Huisje of Bos");
begin = begin.toLowerCase();
document.write(begin + "<br>");
	if (begin == "huisje") {
		var house = prompt("Je loopt naar het huisje en doet de deur open. In het huisje zie je een zwaard en een schild aan de muur. Welke kies je om mee te nemen? Keuze uit: Zwaard of Schild.");
		house = house.toLowerCase();
		document.write(house + "<br>");
		
		if (house == "zwaard") {
			strength += 1;
			var fight = prompt("Je neemt het zwaard mee. Je loopt het bos in en komt een monster tegen. Wil je vechten met het monster? Ja of Nee?");
			fight = fight.toLowerCase();
			document.write(fight + "<br>");

			if (fight == "ja") {
				strength += 1;
				alert("Je verslaat het monster met je zwaard");

			} else if (fight == "nee") {
				alert("Je rent weg van het monster");
			}

			var path = prompt("Je loopt verder en komt bij een splitsing aan. Wil je naar Rechts of Links?");
			path = path.toLowerCase();
			document.write(path + "<br>");

			if (path == "rechts") {
				var wizard = prompt("Je gaat naar rechts en ziet daar een wizard staan. Je loopt naar hem toe en hij zegt 'Als je mijn leeftijd kan raden krijg je een verassing.' Kies een nummer.");
				wizard = wizard.toLowerCase();
				document.write(wizard + "<br>")
				
				wizard = parseInt(wizard);
				if (wizard == 80) {
					alert("'Wow, dat is precies mijn leeftijd. Hier is je verassing.' De wizard spreekt een spreuk uit. Je voelt je sterker. ");
						strength += 1;


				} else if (wizard < 80) {
					alert("'Wow wat aardig, ik ben wel wat ouder maar omdat je zo aardig bent geef ik je alsnog de verassing.' De wizard spreekt een spreuk uit. Je voelt je sterker.");
					strength += 1;

				} else if(wizard > 80){
					alert("'Zie ik er zo oud uit?!' De wizard vind het niet leuk en hij loopt weg.");
					
				}
				
				
			} else if (path == "links") {
				var left = prompt("Je gaat naar links en ziet daar een tas liggen. In de tas zit een groen drankje. Wil je het drankje op drinken? Ja of Nee?");
				left = left.toLowerCase();
				document.write(left + "<br>");

				if (left == "ja") {
					strength += 1;
					alert("Je drinkt het drankje op en voelt je meteen sterker.");
				}else {
					alert("je laat het drankje liggen en loopt verder.");
				}

			}

			var water = prompt("Je komt aan bij een rivier. Je ziet rechts een oude houten boot liggen. Wil je de Boot gebruiken of Zwemmen?");
			water = water.toLowerCase();
			document.write(water + "<br>");

					if (water == "boot") {
						var spider = prompt("Je vaart rustig de rivier over met je bootje. Je komt aan de overkant. Je loopt verder door het bos. Achter een boom vandaan springt een reuze spin. Wil je Vechten of Wegrennen?");
						spider = spider.toLowerCase();
						document.write(spider + "<br>");
						if (spider == "vechten") {
							if (strength >= 2) {
								strength += 1;
								alert("Je verslaat de spin en loopt verder uit het bos. Je komt op een groot leeg veld. Je ziet ineens een grote schaduw op de grond. Je begint om je heen te kijken en ziet een grote rode draak landen.");
								var treasure = prompt("'Dit is mijn eiland, jij hoort hier niet.' De draak valt je aan. Naast je zie je een kist. In de kist zit een schild en een pijl en boog. Je kan er 1 kiezen. Welke pak je het Schild of de Boog?");
								treasure = treasure.toLowerCase();
								document.write(treasure + "<br>");

								if (treasure == "schild") {
									
									if (strength == 4) {
										alert("De draak spuugt vuur en je verdedigt jezelf met het schild. Je rent om de draak heen en springt op zijn nek en verslaat hem met je zwaard.");
										alert("Je hebt de draak verslagen en er verschijnenen meerdere magische wezentjes. 'Je hebt ons gered van de boze draak. Dankjewel wij kunnen je thuis brengen, weg van dit eiland.' ");
									} else{
										alert("Je valt de draak aan maar je bent niet sterk genoeg om hem te verslaan.");
										alert("Game Over");
									}
								} else {
									alert("De draak spuugt vuur en je verbrand. Helaas had je nu maar een schild gepakt.");
									alert("Game Over");
								}

							} else {
								alert("Je valt de spin aan maar je bent niet sterk genoeg. De spin eet je op.");
								alert("Game Over");

							}

						} else{
							alert("Je rent weg, maar de spin komt achter je aan. Hij haalt je in en eet je op.");
							alert("Game Over");

						}

					} else {
						alert("Je probeert te zwemmen, maar de stroming is te sterk. Je verdrinkt.");
						alert("Game Over");
					}

		} else if (house != "zwaard") {
			alert("Je probeert het schild van de muur af te trekken, helaas lukt dit niet en vallen er planken op je hoofd.");
			alert("Game Over");
		}
	} else if (begin == "bos") {
		alert("Je loopt het bos in en komt een monster tegen. Je hebt geen zwaard en je kan het monster niet verslaan.");
		alert("Game Over");

	}