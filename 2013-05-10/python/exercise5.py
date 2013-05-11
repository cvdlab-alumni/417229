# EXERCISE 5


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



# Costruisce un anello di raggio r

def semicircle (r):
	dom1d=INTERVALS(PI)(18)
	def mapping(p):
		alpha=p[0]
		return [r*COS(alpha), r*SIN(alpha)];
	circonf = MAP(mapping)(dom1d)
	return circonf


# Costruisce una carrozzeria di una macchina


dom1D = INTERVALS(1)(32)
dom2D = PROD([INTERVALS(1)(32),INTERVALS(1)(32)])	

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
rearScreenL = rearScreenProjection/COS(beta)

h_coffer = 1.5
h_parab = 1.5
h_trunk = 0.5
h_shell = 1.5

curve1 = CUBICHERMITE(S1)([ [0,-0.06*roofLength,h_parab],[roofWideHalf,0,h_parab],
							[roofWideHalf,0,0],[roofWideHalf,roofWideHalf/3,0] ])
curve2 = CUBICHERMITE(S1)([ [0,roofLength+0.06*roofLength,h_parab],[roofWideHalf,roofLength,h_parab],
							[roofWideHalf,0,0],[roofWideHalf,-roofWideHalf/3,0] ])


curve3 = CUBICHERMITE(S1)([ [0,-(frontScreenProjection+0.4*frontScreenProjection),0],[wideHalf,-frontScreenProjection,0],
							[wideHalf,0,0],[wideHalf,wideHalf/3,0] ])
curve4 = CUBICHERMITE(S1)([ [0,-(1.2*cofferLength+frontScreenProjection),-h_coffer],
							[wideHalf,-(frontScreenProjection+cofferLength),-h_coffer],
							[wideHalf,0,0],[wideHalf,wideHalf/3,0] ])

curve5 = CUBICHERMITE(S1)([ [0,roofLength+rearScreenProjection+0.15*rearScreenProjection,1.4*h_trunk],
							[wideHalf,roofLength+rearScreenProjection,1.4*h_trunk],
							[wideHalf,0,0],[wideHalf,-wideHalf/3,0] ])
curve6 = CUBICHERMITE(S1)([ [0,roofLength+rearScreenProjection+1.2*trunkLength,h_trunk],
							[wideHalf,roofLength+rearScreenProjection+trunkLength,h_trunk],
							[wideHalf,0,0],[wideHalf,-wideHalf/3,0] ])

curve4down = CUBICHERMITE(S1)([ [0,-(1.2*cofferLength+frontScreenProjection),-(h_coffer+h_shell)],
							[wideHalf,-(frontScreenProjection+cofferLength),-(h_coffer+h_shell)],
							[wideHalf,0,0],[wideHalf,wideHalf/3,0] ])

curve6down = CUBICHERMITE(S1)([ [0,roofLength+rearScreenProjection+1.2*trunkLength,-(h_coffer+2*h_shell/3)],
								[wideHalf,roofLength+rearScreenProjection+trunkLength,-(h_coffer+2*h_shell/3)],
								[wideHalf,0,0],[wideHalf,-wideHalf/3,0] ])

curve7 = CUBICHERMITE(S1)([ [roofWideHalf,0,h_parab],[roofWideHalf,roofLength,h_parab],
							[0,roofLength,roofLength/5],[0,roofLength,-roofLength/5] ])

curve8 = CUBICHERMITE(S1)([ [wideHalf,-0.9*frontScreenProjection,0],
							[wideHalf,roofLength+rearScreenProjection,h_trunk],
					   	  	[0,-totalLength,0],[totalLength/10,-totalLength,0] ])


curve14first = BEZIER(S1)([ [wideHalf,-(frontScreenProjection+1.2*cofferLength),-(h_coffer+h_shell)],
							[wideHalf,-(frontScreenProjection+1.2*cofferLength-1.5),-(h_coffer+h_shell)] ])

#curve14second = BEZIER(S1)([ [wideHalf,-(frontScreenProjection+1.2*cofferLength-1.5),-(h_coffer+h_shell)],
#							 [wideHalf,-(frontScreenProjection+1.2*cofferLength-1.5),-(h_coffer+h_shell-2*diameterShellWhell/3)],
#							 [wideHalf,-(frontScreenProjection+1.2*cofferLength-4.5),-(h_coffer+h_shell-2*diameterShellWhell/3)],
#							 [wideHalf,-(frontScreenProjection+1.2*cofferLength-4.5),-(h_coffer+h_shell)] ])

curve14second = R([2,3])(PI/2)(semicircle(diameterShellWhell/2) )
curve14second = R([1,2])(PI/2)(curve14second)
curve14second = T([1,2,3])([wideHalf,-5.5,-(h_coffer+h_shell)])(curve14second)

curve14third = BEZIER(S1)([ [wideHalf,-(frontScreenProjection+1.2*cofferLength-4.5),-(h_coffer+h_shell)],
							[wideHalf,0.9*roofLength,-(h_coffer+h_shell)] ])

#curve14fourth = BEZIER(S1)([ [wideHalf,0.9*roofLength,-(h_coffer+h_shell)],
#							 [wideHalf,0.9*roofLength,-(h_coffer+h_shell-2*diameterShellWhell/3)],
#							 [wideHalf,0.9*roofLength+diameterShellWhell,-(h_coffer+h_shell-2*diameterShellWhell/3)],
#							 [wideHalf,0.9*roofLength+diameterShellWhell,-(h_coffer+h_shell)] ])

curve14fourth = R([2,3])(PI/2)(semicircle(diameterShellWhell/2) )
curve14fourth = R([1,2])(PI/2)(curve14fourth)
curve14fourth = T([1,2,3])([wideHalf,6,-(h_coffer+h_shell)])(curve14fourth)

curve14fifth = BEZIER(S1)([ [wideHalf,0.9*roofLength+diameterShellWhell,-(h_coffer+h_shell)],
							[wideHalf,roofLength+rearScreenProjection+trunkLength+0.1,-(h_coffer+2*h_shell/3)] ])




roofMapping = CUBICHERMITE(S2)([curve1,curve2,[0,roofLength,roofLength/5],[0,roofLength,-roofLength/5]])
windscreenMapping = CUBICHERMITE(S2)([curve1,curve3,[0,0,0],[0,0,0]])
cofferMapping = CUBICHERMITE(S2)([curve3,curve4,[0,-cofferLength,-cofferLength/15],[0,-cofferLength,-cofferLength]])
rearWindscreenMapping = CUBICHERMITE(S2)([curve2,curve5,[0,0,0],[0,0,0]])
trunkMapping = CUBICHERMITE(S2)([curve5,curve6,[0,trunkLength,-trunkLength/4],[0,trunkLength,0]])
frontMapping = CUBICHERMITE(S2)([curve4,curve4down,[0,0,-h_shell],[0,0,-h_shell]])
rearMapping = CUBICHERMITE(S2)([curve6,curve6down,[0,h_shell/3,-h_shell],[0,-h_shell/3,-h_shell]])


lateralSuperiorMapping = CUBICHERMITE(S2)([curve7,curve8,[0,0,0],[0,0,0]])
hTotal = h_shell+h_coffer
lateralInferiorMapping = CUBICHERMITE(S2)([curve8,curve14third,[hTotal,0,-hTotal],[-hTotal/3,0,-hTotal]])

roof = MAP(roofMapping)(dom2D)
roof = COLOR([0.75,0.07,0.07])(roof)

windscreen = MAP(windscreenMapping)(dom2D)
windscreen = COLOR([0.45,0.67,0.66,0.1])(windscreen)

coffer = MAP(cofferMapping)(dom2D)
coffer = COLOR([0.75,0.07,0.07])(coffer)

rearWindscreen = MAP(rearWindscreenMapping)(dom2D)
rearWindscreen = COLOR([0.45,0.67,0.66,0.1])(rearWindscreen)

trunk = MAP(trunkMapping)(dom2D)
trunk = COLOR([0.75,0.07,0.07])(trunk)

lateralSuperior = MAP(lateralSuperiorMapping)(dom2D)
lateralSuperior = COLOR([0.45,0.67,0.66,0.1])(lateralSuperior)

lateralInferior = MAP(lateralInferiorMapping)(dom2D)
lateralInferior = COLOR([0.75,0.07,0.07])(lateralInferior)

front = MAP(frontMapping)(dom2D)
front = COLOR([0.25,0.25,0.25])(front)

rear = MAP(rearMapping)(dom2D)
rear = COLOR([0.75,0.07,0.07])(rear)

surfaceFrontal = STRUCT([roof,windscreen,coffer,rearWindscreen,trunk,front,rear])

surfaceLateral = STRUCT([lateralSuperior,lateralInferior])

surface = STRUCT([surfaceFrontal,surfaceLateral])




surfaceTot = STRUCT([surface, S(1)(-1)(surface)])

model = STRUCT([surfaceTot,steeringWheel,carWheels])

VIEW(model)




# Costruisce uno speccghietto

def mirror(dim):
	dom2d = PROD([INTERVALS(1)(30),INTERVALS(1)(30)])
	dom1d = INTERVALS(1)(30)


	controlPoints1 = [[0,0.5,0],[0.1,0.7,0],[0.6,0.75,0],[0.9,0.7,0],[1,0.5,0]]
	controlPoints2 = [[0,0.5,0],[-0.12,-0.12,0],[+0.12,0.15,0],[0.6,-0.12,0],[1,0,0],[1,0.5,0]]

	curve1 = BEZIER(S1)(controlPoints1)
	curve2 = BEZIER(S1)(controlPoints2)

	mapping = BEZIER(S2)([curve1,curve2])
	mirrorBase = MAP(mapping)(dom2d)
	mirrorBase = COLOR([0.45,0.67,0.66])(mirrorBase)
	mirrorBase = T([1,2])([0.03,-0.02])(mirrorBase)
	
	controlPoints1z = [[0,0.5,0],[0.25,0.5,0.25],[0.5,0.5,0.5],[0.75,0.5,0.25],[1,0.5,0]]
	controlPoints2z = [[0,0.5,0],[0.25,0.42,0.25],[0.5,0.35,0.5],[0.75,0.42,0.25],[1,0.5,0]]

	curve1z = BEZIER(S1)(controlPoints1z)
	curve2z = BEZIER(S1)(controlPoints2z)

	mappingz = BEZIER(S2)([curve1,curve1z,curve2z,curve2])
	mirrorShell = MAP(mappingz)(dom2d)
	mirrorShell = COLOR([0,0,0])(mirrorShell)
	mirrorShell = T([1,2])([0.03,-0.02])(mirrorShell)
	
	totalMirror = STRUCT([mirrorBase,mirrorShell])
	totalMirror = R([2,3])(PI/2)(totalMirror)
	totalMirror = COLOR([0.75,0.07,0.07])(totalMirror)

	return totalMirror

mirror = mirror(1)
VIEW(mirror)

# Costruisce una marmitta da macchina lunga length, con raggio r e manici posizionati a 1/10,3/10,6/10 e 10/10 di length.


def mufflerCar (radius,length):

	def circle (r) :
		def mapping (p) :
			alpha,r = p
			return [r*COS(alpha), r*SIN(alpha)]

		dom2D = PROD([INTERVALS(2*PI)(360), INTERVALS(r)(1)])
		return MAP(mapping)(dom2D)

	dom2Dcircle = PROD([INTERVALS(1)(30),INTERVALS(2*PI)(72)])
	controlPoints = [[radius,0,0],[radius,0,length]]
	mufflerFunction = BEZIER(S1)(controlPoints)
	lowerBase = circle(radius)
	muffler = MAP(ROTATIONALSURFACE(mufflerFunction))(dom2Dcircle)
	muffler = STRUCT([lowerBase,muffler])
	muffler = COLOR([0.78,0.78,0.78])(muffler)

	# marmitta doppia
	muffler = T(1)(radius)(muffler)
	muffler2 = S(1)(-1)(muffler)
	muffler = STRUCT([muffler,muffler2])
	muffler = R([1,2])(-PI/2)(muffler)

	muffler = R([1,3])(-PI/2)(muffler)

	return muffler

muffler = mufflerCar(0.1,1.0)
VIEW(muffler)

# Costruisce una maniglia lunga length, e spessa thickness.


def handle (length,thickness):

	dom1D = INTERVALS(1)(36)
	dom2D = PROD([INTERVALS(1)(36),INTERVALS(1)(36)])

	curve1 = BEZIER(S1)([ [-5*length/14,0],[-2*length/7,length/14] ])
	curve2 = BEZIER(S1)([ [-2*length/7,length/14],[2*length/7,length/14] ])
	curve3 = BEZIER(S1)([ [2*length/7,length/14],[5*length/14,0] ])
	curve4 = BEZIER(S1)([ [5*length/14,0],[length/2,0] ])
	curve5 = BEZIER(S1)([ [length/2,0],[length/2,length/14] ])
	curve6 = BEZIER(S1)([ [length/2,length/14],[5*length/14,length/14] ])
	curve7 = BEZIER(S1)([ [5*length/14,length/14],[0,5*length/14],[-length/2,0] ])
	curve8 = BEZIER(S1)([ [-length/2,0],[-5*length/14,0] ])

	curve1M = MAP(curve1)(dom1D)
	curve2M = MAP(curve2)(dom1D)
	curve3M = MAP(curve3)(dom1D)
	curve4M = MAP(curve4)(dom1D)
	curve5M = MAP(curve5)(dom1D)
	curve6M = MAP(curve6)(dom1D)
	curve7M = MAP(curve7)(dom1D)
	curve8M = MAP(curve8)(dom1D)


	curves = STRUCT([curve1M,curve2M,curve3M,curve4M,curve5M,curve6M,curve7M,curve8M])

	surface = SOLIDIFY(curves)

	handle = EXTRUDE([None,surface,thickness])
	handle = R([2,3])(PI)(handle)
	handle = T(3)(thickness)(handle)
	handle = COLOR([0.75,0.07,0.07])(handle)
	
	return handle

handle = handle(1.4,0.2)
VIEW(handle)


# Costruisce un parabrezza quadrato largo wide, lungo length, alto high e inclinato di inclination.

wide = 1.5
frontScreenL = roofLength/2

def  windscreenQuadrate (wide,frontScreenL,inclination):
	dom2D = PROD([INTERVALS(1)(16),INTERVALS(1)(16)])

	halfWide = wide/2	
	curveMapping1 = CUBICHERMITE(S1)([ [0,0,2*frontScreenL/15],[halfWide,frontScreenL/5,0],
								[halfWide,0,0],[halfWide,halfWide/3,0] ])
	curveMapping2 = CUBICHERMITE(S1)([ [0,frontScreenL,2*frontScreenL/15],[0.9*halfWide,frontScreenL+2*frontScreenL/15,0],
								[halfWide,0,0],[halfWide,halfWide/3,0] ])

	surfaceMapping = CUBICHERMITE(S2)([curveMapping1,curveMapping2,[0,0,0],[0,0,0]])
	windscreen1 = MAP(surfaceMapping)(dom2D)
	windscreen2 = S(1)(-1)(windscreen1)
	windscreen = STRUCT([windscreen1,windscreen2])
	windscreen = COLOR([0.67,0.8,0.94])(windscreen)
	windscreen = R([2,3])(inclination)( T(3)(-2*frontScreenL/15)(windscreen) )

	windscreen = OFFSET([0.01,0.01,0.01])(windscreen)
	
	return windscreen

windscreen = windscreenQuadrate(1.5,0.75,PI/6)
VIEW(windscreen)