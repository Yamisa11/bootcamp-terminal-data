export default function findItemsOver20(fruitsEaten) {
    let maxFruitQty = [];
  
    for (let fruit in fruitsEaten) {
      const currentFruitQty = fruitsEaten[fruit];
      if (currentFruitQty.qty > 20) {
        maxFruitQty.push(currentFruitQty);
      }
    }
    return maxFruitQty;
  }