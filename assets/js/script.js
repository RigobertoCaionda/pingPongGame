let player = document.querySelector('.player1');
let playing = false;
let startGameButton = document.querySelector('#start');
let ball = document.querySelector('.ball');
let playerCurrentPosition = player.getBoundingClientRect();
let newPlayerPosition = playerCurrentPosition.top;

let ballPosition = ball.getBoundingClientRect();
let newBallPosition = ballPosition.left;
function ballMovement(){
	setInterval(()=>{
		if(ball.offsetLeft >= 1300){
			newBallPosition -= 20;
		}else{
			newBallPosition += 20; 
		}
		ball.style.left = `${newBallPosition}px`;
		console.log(newBallPosition);
		document.querySelector('#test').value = ball.offsetLeft;
	},100);
}
function playerMovement(event){
	if(event.keyCode == 38){
		if(newPlayerPosition <= 0){
			player.style.top = `0`;
		}else if(newPlayerPosition > 0){
			if(player.offsetTop == 30){
				newPlayerPosition -= 30;
			}else{
				newPlayerPosition -= 50; 
			}
			player.style.top = `${newPlayerPosition}px`;
		}
	}else if(event.keyCode == 40){
			if(player.offsetTop >= 380){
				if(player.offsetTop >= 420){
					newPlayerPosition = newPlayerPosition;
				}else{
					newPlayerPosition += 20;
				}
			}else{
				newPlayerPosition += 50; 
			} 
			player.style.top = `${newPlayerPosition}px`;
	}
}
startGameButton.addEventListener('click',()=>{
	playing = true;
	document.addEventListener('keydown',(e)=>{
	if(playing){
		playerMovement(e);
	}else{
		alert('clique em iniciar!');
	}
});
ballMovement();
});