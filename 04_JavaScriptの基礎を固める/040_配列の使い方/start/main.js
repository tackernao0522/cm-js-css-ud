// const arry = new Array(1, 2, 3, 4, 5, 6)
// const arry = [1, 2, 3, 4, 5, 6] // 一般的にはこの書き方になる
const arry = [1, 2, 3, 4, 5, 6, 'moji', false] // 様々な型を入れることができる
console.log(arry)
console.log(arry[5])
arry[5] = 8 // constでも可能
console.log(arry)
// arry = new Array(9, 10, 11, 12, 13, 14) // constだとnew はできない
console.log(arry.length)
// arry.push('new item') // arryの末尾に'new item'が追加される
arry.unshift('new item') // arryの先頭に代入される
console.log(arry)
arry.pop()
console.log(arry)
const val2 = arry.pop() // arryの末尾の要素を削除
console.log(val2) // 削除された要素が出力される
const val3 = arry.shift()
console.log(val3) // 先頭の要素を削除する
