// ==========================================================================
// Project:   Docs.DOCUMENT_FAILED
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

sc_require('states/ready');

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
Docs.DOCUMENT_FAILED = SC.Responder.create(
/** @scope Docs.DOCUMENT_FAILED.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: Docs.READY,
  
  didBecomeFirstResponder: function() {
    Docs.detailController.set('documentScene', 'documentFailed');
  },
  
  willLoseFirstResponder: function() {
  },
  
  // ..........................................................
  // EVENTS
  //
  
}) ;
