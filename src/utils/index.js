const formatPriceToShowIt = (price) => (price / 100).toFixed(2).toString().replace('.', ',');

export default formatPriceToShowIt;
