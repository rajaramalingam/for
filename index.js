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


 function findValue() {
	var arr=["1","2","3","12","3","12","14","15","6","7","8","3","4","1"];
	var a=document.getElementById('x').value;
	var b=0;
	var i;
	for(i=0; i<arr.length; i++){
		if(arr[i]==a){
			b++;
		}
	}
	document.getElementById("x").innerHTML=a;
	document.getElementById("res").innerHTML=b;

}