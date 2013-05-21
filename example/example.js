var morphology = require("../morphology.js")
var ops = require("ndarray-ops")
var savePixels = require("save-pixels")
var fs = require("fs")

require("get-pixels")("./bwimage.png", function(err, data) {
  var r = data.pick(-1, -1, 0)
  
  savePixels(ops.mulseq(morphology.dilate(ops.clone(r), 1), 255), "png").pipe(fs.createWriteStream("dilate.png"))
  
  savePixels(ops.mulseq(morphology.erode(ops.clone(r), 1), 255), "png").pipe(fs.createWriteStream("erode.png"))

  savePixels(ops.mulseq(morphology.open(ops.clone(r), 1), 255), "png").pipe(fs.createWriteStream("open.png"))
  
  savePixels(ops.mulseq(morphology.close(ops.clone(r), 1), 255), "png").pipe(fs.createWriteStream("close.png"))
})