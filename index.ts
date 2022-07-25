// Import stylesheets
import './style.css';
import {LikeComponent } from './like.component';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
  <h1>TypeScript Properties</h1>
  <p>If you have a private field and wants to acces its values or do a simple validation, properties come in handy</p>
  <p>You can use "Getters" or "Setters" and/or set values to them and access them outside their class line 10 - 19</p>
  <p>The Getters and Setters are used to change the original values in a class</p>
  <p>Basically, properties are used to gain access (getters) to certain private properties or 
  give(setters) access to other private value</p>
`;

class Point {
  constructor(private _x?: number, private _y?: number) {
  }

  draw(){
    console.log('X: ' + this._x + ", " + 'Y: ' + this._y );
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (x < 0) 
      throw new Error ('value cannot be less than 0.');

    this._x = value;
  } 
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();



