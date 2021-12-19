
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";


import "assets/css/paper-kit.css";
import YoutubeEmbed from "views/index-sections/YoutubeEmbed.js";

import ReadMoreReact from 'read-more-react';

const mint = 50
const idealt = 50
const maxt = 100

function SectionExamplesNonSpatial() {
  return (
    <>
    
      <div className="section section-dark">
        <Container>
          <Row className="example-page" >
            <Col className="text-center" md="6">
            <div>
              <h3>Master Mafia Chat Bot</h3>
              <YoutubeEmbed embedId="uFZvj3M8sC4" />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://t.me/mohsen_mafia_bot"
                target="_blank"
              >
                Master Mafia Chat Bot
              </Button>
              <br/>
              <br/>
              <ReadMoreReact 
        text={`Mafia, also known as Werewolf, is a social deduction game, created by Dimitry Davidoff in 1986.[2] The game models a conflict between two groups: an informed minority (the mafiosi or the werewolves), and an uninformed majority (the villagers). At the start of the game, each player is secretly assigned a role affiliated with one of these teams. The game has two alternating phases: first, a night role, during which those with night killing powers may covertly kill other players, and second, a day role, in which surviving players debate the identities of players and vote to eliminate a suspect. 
        Master Mafia is a Mafia game organizer that is very easy to work with. 

- It can spread roles between the players. 

- It can moderate the nights!

https://t.me/mohsen_mafia_bot`}
        min={mint}
        ideal={idealt}
        max={maxt} 
        readMoreText={<div style = {{cursor:'pointer'}}>...read more</div>}
/>
              
            </div>
          
              
            </Col>

            <Col className="text-center" md="6">
            <div>
              <h3>MP3 Clipper Chat Bot</h3>
              <YoutubeEmbed embedId="n9ZEPPLSUjA" />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://t.me/mohsen_mp3_editor_bot"
                target="_blank"
              >
                MP3 Clipper Chat Bot
              </Button>
              <br/>
              <br/>
              <ReadMoreReact 
        text={`This bot can clip/cut your mp3 files to whatever beginning and ending time you want! 

        https://t.me/mohsen_mp3_editor_bot`}
        min={mint}
        ideal={idealt}
        max={maxt} 
        readMoreText={<div style = {{cursor:'pointer'}}>...read more</div>}
/>
              
            </div>
              
            </Col>

            <Col className="text-center" md="6">
            <div>
              <h3>Google Scholar Chat Bot</h3>
              <YoutubeEmbed embedId="i85n8j7OoKw" />

              {/* <Content /> */}
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://t.me/google_scholar_bot"
                target="_blank"
              >
                Google Scholar Chat Bot
              </Button>
              <br/>
              <br/>
              
              <ReadMoreReact 
        text={"If you are in academia you can easily track your most up to date google scholar metrics using my Telegram bot @google_scholar_bot. PS1. You need to install Telegram (a famous social networking app) and then navigate to the bot id mentioned above. PS2. Search your name as you do in google search engine. You can add affiliation to your name for a more precise search. PS3. Watch the short tutorial below to get the hang of it!"}
        min={mint}
        ideal={idealt}
        max={maxt} 
        readMoreText={<div style = {{cursor:'pointer'}}>...read more</div>}
                />
            </div>
              
              
            </Col>
            
            <Col className="text-center" md="6">
            <div>
              <h3>COVID-19 Tracker Chat Bot</h3>
              <YoutubeEmbed embedId="1avB-FURcqI" />
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="https://t.me/umn_covid19_bot"
                target="_blank"
              >
                COVID-19 Tracker Chat Bot
              </Button>
              <br/>
              <br/>
<ReadMoreReact 
        text={`This developed COVID-19 bot uses an auto-growing PostgreSQL database of New York Times COVID-19 daily reports to respond to spatial and statistical queries. The database is one of the products of recent teamwork entitled “USA COVID-19 Web Mapping” with 5 other team members including Dr. David Haynes, Kuan-Jui Lin, Emily Ruetz, Anders Hopkins, and Xiaoran Li. So, this bot is an extension of that project. 
        Currently, this bot will respond to the following queries, however, the number of the queries can increase, so let me know if you want to add any. 
         
        1.     What is the number of daily and cumulative cases/mortalities at the county level in the state of Minnesota? What is the counties’ ranking in terms of patient population?
        2.     Which counties in the state of Minnesota have been the daily/cumulative spatial hotspots of the disease so far?
        3.     What is the number of daily and cumulative cases/mortalities at the state level in the US? What is the states’ ranking in terms of patient population?
        4.     What are the top 10 states being labeled as the disease hotspots most frequently?
        5.     What are the top 10 dates, recording the maximum number of disease hotspots?
        6.     What are the most recent US daily hotspots at the county level?
        7.     What are the top 50 most frequent disease hotspots at the county level in the country?
         
        The hotspot detection part uses Local Moran’s I analysis at both state and county spatial resolutions and all the hotspots are in the ‘High-High’ category with %95 level of confidence. `}
        min={mint}
        ideal={idealt}
        max={maxt} 
        readMoreText={<div style = {{cursor:'pointer'}}>...read more</div>}
/>
            </div>
              
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamplesNonSpatial;
