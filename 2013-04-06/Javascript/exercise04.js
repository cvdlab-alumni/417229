//Finestre
function ffinestra(punti, celle) {
	var finestra2D = SIMPLICIAL_COMPLEX(punti)(celle);
return COLOR([0,0,0,1])(finestra2D);
}

var Esempiofinestra = ffinestra([[0.14,0,11.1],[5.5,0,11.1],[5.5,0,12.1],[0.14,0,12.1]],[[0,1,2],[0,2,3]]);
