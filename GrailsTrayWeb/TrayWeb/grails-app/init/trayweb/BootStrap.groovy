package trayweb
import mx.*

class BootStrap {

    def init = { servletContext ->

        def c1 = new PrefComidas(res: true, pescado: false, pollo: true, vegetariano: false).save()
        def c2 = new PrefComidas(res: false, pescado: false, pollo: false, vegetariano: true).save()
        def a1 = new PrefAlergias(gluten: false, cacahuate: false, lactosa: true, huevo: false, almidon: false, soya: false).save()
        def e1 = new PrefEnfermedades(colesterol: false, diabetes: false, hipertesion: true, trigliceridos: false).save()
        def pd1 = new PrefDiarias(res: false, pescado: false, pollo: true, vegetariano: true).save()
        def comedor1 = new Comedor(nombre: "ITESM CCM", telefono:"54832020", latitud:"19.2826837", longitud:"-99.1372735").save()

    	new Usuarios(nombre: "Daniela",
    				apellido: "Martin",
    				telefono: "5523899177",
    				email: "dani@mail.com",
    				nickname: "daniMM",
    				edad:"30",
    				password: "123456", 
                    comidas:[c1],
                    alergias:[a1],
                    enfermedades:[e1],
                    pDiarias:[pd1]).save()

    }
   

    def destroy = {
    }
}
