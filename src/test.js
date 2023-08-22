const obj={
    param:1,
    value:2,
    name:'jack',
    age:23,
    hooby:"slide"
}
// for (const key of obj) {
//     console.log('for of  key',key )
//     // arr1.push({key:arr['param'],val:}
// }
for (const key1 in obj) {
    console.log('for in key ',key1 )
    console.log('for in value ',obj[key1])
}



const arr=[
    {
        param:1,
        value:2
    },{
        param:3,
        value:4
    }

]
// const arr1=[]
for (const key of arr) {
  console.log('for of  key',key )
    // arr1.push({key:arr['param'],val:}
}
for (const key1 in arr) {
    console.log('for in key ',key1 )
    console.log('for in value ',arr[key1])
}
