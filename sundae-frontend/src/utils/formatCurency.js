/**
 * @function formatCurrency
 * Format number as currency (US dollars)
 *
 * @param {nunber
 * } amount
 * @returns {string} number formatted as currency
 *
 * @example
 * formatCurrency(0)
 * // => $0.00
 *
 * @example
 * formatCurrency(1.5)
 * // => $1.50
 */

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
};

export default formatCurrency;
