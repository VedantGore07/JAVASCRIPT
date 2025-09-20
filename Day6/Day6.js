// searching and sorting

// indexOf --> returns the first index of value,   -1 if not 
// lastIndexOf --> returns last index in array
// includes --> checks value present or not in array
// find 

// let a = [1,2,3,4,1,2,3]
// console.log(a.indexOf(4));
// console.log(a.lastIndexOf(20));
// console.log(a.includes(20));

// console.log(a.find(n => n>=3))


/// write a program to find the first negative number in array

// console.log(a.find(n => n<0))

/// write a program to find the first even number in array

// console.log(a.find(n => n%2==0))


/// fill 

// let a = [1,2,3,4,1,2,3]
// console.log(0, 1, 4);   //1,0,0,0,1,2,3
//        (target, start, end)


/// copywithin

// let a = [1,2,4,3,5]

// a.copyWithin(0,3)
// console.log(a)

// a.reverse();
// console.log(a);

// a.sort();
// console.log(a);



// let a = [1,4,3,5,100]
// function compare(a,b)
{

}
// a.sort();       // [ 1, 100, 3, 4, 5 ]

// a.sort((a,b) => a-b)
// a.sort((a,b) => b-a)  // for descending order
// console.log(a);


// a.forEach(n => console.log(n))

// let squares = a.forEach(n => console.log(n**2))
// console.log(squares);




/// map --> It creates a new array by applying a function to each element of the original array.
// It does not modify the original array

// let square1 = a.map(n => n**2)
// console.log(square1);

// let results = a.filter(n => n>4);
// console.log(results);


/// find all the odd numbers in array

// let odd = a.filter(n => n%2 !=0)
// console.log(odd);



//  array of numbers
// filter out only numbers that are multiples of 5
// multiply each of this number by 3
// sort them in ascending order
// print the final array


// let nums = [10,15,22,30,45,50,67,75,90];

// let result = nums.filter(n => n%5 == 0).map(n => n*3).sort((a,b) => a-b);
// console.log(result);

// let multiplesOf5 = nums.filter(n => n%5 == 0);

// let multiplied = multiplesOf5.map(n => n*3);

// let sorted = multiplied.sort((a, b) => a-b);

// console.log(sorted);



/// ///

// let scores = [95, 74, 78, 88, 77, 55, 98];
// let top3 = scores
//     .filter(s => s > 80)           
//     .sort((a, b) => b - a)         
//     .slice(0, 3);                  
// console.log(top3);


//////     reduce , reduceRight 

//// array.reduce(callback(accumulator, currentValue, index, array),initialvalue)

// let a = [1,2,3,4,5]
// let sum = a.reduce((acc, curr) => acc+curr, 0)
// console.log(sum);

// let a = [1,2,3,4,5];
// let diff = a.reduce((acc, curr) => acc-curr, 0)
// // let diff = a.reduceRight((acc, curr) => acc-curr, 0)
// console.log(diff);

// 0-1   -1
// -1-2  -3
// -3-3  -6
// -6-4  -10
// -10-5  -15


//// reduce method find the maximum value in an array

// let numbers = [12, 45, 67, 23, 89, 34, 90, 56];

// let maxValue = numbers.reduce((max, current) => {
//   return current > max ? current : max;
// });
// console.log(maxValue);


/// 

// let a = [1,2,3,4,5];
// console.log(a.every(n => n<6));

// let a1 = [[1,2],[3,4],[5,6]];
// console.log(a1.flatMap(n => n*2));


// let arr = [10,20,30,40]

// for(let key of arr.keys())    /// for index (keys)
//     console.log(key);
    
// for(let val of arr.values())  /// for values 
//     console.log(val);
    
// for(let [k,v] of arr.entries())  ///  key:values
//     console.log(`${k}: ${v}`);
    




//////   String  --> sequence of characters (letters, numbers, symbols).


// let str = new String('hello')
// console.log(str)



// let str = 'hello welcome to javascript';

// console.log(str.startsWith('hello'))
// console.log(str.endsWith('pt'))

// console.log(str.slice(5,9));

// console.log(str.substring(4,7))

// console.log(str.replace('javascript', 'java'));

// console.log(str.trim());

// console.log(str.padStart(40,'#'));


// console.log(str.length);
// console.log(str.charAt(4));
// console.log(str[2]);

// console.log(str.toUpperCase());
// console.log(str);




//////////////////////////////////////////////////////

// let str = "red, green, blue";
// let colors = str.split(",")
// console.log(colors)
// console.log(colors.join("|"))

// let s = 'Ha'
// console.log(s.repeat(5))


let s1 = "hello";
let s2 = "world";
// console.log(s1+" "+s2);
console.log(s1.concat(" ",s2));



















































