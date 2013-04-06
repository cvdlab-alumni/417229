##EXERCISE 5
## height altezza totale scala (non della rampa!)

## breadth larghezza del gradino

## steps_number numero totale di gradini

## altezza del solaio


## projection proiezione della scala sul piano 2d



def stairs(steps_number,height,breadth,h_solaio,projection):

	a = (height+h_solaio)/steps_number		## misura dell'alzata
	
	p = projection / steps_number 			## pedata del gradino

	step2D = MKPOL([ [[0,0],[0,h_solaio+a],[p,a],[p,h_solaio+a]], [[1,2,3,4]], None])

	step3D = MAP([S1,S3,S2])(PROD([step2D,Q(breadth)]))

	ramp = STRUCT(NN(steps_number)([step3D,T([1,3])([p,a])]))

	return ramp


scala1 = stairs(12,3.0,0.75,0.2,3.0)
scala2 = stairs(13,3.0,0.75,0.2,3.25)
scala3 = stairs(13,3.0,0.75,0.2,3.25)

scala1_trasl = T([1,2])([1.31,5.5])(scala1)
scala2_trasl = T([1,2,3])([1.19,5.5,3.2])(scala2)
scala3_trasl = T([1,2,3])([5.5,5.5,6.4])(scala3)



building =  STRUCT([building, scala1_trasl,scala2_trasl,scala3_trasl])


VIEW(building)