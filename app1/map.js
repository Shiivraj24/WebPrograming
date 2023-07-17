// const arr =[1,2,3,4,5,6];

// const arr2 = arr.map();
// console.log(arr2);
const numbers = [1,2,3,4,5,6,7,8,9,10];
function fun(){ 
    const cubes = numbers.map(n=> n ** 3);
    console.log(numbers);
    console.log(cubes);
}

function isEven(){
    //const numbers2 = [2,3,7,14,6,9,8,5,10];
    const even = numbers.map(n => n % 2 == 0 ? 'Even' : 'Odd');
    console.log(even);
}

function isOdd(){
    //const numbers3 = [2,3,7,14,6,9,8,5,10];
    const odd = numbers.filter(n=> n%2 !=0);
    console.log(odd);
}

function squareOfEven(){
    const squares = numbers.filter(n=> n%2 ==0).map(n => n**2);
    console.log(squares);
}

// fun();
// isEven();
// isOdd();
squareOfEven();
