import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Model {
    constructor() {
      
       this.allComments = [];
       console.log(this.allComments)
    }
    addComment(txt,text) {
      if(text!=''){
        this.allComments.push({
          name: txt,
          comment: text,
          id: this.allComments.length +1
        });
      }
      this.allComments.name.value = "";
      this.allComments.comment.value = "";
      this.notify();
    }
    removeComment(txt,text) {
      this.allComments = this.allComments.filter(item=> item != txt);
      this.allComments = this.allComments.filter(item => item != text);
      this.notify();
    }
    addNumbComment(){
      this.allComments.length +1;
    }
    restNumbComment(){
      this.allComments.length -1;
    }
    
    subscribe(render) {
      this.render = render;
    }
    notify() {
      this.render();
    }
  }

  
let model = new Model();

let render = () => {
    ReactDOM.render(
      <App  model={model} />,
      document.getElementById('root')
    );
  };
  
  model.subscribe(render);
  render(); 
  
  registerServiceWorker();
