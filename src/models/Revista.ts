import { Material } from './Material';

export class Revista extends Material {
    edicion: number;

    constructor(id: string, titulo: string, autor: string, edicion: number) {
        super(id, titulo, autor);
        this.edicion = edicion;
    }

    // Implementación polimórfica del método mostrarInfo
    mostrarInfo(): string {
        return ` REVISTA - ID: ${this.id} | Título: "${this.titulo}" | Autor: ${this.autor} | Edición: #${this.edicion} | Disponible: ${this.disponible ? 'Sí' : 'No'}`;
    }
}