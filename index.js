function takeANumber(customers, name){
  customers.push(`${name}`);

  let theDeliLine = [];

  theDeliLine.push(`Welcome, ${name}. You are number ` + (customers.length) +` in line.`);

return theDeliLine;
}


function nowServing(name) {

  let theDeliLine = [];

  if (theDeliLine.lenth == 0) {
    return "There is nobody waiting to be served!";
  }

  else {
    return = theDeliLine.push("`${name}` is currently in line.");
  }
}
