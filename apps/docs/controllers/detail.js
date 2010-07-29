// ==========================================================================
// Project:   Docs.detailController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  The currently selected documentation page for the detail view.

  @extends SC.ObjectController
*/
Docs.detailController = SC.ObjectController.create(
/** @scope Docs.detailController.prototype */ {
  
  contentBinding: SC.Binding.single('Docs.searchController.selection'),

  previousContent: null,

  documentScene: 'noDocumentView',

  /**
    Adds a random number onto the end of the URL to force the iframe to 
    reload.
  */
  uncachedUrl: function() {
    var url, anchor;

    var relative_url = this.get('url');
    if(relative_url) {
      url = Docs.get('docBase') + '/symbols/' + relative_url;
      return [url, Date.now()].join('?');
    }else if(this.get('content') != null) {
      var memberOf = this.get('memberOf');

      if(memberOf && memberOf.get('status') & SC.Record.READY) {
        relative_url = memberOf.get('url');
        anchor = this.get('anchor');
        url = [Docs.get('docBase') + '/symbols/', relative_url,
          "?", Date.now(), "#", anchor].join('');
        return url;
      }
      else {
        Docs.sendAction('loadingFailed');
        return "about:blank";
      }
    }
  }.property('memberOf','url'),

  _contentDidChange: function() {
    if(this.previousContent === this.get('content')) return;
    this.set('previousContent', this.get('content'));

    Docs.sendAction('documentSelected');
    var docName = this.get('title');
    newTitle = "SproutCore Docs: %@".fmt(docName);

    if(docName) {
      if(document.title !== newTitle) document.title = newTitle
    } else document.title = "SproutCore Docs"
  }.observes('content')

}) ;
