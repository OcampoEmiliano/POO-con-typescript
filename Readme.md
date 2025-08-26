# Investigacion

Diferencia entre extends e implements:

    extends se utiliza para la herencia de clases. Una clase hija hereda la funcionalidad (propiedades y métodos) de una clase padre. Esto permite la reutilización de código y modelar relaciones de "es un tipo de" (por ejemplo, class Libro extends Material). La clase hija puede agregar o sobrescribir la funcionalidad heredada.

    implements se usa para la implementación de interfaces. Una clase se compromete a seguir el "contrato" o la estructura definida en una interfaz. La clase debe tener todas las propiedades y métodos definidos en la interfaz. Esto no hereda funcionalidad, sino que asegura que la clase se adhiera a una forma específica (por ejemplo, class Coche implements Rueda).

    Ventajas del tipado fuerte en funciones y clases:
El tipado fuerte, como el que ofrece TypeScript, previene errores comunes de programación al garantizar que el tipo de datos sea el esperado. Las principales ventajas son:

    Detección de errores temprana: El compilador de TypeScript detecta errores de tipo antes de que el código se ejecute, lo que reduce significativamente los errores en tiempo de ejecución.

    Mejora del autocompletado y la productividad: Los editores de código pueden ofrecer sugerencias de autocompletado más precisas para métodos y propiedades, lo que acelera el desarrollo.

    Código más legible y fácil de mantener: Al tener tipos claros, el código se vuelve más comprensible. Un desarrollador puede saber qué tipo de datos espera una función o qué propiedades tiene un objeto con solo mirar su firma.

    Refactorización más segura: Con el tipado fuerte, puedes renombrar o modificar el código con mayor confianza, sabiendo que el compilador te alertará sobre cualquier lugar donde el cambio pueda romper el código.

    Clase abstracta:
Una clase abstracta es una clase que no puede ser instanciada directamente. Su propósito es servir como una base para otras clases. Estas clases pueden contener tanto métodos concretos (con implementación) como métodos abstractos (sin implementación). Los métodos abstractos deben ser implementados por cualquier clase que herede de la clase abstracta, obligando a las clases hijas a definir su propio comportamiento. Son ideales para establecer un "contrato" común entre varias subclases que comparten una lógica similar.

Ventajas de usar getters y setters:
Usar getters y setters (accesores) para el encapsulamiento es una práctica fundamental de la programación orientada a objetos. Su principal ventaja es que controlan el acceso y la modificación de las propiedades de un objeto. Esto permite:

    Validación de datos: Puedes validar los datos antes de asignarlos a una propiedad. Por ejemplo, un setter para la edad podría asegurarse de que el valor sea un número positivo.

    Control de lectura/escritura: Puedes tener un getter para permitir la lectura de una propiedad, pero no un setter para prohibir su modificación, haciendo la propiedad de solo lectura desde fuera de la clase.

    Ocultar la implementación interna: Puedes cambiar cómo se calcula o almacena una propiedad sin afectar el código que la usa, manteniendo la interfaz de la clase consistente.

        Ejemplos de tipado de funciones:

a. Función con parámetros obligatorios y opcionales

Para definir un parámetro opcional en TypeScript, se utiliza el símbolo ?. Los parámetros opcionales siempre deben colocarse después de los parámetros obligatorios.
TypeScript

function crearUsuario(nombre: string, edad: number, correo?: string): void {
  // Los parámetros `nombre` y `edad` son obligatorios.
  // El parámetro `correo` es opcional.
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
  if (correo) {
    console.log(`Correo: ${correo}`);
  }
}

// Llamadas válidas:
crearUsuario("Ana", 30);
crearUsuario("Carlos", 25, "carlos@ejemplo.com");

b. Función que devuelve una Promise

Para tipar una función que devuelve una Promise, se usa el tipo Promise<T>, donde T es el tipo de dato que la promesa resolverá.
TypeScript

function obtenerDatos(): Promise<string> {
  return new Promise((resolve, reject) => {
    // Simula una operación asíncrona
    setTimeout(() => {
      resolve("Datos del servidor obtenidos con éxito.");
    }, 1000);
  });
}

// Uso de la función asíncrona:
obtenerDatos().then(datos => {
  console.log(datos); // Imprime: "Datos del servidor obtenidos con éxito."
}).catch(error => {
  console.error("Hubo un error:", error);
});