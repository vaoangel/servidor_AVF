import { render, fireEvent } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect'

import MainFooter from './components/footer.component';
import LandingC from './components/landing.component';
//import {MainHeader} from './components/index';
//import AreaUSuarioC from './components/area_usuario.component';
//import RecoverPassC from './components/recover_password.component';
//import Login from './components';
//import RecoverPassC from './components/recover_password.component';
//import ContactanosC from './components/contact_us.component';
// ........................................................
// Testeos del footer
// ........................................................
describe("Test 1: Footer", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<MainFooter/>)
      
			//console.log(res);
      expect(res.container).toHaveTextContent('OFFICE')
	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la Landing Page
// ........................................................
describe("Test 2: Landing Page", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la cabecera
// ........................................................
/*describe("Test 3: Header", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<MainHeader/>)

      res.getByText('Inicio')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la página principal del usuario
// ........................................................
describe("Test 4: Area Usuario", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<AreaUSuarioC/>)

      res.getByTestId('mapa')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la pagina de recuperar contraseña
// ........................................................
describe("Test 5: Recuperar contraseña", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la pagina de login
// ........................................................
describe("Test 6: Login", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la pagina de editar usuario
// ........................................................
describe("Test 7: Editar usuario", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la pagina de cambiar contraseña
// ........................................................
describe("Test 8: Cambiar contraseña", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la pagina de la tabla de empresas
// ........................................................
describe("Test 9: Tabla empresas", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la pagina de la tabla de usuarios
// ........................................................
describe("Test 10: Tabla usuarios", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la pagina de administrar usuarios
// ........................................................
describe("Test 11: Administrar usuarios", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la Pagina de registrar usuarios
// ........................................................
describe("Test 12: Registrar usuarios", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

}) // describe

// ........................................................
// Testeos de la Pagina de contacto
// ........................................................
describe("Test 13: Pagina de contacto", function () {	//las pruebas se hacen dentro de esta función siempre
	// ....................................................
	// it
	// ....................................................

	//PRUEBA DE RENDERIZADO
	it("se renderiza la pagina",	//Esta prueba es importante porque usa assert
		function () {
			//AQUI EMPIEZA LA PRUEBA
			const res = render(<LandingC/>)

      res.getByTestId('img-landing')

	}) 
	// ....................................................
	// ....................................................

})*/ // describe

