var unit = 10;
var place;

switch(unit) {
    case 1:
        place = "Ones";
        break;
    case 10:
        place = "Tens";
        break;
    case 100:
        place = "Hundreds";
        break;
    case 1000:
        place = "Thousand";
        break;
    default:
        place = "Invalid input";         
}
console.log(place);