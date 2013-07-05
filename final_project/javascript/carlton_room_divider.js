											/* FINAL PROJECT */

/* Carlton room divider
design by Ettore Sottsass  */


var commode = function (wide,high,depth,depthFace,color) {

	var dom1D = INTERVALS(1)(16);
	var dom2D = PROD1x1([dom1D,dom1D]);

	var lateral = function(high,depth,depthFace) {

		var thickness = depthFace/2;

		var ctrlPoints1 = [ [0,0],[0,0.5*high] ];
		var curve1M = BEZIER(S0)(ctrlPoints1);
		var curve1 = MAP(curve1M)(dom1D);

		var ctrlPoints2 = [ [0,0.5*high],[-thickness/3,0.5*high] ];
		var curve2M = BEZIER(S0)(ctrlPoints2);
		var curve2 = MAP(curve2M)(dom1D);

		var ctrlPoints3 = [ [-thickness/3,0.5*high],[-thickness/3,0.7*high] ];
		var curve3M = BEZIER(S0)(ctrlPoints3);
		var curve3 = MAP(curve3M)(dom1D);

		var ctrlPoints4 = [ [-thickness/3,0.7*high],[0,0.7*high] ];
		var curve4M = BEZIER(S0)(ctrlPoints4);
		var curve4 = MAP(curve4M)(dom1D);

		var ctrlPoints5 = [ [0,0.7*high],[0,high] ];
		var curve5M = BEZIER(S0)(ctrlPoints5);
		var curve5 = MAP(curve5M)(dom1D);

		var ctrlPoints6 = [ [-thickness,0],[-thickness,0.5*high] ];
		var curve6M = BEZIER(S0)(ctrlPoints6);
		var curve6 = MAP(curve6M)(dom1D);

		var ctrlPoints7 = [ [-thickness,0.5*high],[-thickness,0.7*high] ];
		var curve7M = BEZIER(S0)(ctrlPoints7);
		var curve7 = MAP(curve7M)(dom1D);

		var ctrlPoints8 = [ [-thickness,0.7*high],[-thickness,high] ];
		var curve8M = BEZIER(S0)(ctrlPoints8);
		var curve8 = MAP(curve8M)(dom1D);

		var surfaceLateral1M = BEZIER(S1)([curve1M,curve6M]);
		var surfaceLateral1 = MAP(surfaceLateral1M)(dom2D);

		var surfaceLateral2M = BEZIER(S1)([curve3M,curve7M]);
		var surfaceLateral2 = MAP(surfaceLateral2M)(dom2D);

		var surfaceLateral3M = BEZIER(S1)([curve5M,curve8M]);
		var surfaceLateral3 = MAP(surfaceLateral3M)(dom2D);

		var surfaceLateral = STRUCT([surfaceLateral1,surfaceLateral2,surfaceLateral3]);

		var lateral = EXTRUDE([depth - (2*depthFace)])(surfaceLateral);
		lateral = R([1,2])(PI/2)(lateral);
		lateral = T([1])([depth - depthFace])(lateral);

		return lateral;
	}

	var face = CUBOID([wide,depthFace,high]);
	face = COLOR(color)(face);
	face = T([0])([-wide/2])(face);

	var lateral = lateral(0.9*high,depth,depthFace);
	lateral = T([0])([wide/2])(lateral);
	var laterals = STRUCT([lateral, S([0])([-1])(lateral)]);
	laterals = COLOR([0.78,0.8,0.8])(laterals);

	var bottom = CUBOID([wide,depth-(2*depthFace),depthFace/2]);
	bottom = T([0,1])([-wide/2,depthFace])(bottom);
	bottom = COLOR([0.78,0.8,0.8])(bottom);

	var rear = CUBOID([wide - depthFace,depthFace/2,0.6*high]);
	rear = T([0,1,2])([-((wide-depthFace)/2),depth - 3*depthFace/2,depthFace/2])(rear);
	rear = COLOR([0.78,0.8,0.8])(rear);

	var handle = CUBOID([wide/4,2*depthFace/3,high/5]);
	handle = COLOR(color)(handle);
	handle = T([0,1,2])([-wide/8,-2*depthFace/3,high/2])(handle);

	var commode = STRUCT([face,laterals,bottom,rear,handle]);

	return commode;
}

var dom1D = INTERVALS(1)(16);
var dom2D = PROD1x1([dom1D,dom1D]);

/* basements */

var basement = CUBOID([4.5,4.1,1.1]);
basement = T([1])([-0.3])(COLOR([0.75,0.8,0.82])(basement));

var verticalBrown = CUBOID([0.63,3.7,3.5]);
verticalBrown = COLOR([0.84,0.55,0.38])(verticalBrown);
verticalBrown = T([0,2])([1.9,1.1])(verticalBrown);

var back = CUBOID([1.9,0.3,2.2]);
back = COLOR([0.84,0.55,0.38])(back);
back = T([1,2])([3.4,2.4])(back);


/* triangle1 */

var ctrPoints1 = [ [0,0],[0.9,0] ];
var ctrPoints2 = [ [0.9,0.8],[0.9,0] ];
var curve1M = BEZIER(S0)(ctrPoints1);
var curve2M = BEZIER(S0)(ctrPoints2);
var triangle1 = MAP(BEZIER(S1)([curve1M,curve2M]))(dom2D);  
triangle1 = EXTRUDE([3.7])(triangle1);
triangle1 = MAP([S0,S2,S1])(triangle1);
triangle1 = COLOR([0,0,0])(triangle1);
triangle1 = T([0,2])([1,1.1])(triangle1);


/* shelf white */

var ctrPoints3 = [ [0,0],[4.2,0] ];
var ctrPoints4 = [ [0,0.5],[4.4,0.5] ];
var curve3M = BEZIER(S0)(ctrPoints3);
var curve4M = BEZIER(S0)(ctrPoints4);
var shelfWhite = MAP(BEZIER(S1)([curve3M,curve4M]))(dom2D);
shelfWhite = EXTRUDE([3.7])(shelfWhite);
shelfWhite = MAP([S0,S2,S1])(shelfWhite);
shelfWhite = COLOR([1,0.96,0.9])(shelfWhite);
shelfWhite = T([2])([4.6])(shelfWhite);


/* Oblique blue shelf with orange ones */

var obliqueBlue = CUBOID([3.5,3.7,0.538]);
obliqueBlue = COLOR([0.27,0.4,0.67])(obliqueBlue);

var ctrPoints5 = [ [0,0],[0,3.015] ];
var ctrPoints6 = [ [0.4,0],[0.4,3.175] ];
var curve5M = BEZIER(S0)(ctrPoints5);
var curve6M = BEZIER(S0)(ctrPoints6);
var obliqueOrange1 = MAP(BEZIER(S1)([curve5M,curve6M]))(dom2D);
obliqueOrange1 = EXTRUDE([3.7])(obliqueOrange1);
obliqueOrange1 = MAP([S0,S2,S1])(obliqueOrange1);
obliqueOrange1 = COLOR([0.76,0.2,0.11])(obliqueOrange1);
obliqueOrange1 = T([2])([0.538])(obliqueOrange1);


var obliqueOrange2 = CUBOID([0.4,3.7,2.5]);
obliqueOrange2 = COLOR([0.98,0.42,0.12])(obliqueOrange2);
obliqueOrange2 = T([0,2])([2.8,0.538])(obliqueOrange2);


var ctrPoints7 = [ [1.6,0],[1,-3.4] ];
var ctrPoints8 = [ [2.15,0],[1.55,-3.2] ];
var curve7M = BEZIER(S0)(ctrPoints7);
var curve8M = BEZIER(S0)(ctrPoints8);
var obliqueBlack = MAP(BEZIER(S1)([curve7M,curve8M]))(dom2D);
obliqueBlack = EXTRUDE([3.7])(obliqueBlack);
obliqueBlack = MAP([S0,S2,S1])(obliqueBlack);
obliqueBlack = COLOR([0,0,0])(obliqueBlack);

obliqueBlue = STRUCT([obliqueBlue,obliqueOrange1,obliqueOrange2,obliqueBlack]);
obliqueBlue = R([0,2])(PI/8.3)(obliqueBlue);
obliqueBlue = T([0,2])([4.2,4.6])(obliqueBlue);

/* vertical light-blue */

var verticalLigthblue1 = CUBOID([0.2,3.7,2.8]);
verticalLigthblue1 = COLOR([0.58,0.76,0.87])(verticalLigthblue1);
verticalLigthblue1 = T([2])([5.1])(verticalLigthblue1);

/* triangle 2 */

var ctrPoints1 = [ [0,0],[0.8,0] ];
var ctrPoints2 = [ [0,0],[0,-0.7] ];
var curve1M = BEZIER(S0)(ctrPoints1);
var curve2M = BEZIER(S0)(ctrPoints2);
var triangle2 = MAP(BEZIER(S1)([curve1M,curve2M]))(dom2D);  
triangle2 = EXTRUDE([3.7])(triangle2);
triangle2 = MAP([S0,S2,S1])(triangle2);
triangle2 = COLOR([0,0,0])(triangle2);
triangle2 = T([0,2])([0.2,7.9])(triangle2);


/* shelf green */

var shelfGreen = CUBOID([9.7,3.7,0.5]);
shelfGreen = COLOR([0.3,0.6,0.21])(shelfGreen);
shelfGreen = T([2])([7.9])(shelfGreen);


/* oblique white */

var ctrPoints1 = [ [0,3.5],[2.5,0] ];
var ctrPoints2 = [ [0,4.5],[3.2,0] ];
var curve1M = BEZIER(S0)(ctrPoints1);
var curve2M = BEZIER(S0)(ctrPoints2);
var obliqueWhite = MAP(BEZIER(S1)([curve1M,curve2M]))(dom2D);  
obliqueWhite = EXTRUDE([3.7])(obliqueWhite);
obliqueWhite = MAP([S0,S2,S1])(obliqueWhite);
obliqueWhite = COLOR([1,0.96,0.9])(obliqueWhite);
obliqueWhite = T([2])([8.4])(obliqueWhite);


/* oblique yellow with triangle 3 */

var ctrPoints1 = [ [0,0],[2.8,4.4] ];
var ctrPoints2 = [ [0.65,0],[3.45,4.4] ];
var curve1M = BEZIER(S0)(ctrPoints1);
var curve2M = BEZIER(S0)(ctrPoints2);
var obliqueYellow = MAP(BEZIER(S1)([curve1M,curve2M]))(dom2D);  
obliqueYellow = EXTRUDE([3.7])(obliqueYellow);
obliqueYellow = MAP([S0,S2,S1])(obliqueYellow);
obliqueYellow = COLOR([1,0.8,0.1])(obliqueYellow);

var ctrPoints3 = [ [0.65,0],[1.41,1.2] ];
var ctrPoints4 = [ [2.2,0],[1.41,1.2] ];
var curve3M = BEZIER(S0)(ctrPoints3);
var curve4M = BEZIER(S0)(ctrPoints4);
var triangle3 = MAP(BEZIER(S1)([curve3M,curve4M]))(dom2D);  
triangle3 = EXTRUDE([3.7])(triangle3);
triangle3 = MAP([S0,S2,S1])(triangle3);
triangle3 = COLOR([0,0,0])(triangle3);

obliqueYellow = STRUCT([obliqueYellow,triangle3]);
obliqueYellow = T([0,2])([5.1,8.4])(obliqueYellow);


/* cuboid black */
var cuboidBlack = CUBOID([0.5,3.3,0.6]);
cuboidBlack = COLOR([0,0,0])(cuboidBlack);
cuboidBlack = T([0,1,2])([8.7,0.2,8.4])(cuboidBlack);


/* triangle 4 */

var ctrPoints1 = [ [0,0],[0.575,-0.8] ];
var ctrPoints2 = [ [0,-0.8],[0.575,-0.8] ];
var curve1M = BEZIER(S0)(ctrPoints1);
var curve2M = BEZIER(S0)(ctrPoints2);
var triangle4 = MAP(BEZIER(S1)([curve1M,curve2M]))(dom2D);  
triangle4 = EXTRUDE([3.7])(triangle4);
triangle4 = MAP([S0,S2,S1])(triangle4);
triangle4 = COLOR([0,0,0])(triangle4);
triangle4 = T([2])([11.9])(triangle4);


/* triangle 5 */

var ctrPoints1 = [ [0,0],[0.715,-1] ];
var ctrPoints2 = [ [1.5,0],[0.715,-1] ];
var curve1M = BEZIER(S0)(ctrPoints1);
var curve2M = BEZIER(S0)(ctrPoints2);
var triangle5 = MAP(BEZIER(S1)([curve1M,curve2M]))(dom2D);  
triangle5 = EXTRUDE([3.7])(triangle5);
triangle5 = MAP([S0,S2,S1])(triangle5);
triangle5 = COLOR([0,0,0])(triangle5);
triangle5 = T([2])([12.9])(triangle5);


/* shelf yellow */

var shelfYellow = CUBOID([3.3,3.7,0.5]);
shelfYellow = COLOR([1,0.8,0.1])(shelfYellow);
shelfYellow = T([2])([12.9])(shelfYellow);


/* vertical green */

var verticalGreen = CUBOID([0.2,3.7,2.8]);
verticalGreen = COLOR([0.14,0.2,0.15])(verticalGreen);
verticalGreen = T([2])([13.4])(verticalGreen);

/* vertical light-blue */

var verticalLigthblue2 = CUBOID([0.4,3.7,2.2]);
verticalLigthblue2 = COLOR([0.58,0.76,0.87])(verticalLigthblue2);
verticalLigthblue2 = T([0,2])([2.9,13.4])(verticalLigthblue2);


/* quadraticHole */

var ctrPoints1 = [ [0,0],[1.6,0] ];
var ctrPoints2 = [ [0,0.2],[1.6,0.2] ];

var ctrPoints3 = [ [0,2.7],[1.6,2.7] ];
var ctrPoints4 = [ [0,2.9],[1.6,2.9] ];

var ctrPoints5 = [ [1.6,0],[1.6,2.9] ];
var ctrPoints6 = [ [1.4,0],[1.4,2.9] ];

var curve1M = BEZIER(S0)(ctrPoints1);
var curve2M = BEZIER(S0)(ctrPoints2);

var curve3M = BEZIER(S0)(ctrPoints3);
var curve4M = BEZIER(S0)(ctrPoints4);

var curve5M = BEZIER(S0)(ctrPoints5);
var curve6M = BEZIER(S0)(ctrPoints6);

var surface1 = MAP(BEZIER(S1)([curve1M,curve2M]))(dom2D);
var surface2 = MAP(BEZIER(S1)([curve3M,curve4M]))(dom2D);
var surface3 = MAP(BEZIER(S1)([curve5M,curve6M]))(dom2D);

var quadraticHole = STRUCT([surface1,surface2,surface3]);
quadraticHole = EXTRUDE([3.7])(quadraticHole);
quadraticHole = T([1])([3.7])( R([1,2])(PI/2)(quadraticHole) );
quadraticHole = COLOR([0.76,0.77,0.75])(quadraticHole);
quadraticHole = T([2])([16.2])(quadraticHole);

/* Carlton STRUCT */

var halfCarlton = STRUCT([basement,back,verticalBrown,triangle1,shelfWhite,shelfGreen,obliqueBlue,verticalLigthblue1,obliqueWhite,triangle4,
							triangle5,obliqueYellow,cuboidBlack,shelfYellow,verticalGreen,verticalLigthblue2,quadraticHole]);
var carlton = STRUCT([halfCarlton, S([0])([-1])(halfCarlton)]);

var commode1 = commode(3.8,1.1,3.7,0.3,[1,0,0]);
var commode2 = commode(3.8,1.1,3.7,0.3,[1,0,0]);

commode1 = T([1,2])([-1,2.4])(commode1);
commode2 = T([1,2])([-0.35,3.5])(commode2);

carlton = STRUCT([carlton,commode1,commode2]);

DRAW(carlton);