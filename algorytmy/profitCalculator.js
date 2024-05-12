


















products = [
    {
        name: 'apple',
        price: 0.7,
        quantity: 100
    },
    {
        name: 'banana',
        price: 0.6,
        quantity: 20
    },
    {
        name: 'potato',
        price: 0.4,
        quantity: 50
    }
]
  
  const taxRate = 0.07; 
  const totalProfit = products
    .map(product => (product.price * product.quantity) * (1 - taxRate)) 
    .reduce((sum, profit) => sum + profit, 0);

  console.log(totalProfit);
  