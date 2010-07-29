// ==========================================================================
// Project:   Docs.DOCUMENT_LOADED
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

sc_require('states/ready');

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
Docs.DOCUMENT_LOADED = SC.Responder.create(
/** @scope Docs.DOCUMENT_LOADED.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: Docs.READY,
  
  didBecomeFirstResponder: function() {
  },
  
  willLoseFirstResponder: function() {
  },
  
  // ..........................................................
  // EVENTS
  //
  
  loadingFailed: function() {
    Docs.makeFirstResponder(Docs.DOCUMENT_FAILED);
  }
}) ;
