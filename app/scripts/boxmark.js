define(['jquery', 'templates', 'sammy', 'Set', 'sha1'], function ($, templates, sammy, Set) {
  storage = function(w, $){
    //var client = new Dropbox.Client({
    //      key: "Y5g6tpzxZuA=|ebh+5a8tXABfr2jyDdOxFdzQPnKR2sR3FWOCd+reVw==", sandbox: true
    //});
  };
  storage(Window, $);
 
  var Item = function(newName) {
    //TODO calculate SHA-1 for id
    var id;
    var name= newName;
    var list = {};
    return {
      getId: function(){
        //TODO id in SHA-1
        return id
      },
      getList: function(){
        return list;
      },
      addToList: function(newVal){
        //TODO verify it is just a word
        tags[newVal]=undefined;
      },
      deleteTag: function(oldVal){
        delete tags[oldVal]
      }

    };
  };
   
  (function(w, $, storage){ 
 
    var App = {
      urls: new Set(),
      tags: new Set(),
      init:function(){
        //TODO Initialization
        this.bindings();
  
        //really ugly tests...
        $('#urls').html(jade.templates['url-item']({url:{href:'#test1'}}));
        $('#urls').append(jade.templates['url-item']({url:{href:'#test2'}}));
      },
      bindings: function(){
        //TODO make general bindings (buttons)
      },
      
      showAllUrls: function(sammy){
        var items = new Array;
        urls.keys().forEach(function(key){
          var url = urls.get(key);
          items.push(jade.templates['url-item'](url));
        });
        if(items.length < 0){
          $('#items').html('There are no URLs');
        }else{
          $('#items').html(items.join('\n'));
        }
      },
      addUrl: function(sammy){
      },
      viewUrl: function(sammy){
      },
      editUrl: function(sammy){
      },
      rmUrl: function(sammy){
      },
      showUrlsByTag: function(sammy){
      },         
      showAllTags: function(sammy){
      },         
      newUrl: function(sammy){
      }

    };

    //ROUTES
    sammy( function() {
      this.get('#urls', App.showAllUrls);
      this.post('#urls', App.addUrl);
      this.get('#urls/:hash', App.viewUrl);
      this.get('#urls/:hash/edit', App.editUrl);
      this.get('#urls/:hash/remove', App.rmUrl);
      this.get('#/:tag', App.showUrlsByTag);
      this.post('#/:tag', App.addUrl);
      this.get('#tags', App.showAllTags);
      this.get('#add', App.newUrl);
    }).run();
  
    App.init();
  
  })(Window, $, storage);
});
