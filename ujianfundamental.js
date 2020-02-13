const faktorial=(num)=>{
    var arr=[]
    for(i=1;i<num;i++){
        var x=i*num
        arr.push(x)
    }
    for(j=0;j<=arr.length;j++){
        var z=arr[j]*(arr.indexOf(arr[j]))
    }
    return z
}
console.log(faktorial(5))






// const cekkoin=(jumlahkoin)=>{
//     var koin=[25,10,5,1]
//     koin.forEach((val,index)=>{
//         Math.floor(jumlahkoin/val[index])
//     })
// }