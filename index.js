/**
 * Question 1
 * Difference between mutating array methods and non-mutating array methods with examples
 * 
 * Mutating array methods modify the original array directly. E.g:
 * push() - adds one or more elements to the end of an array
 * pop() - removes the last element from an array
 * splice() - adds or removes elements from an array at any index
 * sort() - sorts the elements of an array
 * reverse() - reverses the order of the elements in an array
 * 
 * Non-mutating array methods do not modify the original array but instead return a new array. E.g:
 * slice() - returns a new array with a portion of the elements of the original array
 * concat() - returns a new array by combining two or more arrays
 * filter() - returns a  new array with only the elements that pass a certain condition
 * map() - returns a new array by applying a function to each element of the original array
 * reduce() - returns a single value by applying a function to each element of the original array 
 */

// Question 2
// languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
const languages = (items) => {
    items.push('Kotlin');
    items.splice(3, 0, 'Java');
    items.shift();
    items.unshift('Scala', 'Swift');
    items.splice(5, 1, 'Go', 'Rust');

    return items;
}

const result = languages(['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']);
console.log(result);
// ['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

//Question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = 'orange';
    return fruit;
}

console.log(changeFruit(fruit));
// ['apple', 'mango', 'orange']

//Question 4
function maxNumber(array) {
    return Math.max(...array);
}

const answer = maxNumber([2, -10, 4, -20]);
console.log(`Maximum value is ${answer}`);
// Maximum value is 4

//Question 5
const valTimesIndex = (items) => {
    return (
        items.map((item, index) => {
            return item * index;
        })
    )
}
const valTimes = valTimesIndex([2, 3, 2]);
console.log(valTimes);
//[0, 3, 4]
