 var i;
	 for(i = 0; i <= 50 ; i = i + 5)
	 {
	 document.getElementById("numbers").innerHTML += i + "<br>"
	}

	 function arry(){
 	var place=["chennai","pondy","tricy","covi","madurai"];
 	var len=place.length;
 	var text="";
 	var i;
 	for(i = 0;i < len ; i++){
 		text+=place[i]+"<br>"
 	}
document.getElementById("result").innerHTML=text;
 }