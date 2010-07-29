// ==========================================================================
// Project:   Docs.methodsController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  The methods that are loaded from the back end

  @extends SC.ArrayController
*/
Docs.methodsController = SC.ArrayController.create(
/** @scope Docs.methodsController.prototype */ {

  statusDidChange: function() {
    Docs.sendAction('targetsDidChange');
  }.observes('status')

}) ;
