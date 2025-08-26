import { IBibliotecaItem } from '../interfaces/IBibliotecaItem';

export abstract class Material implements IBibliotecaItem {
    readonly id: string;
    titulo: string;
    autor: string;
    private _disponible: boolean;

    constructor(id: string, titulo: string, autor: string) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this._disponible = true;
    }

    // Getter para disponibilidad
    get disponible(): boolean {
        return this._disponible;
    }

    // Setter para disponibilidad
    set disponible(valor: boolean) {
        this._disponible = valor;
    }

    // Método abstracto que debe ser implementado por las clases hijas
    abstract mostrarInfo(): string;
}
