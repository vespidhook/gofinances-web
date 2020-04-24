import { format } from 'date-fns'; //eslint-disable-line

const formatDate = (value: Date): string =>
  format(new Date(value), 'dd/MM/yyyy');

export default formatDate;
