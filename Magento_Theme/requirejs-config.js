var config = {
  map: {
    "*": {
      "choices"            : "Magento_Theme/js/lib/choices",
      "closestPolyfill"    : "Magento_Theme/js/lib/closest-polyfill",
      "lazysizes"          : "Magento_Theme/js/lib/lazysizes",
      "lory"               : "Magento_Theme/js/lib/lory",
      "noUiSlider"         : "Magento_Theme/js/lib/nouislider.min",
      "picturefill"        : "Magento_Theme/js/lib/picturefill",
      "svg4everybody"      : "Magento_Theme/js/lib/svg4everybody",
      "cookieMessage"      : "Magento_Theme/js/cookie-message.babel",
      "dropdownList"       : "Magento_Theme/js/dropdown-list.babel",
      "dropdownListNested" : "Magento_Theme/js/dropdown-list-nested.babel",
      "fileUpload"         : "Magento_Theme/js/file-upload.babel",
      "filters"            : "Magento_Theme/js/filters.babel",
      "linksWrapper"       : "Magento_Theme/js/wrapper-collapsible",
      "select"             : "Magento_Theme/js/select.babel",
      "slider"             : "Magento_Theme/js/slider.babel",
      "popup"              : "Magento_Theme/js/popup.babel",
      "quickSearch"        : "Magento_Theme/js/quicksearch.babel",
      "tab"                : "Magento_Theme/js/tab.babel"
    }
  },
  shim: {
    "slider": {
      "deps": ["lory"]
    }
  },
  deps: [
    "lory"
  ]
};
