##EXERCISE 3

##North
northA = GRID([[0.25],[0.25],[-12.8,0.5]])
northB = GRID([[-0.25,5],[0.25], [-3.2,1,-1, 1,-0.2, 1,-1,1,-0.2,1,-1,1,-0.2,0.5]])


northC = GRID([[-5.25, 0.25], [0.25], [-12.8,0.5]])
northD = GRID([[-5.5, 0.5],[0.25],[-3.2, 3, -0.2, 3, -0.2, 3, -0.2, 0.5 ]])

northE = GRID([[-6,0.25,],[0.25],[-12.8,0.5]])
northF = GRID([[-6.25, 0.25],[0.25],[-3.2, 3, -0.2, 3, -0.2, 3, -0.2, 0.5]])

northR = R([1,2])(PI/2)(STRUCT([northA, northB, northC, northD, northE, northF]))
north = T([1,3])([11.25,0.2])(northR)

##south
southA=GRID([[0.25],[0.25],[3,-0.2,3,-0.2, 3, -0.2, 3]])
southB= GRID([[-0.25,0.25],[0.25],[-3.2,3,-0.2,3]])

southC=GRID([[-0.5, 0.5],[0.25],[-5.9,0.3,-0.2,3]])

southD= GRID([[-1.25,5.11],[0.25],[-3.2,0.3,-2.4,0.3,-0.2,0.3,-2.4,0.3,]])

southE = GRID([[0.14,0.86, -0.14,5.25,-0.14],[0.25],[-9.6,1.3]])

southF = GRID([[0.14, -6.36],[0.25],[-10.9,1]])

southG= GRID([[0.14,0.86,-0.14,5.25,-0.14],[0.25],[-11.9,1.4]])


southH= GRID([[-6.36,0.14],[0.25],[-12.6,0.7]])
southI = GRID([[-0.14,-0.86,0.14],[0.25],[-12.8,0.5]])

southR =  R([1,2])(-PI/2)(STRUCT([southA,southB,southC,southD,southE,southF,southG,southH, southI]))
south =  T([2,3])([6.5,0.2])(southR)

##east
eastA = GRID([[-0.25,2.5], [0.25], [-0.2,-3,-0.2,3]])
eastB = GRID([[-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,3]])
eastC= GRID([[-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,3]])
eastD = GRID([[-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,3]])

eastE = GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,1,-1,1]])
eastF = GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,1,-1,1]])
eastG = GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,1,-1,1]])

eastH = GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,3]])
eastI= GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,3]])

eastL= GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,3]])

eastM = GRID([[-0.25,-2.5,-0.25,-2.5,-0.25,-2.5,-0.25,2.5], [0.25], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,-3,-0.2,0.5]])
eastN = GRID([[5.5], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,-3,0.2]]);
eastO = GRID([[-0.11,5.5], [0.25], [-0.2,-9.6,1.3]])
eastP = GRID([[-0.11,5.5], [0.25], [-0.2,-9.6,-1.3,-1,0.9]])

east = STRUCT([eastB,eastC,eastD,eastE,eastF,eastG,eastH,eastI,eastL,eastM, eastN, eastO, eastP])

##west
westA= GRID([[11.25], [0.25], [-0.2,-3,-0.2,1.5]])
westB = GRID([[2.5,-2.5,6.25], [0.25], [-0.2,-3,-0.2,-1.5,1]])
westC = GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,0.5]])
westD= GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,1.5]])
westE = GRID([[1.7,-0.1,0.5,-0.1,8.85], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,1]])
westF = GRID([[1.7,0.1,0.5,0.1,8.85], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,0.5]])
westG = GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,3]])
westH = GRID([[11.25], [0.25], [-0.2,-3,-0.2,-1.5,-1,-0.5,-0.2,-1.5,-1,-0.5,-0.2,-3,-0.2,0.5]])


westS = STRUCT([westA,westB,westC,westD,westE,westF,westG,westH])
westR = R([1,2])(PI)(westS)
west = T([1,2])([11.25,6.5])(westR)

##hall
def arc(alpha, r, R, h) :
	domain =PROD([INTERVALS(alpha)(36),INTERVALS()(1)])
	
	##domain = DOMAIN([[0,alpha],[r,R]])([36,1]);
	def mapping: def function (v) :
		a = v[0]
		r = v[1]
		return [r*COS(a), r*SIN(a)];
	
	model = MAP(mapping)(domain)
	arco = EXTRUDE([h])(model)
	return arco


arcoMuroGrande = T([1,2,3])([9,5.375,0.2])(R([1,2])(-PI/2)(arc(PI,0.875,1.125,3)))
arcoMuroPiccolo = T([1,2,3])([2.3125,2,0.2])(R([1,2])(-PI)(arc(PI,0.4375,0.6875,3)))
facadePianoTerra = STRUCT([facadeTerra, facadeTerraC, facadeTerraD, facadeTerraE, facadeTerraF, facadeTerraG,facadeTerraH,facadeTerraI,facadeTerraL,facadeTerraM, arcoMuroGrande, arcoMuroPiccolo])

building = STRUCT([building,east,west,north,south,facadePianoTerra])