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
