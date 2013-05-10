##EXERCISE 2


##floor0
floor0 = GRID([[0.25,2.5,0.25,2.5,0.25,2.5,0.25,2.5,0.25], [0.25,5,0.25,0.75,0.25], [0.2]])

##floor1
floor1balcony = T([0,1])([-0.749, 0.25+5+0.125])(GRID([[0.62,0.125], [0.0625,0.62,0.0625], [-0.2,-3,0.2]]));
floor1a = GRID([[0.25,1.06], [0.25,5,0.25,0.75,0.25], [-0.2,-3,0.2]])
floor1b = GRID([[-0.25,-1.06,3], [0.25,5.25,-0.75,0.25], [-0.2,-3,0.2]]);
floor1c = GRID([[-0.25,-1.06,-3,6.94], [0.25,5,0.25,0.75,0.25], [-0.2,-3,0.2]]);

floor1 = STRUCT([floor1balcony, floor1a, floor1b, floor1c]);

##floor2
floor2a = GRID([[1.19], [0.25,5,0.25,0.75,0.25], [-0.2,-3,-0.2,-3,0.2]]);
floor2b = GRID([[-1.19,3.25], [0.25,5.25,-0.75,0.25], [-0.2,-3,-0.2,-3,0.2]]);
floor2c = GRID([[-1.19,-3.25,6.81], [0.25,5.25,0.75,0.25], [-0.2,-3,-0.2,-3,0.2]]);
floor2 = STRUCT([floor2a, floor2b, floor2c]);

##floor3
floor3a = GRID([[5.75], [0.25,5,0.25,0.75,0.25], [-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
floor3b = GRID([[-5.75,3], [0.25,5,0.25,-0.75,0.25], [-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
floor3c = GRID([[-8.75,2.5], [0.25,5,0.25,0.75,0.25], [-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
floor3 = STRUCT([floor3a, floor3b, floor3c]);

##floor4
floor4a = GRID([[5.5], [-5.11,1.39], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
floor4b = GRID([[-5.5,5.75], [6.5], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,-3,0.2]]);
floor4 = STRUCT([floor4a, floor4b]);

##floors
floors = STRUCT([floor0, floor1, floor2, floor3, floor4]);

##Balcony

murettobalconcinoa = T([1,2])([-0.749, 0.25+5+0.125])(GRID([[0.62,0.125], [0.0625], [-0.2,-3,-0.2,1]]))

murettobalconcinob = T([1,2])([-0.749, 0.25+5+0.125+0.62+0.0625])(GRID([[0.62,0.125], [0.0625], [-0.2,-3,-0.2,1]]))

murettobalconcinoc = T([1,2])([-0.749, 0.25+5+0.125+0.0625])(GRID([[0.125], [0.62], [-0.2,-3,-0.2,1]]))

murettobalconcino = STRUCT([murettobalconcinoa,murettobalconcinob,murettobalconcinoc])

building = STRUCT([building,murettobalconcino,floors])