//Facciate 1=EST
var facade1a = SIMPLEX_GRID([[-0.25,2.5], [0.25], [-0.2,-3,-0.2,3]]);
var facade1b = SIMPLEX_GRID([[-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,3]]);
var facade1c = SIMPLEX_GRID([[-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,3]]);
var facade1d = SIMPLEX_GRID([[-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,3]]);

var facade1e = SIMPLEX_GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,1,-1,1]]);
var facade1f = SIMPLEX_GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,1,-1,1]]);
var facade1g = SIMPLEX_GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,1,-1,1]]);

var facade1h = SIMPLEX_GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,3]]);
var facade1i = SIMPLEX_GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,3]]);
var facade1l = SIMPLEX_GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,3]]);
var facade1m = SIMPLEX_GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,-3,-0.2,0.5]]);
var facade1n = SIMPLEX_GRID([[5.5], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,-3,0.2]]);
var facade1o = SIMPLEX_GRID([[-0.11,5.5], [0.25], [-0.2,-9.6,1.3]])
var facade1p = SIMPLEX_GRID([[-0.11,5.5], [0.25], [-0.2,-9.6,-1.3,-1,0.9]])
var facadeEast = STRUCT([facade1a,facade1b,facade1c,facade1d,facade1e,facade1f,facade1g,facade1h,facade1i,facade1l,facade1m, facade1n,facade1o,facade1p]);

//Facciata 2=OVEST
var facade2a = SIMPLEX_GRID([[11.25], [0.25], [-0.2,-3,-0.2,1.5]]);
var facade2b = SIMPLEX_GRID([[2.5,-2.5,6.25], [0.25], [-0.2,-3,-0.2,-1.5,1]]);
var facade2c = SIMPLEX_GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,0.5]]);
var facade2d = SIMPLEX_GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,1.5]]);
var facade2e = SIMPLEX_GRID([[1.7,-0.1,0.5,-0.1,8.85], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,1]]);
var facade2f = SIMPLEX_GRID([[1.7,0.1,0.5,0.1,8.85], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,0.5]]);
var facade2g = SIMPLEX_GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,3]]);
var facade2h = SIMPLEX_GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,-3,-0.2,0.5]]);
var facade2i = SIMPLEX_GRID([[5.5], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,-3,0.2]]);
var facade2l = SIMPLEX_GRID([[11.25], [-0.25,-6,0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,-3,-0.2,0.5]]);



var facadeWesta = STRUCT([facade2a,facade2b,facade2c,facade2d,facade2e,facade2f,facade2g,facade2h,facade2i,facade2l]);
var facadeWestb = R([0,1])(PI)(facadeWesta);
var facadeWest = T([0,1])([11.25,6.5])(facadeWestb);


//Facciata Nord

//north
var northA = SIMPLEX_GRID([[0.25],[0.25],[-12.8,0.5]])
var northB = SIMPLEX_GRID([[-0.25,5],[0.25], [-3.2,1,-1, 1,-0.2, 1,-1,1,-0.2,1,-1,1,-0.2,0.5]]);
var northC = SIMPLEX_GRID([[-5.25, 0.25], [0.25], [-12.8,0.5]]);
var northD = SIMPLEX_GRID([[-5.5, 0.5],[0.25],[-3.2, 3, -0.2, 3, -0.2, 3, -0.2, 0.5 ]]);


var northE = SIMPLEX_GRID([[-6,0.25,],[0.25],[-12.8,0.5]]);
var northF = SIMPLEX_GRID([[-6.25, 0.25],[0.25],[-3.2, 3, -0.2, 3, -0.2, 3, -0.2, 0.5]]);

var northS = STRUCT([northA, northB, northC, northD, northE, northF]);
var northR = R([0,1])(PI/2)(northS);
var north = T([0,2])([11.25,0.2])(northR);

//SOUTH
var southA=SIMPLEX_GRID([[0.25],[0.25],[3,-0.2,3,-0.2, 3, -0.2, 3]])
var southB= SIMPLEX_GRID([[-0.25,0.25],[0.25],[-3.2,3,-0.2,3]])
var southC=SIMPLEX_GRID([[-0.5, 0.5],[0.25],[-5.9,0.3,-0.2,3]])
var southD= SIMPLEX_GRID([[-1.25,5.11],[0.25],[-3.2,0.3,-2.4,0.3,-0.2,0.3,-2.4,0.3,]])
var southE = SIMPLEX_GRID([[0.14,0.86, -0.14,5.25,-0.14],[0.25],[-9.6,1.3]])
var southF = SIMPLEX_GRID([[0.14, -6.36],[0.25],[-10.9,1]])
var southG= SIMPLEX_GRID([[0.14,0.86,-0.14,5.25,-0.14],[0.25],[-11.9,1.4]])
var southH= SIMPLEX_GRID([[-6.36,0.14],[0.25],[-12.6,0.7]])
var southI = SIMPLEX_GRID([[-0.14,-0.86,0.14],[0.25],[-12.8,0.5]])

var southR =  R([0,1])(-PI/2)(STRUCT([southA,southB,southC,southD,southE,southF,southG,southH, southI]));
var south =  T([1,2])([6.5,0.2])(southR)




//Balconcino
var murettobalconcinoa = T([0,1])([-0.749, 0.25+5+0.125])(SIMPLEX_GRID([[0.62,0.125], [0.0625], [-0.2,-3,-0.2,1]]));
var murettobalconcinob = T([0,1])([-0.749, 0.25+5+0.125+0.62+0.0625])(SIMPLEX_GRID([[0.62,0.125], [0.0625], [-0.2,-3,-0.2,1]]));
var murettobalconcinoc = T([0,1])([-0.749, 0.25+5+0.125+0.0625])(SIMPLEX_GRID([[0.125], [0.62], [-0.2,-3,-0.2,1]]));

var murettobalconcino = STRUCT([murettobalconcinoa,murettobalconcinob,murettobalconcinoc]);


//Facciata primo piano
var facadeTerraA = SIMPLEX_GRID([[9], [0.25], [-0.2,2.4]]);
var facadeTerraFinestra = SIMPLEX_GRID([[7.375,-0.5,1.125], [0.25], [-0.2,-2.4,0.5]]);
var facadeTerraB = SIMPLEX_GRID([[9], [0.25], [-0.2,-2.9,0.1]]);
var facadeTerra = T([1])([6.25])(STRUCT([facadeTerraA, facadeTerraFinestra, facadeTerraB]));
var facadeTerraC = SIMPLEX_GRID([[-7.875,1.125], [-4.25,0.25], [-0.2,3]]);
var facadeTerraD = SIMPLEX_GRID([[-7.875,0.25], [-2.25,0.75], [-0.2,3]]);
var facadeTerraE = SIMPLEX_GRID([[-2.75,5.125], [-2.25,0.25], [-0.2,1.9]]);
var facadeTerraF = SIMPLEX_GRID([[-2.75,2.75], [-2.25,0.25], [-0.2,-1.9,1]]);
var facadeTerraG = SIMPLEX_GRID([[-2.75,5.125], [-2.25,0.25], [-0.2,-1.9,-1,0.1]]);
var facadeTerraH = SIMPLEX_GRID([[-2.75,0.25], [-2,0.25], [-0.2,1.9]]);
var facadeTerraI = SIMPLEX_GRID([[-0.25,-1.375,0.25], [-2,3.25], [-0.2,1.9]]);
var facadeTerraL = SIMPLEX_GRID([[-0.25,-1.375,0.25], [-2,3.25], [-0.2,-1.9,-1,0.1]]);
var facadeTerraM = SIMPLEX_GRID([[-0.25,-1.375,0.25], [-5.5,0.75], [-0.2,-2.5,0.5]]);



function arc(alpha, r, R, h) {
  var domain = DOMAIN([[0,alpha],[r,R]])([36,1]);
  var mapping = function (v) {
    var a = v[0];
    var r = v[1];
    
    return [r*COS(a), r*SIN(a)];
  }
  var model = MAP(mapping)(domain);
  
  var arco = EXTRUDE([h])(model);
  return arco;
}

var arcoMuroGrande = T([0,1,2])([9,5.375,0.2])(R([0,1])(-PI/2)(arc(PI,0.875,1.125,3)));
var arcoMuroPiccolo = T([0,1,2])([2.3125,2,0.2])(R([0,1])(-PI)(arc(PI,0.4375,0.6875,3)));
var facadePianoTerra = STRUCT([facadeTerra, facadeTerraC, facadeTerraD, facadeTerraE, facadeTerraF, facadeTerraG,facadeTerraH,facadeTerraI,facadeTerraL,facadeTerraM, arcoMuroGrande, arcoMuroPiccolo]);
