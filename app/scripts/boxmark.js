define(['jquery', 'templates'], function ($) {
  storage = function(w, $){
    //var client = new Dropbox.Client({
    //      key: "Y5g6tpzxZuA=|ebh+5a8tXABfr2jyDdOxFdzQPnKR2sR3FWOCd+reVw==", sandbox: true
    //});
  };
  storage(Window, $);
  
  (function(w, $, storage){
  
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
  
    var App = {
      urls: new Set(),
      tags: new Set(),
      init:function(){
        //TODO Initialization
        this.bindings();
  
        //really ugly tests...
        console.log(App.urls.contains('miguel'));
        console.log(App.urls.add('miguel'));
        console.log(App.urls.contains('miguel'));
        console.log(App.urls.get('miguel'));
        console.log(App.urls.rm('miguel'));
        console.log(App.urls.contains('miguel'));
        $('#urls').html(jade.templates['url-item']({url:{href:'#test1'}}));
        $('#urls').append(jade.templates['url-item']({url:{href:'#test2'}}));
      },
      bindings: function(){
        //TODO make general bindings (buttons)
      }
    };
  
    App.init();
  
  })(Window, $, storage);
});
