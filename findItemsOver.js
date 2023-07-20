export default function findItemsOver(fruitsEat,threshold) {
    let maxFruitQty = [];
 
  
    for (let fruit in fruitsEat) {
      const currentFruitQty = fruitsEat[fruit];
      if (currentFruitQty.qty > threshold) {
        maxFruitQty.push(currentFruitQty);
      }
    }
    return maxFruitQty;
  }
 