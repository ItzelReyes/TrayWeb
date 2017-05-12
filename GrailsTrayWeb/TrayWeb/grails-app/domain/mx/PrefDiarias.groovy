package mx
import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class PrefDiarias {

    String fecha
    String hora
	String res
	String pescado
	String pollo
	String vegetariano

    static constraints = {
        fecha blank:false
        hora blank:false
    	res blank:false
    	pescado blank:false
    	pollo blank:false
    	vegetariano blank:false
    }
}