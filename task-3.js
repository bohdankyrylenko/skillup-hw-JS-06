// Создать объект, у которого будет поле высота и метод “увеличить высоту на один”.
// Метод должен возвращать новую высоту

const obj = {
  height: 10,
  HeightPlus() {
    let newHight = this.height + 1;
    return newHight;
  },
};

console.log(obj.HeightPlus());
