import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import mmm from '../files/3m.jpg'
import aai_logo from '../files/aai.png'


export const Work = () => (
        <div className="container">
        <Jumbotron>
        <center><h1> Professional Experience</h1></center>
           <div class="card my-3">
              <div class="row no-gutters">
                <div class="col-md-2">
                  <div class="card my-3 border-0">
                      <img src={mmm} class="img-fluid" alt="Profile"/>
                  </div>
                </div>
               <div class="col-md-10">
                 <div class="card-body">

        <p class="card-text">I currently work in 3M's Corporate Research Systems Lab. We have about 150 people with backgrounds ranging from electrical and mechanical engineering to computer science and AI. We typically work in cross functional teams to research and develop technolgies that we think will give 3M a longterm competitve advange and lead to the next new product.</p>

        <div class="card-body py-0">
        <hr></hr>
        <strong><h5 class="card-title" style={{display:'inline', fontWeight:'bold'}}>Software Research Manager</h5></strong><h6 style={{display:'inline'}}>, Feb 2019 - present</h6>
        <p>I currently manage a group of about 15 software engineers and full stack developers. My team supports a number of initiatives including cloud platform and application development, materials informatics, AI & IoT for manufacturing, and automated design.</p>
        </div>

        <div class="card-body py-0">
        <hr></hr>
<h5 class="card-title" style={{display:'inline', fontWeight:'bold'}}>Data Scientist</h5><h6 style={{display:'inline'}}>, Aug 2015 - Feb 2019</h6>

        <p>I spent my first three and a half years at 3M as a data scientist on
        our AI team. During that time I led and worked on projects for
        applications ranging from anti-counterfeiting to population health
        analytics to supply chain analysis. Some technologies I worked with

        include convultional deep neural networks and Tensorflow, Spark and word
        embeddings, and cloud services. As part of some of these projects, I
        collaborated with <a href="verily.com"
        target="_blank" rel="noopener noreferrer">Verily Life Sciences</a> and <a href="verily.com"
        target="_blank" rel="noopener noreferrer">c3.ai</a>.</p> </div>

        <div class="card-body py-0">
        <hr></hr>
<h5 class="card-title" style={{display:'inline', fontWeight:'bold'}}>R&D Intern</h5><h6 style={{display:'inline'}}>, Summer 2014</h6>

        <p>During my last summer of graduate school, I interned with the AI team. My intern projects focused on large scale data analysis of medical documentation using Map Reduce and anomaly detection of traffic flow data.</p>
        </div>
                </div>
              </div>
            </div>
          </div>

        <div class="card my-3"> <div class="row no-gutters"> <div
        class="col-md-2"> <div class="card my-3 border-0"> <img src={aai_logo}
        class="img-fluid" alt="Profile"/> </div> </div> <div class="col-md-10">
        <div class="card-body"> <p class="card-text">During undergrad, I had
        3 internships at AAI Corporation, now a subsidiary of Textron Systems.
        </p>

        <div class="card-body py-0">
        <hr></hr>
<h5 class="card-title" style={{display:'inline', fontWeight:'bold'}}>Software Engineering Intern</h5><h6 style={{display:'inline'}}>, Summer 2007, 2008, Winter 2009</h6>

        <p>I developed professional software engineering skills by adding new
        features to a legacy C++ system that controlled multi-generational
        unmanned aircraft, wrote Wireshark scripts that captured messages
        between aircraft, and improved documentation of the codebase.</p>
        </div>

        </div>
           </div>
        </div>
        </div>
        </Jumbotron>
</div>
)
