/* eslint-disable sort-keys */
/**
 * Formate float to USD currency.
 * @function
 *
 * @param  {number}  num             float number to convert
 * @param  {boolean} includeCurrency include currency type
 *
 * @return {string}  dollar amount
 */
export const formatCurrency = (
  num: number | null,
  includeCurrency: boolean
): string => {
  const hasCurrency: boolean = includeCurrency || true;

  if (!num) {
    return '0.00';
  }

  const fmtNumb: string = new Intl.NumberFormat(
    'en-US',
    hasCurrency
      ? {
          style: 'currency',
          currency: 'USD',
        }
      : { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  ).format(num);

  return fmtNumb;
};

/**
 * Format number to comma-separate.
 * @function
 *
 * @param  {number} num number to convert
 *
 * @return {string} comma-separate number
 */
export const numberWithCommas = (num: number): string => {
  if (!num) {
    return '0';
  }

  const fmtNumb: string = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return fmtNumb;
};
