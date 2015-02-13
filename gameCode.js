console.log('Beginning Game');

var num_cells=0;
var lastcell=0;

var hits=0;
var misses=0;

var loopTime = 1600,
	lives = 10,
	level = 1,
	myVar;

// function resetGame() {

$( document ).ready(function() {
				$('#lives').html(lives);
});

function drawtable() {
	var num_rows=6 ;
	var num_cols=8 ;

	document.write('<table cellpadding="0" border="0" cellspacing="0" align="right">');
	for ( i=0 ; i<num_rows; i++ ) {
		document.write('<tr align="center">');
		for(x=0; x<num_cols; x++) {
			document.write('<td> <img id="image'+num_cells+'" onclick="missed()" src="mole_hole.jpg" height="100" width="100"></td>');
			num_cells++ ;
			}
			document.write('</tr>');
		}
		document.write('</table>');

		gameloop();
}

function missed() {
	misses++ ;
	document.getElementById('miss').innerHTML=misses ;
 lives--;
	$('#lives').html(lives);
	if (lives == 0) {
		alert("GAME OVER!");
	 clearTimeout(myVar);
 }
}
	//miss.innerHTML=misses


function hit() {
	hits++ ;
	document.getElementById('hit').innerHTML=hits ;
	document.getElementById("image"+newcell).src="Troll.jpg";
	document.getElementById("image"+newcell).onclick=function(){noop() ;};
}



function gameloop() {
	console.log('gameloop');
	changeimage()
	if(hits == 10) {
		loopTime = 900;
	}
	console.log('looptime: ', loopTime);
	myVar = setTimeout(gameloop, loopTime);

	if (loopTime == 1600 ) {
			$('#Level').html('1');
	} else {
		$('#Level').html('2');
	}
}
 // if (lives == 0) {
			// console.log('GAME OVER!');



function noop() {
}


function changeimage() {

	// Pick a random cell
	newcell=Math.floor((Math.random()*num_cells));
	// Change the last cell back to a missed celll
	console.log('cell: ',"image"+newcell);
	document.getElementById("image"+lastcell).src="mole_hole.jpg";
	document.getElementById("image"+lastcell).onclick=function(){missed() ;};
	// Change the new cell to a troll cell
	document.getElementById("image"+newcell).src="mole.jpg";
	document.getElementById("image"+newcell).onclick=function(){hit() ;};

	lastcell=newcell ;
}
