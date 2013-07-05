											/* FINAL PROJECT */

/* Biedermeier sofa
design by Ettore Sottsass  */



/* Builds a circle with radius r. */

var CIRCLE_PLANE = function (r) {

var mapping = function (v) {
	var alpha = v[0];
	var r = v[1];
	return [r*COS(alpha), r*SIN(alpha)];
}
var dom2D = PROD1x1([INTERVALS(2*PI)(72), INTERVALS(r)(1)]);

return MAP(mapping)(dom2D);
}


/* Builds a cylinder with radius r, high h. */

var CYLINDER = function (r,h) {

var surface = CIRCLE_PLANE(r);
var cylinder = EXTRUDE([h])(surface);
return cylinder;
}


/* Builds a ring with radius R and r, respectively radius major and minor. */

var ring = function (alpha, r, R) {
	var domy = DOMAIN([[r,R]])([10]);
	var dom = PROD1x1([ INTERVALS(alpha)(72), domy ]);
	var mapping = function(p) {
		var angle = p[0];
		var r = p[1];
		return [ r*COS(angle), r*SIN(angle) ];
	}
	var obj = MAP(mapping)(dom);
	return obj;
}

/* lower and upper basement with columns  */

var lowerBasement = CUBOID([2.4,4.7,0.3]);
lowerBasement = COLOR([0.95,0.95,0.95])(lowerBasement);


var columnFeet = CUBOID([1.2,1.6,0.2]);
columnFeet = COLOR([0.6,0.8,0.2])(columnFeet);
columnFeet = T([0,1,2])([0.4,0.2,0.3])(columnFeet);

var columnHead = CUBOID([1.2,1.6,0.2]);
columnHead = COLOR([0.6,0.8,0.2])(columnHead);
columnHead = T([0,1,2])([0.4,0.2,3.5])(columnHead);

var columnBody = CYLINDER(0.5,3);
columnBody = T([0,1,2])([1,1,0.5])(columnBody);
columnBody = COLOR([0.67,0.73,0.8])(columnBody);

var column = STRUCT([columnFeet,columnBody,columnHead]);

var columns = STRUCT(REPLICA(2)([column, T([1])([2.7])]));
columns = T([0])([-0.1])(columns);


var upperBasement = CUBOID([2.4,4.7,0.3]);
upperBasement = T([0,2])([-0.3,3.7])(upperBasement);
upperBasement = COLOR([1,0.84,0])(upperBasement);

var basementsWithColumns = STRUCT([columns,lowerBasement,upperBasement]);
basementsWithColumns = T([0])([5.6])(basementsWithColumns);


/* Steps */

var step1 = CUBOID([5.5,8.2,1]);
step1 = T([1])([-3.5])(step1);
var step2 = CUBOID([5,6.5,1]);
step2 = T([1,2])([-2,1])(step2);
var steps = STRUCT([step1,step2]);


/* Sittings, armrests and backrests */


var dom1D = INTERVALS(1)(16);
var dom2D = PROD1x1([dom1D,dom1D]);

var lowerSitting = CUBOID([8.5,5.5,0.3]);
lowerSitting = T([1,2])([-0.4,4])(lowerSitting);
lowerSitting = COLOR([1,0.92,0.73])(lowerSitting);


var curve1M = BEZIER(S0)([ [0,0,0],[5.9,0,0] ]);
var curve2M = BEZIER(S0)([ [0,4,0],[5.9,4,0] ]);
var curve3M = CUBIC_HERMITE(S0)([ [0,2,1.4],[5.9,2,0],[20,0,0],[-5,0,-4] ]);
var curve4M = CUBIC_HERMITE(S0)([ [0,0,1.4],[5.9,0,0],[20,0,0],[-5,0,-4] ]);
var curve5M = CUBIC_HERMITE(S0)([ [0,4,1.4],[5.9,4,0],[20,0,0],[-5,0,-4] ]);
var curve3 = MAP(curve3M)(dom1D);
var halfUpperSitting = MAP(BEZIER(S1)([curve1M,curve3M,curve2M]))(dom2D);
halfUpperSitting = COLOR([0.8,0.2,0.2])(halfUpperSitting);
halfUpperSitting = T([1,2])([-0.4,4.2])(halfUpperSitting);


var semicircle = ring(PI,0,1);
var armrest = EXTRUDE([3.5])(semicircle);
armrest = MAP([S0,S2,S1])(armrest);
armrest = T([0,1,2])([6.9,-0.2,4.3])(armrest);
armrest = COLOR([0,0,0])(armrest);

// backrest bigger

var curve1M = BEZIER(S0)([ [0,-1.1,0],[5.8,-1.1,0] ]);
var curve2M = BEZIER(S0)([ [0,0,2.5],[5.8,0,2.5] ]);
var curve3M = CUBIC_HERMITE(S0)([ [5.8,0,2.5],[7.5,0,0],[4,0,0],[0,0,-4] ]);
var curve4M = CUBIC_HERMITE(S0)([ [5.8,-1.1,0],[7.5,0,0],[1,0,0],[0,1,0] ]);
var curve1MRear = BEZIER(S0)([ [0,0.5,0],[5.8,0.5,0] ]);
var curve2MRear = BEZIER(S0)([ [0,0.5,2.5],[5.8,0.5,2.5] ]);
var curve3MRear = CUBIC_HERMITE(S0)([ [5.8,0.5,2.5],[7.5,0.5,0],[4,0,0],[0,0,-4] ]);
var curve4MRear = BEZIER(S0)([ [5.8,0.5,0],[7.5,0.5,0] ]);

var surface12Frontal = MAP(CUBIC_HERMITE(S1)([ curve2M,curve1M,[0,-1,0],[0,0,-1] ]))(dom2D);
var surface34Frontal = MAP(CUBIC_HERMITE(S1)([ curve3M,curve4M,[0,-1,0],[0,0,-1] ]))(dom2D);
var surface12Rear = MAP(BEZIER(S1)([ curve2MRear,curve1MRear ]))(dom2D);
var surface34Rear = MAP(BEZIER(S1)([ curve3MRear,curve4MRear ]))(dom2D);
var surface22 = MAP(BEZIER(S1)([ curve2M,curve2MRear ]))(dom2D);
var surface33 = MAP(BEZIER(S1)([ curve3M,curve3MRear ]))(dom2D);

var backrestBigger = STRUCT([surface12Frontal,surface34Frontal,surface12Rear,surface34Rear,surface22,surface33]);
backrestBigger = COLOR([0.62,0.46,0.35])(backrestBigger);
backrestBigger = T([1,2])([4.6,4.3])(backrestBigger);

// backrest smaller

var dom1D = INTERVALS(1)(16);
var dom2D = PROD1x1([dom1D,dom1D]);

var curve1M = BEZIER(S0)([ [0,-0.4,0],[4.9,-0.4,0] ]);
var curve2M = BEZIER(S0)([ [0,0,1.2],[4.9,0,1.2] ]);
var curve3M = CUBIC_HERMITE(S0)([ [4.9,0,1.2],[5.8,0,0],[2,0,0],[0,0,-2] ]);
var curve4M = CUBIC_HERMITE(S0)([ [4.9,-0.4,0],[5.8,0,0],[1,0,0],[0,1,0] ]);
var curve1MRear = BEZIER(S0)([ [0,0.1,0],[4.9,0.1,0] ]);
var curve2MRear = BEZIER(S0)([ [0,0.1,1.2],[4.9,0.1,1.2] ]);
var curve3MRear = CUBIC_HERMITE(S0)([ [4.9,0.1,1.2],[5.8,0.1,0],[2,0,0],[0,0,-2] ]);
var curve4MRear = BEZIER(S0)([ [4.9,0.1,0],[5.8,0.1,0] ]);

var surface12Frontal = MAP(CUBIC_HERMITE(S1)([ curve2M,curve1M,[0,-1,0],[0,0,-1] ]))(dom2D);
var surface34Frontal = MAP(CUBIC_HERMITE(S1)([ curve3M,curve4M,[0,-1,0],[0,0,-1] ]))(dom2D);
var surface12Rear = MAP(BEZIER(S1)([ curve2MRear,curve1MRear ]))(dom2D);
var surface34Rear = MAP(BEZIER(S1)([ curve3MRear,curve4MRear ]))(dom2D);
var surface22 = MAP(BEZIER(S1)([ curve2M,curve2MRear ]))(dom2D);
var surface33 = MAP(BEZIER(S1)([ curve3M,curve3MRear ]))(dom2D);

var backrestSmaller = STRUCT([surface12Frontal,surface34Frontal,surface12Rear,surface34Rear,surface22,surface33]);
backrestSmaller = COLOR([0.93,0.36,0.26])(backrestSmaller);
backrestSmaller = T([1,2])([5,6.8])(backrestSmaller);

/* Biedermeier STRUCT  */

var halfBiedermeier = STRUCT([basementsWithColumns,lowerSitting,steps,halfUpperSitting,armrest,backrestBigger,backrestSmaller])
var biedermeier = STRUCT([halfBiedermeier, S([0])([-1])(halfBiedermeier)]);

DRAW(biedermeier);
