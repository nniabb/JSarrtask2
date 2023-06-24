// I task

let array = [15, 2, 4, -10, 7, 9, 1]
let positive = array.filter(elem =>{
    return elem > 0 
}).reduce((a,b) => a+b, 0)

console.log(positive)


// II task

let names = ["nia","daduka","saba","lana","barbi"]
let newarr = names.map(elem=>elem.slice(0))
console.log(newarr)

// აუ დავიტანჯე ვერ ვიგებ მხოლოდ პირველი ასო როგორ ამოვწერო მასივიდან 
// და სანამ ჩატ ჯიპიტისთვის მეკითხინა და ცოდვა დამედო ჯობია ისევ
// რაც დავწერე ეგენი ჩავაგდო გმირულად :))


// III task

let namess = ["nia","daduka","saba","lana","barbi","dato","nika","kaxa"]
let newnames = namess.map(elem=>elem.slice(0, -1))

console.log(newnames)

