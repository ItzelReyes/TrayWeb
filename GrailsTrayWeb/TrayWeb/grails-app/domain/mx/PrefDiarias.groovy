package mx
import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class PrefDiarias {

    Date fecha = new Date()
    String hora
	boolean res
	boolean pescado
	boolean pollo
	boolean vegetariano

    static constraints = {
        fecha blank:false
        hora blank:false
    	res defaultValue:false
    	pescado defaultValue:false
    	pollo defaultValue:false
    	vegetariano defaultValue:false
    }
}