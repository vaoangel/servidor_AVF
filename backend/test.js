// ........................................................
// mainTest1.js
// ........................................................
const arduino = require('./controllers/arduino.controller')
var assert = require("assert")	//El mocha necesita esta clase para hacer las pruebas
// ........................................................
// main ()
// ........................................................
describe("Test 1: insertar una Medicion", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// ....................................................


	
	// it
	// ....................................................
	// ....................................................

	//PRUEBA ESCRITA SIN TRY CATCH
	it("puedo insertar y buscar una medicion",	//Esta prueba es importante porque usa assert
		async function () {
			//AQUI EMPIEZA LA PRUEBA
			//aqui se puede poner trycatch para coger los errores de los awaits

			await arduino.insert_arduino_value(
				 
                {"body":{
                    "medida":777
                }}
                
                )
			var res = await arduino.obtener_medicion_valor(
                {"body":{
                    "medida":777
                }}
            )
			//EL ASSERT ES LO QUE VERIFICA SI ESTÁ BIEN O MAL (el 1º parámetro es el que nos da, el 2º parámetro es el que nos tiene que dar, el 3º parámetro es el mensaje de error)
			//assert.equal(res.length, 1, "¿no hay un resulado?")  // -->  (a, b, c) -> if (a!=b) --> return c 
			
			// assert.equal(res[0].valor_arduino, "777", "¿no es 777?") //EL EQUAL ES PARA COMPARAR A CON B
			console.log(res);
	})

	it("Borro las mediciones añadidas en la BBDD",	//Esta prueba es importante porque usa assert
	async function () {
		//AQUI EMPIEZA LA PRUEBA
		//aqui se puede poner trycatch para coger los errores de los awaits

		await arduino.eliminar_medicion_valor(               
			{"body":{
				"medida":777
			}}
		
		);
		
})
	
	// ....................................................
	// ....................................................

}) // describe