// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	
	var Array2 = [];
	
	//first check document body's class list
	//if in that class list, then add to array
	//then there are nodes, go through nodes 
	//recursively check the classlists for those nodes
	//then check if nodes have childnodes
	//if not, push elements if have that class
	var nodes = document.body;
    //needed inner function as needed to change node name
	function forallnodes(nodes){ 
	  //going through all childnodes
		//if classList not undefined

	   if(nodes.classList !== undefined){
	  	  //go through classList
		  for(var j = 0; j < nodes.classList.length; j++){
		   //if className in classList, add to array2
		     if(nodes.classList[j] === className){
		  	    Array2.push(nodes);
	         }
	       }
       }
        
       //if node has childnodes - recursive case
	   if(nodes.childNodes.length !== 0){
	   	//go through childnodes of each
	   	 for(var h = 0; h < nodes.childNodes.length; h++){
	   		 //push into array, recursive call with childnode of node
	   		forallnodes(nodes.childNodes[h]);
	   	 }
	   }
     
	}    
   

forallnodes(nodes);
return Array2;  
}

  // your code here
/*
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
*/
