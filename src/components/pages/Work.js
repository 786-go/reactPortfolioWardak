import React from 'react';
import {Card,Button} from "react-bootstrap";



export default function Work() {
  const projects = [
    {
      app:"Multiple Choice JS Quiz",
      description:"Test your JavaScript knowledge with these 5 questions",
      screenshot:"/images/quiz.PNG",
      live:"https://786-go.github.io/codingQuiz/",
      github:"https://github.com/786-go/codingQuiz"
    },
    {
      app:"Taskinator",
      description:"Schedule your daily tasks",
      screenshot:"/images/tasks.PNG",
      live:"https://786-go.github.io/Taskinator/",
      github:"https://github.com/786-go/Taskinator"
    },
    {
      app:"Events Scheduler",
      description:"Schedule your daily events",
      screenshot:"/images/scheduler.PNG",
      live:"https://786-go.github.io/eventsScheduler/",
      github:"https://github.com/786-go/eventsScheduler"
    },
    {
      app:"Budget Tracker",
      description:"Keep Track of What You Have",
      screenshot:"/images/tracker.PNG",
      live:"https://guarded-ridge-65447.herokuapp.com/",
      github:""
    },
    {
      app:"The Weather API",
      description:"Easily Check Forecasts For Any City",
      screenshot:"/images/weather.PNG",
      live:"https://786-go.github.io/weatherAPI/",
      github:"https://github.com/786-go/weatherAPI"
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
