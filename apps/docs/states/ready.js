// ==========================================================================
// Project:   Docs.READY
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
Docs.READY = SC.Responder.create(
/** @scope Docs.READY.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    // Called when this state becomes first responder
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
  documentSelected: function() {
    Docs.detailController.set('documentScene', 'documentView');
    Docs.makeFirstResponder(Docs.DOCUMENT_LOADED);
  },

}) ;
