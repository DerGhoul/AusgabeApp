const  { app, BrowserWindow } = require('electron');
const path = require('path');
var fs = require('fs');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 550,
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
//app.on('ready', createWindow);

app.on('ready', createWindow , () =>{
    mainWindow = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true,
        }
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});











// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.







//Globale Variable für Drag and Drop aktion
var geldId ="";
//var monatsAnzahl = 0;

//Mit dem Start aufgerufene Methoden


//Methoden
///Überprüft welcher checkbox gewählt ist und
function selectchanger(sender){

	var check = document.getElementsByClassName("check");
	var senderId = sender.id;
	var senderValue = sender.value;
	//console.log(senderId);
	//console.log(senderValue);
	for(var i = 0;i<check.length;i++){
		//console.log(check[i].id);
		if(check[i].id == senderId){
			console.log(true);
		}
		else{
		check[i].checked = false;
		}

	}
	toGrund(senderValue);

}

///Belegt den Grund input mit dem gewählten
function toGrund(sender){
	var senderValue = sender;
	document.getElementById("grund").value = senderValue;

}

///Zieht den Wert ab, von dem input, der als Grund angegeben wurde
function verrechnen(value){
	//console.log(value);
	var grund = document.getElementById("grund").value;
	var verteilung = document.getElementsByClassName("geldBerechner");
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

///Gibt das Datum in Punktschreibweise zurück für Speicherung in Datei
function datumsformatierung(date){
	var datesplitter = date.split("-");
	var tag = datesplitter[2];
	var monat = datesplitter[1];
	var jahr = datesplitter[0];
	var datum = (tag+"."+monat+"."+jahr);

	return(datum);
}

///Wählt alle checkbuttons ab
function disselect(){
	var check = document.getElementsByClassName("check");
	for(var i = 0;i<check.length;i++){
	check[i].checked = false;
	}
	document.getElementById("beschreibung").value = "";
	document.getElementById("preis").value = "";


}

///Gibt zurück, welcher checkbutton ausgewählt wurde
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

///Bucht den AusgabeString auf Konsole, bzw in Datei
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
		const buchung = (grund+";"+beschreibung+";"+datum+";"+preis+"\n");
    console.log(buchung);
		document.getElementById("hierfehltwas").innerHTML = "";
		disselect();

    fs.writeFile('TryFile.txt',buchung, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

	}






}

///Gibt ein für das inputTextfeld lesbares Datumsformat zurück
function dater(){
	var dateTime = new Date();
	var day = dateTime.getDate();
	var month = dateTime.getMonth()+1;
	if (month.length == 1) {
		month = ("0"+month);
	}
	if (day.length == 1) {
		month = ("0"+day);
	}
	var year = dateTime.getFullYear();
	var value = (year+"-"+month+"-"+day);
	document.getElementById("date").value = value;
}

///Verteilt lohn auf die inputTextfelder auf
function umverteilung(){
	var lohn = document.getElementById("lohn");
	var notw = document.getElementById("notwendigkeiten");
	var bild = document.getElementById("bildung");
	var spas = document.getElementById("spass");
	var spar = document.getElementById("sparen");
	var ruec = document.getElementById("ruecklagen");
	var inve = document.getElementById("invest");

	var value = parseInt(lohn.value);

	bild.value = (0.1 * value).toFixed(2);
	spas.value = (0.1 * value).toFixed(2);
	spar.value = (0.1 * value).toFixed(2);
	ruec.value = (0.1 * value).toFixed(2);
	inve.value = (0.1 * value).toFixed(2);
	notw.value = (0.5 * value).toFixed(2);
	
	lohn.readOnly = true;

}

///Standard OndragOver Funktion
function gelduebertragen(ev ,sender){
	ev.dataTransfer.setData("",sender.id);
	//console.log(sender.id);
	geldId = sender.id;
}

///Standard Ondrop Funktion
function geldeinbringen(ev,sender){
	//var betragstring = document.getElementById("uebertrag");
	//var betrag = betragstring;
	//var senderID = document.getElementById(sender.id);
	//geldabziehen(inputId,outputId,betrag);
	//senderID.value = betrag;

	var outputId = getOutputId(geldId);
	var inputId = sender.id;



	var senderValue = sender.value;

	console.log("Dem ich geld übertrage "+outputId);
	console.log("Der Geld überträgt Geldbetrag "+senderValue);
	console.log("Der Geld überträgt "+sender.id);
	console.log("Die Id des Symbols dem dem ich geld übertrage "+geldId);

	geldabziehen(inputId,outputId);
}

///Standard allowDrop Funktion
function allowDrop(ev,sender){
	ev.preventDefault();

}

///Dient zum übertragen von Geld bei der Drag-Drop-Aktion
function geldabziehen(inputId,outputId){


	var input =  document.getElementById(inputId);
	var output = document.getElementById(outputId);
	var betragId = document.getElementById("betrag");
	const betrag = Number(betragId.value);
	let inputValue = Number(input.value);
	let outputValue = Number(output.value);

	console.log("BetragId " + betragId);
	console.log("Betrag " + betrag);
	console.log("Vorher da "+inputValue);
	console.log("Vorher da "+outputValue);

	inputValue  += betrag;
	outputValue -= betrag;

	//var a = zuBetrag(betrag);


	console.log("Nachher da " + inputValue);
	console.log("Nachher da " + outputValue);

	document.getElementById(inputId).value = inputValue.toFixed(2);
	document.getElementById(outputId).value = outputValue.toFixed(2);


	//console.log(input.value+";"+output.value+";"+betrag);
	//dateiLeser();
}

/* dateiLeser
function dateiLeser(){
	const readline = require('readline');
	const fs = require('fs');

	var file = 'C:/Users/Reinhard.Schneider/Documents/vartabtest.txt';
	var rl = readline.createInterface({
		input: fs.createReadStream(file),
		output: process.stdout,
		terminal: false
	});

	rl.on('line', function (line){
		console.log(line) // print the content of the line on each linebreak
	});
}


//C:/Users/Reinhard.Schneider/Documents/vartabtest.txt
//*/



function zuBetrag(betrag){
	var betragstring = betrag.toString();

	try{
		console.log(betragstring);

		var splitter = betragstring.split(',');
		var firstsplit = splitter[0];
		console.log(firstsplit);
		console.log(secondsplit);
		var secondsplit = splitter[1];
		var newstring = (splitter[0]+"."+splitter[1]);
		console.log(parseFloat(newstring));
	}catch{}
	var newstring = betragstring;

	return(newstring);
}


///liefert zu einem geldsymbol die id des betraginputs
function getOutputId(geldId){
	var outputId;

	//notwendiggeld
	if(geldId == "notwendiggeld"){
		outputId = "notwendigkeiten";
	}
	//bildunggeld
	if(geldId == "bildunggeld"){
		outputId = "bildung";
	}
	//spassgeld
	if(geldId == "spassgeld"){
		outputId = "spass";
	}
	//sparengeld
	if(geldId == "sparengeld"){
		outputId = "sparen";
	}
	//ruecklagengeld
	if(geldId == "ruecklagengeld"){
		outputId = "ruecklagen";
	}
	//investmentgeld
	if(geldId == "investmentgeld"){
		outputId = "invest";
	}

	return(outputId);	
}


///selects the month to a label and changes color, auch kann der lohneingang im vorraus berechnet werden
function monthSelecting(sender){
	
	var lohn = document.getElementById("lohn");
	if(lohn.readOnly == true){
	console.log(lohn);
	var monatsAnzahl = document.getElementById("monatsAnzahlLabel");
	var anzahl = monatsAnzahl.innerText.length;
	var zahleingabe = parseInt(monatsAnzahl.innerText[anzahl-1]);
	console.log(zahleingabe);
	console.log(monatsAnzahl.innerText);
	var grundlohn = (lohn.value/zahleingabe);
	

	var senderID = sender.id;
	var senderIdentification = document.getElementById(senderID);
	if(senderIdentification.style.backgroundColor == "darkgrey"){
		senderIdentification.style.backgroundColor = "#222";
		zahleingabe --;
		console.log(grundlohn*zahleingabe);
		lohn.value = grundlohn*(zahleingabe);
	}
	else{
		senderIdentification.style.backgroundColor = "darkgrey";
		zahleingabe ++;
		console.log(grundlohn*zahleingabe);
		lohn.value = grundlohn*zahleingabe;
	}
	monatsAnzahl.innerText = ("Anzahl: " + zahleingabe);
	console.log(zahleingabe);
	umverteilung();
	}
	else{
		console.log("Der Lohn wurde noch nicht eingetragen");
	}
	
}




///writes the momentan month in the innerHTML and the rest with following months
function monthScribing(){
	var date = new Date();
	var monthIndex = date.getMonth();
	//console.log(monthIndex);
	//console.log(date);
	var months = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec ",
	"Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ", "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];
	
	
	let firstMonth = 	document.getElementById("firstMonth");
	let secondMonth = 	document.getElementById("secondMonth");
	let thirdMonth = 	document.getElementById("thirdMonth");
	let fourthMonth = 	document.getElementById("fourthMonth");
	let fifthMonth = 	document.getElementById("fifthMonth");
	let sixthMonth = 	document.getElementById("sixthMonth");
	
	firstMonth.innerText = (months[monthIndex+1]);
	secondMonth.innerText = (months[monthIndex+2]);
	thirdMonth.innerText = (months[monthIndex+3]);
	fourthMonth.innerText = (months[monthIndex+4]);
	fifthMonth.innerText = (months[monthIndex+5]);
	sixthMonth.innerText = (months[monthIndex+6]);
}






































