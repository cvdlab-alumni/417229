/* EXERCISE 1 */



var coordinates3D = function(v) {
	
	var x = v[0];
  	var y = v[1];

  	var a = 2;
  	var b = 3;

  	var z =  ( COS(x/16)*SIN(y/2) +  2*( (COS(1.2*x)*SIN(1.2*y)) ) + (COS(x/16)*SIN(y/2)) )/1.2;

  	if(z<0)
  		z = 0;

  return [x,y,z];
}

dom2D = PROD1x1([INTERVALS(10)(32),INTERVALS(10)(32)]);

var land = MAP(coordinates3D)(dom2D);
land = COLOR([0.6,0.4,0.25])(land);

DRAW(land);






/* EXERCISE 2 */


dom1D = INTERVALS(1)(20);
dom2D = PROD1x1([dom1D,dom1D]);


var ctrlP1 = [ [0,3.8],[0,5.6], [-3,0],[-1,2] ];
var curve1M = CUBIC_HERMITE(S0)(ctrlP1);
var curve1 = MAP(curve1M)(dom1D);

var ctrlP2 = [ [0,5.6],[1,6.5] ,[-1,2],[1,0] ];
var curve2M = CUBIC_HERMITE(S0)(ctrlP2);
var curve2 = MAP(curve2M)(dom1D);

var ctrlP3 = [ [2,5.5],[1,6.5], [-5,0],[-2,0] ];
var curve3M = CUBIC_HERMITE(S0)(ctrlP3);
var curve3 = MAP(curve3M)(dom1D);

var ctrlP4 = [ [2,4],[2,5.5], [2,2],[-5,0] ];
var curve4M = CUBIC_HERMITE(S0)(ctrlP4);
var curve4 = MAP(curve4M)(dom1D);

var ctrlP5 = [ [0,3.8],[2,4], [2,-0.25],[1,1] ];
var curve5M = CUBIC_HERMITE(S0)(ctrlP5);
var curve5 = MAP(curve5M)(dom1D);

var f1Surface = MAP(BEZIER(S1)([curve1M,curve4M]))(dom2D);
f1Surface = COLOR([1,0,0,1])(f1Surface); 

var f2Surface = MAP(BEZIER(S1)([curve1M,curve5M]))(dom2D);
f2Surface = COLOR([1,0,0,1])(f2Surface); 

var f3Surface = MAP(BEZIER(S1)([curve2M,curve3M]))(dom2D);
f3Surface = COLOR([1,0,0,1])(f3Surface); 

lake = STRUCT([f1Surface,f2Surface,f3Surface]);
lake = T([0,1,2])([1.8,3.2,0.001])(COLOR([0.5,1,0.83])(lake));


DRAW(lake);


/* EXERCISE 3 */


dom1D = INTERVALS(1)(4);
dom2D = PROD1x1([dom1D,dom1D]);

// Singolo albero

var ctrlP1 = [ [0,0,0],[5,0,1], [1,0,0],[3,0,1] ];
var c1 = CUBIC_HERMITE(S0)(ctrlP1);

var ctrlP2 = [ [5,0,1],[2,0,3], [-5,0,1],[-1,0,3] ];
var c2 = CUBIC_HERMITE(S0)(ctrlP2);

var ctrlP3 = [ [2,0,3],[3.2,0,4.2], [1,0,1],[2,0,3] ];
var c3 = CUBIC_HERMITE(S0)(ctrlP3);

var ctrlP4 = [ [3.2,0,4.2],[1,0,4.5], [-1,0,0],[-1,0,1] ];
var c4 = CUBIC_HERMITE(S0)(ctrlP4);

var ctrlP5 = [ [1,0,4.5],[2,0,6], [1,0,1],[2,0,3] ];
var c5 = CUBIC_HERMITE(S0)(ctrlP5);

var ctrlP6 = [ [2,0,6],[0,0,8], [-5,0,1],[0,0,2]  ];
var c6 = CUBIC_HERMITE(S0)(ctrlP6);
 
var h1 = BEZIER(S0)([[0,0,0],[0,0,1]]);
var h2 = BEZIER(S0)([ [0,0,1],[0,0,3] ]);
var h3 = BEZIER(S0)([ [0,0,3],[0,0,4.2] ]);
var h4 = BEZIER(S0)([ [0,0,4.2],[0,0,4.5] ]);
var h5 = BEZIER(S0)([ [0,0,4.5],[0,0,6] ]);
var h6 = BEZIER(S0)([ [0,0,6],[0,0,8] ]);

var s1 = MAP(BEZIER(S1)([c1,h1]))(dom2D);
var s2 = MAP(BEZIER(S1)([c2,h2]))(dom2D);
var s3 = MAP(BEZIER(S1)([c3,h3]))(dom2D);
var s4 = MAP(BEZIER(S1)([c4,h4]))(dom2D);
var s5 = MAP(BEZIER(S1)([c5,h5]))(dom2D);
var s6 = MAP(BEZIER(S1)([c6,h6]))(dom2D);

halfSurface = STRUCT([s1,s2,s3,s4,s5,s6]);
halfSurface = COLOR([0.13,0.545,0,13])(halfSurface);
halfSurface = S([0])([0.7])(halfSurface);

surface = STRUCT([halfSurface, S([0])([-1])(halfSurface)]);
hair = STRUCT( REPLICA(8)([R([0,1])(PI/4),surface]) );
hair = T([2])([0.6])(hair);

tronk = EXTRUDE([0.6]) ( COLOR([0.5,0.3,0.16])(DISK(0.3)(36)) );
tree = STRUCT([hair,tronk]);
tree = S([0,1,2])([0.025,0.025,0.025])(tree);

tree1 = T([0,1,2])(coordinates3D([1,1]))(tree);


// Piazzamento alberi pendici


treesGroupie0 = STRUCT([tree,T([0,1,2])(coordinates3D([0.1,0]))(tree),T([0,1,2])(coordinates3D([0.05,0.05]))(tree)]);
DRAW(treesGroupie0);

treesGroupie1 = STRUCT([T([0,1,2])(coordinates3D([0.2,0]))(tree),T([0,1,2])(coordinates3D([0.15,0.05]))(tree)]);
DRAW(treesGroupie1);

treesGroupie2 = STRUCT([T([0,1,2])(coordinates3D([0.3,0]))(tree),T([0,1,2])(coordinates3D([0.25,0.05]))(tree)]);
DRAW(treesGroupie2);

treesGroupie3 = STRUCT([T([0,1,2])(coordinates3D([0.4,0]))(tree),T([0,1,2])(coordinates3D([0.35,0.05]))(tree)]);
DRAW(treesGroupie3);

treesGroupie4 = STRUCT([T([0,1,2])(coordinates3D([0.5,0]))(tree),T([0,1,2])(coordinates3D([0.45,0.05]))(tree)]);
DRAW(treesGroupie4);

treesGroupie5 = STRUCT([T([0,1,2])(coordinates3D([0.6,0]))(tree),T([0,1,2])(coordinates3D([0.55,0.05]))(tree)]);
DRAW(treesGroupie5);

treesGroupie6 = STRUCT([T([0,1,2])(coordinates3D([0.7,0]))(tree),T([0,1,2])(coordinates3D([0.65,0.05]))(tree)]);
DRAW(treesGroupie6);

treesGroupie7 = STRUCT([T([0,1,2])(coordinates3D([0.8,0]))(tree),T([0,1,2])(coordinates3D([0.75,0.05]))(tree)]);
DRAW(treesGroupie7);

treesGroupie8 = STRUCT([T([0,1,2])(coordinates3D([0.9,0]))(tree),T([0,1,2])(coordinates3D([0.85,0.05]))(tree)]);
DRAW(treesGroupie8);

treesGroupie9 = STRUCT([T([0,1,2])(coordinates3D([1,0]))(tree),T([0,1,2])(coordinates3D([0.95,0.05]))(tree)]);
DRAW(treesGroupie9);

treesGroupie10 = STRUCT([T([0,1,2])(coordinates3D([1.1,0]))(tree),T([0,1,2])(coordinates3D([1.05,0.05]))(tree)]);
DRAW(treesGroupie10);

treesGroupie11 = STRUCT([T([0,1,2])(coordinates3D([1.2,0]))(tree),T([0,1,2])(coordinates3D([1.15,0.05]))(tree)]);
DRAW(treesGroupie11);

treesGroupie12 = STRUCT([T([0,1,2])(coordinates3D([1.3,0]))(tree),T([0,1,2])(coordinates3D([1.25,0.05]))(tree)]);
DRAW(treesGroupie12);

treesGroupie13 = STRUCT([T([0,1,2])(coordinates3D([1.4,0]))(tree),T([0,1,2])(coordinates3D([1.35,0.05]))(tree)]);
DRAW(treesGroupie13);

treesGroupie14 = STRUCT([T([0,1,2])(coordinates3D([1.5,0]))(tree),T([0,1,2])(coordinates3D([1.45,0.05]))(tree)]);
DRAW(treesGroupie14);

treesGroupie15 = STRUCT([T([0,1,2])(coordinates3D([1.6,0]))(tree),T([0,1,2])(coordinates3D([1.55,0.05]))(tree)]);
DRAW(treesGroupie15);

treesGroupie16 = STRUCT([T([0,1,2])(coordinates3D([1.7,0]))(tree),T([0,1,2])(coordinates3D([1.65,0.05]))(tree)]);
DRAW(treesGroupie16);


// gruppo alberi

treesGroupie = STRUCT([ T([0,1,2])([0.1,0,0])(tree), T([0,1,2])([0.05,0.1,0])(tree) ]);
treeGroupRow = STRUCT( REPLICA(7)([ treesGroupie, T([0])([0.1]) ]) );
treeGroupRow = T([0])([1.8])(treeGroupRow);
// DRAW(treeGroupRow);

treeGroup = STRUCT( REPLICA(3)([ treeGroupRow, T([1])([0.2]) ]) );
DRAW(treeGroup);

// terne sparse

treesGroupie0_1 = T([0,1,2])(coordinates3D([3,3]))(treesGroupie0);
DRAW(treesGroupie0_1);

treesGroupie0_2 = T([0,1,2])(coordinates3D([5,5]))(treesGroupie0);
DRAW(treesGroupie0_2);

treesGroupie0_3 = T([0,1,2])(coordinates3D([9,9]))(treesGroupie0);
DRAW(treesGroupie0_3);

treesGroupie0_4 = T([0,1,2])(coordinates3D([1,9]))(treesGroupie0);
DRAW(treesGroupie0_4);

treesGroupie0_5 = T([0,1,2])(coordinates3D([8,9]))(treesGroupie0);
DRAW(treesGroupie0_5);

treesGroupie0_6 = T([0,1,2])(coordinates3D([7,2.5]))(treesGroupie0);
DRAW(treesGroupie0_6);


// albero isolotto

islandTree = T([0,1,2])(coordinates3D([2.5,9]))(tree);
DRAW(islandTree);




/* EXERCISE 4 */


dom2D = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);


var createHome = function(x,y,z) {

	var home = CUBOID([x,y,z]);
	home = COLOR([0.8,0.99,1])(home);
	var ls = BEZIER(S0)([ [-x/2,0],[0,z/3] ]);
	var ld = BEZIER(S0)([ [x/2,0],[0,z/3] ]);
	var roofTriangle = MAP( BEZIER(S1)([ls,ld]) )(dom2D);
	var roof = S([2])([-1])(EXTRUDE([y])(roofTriangle));
	roof = R([1,2])(PI/2)(roof);	
	roof = T([2])([z])(roof);
	roof = T([0])([x/2])(COLOR([0.4,0.09,0.2])(roof));
	var home = STRUCT([ home, roof ]);
	return home;

}

var createChurch = function(x1,x2,y1,y2,z) {

	var home1 = createHome(x1,y1,z);
	var home2 = T([0])([-x2])(createHome(x2,y2,3*z));
	var church = STRUCT([home1,home2]);
	return church;
}



var home1 = createHome(2,2,0.7);

var home2 = T([0])([3.5])(createHome(1.5,2,1));

var home3 = R([0,1])(PI/2)(T([0,1])([-1.5,-2])(createHome(3,4,1.5)));
home3 = T([0,1])([1+1.5,4+2])(home3);

var home4 = T([1])([9])(createHome(1,2,1));

var home5 = T([0,1])([2,9])(createHome(3,2,1.5));

var home6 = T([0])([8])(createHome(3,2,0.7));

var home7 = T([0])([12])(createHome(2,2,1));

var home8 = T([0,1])([7,9])(createHome(2,1.5,1.5));

var home9 = T([0,1])([9,9])(createHome(3,2,3));

var home10 = T([0,1])([12,9])(createHome(2,1.5,1.5));

var home11 = T([0])([16])(createHome(5,5,3));

var home12 = T([0,1])([16,9])(createHome(2,2,2.5));

var home13 = T([0,1])([19,9])(createHome(2,2,1.5));

var home14 = R([0,1])(PI/2)(T([0,1])([-0.5,-1])(createHome(1.5,2,1.5)));
home14 = T([0,1])([16+2.5,6+0.5])(home14);


var church = (createChurch(1.5,1,5,2,2));
church = T([1])([1.5])(R([0,1])(-PI/2)(church));
church = T([0,1])([8,4.25])(church);

var villageBigger = S([0,1,2])([0.07,0.07,0.07])(STRUCT([home1,home2,home3,home4,home5,home6,home7,home8,home9,home10,home11,home12,home13,home14,church]));
villageBigger = T([0,1])([7,6.7])(villageBigger);
DRAW(villageBigger);

var villageSmaller = S([0,1,2])([0.07,0.07,0.07])(STRUCT([home1,home2,home3,home4,home5,home6,home7,home8,home9,home10,church]));
villageSmaller = T([0,1])([7.5,0.3])(villageSmaller);
DRAW(villageSmaller);


/* EXERCISE 5 */



var streetVertical = SIMPLEX_GRID([[2],[11]]);
streetVertical = COLOR([0.23,0.2,0.2])(streetVertical);
var stripesVertical = SIMPLEX_GRID([[-0.96,+0.08,-0.96],[-0.1,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-2,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,
													0.3,-0.2,0.3,-0.2,0.3,-0.2,-2,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2]]);
stripes = COLOR([1,1,1])(stripesVertical);
streetVertical = STRUCT([streetVertical, T([2])([0.001])(stripesVertical)]);
//DRAW(streetVertical);

var verticals = STRUCT([T([0])([5])(streetVertical), T([0])([14])(streetVertical) ]);
//DRAW(verticals);


var streetHorizontal1 = SIMPLEX_GRID([[16],[2]]);
streetHorizontal1 = COLOR([0.23,0.2,0.2])(streetHorizontal1);
var stripesHorizontal1 = SIMPLEX_GRID([[-0.1,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-2,-0.2,0.3,
								-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,],
								[-0.96,+0.08,-0.96],]);

stripesHorizontal1 = COLOR([1,1,1])(stripesHorizontal1);
streetHorizontal1 = STRUCT([streetHorizontal1, T([2])([0.001])(stripesHorizontal1)]);
//DRAW(streetHorizontal1);


var streetHorizontal2 = SIMPLEX_GRID([[21],[2]]);
streetHorizontal2 = COLOR([0.23,0.2,0.2])(streetHorizontal2);
var stripesHorizontal2 = SIMPLEX_GRID([[-0.1,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-2,-0.2,0.3,
								-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,-2,-0.2,
								0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.2],
								[-0.96,+0.08,-0.96],]);

stripesHorizontal2 = COLOR([1,1,1])(stripesHorizontal2);
streetHorizontal2 = STRUCT([streetHorizontal2, T([2])([0.001])(stripesHorizontal2)]);
//DRAW(streetHorizontal2);


var horizontals1 = STRUCT([ T([1])([2])(streetHorizontal1) , T([1])([7])(streetHorizontal2) ]);

var streetsBigger = STRUCT([verticals, T([2])([0.001])(horizontals1)]);
streetsBigger = S([0,1,2])([0.07,0.07,0.07])(streetsBigger);
streetsBigger = T([0,1,2])([7,6.7,0.001])(streetsBigger);

DRAW(streetsBigger);



var horizontals2 = STRUCT([ T([1])([2])(streetHorizontal1) , T([1])([7])(streetHorizontal1) ]);
var streetsSmaller = STRUCT([verticals, T([2])([0.001])(horizontals2)]);
streetsSmaller = S([0,1,2])([0.07,0.07,0.07])(streetsSmaller);
streetsSmaller = T([0,1,2])([7.5,0.3,0.001])(streetsSmaller);

DRAW(streetsSmaller);