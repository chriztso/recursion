// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var string1 = '';
 if(typeof obj === 'object' && !Array.isArray(obj) && obj !== null){
  if((Object.keys(obj)).length === 0 ){
    return "{}";
  }
  var keys1 = Object.keys(obj);
  var values1 = Object.values(obj);
  for(var i = 0; i < values1.length; i++){
    if(i !== values1.length-1 && (values1[i] !== true && values1[i] !== false && values1[i] !== null)){
      string1 +=  '"' + keys1[i] + '"' + ':' + '"' + values1[i] + '"' + ',';
    }
    else if(i !== values1.length-1 && (values1[i] == true || values1[i] == false || values1[i] == null)){
      string1 +=  '"' + keys1[i] + '"' + ':' +  values1[i] + ',';
    }

    else if(i === values1.length-1 && (values1[i] !== true && values1[i] !== false && values1[i] !== null)){
       string1 +=  '"' + keys1[i] + '"' + ':' + '"' + values1[i] + '"';
    }
    else if(i === values1.length- 1 && (values1[i] === true || values1[i] === false || values1[i] === null)){
       string1 +=  '"' + keys1[i] + '"' + ':' +  values1[i];
    }
    
  }
return '{' + string1 + '}';
}


  if(Array.isArray(obj)){
      for(var i = 0; i < obj.length; i++){
        if(Array.isArray(obj[i]) && obj[i].length === 0){
          string1 += stringifyJSON(obj[i]) + ','  ;
        }
        else if(Array.isArray(obj[i]) && obj[i].length !== 0){
          string1 += stringifyJSON(obj[i]);
        }
        else{
         if(i !== obj.length-1){
           if(typeof obj[i] === 'string'){
           string1 += '"' + obj[i] + '"';
           }   
          else if(typeof obj[i] !== 'string'){
            string1 += obj[i] + ',';
          }
          

         }

         if(i === obj.length-1){
           if(typeof obj[i] === 'string'){
           string1 += '"' + obj[i] + '"';
           } 
           if(typeof obj[i] !== 'string'){
           string1 +=  obj[i];
           } 
          }
          
        }   
      }  
     return '[' + string1 + ']'; 
    } 
      if(typeof obj !== 'string'){
    string1 += obj;
    return string1;
  }
   if(typeof obj === 'string'){
     string1 += '"' + obj + '"';
     return string1;
   }
}

  /*var keys1 = Object.keys(obj);
  var values1 = Object.values(obj);
  
  for(var i = 0; i < values1.length; i++){
    if(i !== values1.length-1){
    string1 +=  '"' + keys1[i] + '"' + ':' + '"' + values1[i] + '"' + + ', ';
     }
     if(i === values1.length-1){
    string1 +=  '"' + keys1[i] + '"' + ':' + '"' + values1[i] + '"' ;
     }
  }
  return '{' + string1 + '}';
  }*/
   
 

 


