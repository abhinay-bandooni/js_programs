//w3resource=3resourcew;
let st1 = 'w3resource';
let st2 = st1.split('');
let char = st2.shift();
console.log("Original text = "+st1);
console.log('Rotated text = '+st2.concat(char).join(""));