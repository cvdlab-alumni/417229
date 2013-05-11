# EXERCISE 4

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



# Costruisce un volante di raggio esterno R e raggio interno r.

def steeringWheel(Radius,radius):

	dom1D = INTERVALS(1)(16)
	dom2D = PROD([INTERVALS(1)(16),INTERVALS(1)(16)])

	wheel = TORUS([radius,Radius])([36,36])

	curve1 = CUBICHERMITE(S1)([ [radius,radius/5,0],[0,radius/3,0],[-1,0,0],[-1,0,0] ]) 
	curve2 = CUBICHERMITE(S1)([ [radius,-radius/5,0],[0,-radius,0],[-3*radius,0,0],[-3*radius,0,0] ])

	surfaceMapping = CUBICHERMITE(S2)([ curve1,curve2,[0,-radius,radius/2],[0,-radius,-radius/2] ])
	surface = MAP(surfaceMapping)(dom2D)

	surfaceHalf = STRUCT([surface,S(3)(-1)(surface)])
	surfaceTot = STRUCT([surfaceHalf,S(1)(-1)(surfaceHalf)])

	steeringWheel = STRUCT([wheel,surfaceTot])
	steeringWheel = COLOR([0.17,0.22,0.26])(steeringWheel)
	steeringWheel = R([2,3])(PI/2)(steeringWheel)
	steeringWheel = R([1,2])(PI)(steeringWheel)

	return steeringWheel


Radius = 0.7
radius = 0.55

steeringWheel = steeringWheel(Radius,radius)

steeringWheel = R([2,3])(PI/6)(steeringWheel) 
steeringWheel = T([1,2,3])([0.7*roofWideHalf,-1.5,-0.3])(steeringWheel)


VIEW(steeringWheel)

mockUp = STRUCT([mockUp,steeringWheel])
VIEW(mockUp)



