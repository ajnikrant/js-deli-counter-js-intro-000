function takeANumber(customers, name){
  customers.push(`${name}`);

  let theDeliLine = [];

  theDeliLine.push(`Welcome, ${name}. You are number ` + (customers.length) +` in line.`);

return theDeliLine;
}


function nowServing(name) {
  if (theDeliLine.lenth == 0) {
    result = "There is nobody waiting to be served!";
  }

  else {
    result = "`${name}` is currently in line.";
  }
}
