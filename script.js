let userBirthday = parseInt(prompt('Введіть свій рік народження', '2000'));
let userCity = prompt('Введіть назву вашого міста', 'Київ');
// let userFavouriteSport = prompt('Введіть ваш улюблений вид спорту', 'Бокс');
let messageCity;
switch (userCity) {
    case 'Київ':
        messageCity = `Ти живеш у столиці України - ${userCity}`;
        break;
    case 'Вашингтон':
        messageCity = `Ти живеш у столиці США - ${userCity}`;
        break;
    case 'Лондон':
        messageCity = `Ти живеш у столиці Великобританії - ${userCity}`;
        break;
    default:
        messageCity = `Ти живеш у місті ${userCity}`;
}

const currentYear = new Date().getFullYear();
let userAge;
if (currentYear > userBirthday && userBirthday > 1900) {
    userAge = currentYear - userBirthday;
}
else {
    userAge = 'неможливо вирахувати!';
}

alert(`Твій вік - ${userAge}\r\n${messageCity}`);
