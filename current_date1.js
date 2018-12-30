//Today is: Tuesday
//Time: 10:38:30pm

let date = new Date();
let days_of_week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let ampm = (date.getHours()<12? 'AM' : 'PM');
let sec = (date.getSeconds()<10? "0" + date.getSeconds() : date.getSeconds());
let min = (date.getMinutes()<10? "0" + date.getMinutes() : date.getMinutes());
let hour = (date.getHours()<12? date.getHours() : date.getHours()%12);
hour = (hour<10? '0' + hour: hour);
console.log('Today is: '+days_of_week[date.getDay()]);
// console.log('Time is: ' + date.getHours()%12 + ':' + date.getMinutes() + ':' + date.getSeconds() + (date.getHours<=12)?'AM':'PM');
console.log('Time is: ' + hour + ':' +min + ':' + sec + ampm);
