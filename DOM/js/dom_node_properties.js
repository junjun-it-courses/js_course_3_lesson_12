let body = document.body;
let startNode0 = body.firstChild // document.body.firstElementChild
let startNode = body.firstElementChild // document.body.firstElementChild

// console.log(startNode)

// Свойство nodeType позволяет узнать тип DOM-узла.
// Его значение – числовое: 1 для элементов,3 для текстовых узлов,
// и т.д. Только для чтения.
// console.log('nodeType', startNode.nodeType)

//nodeName/tagName возвращает название тега в ВЕРХНЕМ РЕГИСТРЕ
// console.log('nodeName', startNode.nodeName)


//innerHTML - Внутреннее HTML-содержимое узла-элемента. Можно изменять.
// console.log('innerHTML', startNode.innerHTML)
// console.log('innerHTML', startNode.innerHTML = 'text')

// outerHTML - Полный HTML узла-элемента. Запись в elem.outerHTML не меняет elem.
// Вместо этого она заменяет его во внешнем контексте.
// console.log('outerHTML', startNode.outerHTML )

// nodeValue/data - Содержимое узла-неэлемента (текст, комментарий). Эти свойства практически одинаковые,
// обычно мы используем data. Можно изменять.
// console.log('data', startNode0.data)

// let liText = document.getElementsByTagName('li')[0].childNodes[0];
// console.dir(liText)
// console.log(liText.data)

// textContent - Текст внутри элемента: HTML за вычетом всех <тегов>
// console.log('textContent', startNode.innerHTML)
// console.log('textContent', startNode.textContent)


// hidden - Когда значение установлено в true, делает то же самое,
// что и CSS display:none.
// console.log('hidden', startNode.hidden)
// console.log('hidden', startNode.hidden = true)