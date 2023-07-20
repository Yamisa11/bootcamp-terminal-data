export default function countAllFromTown(regNumbers,locIndicator) {
    var splitted = regNumbers.split(',');
    var regTown = 0;
   
      for(let i = 0; i< splitted.length ; i++){
          var split2 = splitted[i].trim();
           if(split2.startsWith(locIndicator)){
          regTown = regTown + 1;
          }
      }
      return regTown;
}