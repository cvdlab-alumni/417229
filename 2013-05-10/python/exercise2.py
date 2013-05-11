# EXERCISE 2


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



#Upper Profile


curve1 = CUBICHERMITE(S1)([ [0,-0.06*roofLength,h_parab],[roofWideHalf,0,h_parab],
							[roofWideHalf,0,0],[roofWideHalf,roofWideHalf/3,0] ])
curve2 = CUBICHERMITE(S1)([ [0,roofLength+0.06*roofLength,h_parab],[roofWideHalf,roofLength,h_parab],
							[roofWideHalf,0,0],[roofWideHalf,-roofWideHalf/3,0] ])


curve3 = CUBICHERMITE(S1)([ [0,-(frontScreenProjection+0.4*frontScreenProjection),h_parab],[wideHalf,-frontScreenProjection,h_parab],
							[wideHalf,0,0],[wideHalf,wideHalf/3,0] ])
curve4 = CUBICHERMITE(S1)([ [0,-(1.2*cofferLength+frontScreenProjection),h_parab],
							[wideHalf,-(frontScreenProjection+cofferLength),h_parab],
							[wideHalf,0,0],[wideHalf,wideHalf/3,0] ])

curve5 = CUBICHERMITE(S1)([ [0,roofLength+rearScreenProjection+0.15*rearScreenProjection,h_parab],
							[wideHalf,roofLength+rearScreenProjection,h_parab],
							[wideHalf,0,0],[wideHalf,-wideHalf/3,0] ])
curve6 = CUBICHERMITE(S1)([ [0,roofLength+rearScreenProjection+1.2*trunkLength,h_parab],
							[wideHalf,roofLength+rearScreenProjection+trunkLength,h_parab],
							[wideHalf,0,0],[wideHalf,-wideHalf/3,0] ])

curve7 = BEZIER(S1)([ [roofWideHalf,0,h_parab],[roofWideHalf,roofLength,h_parab] ])

curve8 = CUBICHERMITE(S1)([ [wideHalf,roofLength+rearScreenProjection+trunkLength,h_parab],
					 	  	[wideHalf,-frontScreenProjection,h_parab],
					   	  	[totalLength/10,-totalLength,0],[0,-totalLength,0] ])

curve9 = BEZIER(S1)([ [wideHalf,-frontScreenProjection,h_parab],
					  [wideHalf,-(frontScreenProjection+cofferLength),h_parab] ])
curve10 = BEZIER(S1)([ [wideHalf,roofLength+rearScreenProjection,h_parab],
					   [wideHalf,roofLength+rearScreenProjection+trunkLength,h_parab] ])

curve1_3 = BEZIER(S1)([ [roofWideHalf,0,h_parab],
						[wideHalf,-frontScreenProjection,h_parab] ])
curve2_5 = BEZIER(S1)([ [roofWideHalf,roofLength,h_parab],
					    [wideHalf,roofLength+rearScreenProjection,h_parab] ])


curve1M = MAP(curve1)(dom2D)
curve2M = MAP(curve2)(dom2D)
curve3M = MAP(curve3)(dom2D)
curve4M = MAP(curve4)(dom2D)
curve5M = MAP(curve5)(dom2D)
curve6M = MAP(curve6)(dom2D)
curve7M = MAP(curve7)(dom2D)
curve8M = MAP(curve8)(dom2D)
curve9M = MAP(curve9)(dom2D)
curve10M = MAP(curve10)(dom2D)
curve1_3M = MAP(curve1_3)(dom2D)
curve2_5M = MAP(curve2_5)(dom2D)

upperProfile = STRUCT([curve1M,curve2M,curve3M,curve4M,curve5M,curve6M,curve7M,
					   curve8M,curve9M,curve10M,curve1_3M,curve2_5M])

upperProfileTot = STRUCT([upperProfile, S(1)(-1)(upperProfile)])

#VIEW(upperProfileTot)




# Lateral Profile


## Costruisce un semicerchio di raggio r.


def semicircle (r):
	dom1d=INTERVALS(PI)(18)
	def mapping(p):
		alpha=p[0]
		return [r*COS(alpha), r*SIN(alpha)];
	circonf = MAP(mapping)(dom1d)
	return circonf


curve7 = CUBICHERMITE(S1)([ [wideHalf,0,h_parab],[wideHalf,roofLength,h_parab],
							[0,roofLength,roofLength/5],[0,roofLength,-roofLength/5] ])

curve8 = BEZIER(S1)([ [wideHalf,roofLength+rearScreenProjection+trunkLength,h_trunk],
					  [wideHalf,-frontScreenProjection,0] ])

curve9 = CUBICHERMITE(S1)([ [wideHalf,-frontScreenProjection,0],
					  		[wideHalf,-(frontScreenProjection+1.2*cofferLength),-h_coffer],
					   	  	[0,-cofferLength,-cofferLength/15],[0,-cofferLength,-cofferLength] ])
curve10 = CUBICHERMITE(S1)([ [wideHalf,roofLength+rearScreenProjection,1.4*h_trunk],
					   		 [wideHalf,roofLength+rearScreenProjection+trunkLength,h_trunk],
					   		 [0,trunkLength,-trunkLength/4],[0,trunkLength,0] ])

curve1_3 = BEZIER(S1)([ [wideHalf,0,h_parab],
						[wideHalf,-frontScreenProjection,0] ])
curve2_5 = BEZIER(S1)([ [wideHalf,roofLength,h_parab],
					    [wideHalf,roofLength+rearScreenProjection,1.4*h_trunk] ])

curve12 = BEZIER(S1)([ [wideHalf,-(frontScreenProjection+1.2*cofferLength),-h_coffer],
					   [wideHalf,-(frontScreenProjection+1.2*cofferLength),-(h_coffer+h_shell)] ])

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


ctrlPoints = [ [wideHalf,roofLength+rearScreenProjection+trunkLength+0.1,-(h_coffer+2*h_shell/3)],
						 [wideHalf,roofLength+rearScreenProjection+trunkLength+0.6,-2*h_coffer/3],
						 [wideHalf,roofLength+rearScreenProjection+trunkLength-0.5,-2*h_coffer/3],
						 [wideHalf,roofLength+rearScreenProjection+trunkLength+0.1,h_trunk] ]

curve13 = BEZIER(S1)(ctrlPoints)


curve7M = MAP(curve7)(dom2D)
curve8M = MAP(curve8)(dom2D)
curve9M = MAP(curve9)(dom2D)
curve10M = MAP(curve10)(dom2D)
curve12M = MAP(curve12)(dom2D)
curve14firstM = MAP(curve14first)(dom2D)
#curve14secondM = MAP(curve14second)(dom2D)
curve14thirdM = MAP(curve14third)(dom2D)
#curve14fourthM = MAP(curve14fourth)(dom2D)
curve14fifthM = MAP(curve14fifth)(dom2D)
curve13M = MAP(curve13)(dom2D)
curve1_3M = MAP(curve1_3)(dom2D)
curve2_5M = MAP(curve2_5)(dom2D)

curve14M = STRUCT([curve14firstM,curve14second,curve14thirdM,curve14fourth,curve14fifthM])


lateralProfile = STRUCT([curve7M,curve8M,curve9M,curve10M,curve12M,curve13M,curve14M,curve1_3M,curve2_5M])

#lateralProfileTot = STRUCT([lateralProfile, S(1)(-1)(lateralProfile)])
#VIEW(lateralProfile)



# Frontal Profile

curve1 = BEZIER(S1)([ [0,-(1.2*cofferLength+frontScreenProjection),h_parab],
					  [roofWideHalf,-(1.2*cofferLength+frontScreenProjection),h_parab] ])

curve3 = BEZIER(S1)([ [0,-(1.2*cofferLength+frontScreenProjection),0],
					  [wideHalf,-(1.2*cofferLength+frontScreenProjection),0] ])

curve1_3 = BEZIER(S1)([ [roofWideHalf,-(1.2*cofferLength+frontScreenProjection),h_parab],
						[wideHalf,-(1.2*cofferLength+frontScreenProjection),0] ])

curve4 = BEZIER(S1)([ [0,-(1.2*cofferLength+frontScreenProjection),-h_coffer],
					  [wideHalf,-(1.2*cofferLength+frontScreenProjection),-h_coffer] ])

curve9 = BEZIER(S1)([ [wideHalf,-(1.2*cofferLength+frontScreenProjection),0],
					  [wideHalf,-(1.2*cofferLength+frontScreenProjection),-h_coffer] ])

curve15 = BEZIER(S1)([ [0,-(1.2*cofferLength+frontScreenProjection),-(h_coffer+h_shell)],
					   [wideHalf,-(1.2*cofferLength+frontScreenProjection),-(h_coffer+h_shell)] ])

curve4_15 = BEZIER(S1)([ [wideHalf,-(1.2*cofferLength+frontScreenProjection),-h_coffer],
					     [wideHalf,-(1.2*cofferLength+frontScreenProjection),-(h_coffer+h_shell)] ])

curve3_15 = CUBICHERMITE(S1)([ [wideHalf,-(1.2*cofferLength+frontScreenProjection),0],
							   [wideHalf,-(1.2*cofferLength+frontScreenProjection),-(h_coffer+h_shell)],
							   [h_coffer+h_shell,0,-(h_coffer+h_shell)],[-(h_coffer+h_shell)/3,0,-(h_coffer+h_shell)] ])



curve1M = MAP(curve1)(dom2D)
curve3M = MAP(curve3)(dom2D)
curve1_3M = MAP(curve1_3)(dom2D)
curve4M = MAP(curve4)(dom2D)
curve9M = MAP(curve9)(dom2D)
curve15M = MAP(curve15)(dom2D)
curve4_15M = MAP(curve4_15)(dom2D)
curve3_15M = MAP(curve3_15)(dom2D)


frontalProfile = STRUCT([curve1M,curve3M,curve1_3M,curve4M,curve9M,curve15M,curve4_15M,curve3_15M])

frontalProfileTot = STRUCT([frontalProfile, S(1)(-1)(frontalProfile)])

#VIEW(frontalProfileTot)



# All profiles

profiles = STRUCT([upperProfileTot,lateralProfile,frontalProfileTot])
VIEW(profiles)