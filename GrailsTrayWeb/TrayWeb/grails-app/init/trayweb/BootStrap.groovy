package trayweb
import mx.*

class BootStrap {

    def init = { servletContext ->
    	new Usuarios(nombre: "Daniela",
    				apellido: "Martin",
    				telefono: "5523899177",
    				email: "dani@mail.com",
    				nickname: "daniMM",
    				edad:"30",
    				password: "123456").save()
    }
    def destroy = {
    }
}
