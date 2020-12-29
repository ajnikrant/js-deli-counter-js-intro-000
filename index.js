function takeANumber(customers, name){
  customers.push(`${name}`);

  let theDeliLine = [];

  theDeliLine.push(`Welcome, ${name}. You are number ` + (customers.length) +` in line.`);

return theDeliLine;
}


function nowServing(theDeliLine, name) {

  //let theDeliLine = [];

  if (theDeliLine.length > 0){
    theDeliLine.push(name);
    return `Currently serving ${name}`;
  }

  else {
    return "There is nobody waiting to be served!";
  }

  return theDeliLine;
}
