ball-morphology
===============
[Mathematical morphology](http://en.wikipedia.org/wiki/Mathematical_morphology) for [ndarrays](https://github.com/mikolalysenko/ndarray) where the structuring element is a ball in some [Lp metric](https://en.wikipedia.org/wiki/Lp_space).

# Example

First, let's read an image:

```javascript
var morphology = require("ball-morphology")

require("get-pixels")("bwimage.png", function(err, data) {
  var r = data.pick(-1, -1, 0)
  
  // ... do stuff ...
})
```

Which gives us the following array:

<img src="https://raw.github.com/mikolalysenko/ball-morphology/master/example/bwimage.png">

We can dilate the image using the following command:

```javascript
morphology.dilate(r, 1)
```

Which produces the following result:

<img src="https://raw.github.com/mikolalysenko/ball-morphology/master/example/dilate.png">

Similarly, we can also perform an erosion:

```javascript
morphology.erode(r, 1)
```

Giving the result:

<img src="https://raw.github.com/mikolalysenko/ball-morphology/master/example/erode.png">

For convenience, openings and closing are also implemented:

```javascript
morphology.open(r, 1)
morphology.close(r, 1)
```

<img src="https://raw.github.com/mikolalysenko/ball-morphology/master/example/open.png">

<img src="https://raw.github.com/mikolalysenko/ball-morphology/master/example/close.png">


## Install

    npm install ball-morphology
    
## API

```javascript
var morphology = require("ball-morphology")
```

### `morphology.dilate(array, radius[, p])`
Performs a binary morphological [dilation](http://en.wikipedia.org/wiki/Dilation_%28morphology%29) with an Lp ball of a given radius

* `array` is a binary image (updated in place)
* `radius` is the radius of the ball in pixel units (may be fractional)
* `p` is an optional argument giving the exponent of the metric.  (Default 2)

**Returns** `array`

### `morphology.erode(array, radius[, p])`
Performs a binary morphological [erosion](http://en.wikipedia.org/wiki/Erosion_%28morphology%29) with an Lp ball of a given radius

* `array` is a binary image (updated in place)
* `radius` is the radius of the ball in pixel units (may be fractional)
* `p` is an optional argument giving the exponent of the metric.  (Default 2)

**Returns** `array`

### `morphology.open(array, radius[, p])`
Performs a binary morphological [opening](http://en.wikipedia.org/wiki/Opening_%28morphology%29) with an Lp ball of a given radius

* `array` is a binary image (updated in place)
* `radius` is the radius of the ball in pixel units (may be fractional)
* `p` is an optional argument giving the exponent of the metric.  (Default 2)

**Returns** `array`

### `morphology.close(array, radius[, p])`
Performs a binary morphological [closing](http://en.wikipedia.org/wiki/Closing_%28morphology%29) with an Lp ball of a given radius

* `array` is a binary image (updated in place)
* `radius` is the radius of the ball in pixel units (may be fractional)
* `p` is an optional argument giving the exponent of the metric.  (Default 2)

**Returns** `array`

# Credits
(c) 2013 Mikola Lysenko. MIT License