let counter = 0;

export const generateId = (): string => {
  // Usar uma combinação de timestamp + contador para garantir unicidade
  // e evitar problemas de hidratação
  const timestamp = Date.now();
  counter = (counter + 1) % 1000;
  return `${timestamp}-${counter}`;
};
