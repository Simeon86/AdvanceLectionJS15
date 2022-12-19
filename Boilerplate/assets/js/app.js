// function bakery(a, y) {
//     var bread =  a + y;
//     return bread;
// }
// var simo = bakery(1,2);
// console.log(simo)

///////////////////////////////

// function bakery(eggs, flour) {

//     if(typeof eggs === 'number' && typeof flour === 'number') {
//         var bread =  eggs + flour;
//         return bread;
//     } else {
//         return null;
//     }

    
// }
// var simo = bakery(2,3);
// console.log(simo)

////////////////////////////////

// Array.isArray([])

// function loopArray(arr) {

//     //Check if Array
//     if (typeof arr === 'object' && Array.isArray(arr)) {
//         arr.forEach(el => {
//             console.log(el)
//         })
//         return;
//     }
//     alert(' Arguments is not an array!')
//}

// loopArray()
// undefined
// loopArray('123712986409')
// undefined
// loopArray(123712986409)
// undefined
// loopArray([1,2,3,4,5])

// undefined

///////////////////////////////////

// var arr = [1,2,3,4,5]
// function loopArray(arg) {
//     if (!Array.isArray(arg)) {
//         alert(' Arguments is not an array!');
//         return;
//     }

//     arr.forEach(el => {
//         console.log(el)
//     })
// }
// loopArray(arr)

///////////////////////////////////

function commonLength(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return null;
    }

    return arr1.length + arr2.length;
} 

// commonLength()
// null
// commonLength([])
// null
// commonLength([], [])
// 0
// commonLength([1,2,3], [1,2,3])
// 6
// commonLength([1,2,3,4], [1,2,3,4])
// 8

////////////////////////////////////

// var a = [1,2,34]
// undefined
// var b = [2,3,4,5]
// undefined
// a.concat()
// (3) [1, 2, 34]
// a.concat(b)
// (7) [1, 2, 34, 2, 3, 4, 5]
// a
// (3) [1, 2, 34]
// b
// (4) [2, 3, 4, 5]
// var c = a.concat(b)
// undefined
// c
// (7) [1, 2, 34, 2, 3, 4, 5]