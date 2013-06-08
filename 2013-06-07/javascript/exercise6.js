/* EXERCISE 6 */



/* La funzione larToObj(model) accetta in input un modello lar `model`, definito come coppia 
(un array) [v, fv], dove v è l'array dei vertici del modello, e fv è la matrice compatta delle 
facce 2d del modello. In output restituisce in uscita il testo (una stringa) che rappresenta 
il contenuto del file Obj. */



var larToObj = function(v,fv) {
  
   var string = "#Obj File" +'\n';

   string = string + "#List of Vertices (2 coordinates [x,y])" +'\n';
  
   for(i = 0; i < v.length; i++){
   		string = string + "v " + v[i][0] + " " + v[i][1] + " ";
   }
  
   string = string + "# Face Definitions" +'\n';

   for(i = 0; i < fv.length; i++){
   		string = string + "f ";
   		for(j = 0; j< fv[i].length; j++){
   			string = string + fv[i][j] + " ";
   			if(j === (fv[i].length)-1 )
   			string = string + "\n";
   		}
   }
   return string;
}



// Applicazione

var FV = [[5,6,7,8],
[0,5,8],
[0,4,5],
[1,2,4,5],
[2,3,5,6],
[0,8,7], [3,6,7], [1,2,3], [0,1,4]
];

var V = [[0,6],
[0,0],
[3,0],
[6,0],
[0,3],
[3,3],
[6,3],
[6,6],
[3,6]];



var obj = larToObj(V,FV);