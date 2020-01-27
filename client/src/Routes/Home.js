import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import '../App.css';
import team from '../images/team2.png';
import kc from '../images/kc2.png';
import insurance1 from '../images/Aetna.png';
import insurance2 from '../images/Premera.jpg';
import insurance3 from '../images/Regence.jpeg';
import insurance4 from '../images/United.png';
import chiroFAM from '../images/chiroFAM.png';
import chiroExam from '../images/chiroExam.png';
import chiroMASS from '../images/chiroMASS.png';
import chiroX from '../images/chiroX.png';
import Carousel from 'react-bootstrap/Carousel';
import { ClientForm } from '../components/ClientForm';
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from 'react-animated-css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <body className='header'>
          <div className='navBar'>
            <img src={kc} className='kc' alt='' />
          </div>
          <div className='homePage' />
        </body>
        <Animated animationIn='fadeIn' animationInDelay='500' isVisible={true}>
          <div className='times'>
            <h3>Office Hours</h3>
            <hr className='smallLine' />
            <li>
              <span className='days'>Monday</span>
            </li>
            <li>9:00 A.M - 6:30 P.M</li>
            <li>
              <span className='days'>Tuesday</span>
            </li>
            <li>9:00 A.M - 6:00 P.M</li>
            <li>
              <span className='days'>Wednesday</span>
            </li>
            <li>9:00 A.M - 6:30 P.M</li>
            <li>
              <span className='days'>Thursday</span>
            </li>
            <li>9:00 A.M - 6:00 P.M</li>
            <li>
              <span className='days'>Friday</span>
            </li>
            <li>9:00 A.M - 6:30 P.M</li>
            <li>
              <span className='days'>Saturday</span>
            </li>
            <li>9:00 A.M - 12:00 P.M</li>
            <li>
              <span className='days'>Sunday</span>
            </li>
            <li>CLOSED</li>
          </div>
        </Animated>
        <body className='body1'>
          <ScrollAnimation animateIn='fadeInUp'>
            <div className='Special'>
              <h2>Schedule An Appointment With Us</h2>
              <ClientForm />
            </div>
          </ScrollAnimation>
          <div className='insurances'>
            <h2>We Accept Most Major Insurances</h2>
            <hr className='line' />
            <ScrollAnimation animateIn='fadeInUp'>
              <img src={insurance1} className='insurance1' alt='' />
              <img src={insurance2} className='insurance1' alt='' />
              <img src={insurance3} className='insurance1' alt='' />
              <img src={insurance4} className='insurance1' alt='' />
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn='fadeInUp'>
            <div className='aboutUs'>
              <div className='group1'>
                <div className='row'>
                  <div className='column'>
                    <div className='left-column'>
                      <img src={team} className='teamPic' alt='' />
                    </div>
                  </div>
                  <div className='right-column'>
                    <p>
                      Klahanie Chiropractic has been servicing the
                      Issaquah/Sammamish area for ???
                    </p>
                    <Link className='teamButton' to='/About'>
                      Meet The Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <div className='Services'>
            <h2>View Our Services</h2>
            <hr className='line2' />
            <ScrollAnimation animateIn='fadeInUp'>
              <div class='Services-container'>
                <div class='Services-item'>
                  <div className='overlay'>
                    <a href='#' className='FAMbutton'>
                      <div className='images'>
                        <img src={chiroFAM} classname='LGimg' alt='' />
                        <div class='caption-text'>
                          <h5>Exams</h5>
                          <p>blahhhhhhhhhhhhhhh</p>
                          <a>Learn More</a>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='overlay'>
                    <a href='#' className='EXAMbutton'>
                      <div className='images'>
                        <img src={chiroExam} classname='LGimg' alt='' />
                        <div class='caption-text'>
                          <h5>Exams</h5>
                          <p>blahhhhhhhhhhhhhhh</p>
                          <a>Learn More</a>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class='Services-item'>
                  <div className='overlay'>
                    <a href='#' className='MASSbutton'>
                      <div className='images'>
                        <img src={chiroMASS} classname='LGimg' alt='' />
                        <div class='caption-text'>
                          <h5>Exams</h5>
                          <p>blahhhhhhhhhhhhhhh</p>
                          <a>Learn More</a>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='overlay'>
                    <a href='#' className='Xbutton'>
                      <div className='images'>
                        <img src={chiroX} classname='LGimg' alt='' />
                        <div class='caption-text'>
                          <h5>Exams</h5>
                          <p>blahhhhhhhhhhhhhhh</p>
                          <a>Learn More</a>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animateIn='fadeInUp'>
            <div className='Testimonials'>
              <h2>Our Clients</h2>
              <Carousel>
                <Carousel.Item>
                  <Carousel.Caption>
                    <p>
                      Had my first experience today with Klahanie Chiropractic
                      and it was amazing. It started from the second I called to
                      ask for an appointment. Very friendly and got me in right
                      away. Then I arrive and the front desk staff was so fun.
                      Sure, they are dressed in costumes today but that was just
                      a bonus. The doctor was great and very thorough. I am
                      happy to have found them.
                    </p>
                    <hr className='smallLine' />
                    <div className='reviewRating'>
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <p>
                      Very positive experience. Staff is friendly and highly
                      accommodating. Dr. Lichtenwalter is extremely
                      knowledgeable with a great personality. He makes an extra
                      effort to inform you about how an exercise facilitates
                      your recovery. He evinces an outstanding ability to
                      maintain continuity between office visits. Highly
                      recommended!
                    </p>
                    <hr className='smallLine' />
                    <div className='reviewRating'>
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <p>
                      James and Andrew really know their body mechanics, and
                      want to keep you healthy. The combination of soft tissue
                      therapy and chiropractic really gets the job done. I'm
                      lucky they are so conveniently located.
                    </p>
                    <hr className='smallLine' />
                    <div className='reviewRating'>
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                      <i class='fas fa-star' />
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </ScrollAnimation>
        </body>
        <footer className='Footer'>
          <div class='footer-item'>
            <div className='socialMedia'>
              <i class='fab fa-facebook-f' />
              <i class='fab fa-yelp' />
              <i class='fab fa-google-plus-g' />
            </div>
            <h3 className='copyright'>Copyright © 2019</h3>
            <h3 className='dev'>
              {' '}
              Developed By{' '}
              <a href='https://AnthonyB.dev' target='blank_' rel='noopener'>
                AnthonyB.dev
              </a>
            </h3>
          </div>
        </footer>
      </div>
    );
  }
}
