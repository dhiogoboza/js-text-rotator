JS Text Rotator
========

A simple text rotator in vanilla javascript. Heavily inspired on [Morphext](https://github.com/MrSaints/Morphext).

Usage
-----

Add the script in your page:

```html
<script src="text-rotator.js"></script>
```

Enable the plugin using:

```js
new TextRotator(document.getElementById("your-container"), {
    // The [in] animation class to be added in elements animated.
    animation: "fadeIn",
    // The separator for the phrases in container to be splitted.
    // e.g: with the content content "Apple, Orange, Banana", the separator can be ","
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
}).start();
```

A demo titled `index.html` is included in this repository. Open it to see the end-result.

License
-------

JS Text Rotator is licensed under the [MIT license](LICENSE).
