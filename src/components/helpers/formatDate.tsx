export default (date: string) => new Date(date).toLocaleDateString('es-US', { timeZone: 'GMT' })