// ==========================================================================
// Project:   Docs.searchController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  Controller for search results

  @extends SC.ArrayController
*/
Docs.searchController = SC.ArrayController.create(
/** @scope Docs.searchController.prototype */ {

  // the search query string
  search: null,

  // the type being searched over
  currentType: 'Docs.Class',
  
  orderBy: 'title',

  // A counter to keep track of how many changes have occurred to search that have yet to
  // invoke updateResults.
  _searchChangeCounter: 0,

  _searchDidChange: function() {
    // use invokeLater and a counter so that UI doesn't get sluggish
    this._searchChangeCounter += 1;
    this.invokeLater(this._updateResults, 150);
  }.observes('search','currentType'),

  /**
    Update search results only if the user has stopped typing, as indicated
    by _searchChangeCounter being less than or equal to 1
   */
  _updateResults: function() {
    var counter = this._searchChangeCounter;

    counter -= 1;
    if(counter < 0) counter = 0

    if(counter == 0) {
      var results = Docs.store.find(
      //  Docs.Class
        SC.Query.local(
          this.get('currentType'),
          "lowercaseName CONTAINS {q}",
          {q: this.get('search').toLowerCase()} )
      );

      this.set('content', results); 
    }
    
    this._searchChangeCounter = counter;
  }
}) ;
