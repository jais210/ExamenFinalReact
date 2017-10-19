import React, { Component } from 'react';

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

const App = ({ model }) => {
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

export default App;