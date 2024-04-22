'use strict'

const inputKZT = document.querySelector('#kzt');
const inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('change',()=>{    //change - это когда инпутқа өзгерістер енгізіп болғансоң баска жерді кликать етсең ғана болады ол событие

// });
inputKZT.addEventListener('input',()=>{     //input - это событие срабатывает при каждом изменений поли ввода
    const request = new XMLHttpRequest();   //XMLHttpRequest - встроеный обьект в браузер, оз методтары бар
    // request.open(method, url, async, login, pass);             //не соеденяет фронтенд и бекенд, а открывает настройки который в будущем помогает сделать запрос
    request.open('GET', 'js/current.json')      //остальные аргументы необьязательны
    request.setRequestHeader('Content-type', 'application/json; charset = utf-8');            //дополнение, чтобы четко указать что именно отправляем - фото или какой формат (json)
    request.send();                 //этот отправка по факту ничего не отправляет так как используем GET, мы тут получаем данные , в аргумент обычно указывается то что отправляем при аргументе пост
    
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status ===200){            //readyState-успешное завершение запроса 4= DONE; request.status - cтатус ответа от сервера  
            console.log(request.response);                  //ответ от сервера в виде данных
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputKZT.value/data.current.usd).toFixed(2);
        }
        else{
            inputUsd.value = request.status+'ошибка'
        }
    });
    

});
