function redder(){
	var buttons = document.getElementsByTagName("button");
	if(buttons[0].style.color == "darkgreen"){
		for(var i = 0; i < buttons.length ; i++){
			buttons[i].style.color = "black";
		}
	}else{
		for(var i = 0; i < buttons.length ; i++){
			buttons[i].style.color = "darkgreen";
		}
	}
}


function getvariables(){
	var a = document.getElementById("input").value;
	var b = document.getElementById("output").value;
	var c = document.getElementById("ergebnis").value;
	var object = [a,b,c];
	return(object);
}

function ausgabe(erg){
	var c = document.getElementById("ergebnis").value = erg;
}

function addieren(){
	var object = getvariables();
	var a = object[0];
	var b = object[1];
	var zahl1 = parseInt(a);
	var zahl2 = parseInt(b);
	
	var erg = (zahl1+zahl2);
	
	ausgabe(erg);
}

function subtrahieren(){
	var object = getvariables();
	var a = object[0];
	var b = object[1];
	var zahl1 = parseInt(a);
	var zahl2 = parseInt(b);
	
	var erg = (zahl1-zahl2);
	
	ausgabe(erg);
}

function dividieren(){
	var object = getvariables();
	var a = object[0];
	var b = object[1];
	var zahl1 = parseFloat(a);
	var zahl2 = parseFloat(b);
	
	var erg = (zahl1/zahl2);
	
	ausgabe(erg);
}

function multiplizieren(){
	var object = getvariables();
	var a = object[0];
	var b = object[1];
	var zahl1 = parseInt(a);
	var zahl2 = parseInt(b);
	
	var erg = (zahl1*zahl2);
	
	ausgabe(erg);
}

function modulo(){
	var object = getvariables();
	var a = object[0];
	var b = object[1];
	var zahl1 = parseInt(a);
	var zahl2 = parseInt(b);
	
	var erg = (zahl1%zahl2);
	
	ausgabe(erg);
}

function potenz(){
	var object = getvariables();
	var a = object[0];
	var b = object[1];
	var basis = a;
	var potenz = parseInt(b)-1;
	var standard = basis;
	
	while(potenz != 0){
		basis *= standard;
		potenz = potenz-1;
	}
	var erg = (basis);
	ausgabe(erg);	
}

function pythagoras(){
	
	var object = getvariables();
	var a = object[0];
	var b = object[1];
	
	var aquadrat = a;
	var bquadrat = b;
	var c = aquadrat*aquadrat+bquadrat*bquadrat;
	var d = Math.sqrt(c);
	
	var erg = d;
	ausgabe(erg);
}

function uebertrag(){
	var uebertragszahl = document.getElementById("ergebnis").value;
	document.getElementById("input").value = uebertragszahl;
}

function mitternachtnegativ(){
	//(b-|b²-4ac|)/2a
	var object = getvariables();
	var a = parseFloat(object[0]);
	var b = parseFloat(object[1]);
	var c = parseFloat(object[2]);
	
	
	var bqad = (b*b);
	var vierac = (4*a*c);
	var inwurzel = (bqad-vierac);
	var wurzel = Math.sqrt(inwurzel);
	var dividend = (-b)-wurzel;
	var divisor = 2*a;
	/*
	alert(bqad);
	alert(vierac);
	alert(inwurzel);
	alert(wurzel);
	alert(dividend);
	alert (divisor);
	*/
	var erg = dividend/divisor;
	//var erg = ((b-Math.sqrt((b*b)-(4*a*c)))/(2*a));
	
	return(erg);
}

function mitternachtpositiv(){
	//(b+|b²-4ac|)/2a
	var object = getvariables();
	var a = parseFloat(object[0]);
	var b = parseFloat(object[1]);
	var c = parseFloat(object[2]);
	
	
	var bqad = (b*b);
	var vierac = (4*a*c);
	var inwurzel = (bqad-vierac);
	var wurzel = Math.sqrt(inwurzel);
	var dividend = (-b)+wurzel;
	var divisor = 2*a;
	/*
	alert(bqad);
	alert(vierac);
	alert(inwurzel);
	alert(wurzel);
	alert(dividend);
	alert (divisor);
	*/
	var erg = dividend/divisor;
	//var erg = ((b+Math.sqrt((b*b)-(4*a*c)))/(2*a));
	return(erg);
}

function mitternacht(){
	document.getElementById("mf1").value = mitternachtnegativ();
	document.getElementById("mf2").value = mitternachtpositiv();	
}
























function pythagoras2(){
	var aquadrat = prompt("Gib bitte die Laenge von a an");
	var bquadrat = prompt("Gib bitte die Laenge von b an");
	var c = aquadrat*aquadrat+bquadrat*bquadrat;
	var d = Math.sqrt(c);
	
	alert(d);

	var textBody = document.getElementById("textBody");
	textBody.textContent = Date();


}

function potenz1(){
	//var basis = parseInt(prompt("Gib eine Basis an"));
	//var potenz = parseInt(prompt("Gib eine Potenz an"))-1;
	var basis = document.getElementById("input").value;
	var potenz = parseInt(document.getElementById("output").value)-1;
	var standard = basis;
	//alert(valueOf(potenz));
	//alert(valueOf(basis));
	
	while(potenz != 0){
		basis *= standard;
		potenz = potenz-1;
	}
	alert(basis);
	
	//var int1 = parseInt(document.getElementById("input"));
	var inhalt1 = document.getElementById("input");
	var inhalt1 = document.getElementById("input");
	
	inhalt1.textContent = "Hallo Welt!";
	

}

