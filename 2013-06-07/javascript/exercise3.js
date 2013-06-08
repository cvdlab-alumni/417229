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
