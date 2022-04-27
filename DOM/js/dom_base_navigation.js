// Дочерние элементы (или дети) – элементы, которые лежат непосредственно
// внутри данного. Например, внутри <HTML> обычно лежат <HEAD> и <BODY>.

// Потомки – все элементы, которые лежат внутри данного, вместе с их детьми,
// детьми их детей и так далее. То есть, всё поддерево DOM.

let bodyEl = document.body;
// bodyEl.style.backgroundColor = 'pink'
// console.log(document.body)
// console.dir(document.body)

// childNodes,
let bodyChilds = bodyEl.childNodes;
// // console.log(bodyChilds)
// const ul = bodyChilds[3];
// // console.log(ul.childNodes);
// const li = ul.childNodes[1];
// console.log(li.childNodes)


// firstChild
// console.log(bodyEl.firstChild)
// console.log(bodyEl.firstChild.style.backgroundColor = 'red')
// console.log(bodyEl.firstElementChild)
// console.log(bodyEl.firstElementChild.style.backgroundColor = 'red')

// lastChild
// console.log(bodyEl.lastChild)
// console.log(bodyEl.lastElementChild)


// siblings
// let ul = bodyChilds[3];
// console.log(ul)

// previousElementSibling
// console.log(ul.previousElementSibling)

// nextElementSibling
// console.log(ul.nextElementSibling)

// parentElement
// console.log(ul.parentElement)


// Для перебора подходят как обычные циклы так и for..of

// console.log(bodyChilds)

// for (let i = 0; i < bodyChilds.length; i++) {
//     if(i === 1) {
//         console.log(bodyChilds[i].innerHTML)
//         bodyChilds[i].innerHTML = 'Привет Пес'
//     }
//
//     console.log( bodyChilds[i] ); // Text, DIV, Text, UL, ..., SCRIPT
// }

// for..of

// console.log(bodyChilds)
// for (let node of bodyChilds) {
//     console.log(node);
// }


// Массивы из коллекций - для работы с коллекцией
// элементов как с массивом данных

// console.log(bodyChilds)
// let arr =  Array.from(document.body.childNodes);
// console.log(arr)
//
//
// let filteredArr = arr.filter(
//     function (item) {
//         if(item.nodeName === 'DIV') {
//             item.style.color = 'blue';
//             return item;
//         }
//
//         return null
//     }
// )
//
// console.log( arr, filteredArr );