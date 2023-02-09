# selection-tip
A vue directive with selecting text to search

# Install

```
npm install selection-tip
```

# Example

```javascript
// import and register the directive
import selection from 'selection-tip'
Vue.directive('selection', selection)

// usage
<article v-selection="prop">This is an article</article>

// prop: Array
[
    {
        label: 'search',
        icon: '...',
        handler(selectedText) {
            console.log('This function is an action after clicking the popover item')
        }
    }
]

// The prop 'label' or 'icon' is required.
// The prop 'handler' is required.
```

# License
MIT