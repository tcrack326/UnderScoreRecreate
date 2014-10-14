//a test array
var testArray = [1, 2, 3, 4, 5, 10];
//a test callback function
var testFunction = function(n) {
  return n*2;
}
//test object
var testObject= {one: 1 , two: 2, three: 3, four: 4};

var tM = {

  each: function( arrayOrObject, callBackFunction) {

  if(!arrayOrObject || !callBackFunction) {
      return null;
  }

  //calculate using an array
  else if ( arrayOrObject instanceof Array)  {
    for (index in arrayOrObject) {
      callBackFunction();
    }
  }

  //calculate using an object
  else {
    var keys = Object.keys(arrayOrObject);
    for (key in keys) {
      callBackFunction();
    }
  }
},

  map: function( arrayOrObject, callBackFunction ) {
    var result = [];

    //first test if null
    if(!arrayOrObject || !callBackFunction) {
        return null;
    }

    //calculate using an array
    else if ( arrayOrObject instanceof Array)  {
      for (index in arrayOrObject) {

      result[index] = callBackFunction(arrayOrObject[index]);
      }
    }

    //calculate using an object
    else {
      for (key in arrayOrObject) {
        var newValue = callBackFunction( arrayOrObject[key] );
        result.push(newValue);
      }
    }

    return result;
  },

  find: function(array, callBackFunction) {
    var result;
    for(index in array){
      if (callBackFunction(array[index])){
        result = array[index];
        break;
      }
    }
    return result;
  },

  filter: function(array, callBackFunction) {
    var result=[];
    for(index in array){
      if (callBackFunction(array[index])){
        result.push(array[index]);
      }
    }
    return result;
  },

  findWhere: function(objects, findValueObject) {
    //create array of keys
    for(key in  object){
      if(object[key] === findValueObject[key] ){
        result = object;
        break;
      }
    }
    return result;
  },
  reject: function(array, callBackFunction) {
    var result=[];
    for(index in array){
      if (!callBackFunction(array[index])){
        result.push(array[index]);
      }
    }
    return result;
  }
}
