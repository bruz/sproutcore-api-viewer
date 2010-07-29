// ==========================================================================
// Project:   Docs.propertiesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  The properties that are loaded from the back end

  @extends SC.ArrayController
*/
Docs.propertiesController = SC.ArrayController.create(
/** @scope Docs.propertiesController.prototype */ {

  statusDidChange: function() {
    Docs.sendAction('targetsDidChange');
  }.observes('status')

}) ;
