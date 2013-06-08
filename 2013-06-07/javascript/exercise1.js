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

