import React from 'react';
import './style/style.css'; //importing css file
import { Component } from 'react';

export default class addArticle extends React.Component {
    render() {
      return (
      <div className="addArticle">
       <h> Please submit article </h> 
       <form action ="http://localhost:4001/articles" method="post">
         <br/><text style = {{color: 'blue', fontStyle: 'italic', fontSize: '45'}}>Please enter the author's first name</text>
      <br/>
      <input type="text" placeholder="Author's first name" name="firstname"/> <br/>
      <br/>

      <br/><text style = {{color: 'blue', fontStyle: 'italic', fontSize: '45'}}>Please enter the author's last name</text>
      <br/>
      <input type="text" placeholder="Author's last name" name="lastname"/> <br/>
      <br/>

      <text style = {{color: 'blue', fontStyle: 'italic', fontSize: '45'}}>Please enter the title of the article</text><br/>
      <input type="text" placeholder="title" name="title"/><br/>
      <br/>

      <text style = {{color: 'blue', fontStyle: 'italic', fontSize: '45'}}>Please enter the year of publication</text><br/>
      <input type="text" placeholder="year of publication" name="year"/><br/>
      <br/>

      <text style = {{color: 'blue', fontStyle: 'italic', fontSize: '45'}}>Please enter the source</text><br/>
      <input type="text" placeholder="source" name="source"/><br/>

      <text style = {{color: 'blue', fontStyle: 'italic', fontSize: '45'}}>Please enter the SE practice</text><br/>
      <input type="text" placeholder="practice" name="practice"/><br/>

      <text style = {{color: 'blue', fontStyle: 'italic', fontSize: '45'}}>Please enter the claims</text><br/>
      <input type="text" placeholder="claims" name="claims"/><br/>


      <button type="submit">Submit</button>
</form>
      </div>

      );
    }
  }
