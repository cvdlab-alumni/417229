function fcolonna(r,h) {
	 var domain = DOMAIN([[0,2*PI]])([360]);
	 var fcircle = function(r) {
		return function(v) {
			return [r*COS(v[0]), r*SIN(v[0])];
		};
	 };
	 var mappings = fcircle(r);
	 var circle = COLOR([128/255,128/255,128/255])(MAP(mappings)(domain));
	 
	 return EXTRUDE([h])(circle);
}
function fcolonne(colonna, ncolonne, distanza) {
	var colonne = [colonna];
	for(var i=0; i<ncolonne-1; i++) {
		colonne.push(T([0])([distanza])(colonna));
		colonna = colonne[i+1];
	}
	
	if(ncolonne===0) return undefined;
	return STRUCT(colonne);
}

//Pillars
var pillars0a = T([0,1,2])([0.125,0.125,0.2])(fcolonne(fcolonna(0.125,3),5,0.125+2.50+0.125));
var pillars0b = T([0,1,2])([0.125,0.25+0.90+1+0.25+2.85+0.125,0.2])(fcolonne(fcolonna(0.125,3),2,11));
var pillars0c = SIMPLEX_GRID([[-0.25,-1.25,-0.25,-1,0.25,-2.5,0.25,-2.5,0.25], [-0.25,-0.90,-1,-0.25,-2.85,0.25], [-0.2,3]]);
var pillars0d = SIMPLEX_GRID([[-0.25,-1.25,-0.125,0.25], [-0.25,-5,0.25], [-0.2,3]]);
var pillars0 = STRUCT([pillars0a,pillars0b,pillars0c, pillars0d]);

var pillars1a = SIMPLEX_GRID([[0.25,-1.25,-0.25,-1,0.25,-2.5,0.25,-2.5,0.25,-2.5,0.25], [0.25,-0.90,-1,-0.25,-2.85,-0.25], [-0.2,-3,-0.2,3]]);
var pillars1b = SIMPLEX_GRID([[0.25,-1.25,-0.25,-1,0.25,-2.5,0.25,-2.5,-2.75,0.25], [-0.25,-5,0.25], [-0.2,-3,-0.2,3]]);
var pillars1c = T([0,1,2])([8.375,5.375,3.4])(fcolonna(0.125,3));
var pillars1 = STRUCT([pillars1a,pillars1b,pillars1c]);

var pillars2 = SIMPLEX_GRID([[0.25,-1.25,-0.25,-1,0.25,-2.5,0.25,-2.5,0.25,-2.5,0.25], [0.25,-0.90,-1,-0.25,-2.85,0.25], [-0.2,-3,-0.2,-3,-0.2,3]]);

var pillars3a = SIMPLEX_GRID([[-0.25,-1.25,-0.25,-1,-0.25,-2.5,0.25,-2.5,0.25,-2.5,0.25], [0.25,-0.90,-1,-0.25,-2.85,0.25], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,3]]);
var pillars3b = SIMPLEX_GRID([[0.14], [0.14], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,3]]);
var pillars3c = SIMPLEX_GRID([[0.14,-2.61,0.14], [-5.36,0.14], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,3]]);
var pillars3 = STRUCT([pillars3a,pillars3b,pillars3c]);


var pillars = STRUCT([pillars0,pillars1,pillars2,pillars3]);