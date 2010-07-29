// ==========================================================================
// Project:   Docs
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Docs */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Docs.main = function main() {

  Docs.getPath('mainPage.mainPane').append() ;

  Docs.makeFirstResponder(Docs.TARGETS_LOADING);

} ;

function main() { Docs.main(); }
