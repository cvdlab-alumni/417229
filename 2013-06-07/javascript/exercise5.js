/* EXERCISE 5 */



var streetVertical = SIMPLEX_GRID([[2],[11]]);
streetVertical = COLOR([0.23,0.2,0.2])(streetVertical);
var stripesVertical = SIMPLEX_GRID([[-0.96,+0.08,-0.96],[-0.1,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-2,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,
													0.3,-0.2,0.3,-0.2,0.3,-0.2,-2,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2]]);
stripes = COLOR([1,1,1])(stripesVertical);
streetVertical = STRUCT([streetVertical, T([2])([0.001])(stripesVertical)]);

var verticals = STRUCT([T([0])([5])(streetVertical), T([0])([14])(streetVertical) ]);


var streetHorizontal1 = SIMPLEX_GRID([[16],[2]]);
streetHorizontal1 = COLOR([0.23,0.2,0.2])(streetHorizontal1);
var stripesHorizontal1 = SIMPLEX_GRID([[-0.1,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-2,-0.2,0.3,
								-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,],
								[-0.96,+0.08,-0.96],]);

stripesHorizontal1 = COLOR([1,1,1])(stripesHorizontal1);
streetHorizontal1 = STRUCT([streetHorizontal1, T([2])([0.001])(stripesHorizontal1)]);


var streetHorizontal2 = SIMPLEX_GRID([[21],[2]]);
streetHorizontal2 = COLOR([0.23,0.2,0.2])(streetHorizontal2);
var stripesHorizontal2 = SIMPLEX_GRID([[-0.1,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-2,-0.2,0.3,
								-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,-2,-0.2,
								0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.3,-0.2,0.2],
								[-0.96,+0.08,-0.96],]);

stripesHorizontal2 = COLOR([1,1,1])(stripesHorizontal2);
streetHorizontal2 = STRUCT([streetHorizontal2, T([2])([0.001])(stripesHorizontal2)]);


var horizontals1 = STRUCT([ T([1])([2])(streetHorizontal1) , T([1])([7])(streetHorizontal2) ]);

var streetsBigger = STRUCT([verticals, T([2])([0.001])(horizontals1)]);
streetsBigger = S([0,1,2])([0.07,0.07,0.07])(streetsBigger);
streetsBigger = T([0,1,2])([7,6.7,0.001])(streetsBigger);

DRAW(streetsBigger);



var horizontals2 = STRUCT([ T([1])([2])(streetHorizontal1) , T([1])([7])(streetHorizontal1) ]);
var streetsSmaller = STRUCT([verticals, T([2])([0.001])(horizontals2)]);
streetsSmaller = S([0,1,2])([0.07,0.07,0.07])(streetsSmaller);
streetsSmaller = T([0,1,2])([7.5,0.3,0.001])(streetsSmaller);

DRAW(streetsSmaller);