const sumItems = (array) => {
  // Sum all the numbers in the array
  let total = 0;
  for (let num of array) {
    if (Array.isArray(num)) {
      total += sumItems(num);
    } else {
      total += num;
    }
  }
  return total;
};

module.exports = sumItems;
