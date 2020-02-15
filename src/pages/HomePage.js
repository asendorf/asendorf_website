import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import profile from '../files/profile_pic.jpg'

export const HomePage = () => (
        <div className="container">
        <Jumbotron>
        <center><h1> Nick Asendorf</h1></center>

        <div class="card my-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={profile} class="img-fluid" alt="Profile"/>
            </div>
          <div class="col-md-8">
            <div class="card-body">
        <p class="card-text">My name is Nick. I am a dad, husband, data scientist, software manager, and dungeon master. I currently manage a group of software engineers in 3M's Corporate Research Labs. I have a Ph.D. in statistical signal processing and still dabble in the arts of machine learning.</p>
<p>
I approach technical projects by asking two fundamental questions:
<ol>
  <li>What problem are you trying to solve?</li>
  <li>What data do you have?</li>
</ol>
</p>
<p>
I am originally from the great state of Maryland, spent 5 years in Michigan, and decided to trudge further into the midwest, settling in St. Paul MN. In my free time I enjoy running, watching the NBA, and playing dungeons and dragons. 
</p>
<br></br>
<center><a class="btn btn-outline-dark" href="" target="_blank" rel="noopener noreferrer">Download my Resume</a></center>

            </div>
          </div>
        </div>
    </div>
          </Jumbotron>
        </div>


    
)
