// ==========================================================================
// Project:   Docs
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Docs */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Application
*/
Docs = SC.Application.create(
  /** @scope Docs.prototype */ {

  NAMESPACE: 'Docs',
  VERSION: '0.1.0',

  store: SC.Store.create().from('Docs.DataSource'),

  docBase: function() {
    if( /sc-docs/.exec(location) ) return '/sc-docs/docs/sproutcore'
    else return '/sproutcore/fs/tmp/docs/sproutcore'
  }.property()
  
}) ;
