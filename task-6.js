// Создать объект из предыдущей задачи. Создать второй объект,который описывает количество деталей
// и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей,
// но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.

const products = {
  price: 10,
  quantity: 5,
  totalPrice() {
    return this.price * this.quantity;
  },
};

const details = {
  price: 11,
  quantity: 32,
  totalPrice: products.totalPrice,
};

console.log(details.totalPrice()); //352
