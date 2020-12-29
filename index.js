function takeANumber(customers, name){
  customers.push(`${name}`);

  let theDeliLine = [];

  theDeliLine.push(`Welcome, ${name}. You are number ` + (customers.length) +` in line.`);

return theDeliLine;
}


function nowServing(theDeliLine) {

  //let theDeliLine = [];

  if (theDeliLine.length > 0){
    return `Currently serving ${theDeliLine[0]}.`;
    theDeliLine.unshift([0]);
  }

  else {
    return "There is nobody waiting to be served!";
  }

  return theDeliLine;
}
