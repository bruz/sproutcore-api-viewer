// ==========================================================================
// Project:   Docs.Property
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  Properties belonging to SproutCore classes

  @extends SC.Record
  @version 0.1
*/
Docs.Property = SC.Record.extend(
/** @scope Docs.Property.prototype */ {

  memberOf: SC.Record.toOne(
    "Docs.Class",
    {inverse: "properties", isMaster: NO}
  ),

  lowercaseName: function() {
    return this.get('name') && this.get('name').toLowerCase();
  }.property('name').cacheable(),

}) ;
