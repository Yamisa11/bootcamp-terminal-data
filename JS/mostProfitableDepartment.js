export default function mostProfitableDepartment(salesData) {
    let highestSales = 0;
     let highestDepartment = "";
    for (let dep in salesData) {
      const current = salesData[dep];
      if (current.sales > highestSales) {
        highestSales = current.sales;
        highestDepartment = current.department;
      }
    }
    return highestDepartment;
  }