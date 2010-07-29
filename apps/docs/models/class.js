// ==========================================================================
// Project:   Docs.Class
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Docs */

/** @class

  SproutCore classes

  @extends SC.Record
  @version 0.1
*/
Docs.Class = SC.Record.extend(
/** @scope Docs.Class.prototype */ {

  methods: SC.Record.toMany(
    "Docs.Method",
    {inverse: "memberOf", isMaster: YES}
  ),

  properties: SC.Record.toMany(
    "Docs.Property",
    {inverse: "memberOf", isMaster: YES}
  ),

  lowercaseName: function() {
    return this.get('name') && this.get('name').toLowerCase();
  }.property('name').cacheable(),

}) ;
