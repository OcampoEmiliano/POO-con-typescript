export interface IBibliotecaItem {
    readonly id: string;
    titulo: string;
    autor: string;
    mostrarInfo(): string;
}