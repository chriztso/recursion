// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	var newnodes = [];
	var Array2 = [];
	var nodes = document.body.childNodes;
	for(var i  = 0; i < nodes.length; i++){
		var nodelist = nodes[i].classList;
		//add those with classlist
		if(nodelist !== undefined){
			newnodes.push(nodes[i]);
	    }
	 }
     for(var j = 0; j < newnodes.length; j++){
     	for(var z = 0; z < newnodes[j].classList.length; z++){
     		if(newnodes[j].classList[z] === className){
     			Array2.push(newnodes[j]);
     		}
     	}
     }    
	    
	
 return Array2;	
}
  // your code here


