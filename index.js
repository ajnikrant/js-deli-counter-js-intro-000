function takeANumber(customers, name){
  customers.push(`${name}`);

  let theDeliLine = [];

  theDeliLine.push(`Welcome, ${name}. You are number ` + (customers.length) +` in line.`);

return theDeliLine;
}


function nowServing(theDeliLine) {

  if (theDeliLine.length > 0){

    var tempName = theDeliLine[0];
    theDeliLine.shift();
    return `Currently serving ${tempName}.`;
  }

  else {
    return "There is nobody waiting to be served!";
  }

//  return theDeliLine;
}



function currentLine(theDeliLine) {


  if (theDeliLine.length > 0){
    for (let i = 0; i < theDeliLine.length; i++) {
        return `The line is currently ` + i + `. ${theDeliLine[i]}.`;
      }
  }

  else {
    return "The line is currently empty.";
  }
}
