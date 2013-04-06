//Scale

// height altezza totale scala (non della rampa!)
// breadth larghezza del gradino
// steps_number numero totale di gradini
// altezza del solaio
// projection proiezione della scala sul piano 2d

function stairs(steps_number,height,breadth,h_solaio,projection){

	a = (height+h_solaio)/steps_number
	
	p = projection / steps_number 
	step2D = SIMPLICIAL_COMPLEX([[0,0],[0,h_solaio+a],[p,a],[p,h_solaio+a]])([[0,2,1],[1,2,3]])

	step3D = MAP([S0,S2,S1])(EXTRUDE([breadth])(step2D))

	ramp = STRUCT(REPLICA(steps_number)([step3D,T([0,2])([p,a])]))

	return ramp

}



scala1 = stairs(12,3.0,0.75,0.2,3.0)
scala2 = stairs(13,3.0,0.75,0.2,3.25)
scala3 = stairs(13,3.0,0.75,0.2,3.25)

scala1_trasl = T([0,1])([1.31,5.5])(scala1)
scala2_trasl = T([0,1,2])([1.19,5.5,3.2])(scala2)
scala3_trasl = T([0,1,2])([5.5,5.5,6.4])(scala3)
