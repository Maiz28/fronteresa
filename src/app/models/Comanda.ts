export interface Comanda {
  idpedido?: number;
  idComanda: number;
  nombrecliente: string;
  alimentoconsumir: string;
  cantidad: number;
  bebida: string;
  cantidadbebida: number;
  status: string;
  tipopago: string;
  propina: string;
  correo: string;
}

export interface Platillo {
  nombre_del_platillo: '';
  precio: 0;
  categoria: '';
  clave: 0;
}

export interface Bebida {
  nombre_del_platillo: '';
  descripcion_del_platillo: '';
  precio: 0;
  categoria: '';
  clave: 0;
}
