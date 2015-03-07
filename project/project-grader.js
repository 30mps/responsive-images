var suites = [
  {
    name: "Lesson 2",
    code: "ready!set!blog!",
    tests: [
      {
        func: "testDOMelemCSS",
        params: [
          {
            selector: "article img",
            property: "max-width",
            value: "100%"
          }
        ],
        desc: "&lt;img&gt;s have max-widths of 100%"
      },
      {
        func: "testDOMelemCSS",
        params: [
          {
            selector: "article",
            property: "width",
            value: "600-1200px"
          }
        ],
        desc: "&lt;articles&gt; are reasonably wide (600-1200px)" // descriptions must be unique
      }
      // {
      //   func: "testPageSizeLocal",
      //   params: [
      //     {
      //       maxSize: 1500000 // in bytes
      //     }
      //   ],
      //   desc: "Page bytes are under 1.5MB"
      // }
    ]
  },
  {
    name: "Lesson 3",
    code: "markupisprettyawesome",
    tests: [
      {
        func: "testDOMelemDoesntExist",
        params: [
          {
            selector: "img[src='images/smiley_face.png']"
          }
        ],
        desc: "smiley_face.png is gone"
      },
      {
        func: "testFindStringInDocument",
        params: [
          {
            stringOpts: ["☺", "&#9786;"] // looking for one of these
          }
        ],
        desc: "Smiley face is unicode (you may need to reload the page)"
      },
      {
        func: "testMetaTagContent",
        params: [
          {
            attr: "charset",
            value: "utf-8"
          }
        ],
        desc: "&lt;meta&gt; has charset set to utf-8"
      },
      {
        func: "testDOMelemDoesntExist",
        params: [
          {
            selector: "img[src='images/flourish.png']" // looking for one of these
          }
        ],
        desc: "Flourish is gone"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["twitter"]
          }
        ],
        desc: "A Twitter icon font is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["digg"]
          }
        ],
        desc: "A Digg icon font is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["facebook"]
          }
        ],
        desc: "A Facebook icon font is on the page"
      },
      {
        func: "testDOMelemAttrApproxContent",
        params: [
          {
            selector: "*",
            attrs: ["class"],
            values: ["google"]
          }
        ],
        desc: "A Google+ icon font is on the page"
      }
    ]
  },
  {
    name: "Lesson 4",
    code: "allpictures,allthetime",
    tests: [
      {
        func: "testDOMelemCount",
        params: [
          {
            selector: "picture",
            count: 8
          }
        ],
        desc: "There are 8 &lt;picture&gt;s on the page."
      },
      {
        func: "testDOMelemsCounts",
        params: [
          {
            parentSelector: "picture",
            childSelector: "source",
            count: 2
          }
        ],
        desc: "There are 2 &lt;sources&gt;s per &lt;picture&gt;."
      },
      {
        func: "testDOMelemsCounts",
        params: [
          {
            parentSelector: "picture",
            childSelector: "img",
            count: 1
          }
        ],
        desc: "There is 1 &lt;img&gt;s per &lt;picture&gt;."
      },
      {
        func: "testDOMelemsChildPosition",
        params: [
          {
            parentSelector: "picture",
            childSelector: "img",
            position: -1
          }
        ],
        desc: "&lt;img&gt; is last child of all &lt;picture&gt;s"
      },
      {
        func: "testDOMelemsAttrContent",
        params: [
          {
            selector: "img",
            attr: "alt"
          }
        ],
        desc: "Every &lt;img&gt; has an alt attribute"
      }
    ]
  }
]

var graderProperties = {
  suites: suites
}