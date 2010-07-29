// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals Docs */

/**
  This DataSource connects to the SproutCore sc-server to retrieve targets
  and tests.  Currently this DataSource is read only.
*/
Docs.DataSource = SC.DataSource.extend({

  /**
    Fetch a group of records from the data source.  Knows how to fetch 
    a list of targets and tests.
  */
  fetch: function(store, query) {
    var ret = NO;
    switch(query.get('recordType')) {
      case Docs.Class:
        ret = this.fetchClasses(store, query);
        break;
      case Docs.Method:
        ret = this.fetchMethods(store, query);
        break;
      case Docs.Property:
        ret = this.fetchProperties(store, query);
        break;
    }
    
    return ret;
  },
  
  /**
    Fetch classes. Only understands how to handle a remote query.
  */
  fetchClasses: function(store, query) {
    
    if (!query.get('isRemote')) return NO ; 
    
    SC.Request.getUrl(Docs.get('docBase') + '/classes.json')
      .set('isJSON', YES)
      .notify(this, 'fetchClassesDidComplete', { query: query, store: store })
      .send();
    return YES ;
  },
  
  fetchClassesDidComplete: function(request, opts) {
    var response = request.get('response'),
        query    = opts.query,
        store    = opts.store,
        storeKeys;
        
    if (!SC.$ok(response)) {
      console.error("TODO: Add handler when fetching targets fails");
    } else {
      storeKeys = store.loadRecords(Docs.Class, response);
      store.loadQueryResults(query, storeKeys);
    }
  },
  
  /**
    Fetch methods. Only understands how to handle a remote query.
  */
  fetchMethods: function(store, query) {
    
    if (!query.get('isRemote')) return NO ; 
    
    SC.Request.getUrl(Docs.get('docBase') + '/methods.json')
      .set('isJSON', YES)
      .notify(this, 'fetchMethodsDidComplete', { query: query, store: store })
      .send();
    return YES ;
  },
  
  fetchMethodsDidComplete: function(request, opts) {
    var response = request.get('response'),
        query    = opts.query,
        store    = opts.store,
        storeKeys;
        
    if (!SC.$ok(response)) {
      console.error("TODO: Add handler when fetching targets fails");
    } else {
      storeKeys = store.loadRecords(Docs.Method, response);
      store.loadQueryResults(query, storeKeys);
    }
  },
  
  /**
    Fetch properties. Only understands how to handle a remote query.
  */
  fetchProperties: function(store, query) {
    
    if (!query.get('isRemote')) return NO ; 
    
    SC.Request.getUrl(Docs.get('docBase') + '/properties.json')
      .set('isJSON', YES)
      .notify(this, 'fetchPropertiesDidComplete', { query: query, store: store })
      .send();
    return YES ;
  },
  
  fetchPropertiesDidComplete: function(request, opts) {
    var response = request.get('response'),
        query    = opts.query,
        store    = opts.store,
        storeKeys;
        
    if (!SC.$ok(response)) {
      console.error("TODO: Add handler when fetching targets fails");
    } else {
      storeKeys = store.loadRecords(Docs.Property, response);
      store.loadQueryResults(query, storeKeys);
    }
  },

});
