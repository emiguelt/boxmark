define(function(){
  var Set = function(){
    var values={};
    this.add = function(obj){
      if(!this.contains(obj.toString())){
        values[obj.toString()]=obj;
        return true;
      }
      return false;
    };
    this.rm = function(strkey){
      var deleted = values[strkey];
      delete values[strkey];
      return deleted;
    };
    this.get = function(strkey){
      return values[strkey];
    };
    this.contains =  function(strkey){
        return values.hasOwnProperty(strkey);
    };
    this.keys = function(){
      var result = new Array
      for(var prop in values)
        if(values.hasOwnProperty(prop))
          result.push(prop)

    };
  };
 return Set;
});
