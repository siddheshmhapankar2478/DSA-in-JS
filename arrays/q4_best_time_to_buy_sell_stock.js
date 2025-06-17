const maxProfit = function (prices) {
  let n = prices.length;
  let max = prices[prices.length - 1];
  let maxProfit = 0;
  for (let i = n - 1; i >= 0; i--) {
    const currDiff = max - prices[i];
    if (currDiff > maxProfit) maxProfit = currDiff;
    max = prices[i] > max ? prices[i] : max;
  }
  return maxProfit;
};
