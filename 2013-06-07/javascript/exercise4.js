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
