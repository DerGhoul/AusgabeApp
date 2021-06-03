<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ausgabenrechner</title>
<link type="text/css" rel="stylesheet" href="style.css" />
<script src="main.js"></script>
</head>
<body id="body">


<!--h2 id="header">Das ist ein Ausgabenrechner</h2-->


<div class="containering" >
<div id="lohnDiv" ><!--Hier wird der Lohn implementiert-->
	<label>Verfügbar</label><br>
	<input	type="number"
					name="lohn"
					id="lohn"
					value="500"
					onchange="umverteilung()" >
</div>
<div id="betragDiv" ><!--Hier wird der Übertrag implementiert-->
	<label>Uebertrag</label><br>
	<input	type="number"
					name="bertrag"
					id="betrag"
					value="10" >
</div>
<br>
<!--div class="diva"-->














<div class="bodycontainer">
	<div class="container">
		<div class="item item1" id="firstDiv" ><!--Hier wird die "Notwendig" implementiert-->
			<label>Notwendigkeiten</label><br>
				<input 	type="number"
						name="Notwendigkeiten"
						class="geldBerechner"
						id="notwendigkeiten"
						readonly="readonly"
						value=""
						ondrop="geldeinbringen(event,this)"
						ondragover="allowDrop(event,this)"><br>

			<input 	type="checkbox"
					class="check"
					id="notwendigkeitChecked"
					name ="notwendig"
					value="Notwendigkeiten"
					onclick="selectchanger(this)">
			</input>
			<img 	id="notwendiggeld"
					src="geldschein.png"
					draggable="true"
					ondragstart="gelduebertragen(event,this)" ></img>
		</div>


		<div class="item item2"  id="secondDiv" ><!--Hier wird die "Bildung" implementiert-->
			<label>Bildung</label><br>
				<input 	type="number"
						name="Bildung"
						class="geldBerechner"
						readonly="readonly"
						id="bildung"
						value=""
						ondrop="geldeinbringen(event,this)"
						ondragover="allowDrop(event,this)"><br>



			<input 	type="checkbox"
					class="check"
					id="bildungChecked"
					name ="bildung"
					value="Bildung"
					onclick="selectchanger(this)">
			</input>
			<img 	id="bildunggeld"
					src="geldschein.png"
					draggable="true"
					ondragstart="gelduebertragen(event,this)" ></img>
		</div>


		<div class="item item3"  id="thirdDiv"  ><!--Hier wird die "Spass" implementiert-->
			<label>Spass</label><br>
				<input 	type="number"
						name="Spass"
						class="geldBerechner"
						readonly="readonly"
						id="spass"
						value=""
						ondrop="geldeinbringen(event,this)"
						ondragover="allowDrop(event,this)"><br>

				<input 	type="checkbox"
						class="check"
						id="spassChecked"
						name ="spass"
						value="Spass"
						onclick="selectchanger(this)">
				</input>
				<img 	id="spassgeld"
						src="geldschein.png"
						draggable="true"
						ondragstart="gelduebertragen(event,this)" ></img>
		</div>


		<div class="item item4"  id="fourthDiv"   ><!--Hier wird die "Sparen" implementiert-->
			<label>Sparen</label><br>
				<input type="number"
						name="Sparen"
						class="geldBerechner"
						readonly="readonly"
						id="sparen"
						value=""
						ondrop="geldeinbringen(event,this)"
						ondragover="allowDrop(event,this)"><br>

			<input 	type="checkbox"
					class="check"
					id="sparenChecked"
					name ="sparen"
					value="Sparen"
					onclick="selectchanger(this)">
			</input>
			<img 	id="sparengeld"
					src="geldschein.png"
					draggable="true"
					ondragstart="gelduebertragen(event,this)" ></img>
		</div>


		<div class="item item5"  id="fifthDiv"  ><!--Hier wird die "Ruecklagen" implementiert-->
			<label>Ruecklagen</label><br>
				<input 	type="number"
						name="Ruecklagen"
						class="geldBerechner"
						readonly="readonly"
						id="ruecklagen"
						value=""
						ondrop="geldeinbringen(event,this)"
						ondragover="allowDrop(event,this)"><br>

			<input 	type="checkbox"
					class="check"
					id="ruecklagenChecked"
					name ="ruecklagen"
					value="Ruecklagen"
					onclick="selectchanger(this)">
			</input>
			<img 	id="ruecklagengeld"
					src="geldschein.png"
					draggable="true"
					ondragstart="gelduebertragen(event,this)" ></img>
		</div>


		<div class="item item6"  id="sixthDiv"  ><!--Hier wird die "Investment" implementiert-->
			<label>Investment</label><br>
				<input 	type="number"
						name="Investment"
						class="geldBerechner"
						readonly="readonly"
						id="invest"
						value=""
						ondrop="geldeinbringen(event,this)"
						ondragover="allowDrop(event,this)"><br>

				<input 	type="checkbox"
						class="check"
						id="investmentChecked"
						name ="investment"
						value="Investment"
						onclick="selectchanger(this)">
				</input>
				<img 	id="investmentgeld"
						src="geldschein.png"
						draggable="true"
						ondragstart="gelduebertragen(event,this)" >
				</img>
		</div>

	</div>
<!--vielleicht mal ein Feature für später
	<div class="monthcontainer"	>
		<label	class="monthLabel" 	id="monatsAnzahlLabel" >Anzahl: 1</label>
		<button class="monthButton" id="firstMonth"  onclick="monthSelecting(this)" >	</button>
		<button class="monthButton" id="secondMonth" onclick="monthSelecting(this)" >	</button>
		<button class="monthButton" id="thirdMonth"  onclick="monthSelecting(this)" >	</button>
		<button class="monthButton" id="fourthMonth"  onclick="monthSelecting(this)" >	</button>
		<button class="monthButton" id="fifthMonth"  onclick="monthSelecting(this)" >	</button>
		<button class="monthButton" id="sixthMonth"  onclick="monthSelecting(this)" >	</button>
	</div>			-->
</div>
<br>









<form action="dbscript.php" class="bookform"  method="post">
	<div class="bottomcontainer" >
		<div class="container2"> <!--Hier werden die Dateiparameter erfasst-->
			<input 	class="item item7"
							type="text"
							class="parameter"
							name="Grund"
							id="grund"
							placeholder="Grund"
							readonly="readonly" >
			<input 	class="item item8"
							type="text"
							class="parameter"
							name="Beschreibung"
							id="beschreibung"
							placeholder="Beschreibung" >
			<input 	class="item item9"
							type="date"
							class="parameter"4
							name="Datum"
							id="date" >
			<script> /*<!--Hier wird das heutige Datum vorbelegt-->*/
					var dateTime = new Date();
					var day = parseInt(dateTime.getDate()+"").toString();
					var month = parseInt(dateTime.getMonth()+1).toString();
					if (month.length == 1) {
						month = ("0"+month);
					}

					if (day.length == 1) {
						day = ("0"+day);
					}
					var year = dateTime.getFullYear();
					var value = (year+"-"+month+"-"+day);
					document.getElementById("date").value = value;
					/*
					try{
						umverteilung();
					}catch(e){
						console.log(e);
					}*/
					try{
					monthScribing();
					}catch(e){
						console.log(e);
					}
			</script>
			<input 	class="item item10"
							type="number"
							class="parameter"
							name="Preis"
							id="preis"
							pattern=""
							placeholder="00,00"
		</div>
	<!-- NOTE: onblur="verrechnen(this.value)">
	rausgenommen, weil es vorzeitig das Geld abbucht-->
	<div class="item_item12">
	<p class="warning" id="hierfehltwas" ></p><br>
	<input type="submit" name="" value="">
	<!--button onclick="book()" >Verbuchen</button--><br>
</form>
















</div>
</div>
</div>


</body>
</html>
