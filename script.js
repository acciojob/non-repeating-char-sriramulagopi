function firstNonRepeatedChar(str) {
 // Write your code here
	let str1=str.split("");
	let obj = {};
	str1.forEach((a)=>{
	    if(obj[a]){
	        obj[a]++;
	    }
	    else{
	        obj[a]=1;
	    }
	});
	// console.log(Object.values(obj));
	for (let i of Object.keys(obj)){
	    if (obj[i]==1){
	        return i;
	    }
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
