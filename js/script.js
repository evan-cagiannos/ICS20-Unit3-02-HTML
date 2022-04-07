// Created by Evan Cagiannos
// ICS2O-UNIT2-02-HTML
// Created on: 2022-March-10 
//This file contains the JS functions for index.html

'use strict' 
/**
 * This function calculates volume of pyramid.
 */
function doMathClicked() {
  // this function does basic math
  // input
  const length = parseInt(document.getElementById('length-of-pyramid').value)
  const width = parseInt(document.getElementById('width-of-pyramid').value)
  const height = parseInt(document.getElementById('height-of-pyramid').value)

  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' cm3'
}
