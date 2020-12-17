var numberOfSquares=6
var colours=generateColours(numberOfSquares)
var pickedColour=pickColour()
var squares=document.querySelectorAll(".square");
var picked=document.querySelector("#pickedColour")
var messageDisplay=document.querySelector("#message")
var reset=document.querySelector("#change")
var h1=document.getElementsByTagName("h1")[0]
var easyButton=document.querySelector("#easy")
var hardButton=document.querySelector("#hard")
var mode=document.querySelectorAll(".mode")
picked.textContent=pickedColour;
setupModeButtons()


for(var i=0;i<squares.length;i++){
	//assign a colour to each sqaure
	squares[i].style.backgroundColor=colours[i]

	squares[i].addEventListener("click", function(){

		var clickedColour=this.style.backgroundColor

		//compare colour to pickedColour

		if(clickedColour===pickedColour){
			messageDisplay.innerHTML="CORRECT !!"
			//chnage the colour of all sqaurs to the picked colour
			changeColours(clickedColour)
			h1.style.backgroundColor=clickedColour

			if(reset.textContent==="NEW COLOURS")
			reset.textContent="PLAY AGAIN ?"

			}

		else{
			this.style.backgroundColor="#232323"
			messageDisplay.innerHTML="TRY AGAIN"
		}
	})
}

reset.addEventListener("click", function(){



	colours=generateColours(numberOfSquares)
	pickedColour=pickColour();
	picked.textContent=pickedColour;

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colours[i]
	}
	
	if(this.textContent==="PLAY AGAIN ?"){
			this.textContent="NEW COLOURS"
		}

	messageDisplay.innerHTML=""

	h1.style.backgroundColor="steelblue"	


})




function setupModeButtons(){
for(var i=0;i<mode.length;i++){


mode[i].addEventListener("click", function(){


if(this.textContent==="EASY"){
		numberOfSquares=3
	}

	else{
		numberOfSquares=6
	}

	easyColourGenerator(numberOfSquares)

})
	}
		}

function changeColours(color){

	//loop through all sqaures
	//change each square colour to given colour
	for(var i=0;i<colours.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColour(){
	//returns a random number between 0 and 5
	var random=Math.floor(Math.random()*colours.length)
	return colours[random]
}

//create a function that calculates 3 numbers 0-255 assigns it to a string  and return the value

function generateColours(SquareNumber){
//calculate 3 random numbers between 0-255
//loop through colours and assing a rgb string to sqaure 
colours=[]
for(var i=0; i<SquareNumber;i++){

	

	colours[i]= randomColour()

}

return colours;

	
}

function randomColour(){


	//assing random colours to 3 variables and return the in a string
	var red=Math.floor(Math.random()*256)
	var green=Math.floor(Math.random()*256)
	var blue=Math.floor(Math.random()*256)

	return "rgb("+red+", "+green+", "+blue+")"

}


function easyColourGenerator(numberOfSquares){

	colours=generateColours(numberOfSquares)

for(var i=0;i<squares.length;i++){

	//if there is a colour at colour[i] . But how ????
if(colours[i])
{	
	squares[i].style.display="block"
	squares[i].style.backgroundColor=colours[i]
}

else
squares[i].style.display="none"
}


pickedColour=pickColour();
picked.textContent=pickedColour;






if(mode[1].className==="selected mode"||mode[1].className==="mode selected" ){

	mode[0].classList.add("selected")	
	mode[1].classList.remove("selected")

	
}


else 
	{
	mode[1].classList.add("selected")
	mode[0].classList.remove("selected")

	}



	h1.style.backgroundColor="steelblue"	
	reset.textContent="NEW COLOURS"
	messageDisplay.innerHTML=""

}


   
