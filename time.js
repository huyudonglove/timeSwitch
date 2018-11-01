var date = new Date('Thu May 12 2017 08:00:00 GMT+0800 (中国标准时间)');
let a=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + 'T' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()+'+08:00';
let year=date.getFullYear();
let month=date.getMonth() + 1>10?date.getMonth() + 1:`0${date.getMonth() + 1}`;
let day=date.getDate()>10?date.getDate():`0${date.getDate()}`;
let hour=date.getHours()>10?date.getHours():`0${date.getHours()}`;
let min=date.getMinutes()>10?date.getMinutes():`0${date.getMinutes() }`;
let sec=date.getSeconds()>10?date.getSeconds():`0${date.getSeconds()}`
let time =`${year}-${month}-${day}T${hour}:${min}:${sec}+08:00`
console.log(a,time)