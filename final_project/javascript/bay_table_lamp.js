											/* FINAL PROJECT */

/* Bay table lamp
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


/* basement */

var diskExternal = CYLINDER(5.5,0.8);
diskExternal = COLOR([0.13,0.14,0.15])(diskExternal);
diskExternal = T([2])([-0.8])(diskExternal);

var diskInternal = CYLINDER(3.4,0.01);
diskInternal = COLOR([0.93,0.93,0.91])(diskInternal);
diskInternal = T([2])([0.001])(diskInternal);
var basement = STRUCT([diskExternal,diskInternal]);


/* Surface 1. */

var dom2Dcircle = PROD1x1([INTERVALS(1)(36),INTERVALS(2*PI)(72)]);
var controlPoints = [[1.9,0,0],[0.7,0,4.3]];
var profileFunction1 = BEZIER(S0)(controlPoints);
var surface1 = MAP(ROTATIONAL_SURFACE(profileFunction1))(dom2Dcircle);
surface1 = COLOR([0,0.35,0.37])(surface1);

/* Surface 2. */

var controlPoints = [[0.7,0,4.3],[0.7,0,6.6],[3,0,1],[-3,0,1]];
var profileFunction2 = CUBIC_HERMITE(S0)(controlPoints);
var surface2 = MAP(ROTATIONAL_SURFACE(profileFunction2))(dom2Dcircle);
surface2 = COLOR([0.55,0.6,0.62])(surface2);


/* Surface 3. */

var controlPoints = [[0.7,0,6.6],[2.5,0,9.9]];
var profileFunction3 = BEZIER(S0)(controlPoints);
var surface3 = MAP(ROTATIONAL_SURFACE(profileFunction3))(dom2Dcircle);
surface3 = COLOR([1,1,1])(surface3);


/* Surface 4. */

var controlPoints = [[1.8,0,10],[1.8,0,11.7]];
var profileFunction4 = BEZIER(S0)(controlPoints);
var surface4 = MAP(ROTATIONAL_SURFACE(profileFunction4))(dom2Dcircle);
surface4 = COLOR([1,1,1])(surface4);


/* Surface 5. */

var controlPoints = [[1.5,0,11.8],[1.5,0,13.7]];
var profileFunction5 = BEZIER(S0)(controlPoints);
var surface5 = MAP(ROTATIONAL_SURFACE(profileFunction5))(dom2Dcircle);
surface5 = COLOR([1,1,1])(surface5);


/* colored disks */

var diskOrange = ring(2*PI,1.8,5);
diskOrange = EXTRUDE([0.1])(diskOrange);
diskOrange = COLOR([0.93,0.33])(diskOrange);
diskOrange = T([2])([9.9])(diskOrange);

var diskYellow = ring(2*PI,1.5,5);
diskYellow = EXTRUDE([0.1])(diskYellow);
diskYellow = COLOR([1,0.8,0.1])(diskYellow);
diskYellow = T([2])([11.7])(diskYellow);


/* Bulb */

var dom2Dcircle = PROD1x1([INTERVALS(1)(36),INTERVALS(2*PI)(72)]);

var controlPoints = [[0.6,0,0],[0.6,0,1.5],[2,0,2],[2,0,3],[0.5,0,3.5],[0,0,3.5]];
var bulbProfileFunction = BEZIER(S0)(controlPoints);
var bulb = MAP(ROTATIONAL_SURFACE(bulbProfileFunction))(dom2Dcircle);
bulb = COLOR([0.74,0.82,0.93,0.4])(bulb);


var controlPoints = [[0.6,0,0],[0,0,-1],[0,0,-1],[-1,0,0]];
var bulbBasementProfileFunction = CUBIC_HERMITE(S0)(controlPoints);
var bulbBasement = MAP(ROTATIONAL_SURFACE(bulbBasementProfileFunction))(dom2Dcircle);
bulbBasement = COLOR([0.33,0.33,0.33])(bulbBasement);

var bulbLight = STRUCT([bulb,bulbBasement]);
bulbLight = S([0,1,2])([1.2,1.2,1.2])(bulbLight);
bulbLight = T([2])([6.6])(bulbLight);

/* Bay table lamp STRUCT */

var lamp = STRUCT([basement,diskOrange,diskYellow,surface1,surface2,surface3,surface4,surface5,bulbLight]);

DRAW(lamp);