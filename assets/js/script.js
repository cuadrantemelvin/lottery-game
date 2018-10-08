$(document).ready(() => {

	//for generating of random numbers
	let numGen = [];
	
	$("#generate").click(function (){
		for (i=1; i<=6 ; i++){
			random = getRandomNumbers(1,58);
			if(numGen.length < 6 && random != numGen[i] && userPick.length == 6){
				
				numGen.push(random);
				$("#message").append(random + " ");

				console.log(numGen);	
			}else{
				alert ("Please add more number/s.")
				break;
			}
		}	
	});
	//generating of random numbers;
	function getRandomNumbers(min, max) {
		let random = Math.floor(Math.random() * 58)+1;
		return random;
	};
	

	// for number picking
	let userPick = [];
	for (i = 1; i <= 58; i++) {
		$('#num' + i).click(function () {
			let value = Number($(this).val());
			if (userPick.length <= 5 && userPick[i] != value) {
				userPick.push(value);
				$("#userPick").append(value + " ");
				
			}else{
				alert('You already picked 6 numbers');
			}
		
		});
		
	};
	
	

	// for checking of numbers

	for(i=1;i<=numGen.length; i++){
		for(j=1; j<=5; j++){
			if(numGen[i] == userPick[j]){
			
				userPick[j].style.color = "green";
			}
			else{
				userPick[j].style.color = "red";
				
			}
		}
		
	}
	

	

		
});
