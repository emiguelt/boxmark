define(['sha1'],function(){
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
  };
  return Set;
});
