
var tM = {

  internationalGreeting: function(nation, name) {
    var greeting;
    switch (nation) {
      case 'United States':
        greeting = "Hi " + name + "!";
        break;
      case 'United Kingdom':
        greeting = "Cheerio " + name + "!";
        break;
      case 'Italy':
        greeting = "Ciao " + name + "!";
        break;
      case 'France':
        greeting = "Bonjour " + name + "!";
        break;
      case 'Germany':
        greeting = "Guten tag " + name + "!";
        break;
      case 'cowboy':
        greeting = "Howdy " + name + "!";
        break;
      case 'Australia':
        greeting = "G'day " + name + "!";
        break;
      case 'Spain':
        greeting = "Hola " + name + "!";
        break;
      case 'Mexico':
        greeting = "Hola " + name + "!";
        break;
      case 'Brazil':
        greeting = "Oi " + name + "!";
        break;
      case 'Portugal':
        greeting = "Oi " + name + "!";
        break;
      case 'Japan':
        greeting = "Konnichiwa " + name + "!";
        break;
      case 'surfer':
        greeting = "Sup bro!";
        break;
      case 'France':
        greeting = "Bonjour " + name + "!";
        break;
      default:
        greeting = "Hello " + name + "!";
    }
    return greeting;
  },

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
