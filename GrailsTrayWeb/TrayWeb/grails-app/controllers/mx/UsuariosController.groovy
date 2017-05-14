package mx

import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class UsuariosController extends RestfulController {
	static responseFormats = ['json', 'xml']
	UsuariosController(){
		super(Usuarios)
	}
}