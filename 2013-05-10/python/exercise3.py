# EXERCISE 3

# Measures

dom1D = INTERVALS(1)(16)
dom2D = PROD([INTERVALS(1)(16),INTERVALS(1)(16)])	

wide = 6.5
wideHalf = wide/2
roofWideHalf = 2.0

alfa = PI/6
beta = PI/7.2

trunkLength = 2.0
roofLength = 5.0
frontScreenProjection = 2.5
frontScreenLength = frontScreenProjection/COS(alfa)
cofferLength = 5.0
rearScreenProjection = 3.0
rearScreenLength = rearScreenProjection/COS(beta)

totalLength = roofLength+rearScreenProjection+trunkLength+frontScreenProjection+cofferLength

h_coffer = 1.5
h_parab = 1.5
h_trunk = 0.5
h_shell = 1.5

diameterShellWhell = 3.0
R_tire = 0.7*diameterShellWhell/2
r_tire = 1.0
wheelThickness = 1.0
n_spokes = 7




# Costruisce una ruota da macchina con raggio interno ed esterno della gomma rispettivamente di r_tire
# e R_tire, disco di raggio r_disk e altezza h_disk, cilindro orizzontale di raggio r_cyl, n_spokes raggi e copricatena.

		 
def wheelCar (r_tire,R_tire,thickness,n_spokes):


	## Costruisce un arco alpha di raggio minore r e raggio maggiore R.

	def arco (alpha, r, R) :
		domy = DIFFERENCE([INTERVALS(R)(1), INTERVALS(r)(1)])
		dom = PROD([ INTERVALS(alpha)(36), domy ])
		def mapping (p) :
			angolo,r = p
			return [ r*COS(angolo), r*SIN(angolo) ]
		obj = MAP(mapping)(dom)
		return obj


	rim = arco(2*PI,0.8*r_tire,r_tire)
	rim = EXTRUDE([None,rim,thickness])
	rim = COLOR([0.75,0.75,0.75])(rim)


	dom = INTERVALS(1)(16)
	dom2D = PROD([INTERVALS(1)(16),INTERVALS(1)(16)])
	dom2Dcircle = PROD([INTERVALS(1)(16),INTERVALS(2*PI)(36)])

	curveFunction1 = CUBICHERMITE(S1)([ [r_tire,0,0],[R_tire,0,0], [1,0,0],[1,0,0]])
	curveFunction2 = CUBICHERMITE(S1)([ [R_tire,0,0],[R_tire,0,thickness],[R_tire/2,0,R_tire/2],[-R_tire/2,0,R_tire/2] ])
	curveFunction3 = CUBICHERMITE(S1)([ [r_tire,0,thickness],[R_tire,0,thickness],[1,0,0],[1,0,0] ])
	curveFunction4 = CUBICHERMITE(S1)([ [r_tire,0,0],[r_tire,0,thickness],[0,0,1],[0,0,1] ])

	tire = STRUCT([MAP(ROTATIONALSURFACE(curveFunction1))(dom2Dcircle),MAP(ROTATIONALSURFACE(curveFunction2))(dom2Dcircle),
			MAP(ROTATIONALSURFACE(curveFunction3))(dom2Dcircle),MAP(ROTATIONALSURFACE(curveFunction4))(dom2Dcircle)])
	tire = COLOR([0.25,0.25,0.25])(tire)

	r_cyl = r_tire/2
	h_cyl = thickness
	cyl = CYLINDER([r_cyl,h_cyl])(36)
	cyl = COLOR([0.75,0.75,0.75])(cyl)

	wheel = STRUCT([tire,cyl])

	spokeLength = 0.9*r_tire-r_cyl
	spokeWide = spokeLength/3
	spokeHigh = h_cyl/8
	curve1 = BEZIER(S1)([ [0,0],[0,spokeLength] ])
	curve2 = BEZIER(S1)([ [1.5*spokeWide,0],[spokeWide/4,spokeLength/2],[1.5*spokeWide,spokeLength] ])
	spokeSurface = BEZIER(S2)([curve1,curve2])
	spoke = MAP(spokeSurface)(dom2D)
	spoke = EXTRUDE([None,spoke,spokeHigh])	
	spoke = STRUCT([spoke, S(1)(-1)(spoke)])
	spoke = T(2)(0.9*r_cyl)(spoke)
	spokes = STRUCT(NN(n_spokes)([spoke,R([1,2])(2*PI/(n_spokes))]))
	spokes = COLOR([0.75,0.75,0.75])(spokes)
	spokes2plane = STRUCT([spokes,T(3)(h_cyl-spokeHigh)(spokes)])

	h_disk = 0.05
	disk = CYLINDER([0.72*r_tire,h_disk])(36)
	disk = T(3)(h_cyl/2-h_disk/2)(disk)
	disk = COLOR([0.6,0.6,0.65])(disk)

	
	wheel = STRUCT([tire,cyl,spokes2plane,disk,rim])
	wheel = R([1,3])(-PI/2)(wheel)

	return wheel




carWheel = wheelCar(r_tire,R_tire,wheelThickness,n_spokes)

carWheel = T([1,2,3])([wideHalf-R_tire/2,-5.5,-(h_coffer+0.8*h_shell)])(carWheel)
VIEW(carWheel)

carWheelPair = STRUCT(NN(2)([carWheel,T(2)(11.5)]))
#VIEW(carWheelPair)

carWheels = STRUCT([carWheelPair,S(1)(-1)(carWheelPair)])
#VIEW(carWheels)

mockUp = STRUCT([carWheels,profiles])
VIEW(mockUp)