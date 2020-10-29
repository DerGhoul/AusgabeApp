function selectchanger(senderID, sender){
	var check = document.getElementsByClassName("check");
	var sendedId = senderID;
	var sendervalue = sender.value;

	for(var i = 0;i<check.length;i++){

		if(check[i].id == sendedId){
			console.log(true);
		}
		else{
		check[i].checked = false;
		}

	}
	toGrund(sendervalue);

}


function toGrund(sender){
	var senderValue = sender;
	document.getElementById("grund").value = senderValue;
	
}


function verrechnen(value){
	//console.log(value);
	var grund = document.getElementById("grund").value;
	var verteilung = document.getElementsByClassName("GeldBerechner");
	var check = document.getElementsByClassName("check");
	
	for(var i = 0;i<check.length;i++){
	
		if(check[i].value  == grund && check[i].value == verteilung[i].name){
			
			console.log(verteilung[i].name);
			var geld = parseFloat(verteilung[i].value);
			console.log(geld);
			var abheben = parseFloat(document.getElementById("preis").value);
			console.log(abheben);
			var ergebnis = geld-abheben;
			console.log(ergebnis.toFixed(2));
			verteilung[i].value = ergebnis.toFixed(2);
		}
	}
	
}


function datumsformatierung(date){
	var datesplitter = date.split("-");
	var tag = datesplitter[2];
	var monat = datesplitter[1];
	var jahr = datesplitter[0];
	var datum = (tag+"."+monat+"."+jahr);
	
	return(datum);
}





function disselect(){
	var check = document.getElementsByClassName("check");
	for(var i = 0;i<check.length;i++){
	check[i].checked = false;
	}
	document.getElementById("beschreibung").value = "";
	document.getElementById("preis").value = "";
	
	
}



function wichIsSelected(){
	var check = document.getElementsByClassName("check");
	//var alarm = document.getElementById("hierfehltwas").innerHTML;

	for(var i = 0;i<check.length;i++){
		if(check[i].checked == true){
			//console.log(check[i].id);
			return check[i].id;
		}
	}
}

///Noch nicht definiert
function book(){
	
	
	
	
	var selected = wichIsSelected();
	console.log(selected);
	//hier kommt ein Verbuchungsalgorithmus
	var grund = document.getElementById("grund").value;
	var beschreibung = document.getElementById("beschreibung").value;
	var date = document.getElementById("date").value;
	var preis = document.getElementById("preis").value;
	var datum = datumsformatierung(date);
	
	if(grund == "" || beschreibung == "" || preis == "" || datum == ""){
		document.getElementById("hierfehltwas").innerHTML = "Bitte alle Felder belegen";
		console.log("BaFb");
	}else{
		console.log(grund+";"+beschreibung+";"+datum+";"+preis);
		document.getElementById("hierfehltwas").innerHTML = "";
		disselect();
	}
	
	
	
	


}

function dater(){
	var dateTime = new Date();
	var day = dateTime.getDate();
	var month = dateTime.getMonth()+1;
	if (month.length == 1) {
		month = ("0"+month);
	}
	var year = dateTime.getFullYear();
	var value = (year+"-"+month+"-"+day);
	document.getElementById("date").value = value;
}


function umverteilung(){
	var lohn = document.getElementById("lohn");
	var notw = document.getElementById("notw");
	var bild = document.getElementById("bildung");
	var spas = document.getElementById("spass");
	var spar = document.getElementById("spar");
	var ruec = document.getElementById("rueck");
	var inve = document.getElementById("invest");

	var value = parseInt(lohn.value);

	bild.value = (0.1 * value).toFixed(2);
	spas.value = (0.1 * value).toFixed(2);
	spar.value = (0.1 * value).toFixed(2);
	ruec.value = (0.1 * value).toFixed(2);
	inve.value = (0.1 * value).toFixed(2);
	notw.value = (0.5 * value).toFixed(2);
	
}


function gelduebertragen(ev ,sender){
	ev.dataTransfer.setData("",sender.id);
}

function geldeinbringen(ev,sender){
	var betragstring = prompt("Bitte höhe des Betrags angeben");
	var betrag = parseFloat(betragstring);
	var senderID = document.getElementById(sender.id);
	senderID.value = betrag;
	console.log(sender.id);
	console.log(betrag);
}

function allowDrop(ev,sender){
	ev.preventDefault();
	
}







/* TestFunktion
function test(){
	var check = document.getElementsByClassName("check");
	for(var i = 0;i<check.length;i++){
		check[i].checked = true;
	}
*/
