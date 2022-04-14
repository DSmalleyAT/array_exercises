//I
// const anArray = [434.43];
// console.log('V1 ' + anArray);
// anArray.push(9);
// console.log('V2 ' + anArray);
// anArray.push('hello world');
// console.log('V3 ' + anArray);
// anArray.push(true, -3.9, '152');
// console.log('Final ' + anArray);



//II
// let supplyKit = ['raincoat', 'matches', 'blanket', 'water', 'MREs', 'knife', 'first aid kit'];
// console.log('V1 ' + supplyKit);

// supplyKit[1] = 'lighter';
// console.log('V2 ' + supplyKit);

// console.log('taking away ' + supplyKit.pop());
// console.log('V3 ' + supplyKit);

// console.log('taking away ' + supplyKit.shift());
// console.log('V4 ' + supplyKit);

// console.log('adding twine and compass');
// supplyKit.unshift('twine');
// supplyKit.push('compass');
// console.log('The supply kit contains ' + `${supplyKit}`);


//III
// supplyKit.splice(3,0, 'rope');
// supplyKit.splice(6,1)
// console.log ('v5 ' + supplyKit);



// IV
// let desk1 = ['pencils', 'notebook', 3.14159, true, 6.022e23]
// let desk2 = ['pen', 'laptop', 'camera', 42, 'phone']
// let desk3 = desk1.concat(desk2);
// console.log(desk3);
// console.log(desk1);
//concatenating only alters an array if it is the same array whose value is set to the concatenation/ 
//if we were to say desk1 = desk1.concat(desk2); then desk1 would be altered.

// console.log(desk1.slice(0,2));
// console.log(desk2.slice(3,5));
// console.log(desk1);
// console.log(desk2);
//slicing does not alter the original arrays

// let ksed1 = desk1.reverse();
// console.log(ksed1);

// let sortedDesk = desk2.sort();
// console.log(sortedDesk);

// console.log(desk1);
// console.log(desk2);
//reverse and sort DO alter the oriinal arrays



// V
// let message = 'In the forest, no oe can can hear you code.'

// console.log(message.split(' '));

// let myArrei = ["A", "c", "c", 7];
// console.log(myArrei.join(''));

// let bebidas = ['cafe', 'te', 'jugo', 'agua', 'vino'];
// bebidas.sort();
// console.log(bebidas.join(' '));


//VI
let elem1 = ['hydrogen', 'H', 1.008]
let elem2 = ['helium', 'He', 4.003]
let elem3 = ['BIG IIIIRON, BIIIIG IIIIIIIIRON', 'when he tried to match the ranger with the big iron on his hip.', 1 + 19]

let table = ['science', 'Marty Robbins']

table.push(elem1, elem2, elem3);

console.log(table[4]);
//This puts out the entire big iron array (elem3)

console.log()table[4,3]
//This puts out the mathematical value of "One and nineteen more," AKA how many men before the ranger had tried to take in Texas Red.