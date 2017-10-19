import React, { Component } from 'react';

class Model {
  constructor() {
     this.allComments = [{
       name: "",
       comment: ""
      
     }]
        
  }
  addComment(txt,text) {
    if(text!=''){
      this.allComments.push({
        name: txt,
        comment: text,
        id: this.allComments.length +1
      });
    }
    this.allComments = '';
    this.notify();
  }
  removeComment(txt,text) {
    this.allComments = this.allComments.filter(item => item != txt);
    this.allComments = this.allComments.filter(item => item != text);
    this.notify();
  }
  
  subscribe(render) {
    this.render = render;
  }
  notify() {
    this.render();
  }
}
const Header = ({model})=>{
  return(
  <header>
  <h1>NEW COMMENT</h1>
 
  <form 
    onSubmit={e => {
      e.preventDefault();
      model.addComment(model.allComments.name.value, model.allComments.comment.value);
      
    }}
  >
    <input type="text" name="name" placeholder="Add your name" onChange={e => (model.allComments.name = e.target)} />
    <input type="text" comment="comment" placeholder="Add your comment" onChange={e => (model.allComments.comment = e.target)} />
   
    <button type="submit" name="submit" value="submit">Submit</button>
  </form>

</header>)
}
const List = ({ model }) => {
  return (
    <li>
      {model.allComments.name}
      {model.allComments.comment}
      <button onClick={() => model.removeComment()}>remove</button>
    </li>
  );
}

const Application = ({ model }) => {
  return (
    <div>
      <Header model = {model}/>
      <div className="main">
        <h2>COMMENTS</h2>
        <ul>
          {model.allComments.map(item => <List key={item.id}  model={model} />)}
        </ul>
      </div>
    </div>
  );
}

let model = new Model();
let render = () => {
  ReactDOM.render(
    <Application model={model} />,
    document.getElementById('root')
  );
};

model.subscribe(render);
render(); 