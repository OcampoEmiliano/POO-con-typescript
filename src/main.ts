import { Libro } from './models/Libro';
import { Revista } from './models/Revista';
import { Usuario } from './models/Usuario';
import { Material } from './models/Material';

console.log("  SISTEMA DE BIBLIOTECA - DEMOSTRACIÓN POO TypeScript\n");
console.log("=" .repeat(60));

// Crear 2 libros
const libro1 = new Libro("L001", "Cien años de soledad", "Gabriel García Márquez", 417, "Realismo mágico");
const libro2 = new Libro("L002", "1984", "George Orwell", 328, "Distopía");

// Crear 1 revista
const revista1 = new Revista("R001", "National Geographic", "Varios autores", 248);

// Crear 1 usuario
const usuario1 = new Usuario("U001", "María González");

// Mostrar información inicial de todos los materiales
console.log("\n CATÁLOGO INICIAL:");
console.log("-" .repeat(40));

// Demostración de polimorfismo: mismo método, comportamientos diferentes
const materiales: Material[] = [libro1, libro2, revista1];
materiales.forEach(material => {
    console.log(material.mostrarInfo());
});

console.log("\n OPERACIONES DE PRÉSTAMO:");
console.log("-" .repeat(40));

// Realizar préstamos
usuario1.prestar(libro1);
usuario1.prestar(revista1);
usuario1.prestar(libro2);

// Intentar prestar un material ya prestado
console.log("\n Intento de préstamo duplicado:");
usuario1.prestar(libro1); // Debería fallar

// Mostrar estado actualizado
console.log("\n CATÁLOGO DESPUÉS DE PRÉSTAMOS:");
console.log("-" .repeat(40));
materiales.forEach(material => {
    console.log(material.mostrarInfo());
});

// Mostrar información del usuario
usuario1.mostrarPrestados();
usuario1.mostrarUltimaPrestacion();

console.log("\n DEMOSTRACIÓN DE CONCEPTOS POO:");
console.log("-" .repeat(40));
console.log(" Interfaces: IBibliotecaItem, IUsuario");
console.log(" Clase abstracta: Material");
console.log(" Herencia: Libro y Revista extienden Material");
console.log(" Encapsulamiento: propiedades privadas (_disponible, materialesPrestados)");
console.log(" Polimorfismo: mostrarInfo() implementado diferente en cada clase");
console.log(" Implementación de interfaces: Material implementa IBibliotecaItem");
console.log(" Modularización: código separado en archivos por responsabilidad");
console.log(" Non-null assertion: ultimaPrestacion!");
console.log(" Propiedades opcionales: genero? en Libro");
console.log(" Readonly: id no puede modificarse después de la creación");

console.log("\n" + "=" .repeat(60));
console.log(" DEMOSTRACIÓN COMPLETADA");