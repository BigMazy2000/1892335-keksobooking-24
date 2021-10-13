// дедовская функция для определения индекса использованной фичи в массиве
let arrayObjectIndexOf=function (myArray, searchTerm) {
  for (let index2 = 0; index2 <= (myArray.lenght-1); index2++) {
    if (myArray[index2] === searchTerm) {
      return index2;
    }
    return -1;
  }
};
// const temp=arrayObjectIndexOf(FEATURES, 'dishwasher');

// console.log('тест функции '+temp);


//   0           1          2             3         4         
// dishwasher', 'parking', 'washer', 'elevator', 'conditioner'

//    0       1       2
//  'wifi', 

// делаем копию списка опций
const featuresTemp = FEATURES;
//определяем сколько фич будет у текущего элемента
for (let index1 = 1; index1 <= getRandomInt(1, 6); index1++) {
  // берем произвольную фичу из общего списка featuresTemp
  const currentFeature = featuresTemp[getRandomInt(0, (featuresTemp.length - 1))];
  console.log('текущая фича '+currentFeature);
  // заносим выбранную фичу в массив
  currentFeatures[(index1 - 1)] = currentFeature;
  // определяем индекс использованной фичи в массиве currentFeatures
  let indexOfUsedFeature = arrayObjectIndexOf(featuresTemp, currentFeature);
  console.log('номер использованной фичи '+indexOfUsedFeature);
  // удаляем использованную фичу из списка доступных
  featuresTemp.splice(indexOfUsedFeature, 1);
  console.log('Промежуточный массив ' + featuresTemp);
  console.log('Итоговый массив ' + currentFeatures);
}

// определяем индекс использованной фичи в массиве currentFeatures
//const indexOfUsedFeature = featuresTemp.findIndex(() => featuresTemp === currentFeature);