"use strict"

var ndarray = require("ndarray")
var ops = require("ndarray-ops")
var dt = require("distance-transform")
var pool = require("typedarray-pool")

function dilate(array, radius, p) {
  //Fix data type first
  var t = array.dtype || ndarray.dtype(array)
  if(!(t === "float32" || t === "float64")) {
    var scratch = pool.mallocDouble((array.size || ndarray.size(array))|0)
      , tmp = ndarray(scratch, array.shape.slice(0))
    ops.assign(tmp, array)
    dilate(tmp, radius, p)
    ops.assign(array, tmp)
    pool.freeDouble(scratch)
    return array
  }
  //Reallocate
  dt(array, p || 2)
  ops.leqseq(array, radius)
  return array
}
exports.dilate = dilate

function erode(array, radius, p) {
  ops.noteq(array)
  dilate(array, radius, p)
  ops.noteq(array)
  return array
}
exports.erode = erode

exports.open = function open(array, radius, p) {
  erode(array, radius, p)
  dilate(array, radius, p)
  return array
}

exports.close = function close(array, radius, p) {
  dilate(array, radius, p)
  erode(array, radius, p)
  return array
}