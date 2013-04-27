define(['jquery', 'templates', 'sammy', 'Set', 'sha1', 'bootstrap'], function ($, templates, sammy, Set) {
  storage = function(w, $){
    //var client = new Dropbox.Client({
    //      key: "Y5g6tpzxZuA=|ebh+5a8tXABfr2jyDdOxFdzQPnKR2sR3FWOCd+reVw==", sandbox: true
    //});
  };
  storage(Window, $);
 
  var Item = function(newName) {
    //TODO calculate SHA-1 for id
    this.id=newName;
    this.name= newName;
    this.list = {};
    this.getId= function(){
      //TODO id in SHA-1
      return this.id;
    };
    this.getList= function(){
      return this.list;
    };
    this.addToList= function(newVal){
      //TODO verify it is just a word
      tags[newVal]=undefined;
    };
    this.deleteTag= function(oldVal){
      delete tags[oldVal];
    };

  };
   
  (function(w, $, storage){ 
 
    var App = {
      sammy: undefined,
      currLoc: undefined,
      prevLoc: undefined,
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
        $('#editUrl').on('hidden', function(){
          var newUrl;
          if(App.currLoc == undefined){
            newUrl='#urls';
          }else{
            newUrl=App.currLoc;
          }

          App.sammy.runRoute('get', newUrl);
          App.sammy.setLocation(newUrl);
        });
      },
      
      showAllUrls: function(sammy){
        var urls = App.urls;
        var items = new Array;
        urls.keys().forEach(function(key){
          var url = urls.get(key);
          items.unshift(jade.templates['url-item']({'url': url}));
        });
        if(items.length == 0){
          $('#items').html('<tr><td>There are no URLs</td></tr>');
        }else{
          $('#items').html(items.join('\n'));
        }

        $('#titlebar').attr('href', '#add');
      },
      addUrl: function(sammy){
        var url = new Item($('#editUrlForm [name=urlfield]').val());
        App.urls.add(url);
        $('#editUrl').modal('hide');
        sammy.redirect('#urls');
        return false;
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
        //clean fomr
        $('#editUrlForm input').val('');
        $('#editUrlForm').attr('action', '#urls');
        $('#editUrl').modal('show'); 
      },
      updateLoc: function(sammy){
        if(this.path.search(/(#add)$/)>-1 
            || this.path.indexOf(App.currLoc)>-1)
          return;

        App.prevLoc = App.currLoc;
        App.currLoc = this.path;
      }

    };

    //ROUTES
    sammy( function() {
      App.sammy = this;
      this.after(App.updateLoc);
      this.get('.*#urls', App.showAllUrls);
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
