T=["foot ball","tennis","squash","basket ball","volley ball","hand ball"];
function randomword(){
    x=10;
    do{
	x=Math.floor(Math.random()*10);
	if(x==6){x=5;} 
	}while(x>6);
    word=T[x];
}

function generate_guesszone(){
   L=word.length;
   empty_nodes = new Array();
   empty_tds = new Array();
   for(i=0;i<L;i++){
   	if(word[i]!=" "){
   	var ch0=document.createTextNode("_");
    }
    if(word[i]==" "){
   	var ch0=document.createTextNode("-");
    }
   	var ch=document.createElement("h2");
   	ch.style="text-align:center;"
   	ch.id="l"+i;
   	ch.appendChild(ch0);
   	empty_nodes[i]=ch;
   	console.log(empty_nodes[i]);
   	var ch1=document.createElement("th");
   	ch1.style="margin-left:10px;margin-right:10px;"
   	empty_tds[i]=ch1;
   	empty_tds[i].appendChild(empty_nodes[i]);
    document.getElementById("tr").appendChild(empty_tds[i]);
   }
   
}
comp=1;

function image_change(){
    if (comp==1){
    document.getElementById("hangman").src="image/1.png"
	} 
	if (comp==2){
    document.getElementById("hangman").src="image/2.png"
	}
	if (comp==3){
    document.getElementById("hangman").src="image/3.png"
	}
	if (comp==4){
    document.getElementById("hangman").src="image/4.png"
	}
	if (comp==5){
    document.getElementById("hangman").src="image/5.png"
	}
	if (comp==6){
    document.getElementById("hangman").src="image/6.png"
	}
	if (comp==7){
		document.getElementById("hangman").src="image/7.png"
	}
}
wg = new Array();
wc=0;
rg = new Array();
function guesses(){
     etter=document.getElementById("guess").value;
     letter=etter.toLowerCase();
     console.log(letter);
	if(letter.length>"1"){
		alert("insert only one letter please !");
	}
     var verif=0;
     for(i=0;i<L;i++){
		var c="l"+i;
		var le=document.getElementById(c).innerHTML;
		if(letter==le){
			verif=1;
		}}
		if(verif==1){
			alert("this has already been submited");
		}
		else{
             test();
		}
}

cc=0;
function test(){
		pos = new Array();
		wor = new Array();
		j=0;
		for(i=0;i<L;i++){
			if(letter==word[i]){
             pos[j]=i;
             wor[j]=word[i];
             j++;
			}
		}
		if(j!=0){
			rg[cc]=letter;
			cc++;
			for(i=0;i<j;i++){
				var ch="l"+pos[i];
				document.getElementById(ch).innerHTML=wor[i];
			}
			var v=0;
			for(i=0;i<j;i++){
				if(letter==rg[i] && cc>1){
                 v=1;
				}
			}
			if(comp>1 && v==0){
				comp--;
			}
		}
		else if(j==0){
			comp++;
			wg[wc]=letter;
			wc++;
		}
		pos = new Array();
		wor = new Array();
	}


function wrong_guess(){
      ch=" "
      for(i=0;i<wc;i++){
      ch=ch+wg[i];
      }
       document.getElementById("guesses").innerHTML="Wrong Answers : "+ch;
}

function restart(){
     location.reload();
return false;
}
function lost(){
	if(comp==6){
       document.getElementById("g").disabled="true";
       document.getElementById("lost").style.visibility="visible";
	}
}
function won(){
	verif=0;
	for(i=0;i<L;i++){
		var c="l"+i;
		var le=document.getElementById(c).innerHTML;
		if(le=="_"){
			verif=1;
		}
	}
	console.log(verif);
	if(verif==0){
		comp=7;
	image_change();
		document.getElementById("won").style.visibility="visible";
       document.getElementById("g").disabled="true";
}

}