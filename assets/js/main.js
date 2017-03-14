function persona(nombre, edad, genero){
	
	this.nombre = nombre;
	this.edad = edad;
	this.genero = genero;

	this.obtDetalles = function(nombre, edad, genero){
		console.log("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nGénero: " + this.genero);
	}
}

//var personita = new persona("Mitch", "19", "masculino");
//personita.obtDetalles()

var personita = new persona("Mitch", "19", "masculino").obtDetalles();

function estudiante(personita, clase, grupo){

	this.clase = clase;
	this.grupo = grupo;

	this.registrar = function(clase, grupo){
		console.log("\nClase: " + this.clase + "\nGrupo: " + this.grupo)
	}
}

var student = new estudiante(personita, "Javascript", "repaso").registrar();

function profesor(personita, asignatura, nivel){

	this.asignatura = asignatura;
	this.nivel = nivel;

	this.asignar = function(asignatura, nivel){
		console.log("\nAsignatura: " + this.asignatura + "\nNivel: " + this.nivel)
	}
}

var teacher = new profesor(personita, "Desarrollo web", "Intermedio").asignar();


/*

function persona(nombre, edad, genero){
	this.nombre = nombre;
	this.edad = edad;
	this.genero = genero;


}

persona.prototype.obtDetalles = function(){
		console.log("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nGénero: " + this.genero)
};

function estudiante(nombre, edad, genero, clase, grupo){
	persona.call(this, nombre, edad, genero);

	this.clase = clase;
	this.grupo = grupo;
}

estudiante.prototype = Object.create(persona.prototype);
estudiante.prototype.constructor = estudiante;

estudiante.prototype.obtDetalles = function(){
	console.log("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nGénero: " + this.genero + "\nClase: " + this.clase + "\nGrupo: " + this.grupo)
}



var datoUsuario = new estudiante("Mitch", "19", "masculino", "Javascript", "repaso");
datoUsuario.obtDetalles();


*/

//var datoPersona = new persona("Mitch", "19", "masculino");
//datoPersona.obtDetalles();
