// ==========================================================================
// Project:   Docs.Method
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  Methods belonging to SproutCore classes

  @extends SC.Record
  @version 0.1
*/
Docs.Method = SC.Record.extend(
/** @scope Docs.Method.prototype */ {

  memberOf: SC.Record.toOne(
    "Docs.Class",
    {inverse: "methods", isMaster: NO}
  ),

  lowercaseName: function() {
    return this.get('name') && this.get('name').toLowerCase();
  }.property('name').cacheable(),

}) ;
