package mx


import grails.rest.*
import grails.converters.*

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class ComedorController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ComedorController() {
        super(Comedor)
    }

    /*Dadas unas coordenadas como latitud y longitud,
    se devuelve el elemento encontra, en caso contrario
    devuelve un vector vacío.
    4 LOC
    */
    def searchComedor(String latitud, String longitud) {
    	if (latitud && longitud) {
    		def listaComedor = Comedor.findByLatitudAndLongitud(latitud,longitud)
    		respond listaComedor, view: 'show'
    		} else {
    			respond null;
    		}
    }


      






}
