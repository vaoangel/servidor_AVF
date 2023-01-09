// ........................................................
// mainTest1.js
// ........................................................
const login = require("../handlers/login.handler")
const user = require("../handlers/user.handler")
const admin = require('../handlers/admin.handler')
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

			var res =	await login.login_data_from_post(
				 
                {"body":{
						"username": "username",
					   "password": "password"
				 
                }}
                
                )

		
			console.log(res);
	}) 


	it("Obtengo todas las empresas",	//Esta prueba es importante porque usa assert
		async function () {
			//AQUI EMPIEZA LA PRUEBA
			//aqui se puede poner trycatch para coger los errores de los awaits

			var res =	await admin.get_all_enterprises(
				 
                
                
                )

		
			return res
	}) 


	it("Modifico información de un usuario de prueba y lo recibo",	//Esta prueba es importante porque usa assert
	async function () {
		//AQUI EMPIEZA LA PRUEBA
		//aqui se puede poner trycatch para coger los errores de los awaits
		try {
	
	var res = await user.update_user(               
		{"body":{

			
				"username": "username",
				"name": "aser2je",
				"mail": "update@gmail.com",
				"phone": "884888888"
			
			
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
