// ==========================================================================
// Project:   Docs.TARGETSLOADING
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

sc_require('states/ready');

/** @class

  This is the initial state of the app, which shows a view indicating that it
  is loading the documentation indexes. The app leaves this state when the 
  indexes for classes, methods and properties have all successfully loaded.

  @extends SC.Responder
  @version 0.1
*/
Docs.TARGETS_LOADING = SC.Responder.create(
/** @scope Docs.TARGETS_LOADING.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    Docs.set('currentScene', 'targetsLoading');

    var classes = Docs.store.find( SC.Query.remote(Docs.Class) );
    var methods = Docs.store.find( SC.Query.remote(Docs.Method) );
    var properties = Docs.store.find( SC.Query.remote(Docs.Property) );

    Docs.classesController.set('content', classes);
    Docs.methodsController.set('content', methods);
    Docs.propertiesController.set('content', properties);
  },
  
  willLoseFirstResponder: function() {
  },
  
  // ..........................................................
  // EVENTS
  //
  
  /**
     Called when one of the controllers for classes, methods or properties
     changes its status (potentially indicating that the records have been
     loaded).
  */
  targetsDidChange: function() {
    if (Docs.getPath('classesController.status') !== SC.Record.READY_CLEAN ||
        Docs.getPath('methodsController.status') !== SC.Record.READY_CLEAN ||
        Docs.getPath('propertiesController.status') !== SC.Record.READY_CLEAN
    ) return NO;
    
    Docs.searchController.set('search', '');
    Docs.makeFirstResponder(Docs.TARGETS_LOADED);
    return YES;
  }
  
}) ;
