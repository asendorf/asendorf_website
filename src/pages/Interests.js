import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import pathfinder from '../files/pathfinder.png'
import nba from '../files/nba.jpg'
import carillon from '../files/carillon.jpg'
import song from '../files/prelude_and_fugue.m4a'

export const Interests = () => (
        <div className="container">
          <Jumbotron>
            <center><h1> Hobbies & Interests </h1></center>
            <div class="card my-3">
              <div class="row no-gutters">
                <div class="col-md-2">
                  <div class="card my-3 border-0">
                      <img src={pathfinder} class="img-fluid" alt="dnd"/>
                  </div>
                </div>
               <div class="col-md-10">
                 <div class="card-body">
                   <p>
                   I love playing dungeons and dragons, specifically Pathfinder,
                   which is an offshoot of D&D 3.5. I am the dungeron master for
                   a few groups and created a number of campaigns and worlds
                   from scratch. I hope to one day "publish" these as playable
                   modules for others. For now, I'm creating a few github
                   repos. More to come!
                   </p>

                   <div class="card-body"> <hr></hr> <h5
                   class="card-title">Kandyland</h5> <p>You are an experienced
                   member of King Kandy’s personal council and have been
                   summoned into his chambers. A distressed King Kandy explains
                   that his only child and heir, Princess Lolly, has been
                   kidnapped by a horrible creature. He implores you to rescue
                   her and bring her back safely to Kandyland, promising a
                   reward of both fame and riches. We start our adventure in the
                   council room with the King.</p> <a class="btn  btn-social
                   btn-github mr-1"
                   href="https://github.com/asendorf/kandyland"
                   target="_blank" rel="noopener noreferrer"> <span class="fa
                   fa-github"></span>Campaign Repo</a> </div>

                   <div class="card-body"> <hr></hr> <h5
                   class="card-title">Nodington</h5> <p>You are a resident of
                   Nodington, Portown, Millsboro, or Dagsboro. You have been
                   summoned by the Nodington town elders to the city council
                   where they explain that Jar received a dream from Desna about
                   you and requested an immediate audience with you. You are to
                   travel to Millsboro to meet with Jar and will set out
                   tomorrow morning.</p> <a class="btn  btn-social btn-github
                   mr-1"
                   href="https://github.com/asendorf/nodington"
                   target="_blank" rel="noopener noreferrer"> <span class="fa
                   fa-github"></span>Campaign Repo</a>  </div>

                 </div>
               </div>
             </div>
           </div>

           <div class="card my-3">
              <div class="row no-gutters">
                <div class="col-md-2">
                  <div class="card my-3 border-0">
                      <img src={carillon} class="img-fluid" alt="carillon"/>
                  </div>
                </div>
               <div class="col-md-10">
                 <div class="card-body">
                 When I was attending the university of Michigan for graduate
                 school, I took a few courses to learn how to play the carillon,
                 which is the instrument housed in a bell tower. I played both
                 the piano and organ when I was growing up and so learning the
                 carillon was a great stress release when in graduate school.
                 The University of Michigan has two lovely carillon - The
                 Charles Baird Carillon housed in Burton Memorial Tower and
                 The Robert and Ann Lurie Carillon housed on North Campus. I
                 always enjoyed perfuming the Ann Arbor air with music. Click
                 below to hear a recording of Prelude and Fugue on Old 104th.

                 <center><a class="btn btn-outline-dark" href={song} target="_blank" rel="noopener noreferrer"><span class="fa fa-play" download></span> Prelude and Fugue on Old 104th</a></center>

                 </div>
               </div>
             </div>
           </div>

           <div class="card my-3">
              <div class="row no-gutters">
                <div class="col-md-2">
                  <div class="card my-3 border-0">
                      <img src={nba} class="img-fluid" alt="nba"/>
                  </div>
                </div>
               <div class="col-md-10">
                 <div class="card-body">
                 I really enjoy watching the NBA. It is one of my ways to
                 survive the Minnesotan winters. I love following the
                 Washington Wizards and hope, one day in my lifetime, they
                 manage to put together a magical season. Since living in
                 Minnesota, I've developed a soft spot for the Timberwolves.
                 Between the wolves and wizards, there hasn't been too mcuh to
                 cheer for recently.
                 </div>
               </div>
             </div>
           </div>
          </Jumbotron>
        </div>
)
