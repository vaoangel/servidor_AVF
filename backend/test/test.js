// ........................................................
// mainTest1.js
// ........................................................
const arduino = require('./controllers/arduino.controller')
const login = require("./handlers/login.handler")
const user = require("./handlers/user.handler")
var assert = require("assert")	//El mocha necesita esta clase para hacer las pruebas
// ........................................................
// main ()
// ........................................................
describe("Test 1: Login de usuario", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// ....................................................


	
	// it
	// ....................................................
	// ....................................................

	//PRUEBA ESCRITA SIN TRY CATCH
	it("puedo loguearme con un usuario y contraseña",	//Esta prueba es importante porque usa assert
		async function () {
			//AQUI EMPIEZA LA PRUEBA
			//aqui se puede poner trycatch para coger los errores de los awaits

			await login.login_data_from_post(
				 
                {"body":{
						"username": "eustaquio",
					   "password": "putin"
				 
                }}
                
                )

			//EL ASSERT ES LO QUE VERIFICA SI ESTÁ BIEN O MAL (el 1º parámetro es el que nos da, el 2º parámetro es el que nos tiene que dar, el 3º parámetro es el mensaje de error)
			//assert.equal(res.length, 1, "¿no hay un resulado?")  // -->  (a, b, c) -> if (a!=b) --> return c 
			
			// assert.equal(res[0].valor_arduino, "777", "¿no es 777?") //EL EQUAL ES PARA COMPARAR A CON B
			console.log(res);
	}) 

	it("Modifico información de un usuario de prueba y lo recibo",	//Esta prueba es importante porque usa assert
	async function () {
		//AQUI EMPIEZA LA PRUEBA
		//aqui se puede poner trycatch para coger los errores de los awaits
try {
	var res = await user.update_user(               
		{"body":{
			"usuario": "eustaquio",
			"nombre": "aser2je",
			"mail": "update@gmail.com",
			"telefono": "884888888"
		}}
		
	
	);
	console.log(res);

} catch (error) {
	console.log(error);
}


		
})
	
	// ....................................................
	// ....................................................

}) // describe