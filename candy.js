var startContainer=document.getElementsByClassName('startContainer')[0];
var startButton=document.getElementsByClassName('startButton')[0];
var instructionButton=document.getElementsByClassName('instructionButton')[0];
var start=document.getElementsByClassName('start')[0];
var closeButton=document.getElementsByClassName('closeButton')[0];
var instructionPopUp=document.getElementsByClassName('instructionPopUp')[0];
var gameArea=document.getElementsByClassName('gameArea')[0];
var character=document.getElementById('character');

//start game
startButton.addEventListener("click",()=>{
	startContainer.style.display="none";
	start.style.display="block";
	closeButton.style.display="block";
	instructionPopUp.style.display="none";
});

//close game
closeButton.addEventListener("click",()=>{
	startContainer.style.display="block";
	start.style.display="none";
	closeButton.style.display="none";
	instructionPopUp.style.display="none";
});

// game instruction
instructionButton.addEventListener("click",()=>{
	startContainer.style.display="none";
	start.style.display="none";
	closeButton.style.display="block";
	instructionPopUp.style.display="block";
});

//character movement
document.addEventListener("keydown", e=>{
	// console.log(e);
	var move=20;
	// console.log(e)
	// left movement
	if(e.key=="ArrowLeft")
	{
		e.preventDefault();
		console.log(e)
		if (character.offsetLeft > gameArea.clientLeft)//0 can be used because offsetlLeft gives left wrt its parent
		{
			character.style.left=character.offsetLeft - move+"px";
		}
	}

	//right movement
	if(e.key=="ArrowRight")
	{
		e.preventDefault();
		// console.log(gameArea.clientWidth);
		if (character.offsetLeft < (gameArea.clientWidth - character.clientWidth))
		{
			character.style.left=character.offsetLeft + move+"px";
		}
	}
	
	//Up movement
	if(e.key=="ArrowUp")
	{
		// e.preventDefault();
		// console.log(e);
		if (character.offsetTop > 0)
		{
			character.style.top=character.offsetTop - move+"px";
		}
	}

	//down movement
	if(e.key=="ArrowDown")
	{
		// e.preventDefault();
		// console.log(gameArea.clientWidth);
		if (character.offsetTop < (gameArea.clientHeight - character.clientHeight))
		{
			character.style.top=character.offsetTop + move+"px";
		}
	}
	
}); //e is the event