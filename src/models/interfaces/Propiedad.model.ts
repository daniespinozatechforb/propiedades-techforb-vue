export enum TipoPropiedad {
  ALQUILER = 'Alquiler',
  VENTA = 'Venta',
}

export enum TipoInmueble {
  CASA = 'Casa',
  PH = 'Ph',
  DEPARTAMENTO = 'Departamento',
}

export enum EstadoConstruccion {
  EN_CONSTRUCCION = 'En Construccion',
  FINALIZADO = 'Finalizado',
}

export interface Propiedad {
  id: number
  tipoInmueble: TipoInmueble
  ubicacion: string
  precio: number
  antiguedad: number
  superficie: number
  tipo: TipoPropiedad
  estadoConstruccion: EstadoConstruccion
  dormitorios: number
  localidad: string
  provincia: string
  imagenes: string[]
  caracteristicas?: string[]
}
