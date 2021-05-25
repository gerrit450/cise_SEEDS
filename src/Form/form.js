import React from 'react';
import './style/style.css'; //importing css file
import image1 from './images/SeedLogo.png'
import { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { title } from 'process';

export default class createForm extends Component {
  create() {
    const optionsSE = [
      { value: 'Improve code quality', label: 'Improve code quality' },
      { value: 'Improve product quality', label: 'Improve product quality' },
      { value: 'Improve team performance', label: 'Improve team performance' },
    ];
    const optionsClaim = [
      { value: 'TDD', label: 'TDD' },
    ];
    const nameSE = [
      { label: 'Please select SE practice' }
    ];
    const nameOfClaim = [
      { label: 'Please choose a claim' }
    ];
    return (

      <div>
        <head>
          <link rel="stylesheet" type="text/css" href="style/style.css" />
          <title>Project SEEDS</title>
        </head>
        <body class="background-main">
          <div class="container">
            <div class="headerImage" />
            <div class="image" style={{ overflow: 'auto' }} />
            <h1>Project SEEDS</h1>
            <img src={image1} alt="Seed logo" style={{ width: 180, height: 180 }} />
            <br />
    Search for Software Engineering Articles
    <br />

            <form action={'http://localhost:4001/results'} method="post">
              <input type="text" name="search" placeholder="Search Articles" />
              <button type="submit" class="article">Search</button>
            </form>
            <div style={{ marginTop: 10 }}>
              <Dropdown className={"sepractice"}>
                <Dropdown.Toggle variant="success" id="dropdown">
                  Select SE Practice
  </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">TDD</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ marginLeft: 170, marginTop: - 38 }}>
              <Dropdown className={"claim"}>
                <Dropdown.Toggle variant="success" id="dropdown">
                  Choose a claim
  </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Improve code quality</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Improve application quality</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Improve team confidence</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div class="NewArticle">
              <button type="submit" >Add new articles</button>
            </div>
            <Select className="mt-4 col-md-6 col-offset-4" defaultValue={nameSE} options={optionsSE} />
            <Select className="mt-4 col-md-6 col-offset-4" defaultValue={nameOfClaim} options={optionsClaim} />
  </body>

</div>
  );
  }
}