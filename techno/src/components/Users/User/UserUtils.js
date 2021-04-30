export function getTime(time) {
    let currentTime = new Date();
    let userTime = Date.parse(time);
    let result = null;
    userTime = new Date(userTime);
    let timeDifferenceSeconds = Math.floor((currentTime - userTime) / (1000));
    if (timeDifferenceSeconds < 60) {
        result = 'Последнее изменение: ' + timeDifferenceSeconds + 'секунд назад';
    } else if (timeDifferenceSeconds < 3600)//Не более 3-х дней
    {
        result = 'Последнее изменение: ' + timeDifferenceSeconds / (60) + 'минут назад';
    } else if (timeDifferenceSeconds < 259200)//Не более 3-х дней
    {
        result = 'Последнее изменение: ' + timeDifferenceSeconds / (60 * 60 * 24) + 'дней назад';
    } else result = 'Последнее изменение: ' + userTime.getDate() + '.' + (userTime.getMonth() + 1) + '.' + userTime.getFullYear() + ' ' + userTime.getHours() + ':' + userTime.getMinutes();
    return result;
}

export function getAvatar(src) {
    let array = src.split('/');
    let result = null;
    if (array[1] === 'public') {
        return '/' + array[2];
    } else return src;
}

export function getStatus(statusCode) {
    let result = null;
    if (statusCode === 0)
        result = 'Приостановлена';
    else if (statusCode === 1)
        result = 'Подписка активна';
    else if (statusCode === 2)
        result = 'Заблокирован';
    return result;
}

export function numFormat(balance) {
    let digit = balance.split('.');
    let lastDigits = digit[1];
    digit = digit[0].split('').reverse().join('')
        .match(/\d{0,3}/g).join(' ')
        .split('').reverse().join('').trim();
    return digit + '.' + lastDigits;
}
