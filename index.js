const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

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
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

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







//Globale Variablen
var geldId ="";



//Methoden

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


function toGrund(sender){
	var senderValue = sender;
	document.getElementById("grund").value = senderValue;

}


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

}


function gelduebertragen(ev ,sender){
	ev.dataTransfer.setData("",sender.id);
	//console.log(sender.id);
	geldId = sender.id;
}


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

function allowDrop(ev,sender){
	ev.preventDefault();

}
//function geldabziehen(inputId,outputId,betragstring)
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



function getOutputId(geldId){
	var outputId;


	if(geldId == "notwendiggeld"){
		outputId = "notwendigkeiten";
	}
	if(geldId == "bildunggeld"){
		outputId = "bildung";
	}
	if(geldId == "spassgeld"){
		outputId = "spass";
	}
	if(geldId == "sparengeld"){
		outputId = "sparen";
	}
	if(geldId == "ruecklagengeld"){
		outputId = "ruecklagen";
	}
	if(geldId == "investmentgeld"){
		outputId = "invest";
	}

	return(outputId);




	//notwendiggeld
	//bildunggeld
	//spassgeld
	//sparengeld
	//ruecklagengeld
	//investmentgeld
}





/* TestFunktion
function test(){
	var check = document.getElementsByClassName("check");
	for(var i = 0;i<check.length;i++){
		check[i].checked = true;
	}
*/
