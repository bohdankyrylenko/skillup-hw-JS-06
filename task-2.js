// Создать объект, у которого будет цена товара и его скидка, а также два метода:
// для получения цены и для расчета цены с учетом скидки:
const price = {
  price: 100,
  discount: "25%",
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    let result = this.price - (this.price * parseInt(this.discount)) / 100;

    return result;
  },
};

console.log(price.getPrice()); //100
console.log(price.getPriceWithDiscount()); //75
