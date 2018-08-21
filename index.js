// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop(-1);
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
const newdrivers = [...drivers, name ];
return newdrivers;
}

function prependDriver(name){
const newdrivers =[name, ...drivers]
return newdrivers;
}
function removeLastDriver(name){
const newdrivers = drivers.slice(0, drivers.length-2);
return newdrivers;
}
