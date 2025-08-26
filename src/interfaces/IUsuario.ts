import { Material } from '../models/Material';

export interface IUsuario {
    id: string;
    nombre: string;
    prestar(material: Material): void;
}