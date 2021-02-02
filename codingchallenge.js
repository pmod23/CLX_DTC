// var input = 1;
// while (input <= 100) {
//  console.log(input);
//  input++;
// }

for (x=1; x <= 100; x++){
    if (x % 3 === 0 && x % 5 === 0){
        console.log("CLXDTC")
    }
    else if( x % 3 === 0 ){
        console.log("CLX")
    }
    else if( x % 5 === 0 ){
        console.log("DTC")
    }
    else{
        console.log(x)
    }
}
