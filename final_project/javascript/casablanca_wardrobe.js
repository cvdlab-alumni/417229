									/* FINAL PROJECT */

/* Casablanca wardrobe
design by Ettore Sottsass */


/* Returns a commode wide "wide", high "high", deep "depth". */

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


/* basement */

var basement = CUBOID([3.2,3.5,1.2]);
basement = COLOR([0.34,0.36,0.37])(basement);

/* skeleton */

var skeleton1 = SIMPLEX_GRID([[-2.2,0.4],[-0.5,3.0],[-1.2,16.4]]);
skeleton1 = COLOR([0.53,0.01,0.09])(skeleton1);

var skeleton2 = SIMPLEX_GRID([[4.5],[-0.5,3.0],[-4.4,0.4]]);
skeleton2 = COLOR([0.53,0.01,0.09])(skeleton2);

var skeleton3 = SIMPLEX_GRID([[7.0],[-0.5,3.0],[-8.1,0.4]]);
skeleton3 = COLOR([0.53,0.01,0.09])(skeleton3);

var skeleton4 = SIMPLEX_GRID([[4.0],[-0.5,3.0],[-17.6,0.4]]);
skeleton4 = COLOR([0.53,0.01,0.09])(skeleton4);


/* shelfs */

var shelf1 = CUBOID([1.8,3,0.4]);
shelf1 = COLOR([0.53,0.01,0.09])(shelf1);
shelf1 = R([0,2])(-PI/3)(shelf1);
shelf1 = T([0,1,2])([4.5,0.5,4.4])(shelf1);

var shelf2 = CUBOID([5.3,3,0.4]);
shelf2 = COLOR([0.53,0.01,0.09])(shelf2);
shelf2 = R([0,2])(-PI/6.5)(shelf2);
shelf2 = T([0,1,2])([2.5,0.5,12])(shelf2);

var shelf3 = CUBOID([2.5,3,0.4]);
shelf3 = COLOR([0.53,0.01,0.09])(shelf3);
shelf3 = R([0,2])(-PI/3.5)(shelf3);
shelf3 = T([0,1,2])([4,0.5,17.6])(shelf3);

var shelf4 = CUBOID([0.4,3,1.8]);
shelf4 = COLOR([0.53,0.01,0.09])(shelf4);
shelf4 = R([0,2])(PI/10)(shelf4);
shelf4 = T([0,1,2])([1,0.5,18])(shelf4);

/* skeleton STRUCT */

var halfSkeleton = STRUCT([basement,skeleton1,skeleton2,skeleton3,skeleton4,shelf1,shelf2,shelf3,shelf4]);
var fullSkeleton = STRUCT([halfSkeleton, S([0])([-1])(halfSkeleton)]);


/* commodes */

var commode1 = commode(4.4,1.1,3.0,0.3,[0.9,0.57,0]);
commode1 = T([1,2])([0.1,4.8])(commode1);

var commode2 = commode(4.4,1.1,3.0,0.3,[0.9,0.57,0]);
commode2 = T([1,2])([-0.4,5.9])(commode2);

var commode3 = commode(4.4,1.1,3.0,0.3,[0.9,0.57,0]);
commode3 = T([2])([7])(commode3);

var caisson = commode(4.4,3.2,3.0,0.3,[0.34,0.36,0.37]);
caisson = T([1,2])([0.5,1.2])(caisson);


/* doors */

var rigthDoor = CUBOID([2.2,0.3,9.1]);
rigthDoor = T([1,2])([0.5,8.5])(COLOR([0.75,0.8,0.82])(rigthDoor));
var handle = CUBOID([0.3,0.2,1]);
handle = T([0,1,2])([0.2,0.3,11.5])(handle);
rightDoor = STRUCT([rigthDoor,handle]);

var leftDoor = S([0])([-1])(rightDoor);
leftDoor = COLOR([0.75,0.8,0.82])(leftDoor);

rightDoor = R([0,1])(PI/18)( T([0])([-2.2])(rightDoor) );
rightDoor = T([0])([2.2])(rightDoor)


/* backs */

var back1 = CUBOID([4.4,0.3,3.2]);
back1 = T([0,1,2])([-2.2,3.2,1.2])(COLOR([0.34,0.36,0.37])(back1));

var back2 = CUBOID([4.4,0.3,3.3]);
back2 = T([0,1,2])([-2.2,3.2,4.8])(COLOR([0.9,0.57,0])(back2));

var back3 = CUBOID([4.4,0.3,9.1]);
back3 = T([0,1,2])([-2.2,3.2,8.5])(COLOR([0.75,0.8,0.82])(back3));


/* Carlton STRUCT */

var casablanca = STRUCT([fullSkeleton,commode1,commode2,commode3,caisson,rightDoor,leftDoor,back1,back2,back3]);
DRAW(casablanca);
