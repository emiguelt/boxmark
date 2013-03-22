define(['jquery', 'templates', 'sammy', 'Set'], function ($, templates, sammy, Set) {
  storage = function(w, $){
    //var client = new Dropbox.Client({
    //      key: "Y5g6tpzxZuA=|ebh+5a8tXABfr2jyDdOxFdzQPnKR2sR3FWOCd+reVw==", sandbox: true
    //});
  };
  storage(Window, $);
  
  (function(w, $, storage){
  
 
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
      },
      
      showAllUrls: function(sammy){
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
    }).run();
  
    App.init();
  
  })(Window, $, storage);
});
