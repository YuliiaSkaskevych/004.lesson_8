let userBirthday = prompt('Введіть свій рік народження', '2000');
let userCity = prompt('Введіть назву вашого міста', 'Київ');
let userFavouriteSport = prompt('Введіть ваш улюблений вид спорту', 'Бокс');
let messageCity, userAge, messageFavouriteSport;
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
if (currentYear > userBirthday && userBirthday > 1900) {
    userAge = currentYear - userBirthday;
}
else {
    userAge = 'неможливо вирахувати!';
}

switch (userFavouriteSport) {
    case 'Бокс':
        messageFavouriteSport = 'Круто! Хочеш стати як Кличко?';
        break;
    case 'Футбол':
        messageFavouriteSport = 'Круто! Хочеш встати як Роналду?';
        break;
    case 'Хокей':
        messageFavouriteSport = 'Круто! Хочеш стати як Рішар?';
        break;
    default:
        messageFavouriteSport = '';
}

let emptyProps = [];
emptyChecking();
function emptyChecking() {

    if (!userBirthday) {
        emptyProps.push(`рік народження`);
    }
    if (!userCity) {
        emptyProps.push(`назву міста`);
    }
    if (!userFavouriteSport) {
        emptyProps.push(`улюблений вид спорту`);
    }
    if (emptyProps.length !==0) {
        alert(`Шкода, що ви не захотіли ввести ${emptyProps.join(", ")}`);
    }
}

if (emptyProps.length === 0) {
    alert(`Твій вік - ${userAge}\r\n${messageCity}\r\n${messageFavouriteSport}`);
}
