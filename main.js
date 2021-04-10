//Task#0
// Создай один два объекта с именем разных игроков, где будут поля 
// - name - это строка;
// - hp - это число;
// - img - это строка;
// - weapon - это массив строк (пока можно написать любое оружие, которое вы сможете придумать,
//      не имеет пока значение какое);
// - attack - это функция, внутри которой нужно поместить console.log,
//  который будет выводить сконкатинированную строку имя вашего персонажа + fight (<имя вашего персонажа> + ‘Fight...’);

const $player1 = {
    name: 'SCORPION',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [
        'оружие1',
        'оружие2',
        'оружие3'
    ],
    attack: function name(params) {
        console.log(`Боец - ${$player1.name} -> ${'Fight...'}`);
    }  
}
// $player1.attack();

const $player2 = {
    name: 'SUB-ZERO',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: [
        'оружие4',
        'оружие5',
        'оружие6'
    ],
    attack: function name(params) {
        console.log(`Боец - ${$player2.name} -> ${'Fight...'}`);
    }  
}
// $player2.attack();

//Task#1
// Итак, нужно создать функцию с именем **`createPlayer()`** ,
// внутри которой ты напишешь создание элемента **div** с классом **player1** 
// (далее ***div.player1***), внутри этого элемента есть еще два
//  элемента ***div.progressbar*** и ***div.character***.
//   Внутри ***div.progressbar*** есть еще два
//    дива —  ***div.life*** и ***div.name***. Внутри ***div.character*** есть только картинка ***img***.

// - Для ***div.life*** добавь свойство style.width в значение 100%;
// - Для ***div.name*** нужно положить текст, это имя нашего героя.
// - Для картинки можешь взять любую ссылку из приведенных ниже.


//Функция отрабатывает на 2х одинаковых героев.
//а нужно чтоб при передаче аргументов в ф-ю отрабатывла на 2х разных героев

createPlayer('$player1', 'SCORPION', 50);
createPlayer('$player2', 'SUB-ZERO', 80);

function createPlayer(a, b, c) {
    const player1 = document.createElement('div');
    player1.classList.add('player1');

    const  progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
   
    const life = document.createElement('div');
    life.classList.add('life');
    // life.style.width = '65%';
    life.style.width = $player1.hp;
    
    const name = document.createElement('div');
    name.classList.add('name');
    // name.innerText = 'SCORPION';
    name.innerText = $player1.name;
  
    const character = document.createElement('div');
    character.classList.add('character');
   
    const img = document.createElement('img');
    // img.classList.add('img');
    img.src = $player1.img; 

    const arenas = document.querySelector('.arenas.arena1');

    player1.appendChild(character);
    progressbar.appendChild(name);
    progressbar.appendChild(life);
    player1.appendChild(progressbar);
    character.appendChild(img);
    arenas.appendChild(player1);
}
