// ==========================================================================
// Project:   Docs.classesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  The classes that are loaded from the back end

  @extends ArrayController
*/
Docs.classesController = SC.ArrayController.create(
/** @scope Docs.classesController.prototype */ {

  /**
    Send event when classes load.
  */
  statusDidChange: function() {
    Docs.sendAction('targetsDidChange');
  }.observes('status')
}) ;
