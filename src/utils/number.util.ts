export default {
  number: {
    formatNumber(value: number, precision = 3) {
      const val = value.toFixed(precision).replace(',', '.');
      const formatted = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      if (formatted === 'NaN') return null;
      else return formatted;
    },
    formatMoney(value: number) {
      const prec = 0;
      const val = value.toFixed(prec).replace(',', '.');
      const formatted = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      if (formatted === 'NaN') return null;
      else return formatted;
    },
    setCurrency2(number: number, format = 'id-ID') {
      const a = new Intl.NumberFormat(format).format(number);
      return a;
    },
  },
};
