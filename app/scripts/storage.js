define(['jquery', 'dropbox'], function($){
  var storage = function(){
    var client = undefined;
    this.init = function(){
      client = new Dropbox.Client({ key: "Y5g6tpzxZuA=|ebh+5a8tXABfr2jyDdOxFdzQPnKR2sR3FWOCd+reVw==", sandbox: true});
      
      console.log('new dropbox client created');

    };

    this.connect(){
      //TODO https://github.com/dropbox/dropbox-js/blob/master/doc/auth_drivers.md#dropboxdriverspopup
      //create html to for authorization
    };

    this.saveUrl  = function(){
      throw 'not implemented yet';
    };

  };

  return storage;

});
