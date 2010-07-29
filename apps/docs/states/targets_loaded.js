// ==========================================================================
// Project:   Docs.TARGETSLOADED
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

sc_require('states/ready');

/** @class

  (Document Your State Here)

  @extends SC.Responder
  @version 0.1
*/
Docs.TARGETS_LOADED = SC.Responder.create(
/** @scope Docs.TARGETS_LOADED.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: Docs.READY,
  
  didBecomeFirstResponder: function() {
    Docs.set('currentScene', 'targetsLoaded');
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
}) ;
