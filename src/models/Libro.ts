import { Material } from './Material';

export class Libro extends Material {
    paginas: number;
    genero?: string;

    constructor(id: string, titulo: string, autor: string, paginas: number, genero?: string) {
        super(id, titulo, autor);
        this.paginas = paginas;
        this.genero = genero;
    }
        // Implementación polimórfica del método mostrarInfo
    mostrarInfo(): string {
        const generoInfo = this.genero ? ` | Género: ${this.genero}` : '';
        return ` LIBRO - ID: ${this.id} | Título: "${this.titulo}" | Autor: ${this.autor} | Páginas: ${this.paginas}${generoInfo} | Disponible: ${this.disponible ? 'Sí' : 'No'}`;
    }
}