export default function yearsAgo(byear){
	const cyear = new Date();
  	var total = cyear.getFullYear() - byear;
  return total;
}