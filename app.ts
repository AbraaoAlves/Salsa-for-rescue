import { greet } from './greeter';  
import * as api  from 'api';

let host = new api.DefaultApi();

window.onload = function(){
  document.body.innerText = greet(host.foo()); 
};