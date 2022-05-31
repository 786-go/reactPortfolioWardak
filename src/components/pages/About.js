import React from 'react';

export default function About() {
  return (
    <div>

      <h3 className="pageheading">About</h3>
      <section className='container'>
        <h6 className="text-capitalize fs-1 lh-lg">I am a Math Professor, currently pursuing Fullstack web development program with an aim to be a passionate Web developer</h6>


        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <a href="https://github.com/786-go" target="_blank" rel="noreferer noopener" ><img src={process.env.PUBLIC_URL +'/images/do-you-know-me.jpg'} className="d-block w-100" alt="image of boardgame" /></a>
            </div>
            <div className="carousel-item">
            <a href="https://www.linkedin.com/in/noorullah-wardak-b35b1a23a?trk=people-guest_people_search-card" target="_blank" rel="noreferer noopener" ><img src={process.env.PUBLIC_URL +'/images/do-you-know-me.jpg'} className="d-block w-100" alt="image of boardgame" /></a>
            </div>
            <div className="carousel-item">
            <a href="https://github.com/786-go/codingQuiz" target="_blank" rel="noreferer noopener" ><img src={process.env.PUBLIC_URL +'/images/do-you-know-me.jpg'} className="d-block w-100" alt="image of boardgame" /></a>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>





      </section>


    </div>
  );
}
