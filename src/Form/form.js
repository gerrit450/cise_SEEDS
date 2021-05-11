import React from 'react';
import './style/style.css'; //importing css file
import image1 from './images/SeedLogo.png'
import { Form } from 'react-bootstrap';
import { Component } from 'react';

export default class createForm extends Component
{
  create()
  {
  return (
<div>
<head>
  <link rel="stylesheet" type="text/css" href="style/style.css"/>
  <title>Project SEEDS</title>
  </head>
<body class="background-main">
  <div class="container"/>
    <div class="headerImage"/>
      <div class="image" style={{overflow: 'auto'}}/>
        <h1>Project SEEDS</h1>
        <img src={image1} alt="Seed logo" style={{width: 180, height: 180}}/>
    <br/>
    Search for Software Engineering Articles
    <br/>
    <form action="http://localhost:4001/results" method="post">
    <input type="text" name="search" placeholder="Search Articles"/> 
    <button type="submit" class="article">Search</button>
  </form>
  <div class="NewArticle">
    <button type="submit" >Add new articles</button>
  </div>
</body>
</div>
  );
  }
}