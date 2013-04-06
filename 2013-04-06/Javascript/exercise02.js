//Floors

//floor0
var floor0 = SIMPLEX_GRID([[0.25,2.5,0.25,2.5,0.25,2.5,0.25,2.5,0.25], [0.25,5,0.25,0.75,0.25], [0.2]]);

//floor1
var floor1balcone = T([0,1])([-0.749, 0.25+5+0.125])(SIMPLEX_GRID([[0.62,0.125], [0.0625,0.62,0.0625], [-0.2,-3,0.2]]));
var floor1a = SIMPLEX_GRID([[0.25,1.06], [0.25,5,0.25,0.75,0.25], [-0.2,-3,0.2]]);
var floor1b = SIMPLEX_GRID([[-0.25,-1.06,3], [0.25,5.25,-0.75,0.25], [-0.2,-3,0.2]]);
var floor1c = SIMPLEX_GRID([[-0.25,-1.06,-3,6.94], [0.25,5,0.25,0.75,0.25], [-0.2,-3,0.2]]);
var floor1 = STRUCT([floor1balcone, floor1a, floor1b, floor1c]);

//floor2
var floor2a = SIMPLEX_GRID([[1.19], [0.25,5,0.25,0.75,0.25], [-0.2,-3,-0.2,-3,0.2]]);
var floor2b = SIMPLEX_GRID([[-1.19,3.25], [0.25,5.25,-0.75,0.25], [-0.2,-3,-0.2,-3,0.2]]);
var floor2c = SIMPLEX_GRID([[-1.19,-3.25,6.81], [0.25,5.25,0.75,0.25], [-0.2,-3,-0.2,-3,0.2]]);
var floor2 = STRUCT([floor2a, floor2b, floor2c]);

//floor3
var floor3a = SIMPLEX_GRID([[5.75], [0.25,5,0.25,0.75,0.25], [-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
var floor3b = SIMPLEX_GRID([[-5.75,3], [0.25,5,0.25,-0.75,0.25], [-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
var floor3c = SIMPLEX_GRID([[-8.75,2.5], [0.25,5,0.25,0.75,0.25], [-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
var floor3 = STRUCT([floor3a, floor3b, floor3c]);

//floor4
var floor4a = SIMPLEX_GRID([[5.5], [-5.11,1.39], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
var floor4b = SIMPLEX_GRID([[-5.5,5.75], [6.5], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
var floor4 = STRUCT([floor4a, floor4b]);

//floors
var floors = STRUCT([floor0, floor1, floor2, floor3, floor4]);