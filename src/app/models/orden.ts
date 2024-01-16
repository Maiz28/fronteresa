export interface Orden {
  idcomanda?: number;
  numeromesa: number;
  fecha?: Date;
  hora?: number;
  nombremesero: string;
}

export interface Completo {
  idpedido: 0;
  idcomanda: 0;
  nombrecliente: '';
  alimentoconsumir: '';
  cantidad: 0;
  bebida: '';
  cantidadbebida: 0;
  status: '';
  numeromesa: 0;
  fecha: '';
  hora: '';
  nombremesero: '';
  tipopago: '';
  propina: '';
  correo: '';
}
