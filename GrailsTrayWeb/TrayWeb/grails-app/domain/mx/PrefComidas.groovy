package mx
import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class PrefComidas {

	boolean res
	boolean pescado
	boolean pollo
	boolean vegetariano 

	//Usuarios usuarios
    static constraints = {
    	res defaultValue:false
    	pescado defaultValue:false
    	pollo defaultValue:false
    	vegetariano defaultValue:false
    }
}
