"use strict";

const reverse = () => {
    let bake = document.querySelector('#bake').value, orig = '';
    for( let i of bake ) {
        orig += String.fromCharCode( i.charCodeAt(0) - 288 )
    }
    document.querySelector('#result').textContent = orig;
}

const parse = () => {
    let orig = document.querySelector('#orig').value, bake = '';
    for( let i of orig ) {
        bake += String.fromCharCode( i.charCodeAt(0) + 288 )
    }
    document.querySelector('#result').textContent = bake;
}