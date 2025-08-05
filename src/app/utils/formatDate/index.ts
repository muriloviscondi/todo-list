export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  })
    .format(date)
    .replaceAll(',', '');
