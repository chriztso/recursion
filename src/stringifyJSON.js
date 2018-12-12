// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

if(typeof obj === 'number'){
  var string1 = obj.toString();
  return string1;
}
if(obj === null){
  return 'null';
}
if(typeof obj === 'boolean'){
  if(obj === true){
    return 'true';
  }
  if(obj === false){
    return 'false';
  }
}  
if(typeof obj === 'string'){
  var string2 = '';
  string2 += '"' + obj + '"';
  return string2;
} 

if(Array.isArray(obj)){
var string1 = '[' ;

for(var i = 0; i < obj.length; i++){
  if(i !== 0){
  string1 += ',' + stringifyJSON(obj[i]);
  }
  else{
    string1 +=  stringifyJSON(obj[i]);
  }
 }
 return string1 + ']';
}

if(typeof obj === 'object'){

  var string1 = '{';
  var keys1 = Object.keys(obj);
  var values1 = Object.values(obj);
  for(var i = 0; i < keys1.length; i++){
    if(i !== keys1.length-1 && keys1[i] !== 'undefined' && keys1[i] !== 'functions' ){
    string1 += stringifyJSON(keys1[i]) + ':' + stringifyJSON(values1[i]) + ',';
   }
   else if(i === keys1.length -1 && keys1[i] !== 'undefined' && keys1[i] !== 'functions'){
    string1 += stringifyJSON(keys1[i]) + ':' + stringifyJSON(values1[i]);
   }
  }
  return string1 + '}';
} 
 //need to make function run on every array element
 //go through array and then run the function on each element
 //for loop


//go through all object properties
//add to string





}
/*     var string1 = '';
 if(typeof obj === 'object' && !Array.isArray(obj) && obj !== null){
  if((Object.keys(obj)).length === 0 ){
    return "{}";
  }
  
  for(var i = 0; i < Object.values(obj).length; i++){
      if(Array.isArray(Object.values(obj)[i])){
     string1 += '"' + Object.keys(obj)[i] + '"' + ':' + '[' + '"' + Object.values(obj)[i][0] + '"' + ',' + '"' + Object.values(obj)[i][1] + '"' + ']';
   }
    else if(typeof Object.values(obj)[i] === 'object' && Object.values(obj)[i] !== null){
      string1 += '"' + Object.keys(obj) + '"' + ':' + stringifyJSON(Object.values(obj)[i]);
    }
   
    else if(i !== Object.values(obj).length-1 && (Object.values(obj)[i] !== true && Object.values(obj)[i] !== false && Object.values(obj)[i] !== null)){
      string1 +=  '"' + Object.keys(obj)[i] + '"' + ':' + '"' + Object.values(obj)[i] + '"' + ',';
    }
    else if(i !== Object.values(obj).length-1 && (Object.values(obj)[i] == true || Object.values(obj)[i] == false || Object.values(obj)[i] == null)){
      string1 +=  '"' + Object.keys(obj)[i] + '"' + ':' +  Object.values(obj)[i] + ',';
    }

    else if(i === Object.values(obj).length-1 && (Object.values(obj)[i] !== true && Object.values(obj)[i] !== false && Object.values(obj)[i] !== null)){
       string1 +=  '"' + Object.keys(obj)[i] + '"' + ':' + '"' + Object.values(obj)[i] + '"';
    }
    else if(i === Object.values(obj).length- 1 && (Object.values(obj)[i] === true || Object.values(obj)[i] === false || Object.values(obj)[i] === null)){
       string1 +=  '"' + Object.keys(obj)[i] + '"' + ':' +  Object.values(obj)[i];
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
        else if(typeof obj[i] === 'object'){
          string1 += '{' + '"' + Object.keys(obj[i]) + '"' + ':' + '"' + Object.values(obj[i]) + '"' + '}';
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
   
 

 


