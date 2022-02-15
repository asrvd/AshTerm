import React, { useState, useEffect } from 'react';
import figlet from 'figlet';
import Alpha from 'figlet/importable-fonts/Alpha.js';
import Standard from 'figlet/importable-fonts/Standard.js';
import larry3D from 'figlet/importable-fonts/Larry 3D.js';
import Term from './components/Term.js'

figlet.parseFont('Alpha', Alpha);
figlet.parseFont('Larry3D', larry3D);
figlet.parseFont('Standard', Standard);

export default function App() {
  var text = ""
  figlet.text('ASHISH', {font:'Larry3D', width:100},
    function(err, data) {
      console.log(data);
      text = data;
    }
  );
  return (
    <div className='container'>
      <Term />
    </div>
  )
}


