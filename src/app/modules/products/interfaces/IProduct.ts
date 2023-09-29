import { IPriceHistory } from "./IPriceHistory";
import { IStockHistory } from "./IStockHistory";

export interface IProduct {
  _id?: string;
  nombre: string;
  descripcion: string;
  sku: string;
  imagen: string;
  etiquetas: string[];
  precio: number;
  stock: number;
  historialPrecio: IPriceHistory[];
  historialStock: IStockHistory[];
}