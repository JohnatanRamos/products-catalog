export interface IProduct {
  _id?: string;
  nombre: string;
  descripcion: string;
  sku: string;
  imagen: string;
  etiquetas: string[];
  precio: number;
  stock: number;
}