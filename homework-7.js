import { userComments } from "./comments.js";

// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, 
// что бы мы получили массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNumbers = numbers.filter(number => number > 4)
console.log(filterNumbers);

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг,
//   кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const phones = ['iphoneXs', 'iphoneXr', 'iphoneX', 'android']
phones.includes('android')
  ? console.log("Есть андроид")
  : console.log("Все нормально, все айфоны");

// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный
//  ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArray = array => {
  return array.reverse()
}
console.log(reverseArray(numbers));

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

const filterCommentsByEmail = userComments.filter(user => user.email.includes('.com'))
console.log(filterCommentsByEmail);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2,
// а те, у кого id больше 5, имели postId: 1

const updatePostId = userComments.map(user => ({
  ...user,
  postId: user.id <= 5 ? 2 : 1
}));
console.log(updatePostId);

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const mapToIdAndName = userComments.map(userName => ({id: userName.id, name: userName.name}));

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
// если длина тела сообщения (body) больше 180 символов - устанавливаем true,
// меньше - false.

const checkBodyLength = userComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
  }));
console.log(checkBodyLength);

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и 
// провернуть тоже самое с помощью метода map

const getUserEmails = userComments.reduce((acc, comment) => {
  acc.push(comment.email)
  return acc
}, []);
console.log(getUserEmails);

const mapUserEmails = userComments.map(comment => comment.email);
console.log(mapUserEmails);

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

console.log(getUserEmails.join(','));
console.log(getUserEmails.toString());