package mx
import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Comedor {
	String nombre
	String telefono
	String celular
	String latitud
	String longitud

    static constraints = {
    	nombre unique:true
    	celular blank:false
    	latitud blank:false
    	longitut blank:false
    }
}
