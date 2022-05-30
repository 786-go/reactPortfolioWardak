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
      screenshot:"/images/quiz.PNG",
      live:"",
      github:""
    }
  ]
  return (
    <div>
  <h3 className="pageheading">Work</h3>
  <section className='d-flex flex-wrap justify-content-evenly'>
    
  {projects.map((element,key) =>
      <Card key={key} className="mt-5 p-3" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + element.screenshot} />
  <Card.Body>
    <Card.Title>{element.app}</Card.Title>
    <Card.Text>
      {element.description}
    </Card.Text>
    <a href={element.live}><Button className='m-1 p-1' variant="info">live</Button></a>
    <a href={element.github}><Button className='m-1 p-1' variant="success">Github</Button></a>
  </Card.Body>
</Card>
    )}
    </section>
    </div>
  );
}
