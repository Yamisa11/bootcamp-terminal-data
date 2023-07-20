export default function fromWhere(regNo){
	if(regNo.startsWith("CA")){
      return "Cape Town";
     }else if(regNo.startsWith("CY")){
         return "Bellville";     
     }else if(regNo.startsWith("CJ")){
     	return "Paarl";
     }else{
     	return "Some other place!";
     }
}