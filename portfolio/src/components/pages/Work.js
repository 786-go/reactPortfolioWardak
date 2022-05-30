import React from 'react';
import {Card,Button} from "react-bootstrap";



export default function Work() {
  const projects = [
    {
      app:"Code Refactor",
      description:"HTML 5 semantic tags and CSS rfactor",
      screenshot:"/images/quiz.PNG",
      live:"",
      github:""
    },
    {
      app:"Code Quiz",
      description:"DOM Manipulation",
      screenshot:"/images/quiz.PNG",
      live:"https://786-go.github.io/codingQuiz/",
      github:"https://github.com/786-go/codingQuiz"
    },
    {
      app:"Code Refactor",
      description:"HTML 5 semantic tags and CSS rfactor",
      screenshot:"/images/quiz.PNG",
      live:"",
      github:""
    },
    {
      app:"Code Refactor",
      description:"HTML 5 semantic tags and CSS rfactor",
      screenshot:"/images/quiz.PNG",
      live:"",
      github:""
    },
    {
      app:"Employe Tracker",
      description:"MySQL assignment",
      screenshot:"/images/employeetracker",
      live:"",
      github:""
    }
  ]
  return (
    <div>
  <h3 className="pageheading">Work</h3>
  {projects.map((element,key) =>
      <Card key={key} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + element.screenshot} />
  <Card.Body>
    <Card.Title>{element.app}</Card.Title>
    <Card.Text>
      {element.description}
    </Card.Text>
    <Button variant="primary"><a href={element.live}>live</a></Button>
    <Button variant="primary"><a href={element.github}>live</a></Button>
  </Card.Body>
</Card>
    )}
    </div>
  );
}
