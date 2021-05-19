import React from 'react';
import './style/style.css'; //importing css file
import { Component } from 'react';

export default class addArticle extends React.Component {
    render() {
      return (
      <div className="addArticleContainer">
        <body className="background-main">
        <div className = "addArticleHeader">
       <h1> Article submissison</h1> 
       </div>
       
       <form action ="http://localhost:4001/articles" method="post">
        <div className= "input" >
         <p> <text>Please enter the author's first name</text><br/>
          <input type="text" placeholder="Author's first name" name="firstname"/>   </p>
      
      <p><text>Please enter the author's last name</text><br/>
          <input type="text" placeholder="Author's last name" name="lastname"/> </p>
      

      <p><text>Please enter the title of the article</text><br/>
          <input type="text" placeholder="The title of the article" name="title"/></p>
      

      <p><text>Please enter the year of publication</text><br/>
          <input type="text" placeholder="2010" name="year"/></p>
      
      <p><text>Please enter the source of the article</text><br/>
          <input type="text" placeholder="journal" name="source"/></p>

      <p><text>Please enter the SE practice</text><br/>
        <input type="text" placeholder="TDD" name="practice"/></p>

     <p><text>Please enter the claims</text><br/>
      <input type="text" placeholder="improves code quality" name="claims"/></p>

      </div>

      <button type="submit">Submit</button>
</form>

</body>

      </div>
    
      );
    }
  }
