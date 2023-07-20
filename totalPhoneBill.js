export default function totalPhoneBill(data){
    var splitted = data.split(', ');
    var totalBill = 0;
    var total = 0;
  	var sms = 0;
  	var calls = 0;
   
      for(let i = 0; i< splitted.length ; i++){
          var split2 = splitted[i].trim();
           if(split2.startsWith('sms')){
          sms = sms + 0.65;
           }
           if(split2.startsWith('call')){
          calls = calls + 2.75;
           }
         
        totalBill = sms + calls;
      }
      
  
      return  "R"+ totalBill.toFixed(2);
    
    }