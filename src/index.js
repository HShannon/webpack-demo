import _ from 'lodash';
// import './style.css';
import Icon from './favicon.png'
//import printMe from './print.js'
import print from './print.js'
import { cube } from './math.js'

if(process.env.NODE_ENV !== "production"){
  console.log('Look like we are at in development mode!')
}

function component(){
  let element = document.createElement('div');
  let btn = document.createElement('button');
  let preElement = document.createElement('pre');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'click here, then look at the console! ';
  btn.onclick = print.bind(null, 'hello shannon');

  element.appendChild(btn)
  element.classList.add('hello')
 
  let myIcon = new Image();
  myIcon.src = Icon;
  
  preElement.innerHTML = [
    'hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  element.appendChild(preElement);

  element.appendChild(myIcon)
  return element
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if(module.hot){
  module.hot.accept('./print.js', function(){
    console.log('Accepting the updated printMe module!');
   // printMe();
    document.body.removeChild(element);
    element = component;
    document.body.appendChild(element);
  })
}
