// ==========================================================================
// Project:   Docs.TARGETSFAILED
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

sc_require('states/ready');

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
Docs.TARGETS_FAILED = SC.Responder.create(
/** @scope Docs.TARGETS_FAILED.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    Docs.set('currentScene', 'targetsFailed');
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  
}) ;
