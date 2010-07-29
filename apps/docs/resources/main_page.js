// ==========================================================================
// Project:   Docs - mainPage
// Copyright: ©2009 Apple Inc.
// ==========================================================================
/*globals Docs */

// This page describes the main user interface for your application.  
Docs.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    defaultResponder: "Docs",

    childViews: 'sceneView'.w(),

    sceneView: SC.SceneView.design({
      scenes: "targetsLoading targetsFailed targetsLoaded".w(),
      nowShowingBinding: "Docs.currentScene"
    }),
  }),
    
  targetsLoading: SC.View.design({
    childViews: "loadingLabel".w(),

    loadingLabel: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, height: 24, width: 400 },
      value: 'Loading documentation indexes',
      controlSize: SC.LARGE_CONTROL_SIZE,
      fontWeight: SC.BOLD_WEIGHT,
      textAlign: SC.ALIGN_CENTER,
    }),
  }),

  targetsFailed: SC.View.design({
    childViews: "failedLabel".w(),

    failedLabel: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, height: 24, width: 400 },
      value: 'Failed to load documentation index',
      controlSize: SC.LARGE_CONTROL_SIZE,
      fontWeight: SC.BOLD_WEIGHT,
      textAlign: SC.ALIGN_CENTER,
    }),
  }),

  targetsLoaded: SC.View.design({
    childViews: 'splitView toolbarView'.w(),

    splitView: SC.SplitView.design({
      
      layout: { left: 0, top: 0, right: 0, bottom: 32 },
      
      defaultThickness: 300,
      //topLeftThicknessBinding: "Docs.sourceController.sidebarThickness",
      
      topLeftView: SC.View.design({
        childViews: 'searchTypeView containerView'.w(),

        searchTypeView: SC.SegmentedView.design({
          layout: { top: 4 },
          items: [
            {name: 'Classes', type: 'Docs.Class'},
            {name: 'Methods', type: 'Docs.Method'},
            {name: 'Properties', type: 'Docs.Property'},
          ],
          itemTitleKey: 'name',
          itemValueKey: 'type',
          valueBinding: 'Docs.searchController.currentType'
        }),

        containerView: SC.View.design({
          layout: { top: 32, left: 4, right:4, bottom: 0 },
          backgroundColor: "#DDD",

          childViews: 'searchQueryView scrollView'.w(),

          searchQueryView: SC.TextFieldView.design({
            layout: { top: 4, height: 24, left: 4, right: 4 },
            valueBinding: 'Docs.searchController.search',
          }),

          scrollView: SC.ScrollView.design({
            layout: {top: 32, left: 4, right: 4, bottom: 5},
            
            hasHorizontalScroller: NO,
            contentView: SC.ListView.design({
              contentBinding: "Docs.searchController.arrangedObjects",
              selectionBinding: "Docs.searchController.selection",
              contentValueKey: "title",
            }),
          }),
        }),
      }),
      bottomRightView: SC.SceneView.design({
        scenes: "noDocumentView documentView documentFailed".w(),
        nowShowingBinding: "Docs.detailController.documentScene"
      })
    }),
    
    toolbarView: SC.ToolbarView.design({

      anchorLocation: SC.ANCHOR_BOTTOM,

      childViews: 'logo'.w(),
      classNames: 'bottom-toolbar',

      logo: SC.View.design({
        layout: { left: 0, top: 0, bottom: 0, width: 200 },
        classNames: 'app-title',
        tagName: 'h1',
        render: function(context, firstTime) {
          var img_url = sc_static('images/sproutcore-logo');
          context.push('<img src="%@" />'.fmt(img_url));
          context.push('<span>', "_Docs".loc(), "</span>");
        }
      }),
    }) // toolbarView
  }), // mainPane

  noDocumentView: SC.View.design({
    childViews: "noDocumentLabel".w(),

    noDocumentLabel: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, height: 24, width: 400 },
      value: 'Select a document on the left',
      controlSize: SC.LARGE_CONTROL_SIZE,
      fontWeight: SC.BOLD_WEIGHT,
      textAlign: SC.ALIGN_CENTER,
    }),
  }),

  documentFailed: SC.View.design({
    childViews: "failedLabel".w(),

    failedLabel: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, height: 48, width: 400 },
      value: 'Documentation is unavailable for the selected item',
      controlSize: SC.LARGE_CONTROL_SIZE,
      fontWeight: SC.BOLD_WEIGHT,
      textAlign: SC.ALIGN_CENTER,
    }),
  }),

  documentView: SC.WebView.design({
    layout: { top: 33, left: 2, right: 0, bottom: 0 },
    valueBinding: SC.Binding.oneWay("Docs.detailController.uncachedUrl")
  }),

});
