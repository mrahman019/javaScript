// the switch statement is used when you want to compare one value against many possible cases 
//syntax
/*switch(expression){
    case value1:
        //code block
      break;
      case value2:
        //code block
        break;
        default:
            //Code block
}*/
//example

let day = 3;

switch (day) {
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        break;
        console.log("Wednesday")
    default:
        console.log("Another day")
}

