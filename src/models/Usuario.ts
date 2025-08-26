import { IUsuario } from '../interfaces/IUsuario';
import { Material } from './Material';

export class Usuario implements IUsuario {
    id: string;
    nombre: string;
    private materialesPrestados: Material[];
    ultimaPrestacion!: Material; // Non-null assertion

    constructor(id: string, nombre: string) {
        this.id = id;
        this.nombre = nombre;
        this.materialesPrestados = [];
    }

    prestar(material: Material): void {
        if (material.disponible) {
            material.disponible = false;
            this.materialesPrestados.push(material);
            this.ultimaPrestacion = material;
            console.log(` ${this.nombre} ha tomado prestado: "${material.titulo}"`);
        } else {
            console.log(` El material "${material.titulo}" no está disponible para préstamo.`);
        }
    }

    mostrarPrestados(): void {
        console.log(`\n Materiales prestados por ${this.nombre}:`);
        if (this.materialesPrestados.length === 0) {
            console.log("   No tiene materiales prestados.");
        } else {
            this.materialesPrestados.forEach((material, index) => {
                console.log(`   ${index + 1}. ${material.titulo} (ID: ${material.id})`);
            });
        }
    }

    mostrarUltimaPrestacion(): void {
        if (this.ultimaPrestacion) {
            console.log(`\n Última prestación de ${this.nombre}:`);
            console.log(`   ${this.ultimaPrestacion.mostrarInfo()}`);
        } else {
            console.log(`\n ${this.nombre} no tiene prestaciones registradas.`);
        }
    }
}