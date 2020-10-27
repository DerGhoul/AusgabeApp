function selectchanger(sender){
	var check = document.getElementsByClassName("check");
	var sendedId = sender;


	for(var i = 0;i<check.length;i++){

		if(check[i].id == sendedId){
			console.log(true);
		}
		else{
		check[i].checked = false;
		}

	}

}

function disselect(){
	var check = document.getElementsByClassName("check");
	for(var i = 0;i<check.length;i++){
	check[i].checked = false;
	}
}



function wichIsSelected(){
	var check = document.getElementsByClassName("check");

	for(var i = 0;i<check.length;i++){
		if(check[i].checked == true){
			//console.log(check[i].id);
			return check[i].id;
		}
	}
}


function book(){
	var selected = wichIsSelected();
	console.log(selected);
	//hier kommt ein Verbuchungsalgorithmus
	var grund = document.getElementById("grund").value;
	var beschreibung = document.getElementById("beschreibung").value;
	var date = document.getElementById("date").value;
	var preis =document.getElementById("preis").value;


	disselect();


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

	bild.value = 0.1 * value;
	spas.value = 0.1 * value;
	spar.value = 0.1 * value;
	ruec.value = 0.1 * value;
	inve.value = 0.1 * value;
	notw.value = 0.5 * value;
}










/* TestFunktion
function test(){
	var check = document.getElementsByClassName("check");
	for(var i = 0;i<check.length;i++){
		check[i].checked = true;
	}
*/
