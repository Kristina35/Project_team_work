"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */
    
     searchKey = searchKey.toLowerCase();
     return data.finesData.filter(item => {
        return (
         item.номер.toLowerCase().includes(searchKey) || 
         item.тип.toLowerCase().includes(searchKey)
        )
     })
    



    /*return [
        {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
    ];*/
}

