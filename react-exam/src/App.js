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
const List = ({ add, model }) => {
  console.log(add)
  return (
    <li >
      {add.name}
      {add.comment}
      <button onClick={() => model.removeComment(add)}>remove</button>
    </li>
  );
}



const App = ({ model }) => {
  console.log(model);
  return (
    <div>
      <Header model = {model}/>
      <div>
        <h2>COMMENTS</h2>
        <ul>
          {model.allComments.map(item => <List key={item.id}  add ={item} model={model} />)}
                      
        </ul>
      </div>
    </div>
  );
}

export default App;