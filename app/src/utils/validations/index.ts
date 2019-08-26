export const required = (value: string) => {
  return value ? undefined : "Campo requerido";
};

export const email = (value: string) => {
  return !/(\.{2}|-{2}|_{2})/.test(value) && /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/i.test(value) ? null : 'Formato no válido';
};

export const date = (value: string) => {
  return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(value) ? null : 'Formato no válido';
};

export const minLength = (min: number) => (value: string) => {
  return value ? (value.length >= min ? null : `Ingrese mínimo ${min} caracteres`) : null;
};
