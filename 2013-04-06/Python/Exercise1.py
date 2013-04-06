	
GRID = COMP([INSR(PROD),AA(QUOTE)]) 

##EXERCISE 1

                                                                         
##circular pillar
def pillar(r,h):
	pillarDom = PROD([INTERVALS(2*PI)(36),INTERVALS(r)(1)])
	def circle(p):
		a,r=p
		return [r*COS(a), r*SIN(a)]

	pillar2D = MAP(circle)(pillarDom)

	pillar3D = EXTRUDE([None, pillar2D, 3])
	return pillar3D

##pool of circular pillars
def pillarsX(pillar,  nPillars, distance):
	pillars = STRUCT( NN(nPillars)([pillar ,T([1])([distance]) ]))
	return pillars

##pillars0
pil= pillar(0.125,3)
model = pillarsX(pil, 5, 2.75)

model = pillarsX(pillar(0.125,3),5,(0.125+2.50+0.125))
pillars0a = T([1,2,3])([0.125,0.125,0.2])(model)

modelb = pillarsX(pillar(0.125,3),2,11)
pillars0b = T([1,2,3])([0.125,(0.25+0.90+1+0.25+2.85+0.125),0.2])(model)

##square pillar
pillars0c = GRID([[-0.25,-1.25,-0.25,-1,0.25,-2.5,0.25,-2.5,0.25], [-0.25,-0.90,-1,-0.25,-2.85,0.25], [-0.2,3]])
pillars0d = GRID([[-0.25,-1.25,-0.125,0.25], [-0.25,-5,0.25], [-0.2,3]]);
pillars0 = STRUCT([pillars0a,pillars0b,pillars0c])


##pillars1
pillars1a = GRID([[0.25,-1.25,-0.25,-1,0.25,-2.5,0.25,-2.5,0.25,-2.5,0.25],[0.25,-0.90,-1,-0.25,-2.85,-0.25], [-0.2,-3,-0.2,3]])
pillars1b = GRID([[0.25,-1.25,-0.25,-1,0.25,-2.5,0.25,-2.5,-2.75,0.25], [-0.25,-5,0.25], [-0.2,-3,-0.2,3]])
pillars1c = T([1,2,3])([8.375,5.375,3.4])(pillar(0.125,3))
pillars1 = STRUCT([pillars1a,pillars1b,pillars1c])


##pillars2
pillars2 = GRID([[0.25,-1.25,-0.25,-1,0.25,-2.5,0.25,-2.5,0.25,-2.5,0.25], [0.25,-0.90,-1,-0.25,-2.85,0.25], [-0.2,-3,-0.2,-3,-0.2,3]])

##pillars3
pillars3a = GRID([[-0.25,-1.25,-0.25,-1,-0.25,-2.5,0.25,-2.5,0.25,-2.5,0.25],[0.25,-0.90,-1,-0.25,-2.85,0.25], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,3]]);
pillars3b = GRID([[0.14], [0.14], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,3]]);
pillars3c = GRID([[0.14,-2.61,0.14], [-5.36,0.14], [-0.2,-3,-0.2,-3,-0.2,-3,-0.2,3]]);
pillars3 = STRUCT([pillars3a,pillars3b,pillars3c]);


building = STRUCT([pillars0,pillars1,pillars2,pillars3])

