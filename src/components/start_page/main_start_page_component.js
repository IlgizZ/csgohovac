import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MainStartPage extends Component {
  componentDidMount () {
    var canvasDiv = document.getElementById('particle-canvas')
    var options = {
      particleColor: '#888',
      interactive: true,
      speed: 'medium',
      density: 'high',
      background: '/assets/img/bg.png'
    }
    var particleCanvas = new ParticleNetwork(canvasDiv, options)
    window.midleTopSection()
  }
  render () {
    return (
      <div className='bodyClass'>
        <header className='start hidden-xs'>
          <div className='block' id='header-about'>
            <span>
              about
            </span>
          </div>
          <div className='block' id='header-team'>
            <span>
              TEAM
            </span>
          </div>
          <div className='block'>
            <span>
              paper
            </span>
          </div>
          <div className='block'>
            <span>
              contact
            </span>
          </div>
        </header>
        <section id='top-section'>
          <div id='particle-canvas' />
          <div id='text'>
            <h2>Emploreum</h2>
            <small>
              Education, experience, skills - one token on the blockchain. This is the revolution in recruitment of IT employees.
            </small>
          </div>
        </section>
        <section id='desccription'>
          <div id='window'>
            <div id='top-panel'>
              <div className='top-btn bg-danger' />
              <div className='top-btn bg-info' />
              <div className='top-btn bg-success' />
            </div>
            <div id='window-content'>
              <img src='../../assets/img/desc.png' className='img-responsive hidden-sm hidden-md hidden-lg' />
                  IT is the most developing sphere in the world. Therefore, the search for qualified employees requires a huge effort. We bring new understanding of the labour market. Emploreum is a bridge between IT companies and specialists.
                  Emploreum is a decentralized labor exchange where all contracts between employee and employer are made through Ethereum blockchain.
                  The whole history of the employee, his education, the current level of knowledge in certain areas of IT is a cv-token of the employee which can be used for evaluation and ranking of all employees. Employees have a rating which is an indicator of the quality of their work. At the same time, companies also have a rating reflecting the level of the company. With the rating maintenance of companies and employees, the System is able to determine the cost per hour of employee work.
              <div id='plus'>
                <div data-target='slideInUp' className='col-xs-12 col-sm-6 col-md-3 item blue-item col-xs-12 box animated boxHidded'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    A unique cv-token
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Anyone can create his own labour book in the blockchain, which reflects the level of specific skills, experience, education, certificates.
                  </div>
                </div>
                <div data-target='slideInUp' className='col-xs-12 col-sm-6 col-md-3 item blue-item col-xs-12 box animated boxHidded'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    Escrow smart contracts instead of a labor contract
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Jobs are a smart contract, with the requirement for work experience, and a level of certain skills.
                  </div>
                </div>
                <div className='clearfix hidden-md hidden-lg hidden-xs' />
                <div data-target='slideInUp' className='col-xs-12 col-sm-6 col-md-3 item blue-item col-xs-12 box animated boxHidded'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    Companies pay for skills
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Every skill (JS, C ++) costs different money on the labor market. Companies choose the developer level.
                  </div>
                </div>
                <div data-target='slideInUp' className='col-xs-12 col-sm-6 col-md-3 item blue-item col-xs-12 box animated boxHidded'>
                  <img src='../../assets/img/line1.png' />
                  <div className='col-xs-12' id='top'>
                    Internal currency
                  </div>
                  <div className='col-xs-12 ' id='text'>
                    Time. Companies pay per each hour of time worked on task using any skill or their combination(JS + Ruby on Rails).
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='team'>
          <div className='container team team-style'>
            <div className='row'>
              <div className='section text-center'>
                <h2>TEAM MEMBERS</h2>
              </div>

              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/19420703_201049817088653_3083517987539423921_n.jpg?oh=c76a582fc3d2dad6c34c363c2f8ba1ca&oe=5ACFC214' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Rinat Khatipov</h6>
                    <p className='member-post'>Founder, front-end developer, design, CEO</p>
                    <hr />
                    <p className='member-details'>Innopolis University student. Solidity developer, front-end developer, mobile app developer. Has experience in leading IT company in St. Petersburg. Is co-founder of many start-ups</p>
                  </div>
                </div>
              </div>
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/m1.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Mickhail Magomedov</h6>
                    <p className='member-post'>Founder, back-end developer, CEO</p>
                    <hr />
                    <p className='member-details'>Student of Kazan Federal University. More than 5 years of work experience. Full stack web developer. Participated in the creation of 3 startups</p>
                  </div>
                </div>
              </div>
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/i2.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Ilgiz Zamaleev</h6>
                    <p className='member-post'>Founder, mobile-developer, UX, marketing</p>
                    <hr />
                    <p className='member-details'>Innopolis University student. ReactJS, React native, solidity developer. More than 3 years experience in web development.</p>
                  </div>
                </div>
              </div>
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/r3.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Rinat Gumarov</h6>
                    <p className='member-post'>Founder, back-end developer, big data </p>
                    <hr />
                    <p className='member-details'>Innopolis University student. Solidity, Java, JavaScript developer. Have 3 years expiriance in mobile development. Have expiriance in enterprice development.</p>
                  </div>
                </div>
              </div>
              <div className='clearfix' />
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/a1.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Aydar Negimatzhanov</h6>
                    <p className='member-post'>Founder, solidity developer, CEO</p>
                    <hr />
                    <p className='member-details'>Innopolis University student. Solidity and Javascript developer. More than 1 year experience of developing Dapps using solidity. More than 5 blockchain projects.</p>
                  </div>
                </div>
              </div>
              <div className='section text-center'>
                <h2>ADVISORS</h2>
              </div>
              <div data-target='fadeIn' className='col-sm-3 team-member box animated boxHidded'>
                <div className='team-member-bg'>
                  <div className='member-img'>
                    <img src='../../assets/img/g1.jpg' className='img-responsive' alt='team04' />
                    <div className='overlay' />
                  </div>
                  <div className='team-detail'>
                    <h6 className='member-name'>Alexander Gryaznov</h6>
                    <p className='member-post'>Chief Executive Officer</p>
                    <hr />
                    <p className='member-details'>Cryptology Expert, programmer with more than 10 years experience. Alexander founded and conducts the first academic course on Ethereum at Innopolis University.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='paper'>
          <div className='container'>
            <div className='row'>
              <div className='paper-block'>
                <img src='../../assets/img/programmm.png' />
              </div>
              <div className='paper-block'>
                <span>White Paper</span>
                <a href='../../assets/emploreum.pdf' className='btn' type='button'>Click and Download</a>
              </div>
              <div className='paper-block hidden-xs' id='desc'>
                This is what will help you understand
              </div>
            </div>
          </div>
        </section>
        <section id='feed-triangle' />
        <section id='feed-back'>
          <div className='container'>
            <div className='row'>
              <div data-target='slideInLeft' className='col-sm-6 col-xs-12 feed-item box animated boxHidded'>
                <div className='text-left'><h2>Company</h2></div>
                <h5>Be one of the first companies of the future</h5>
                <div className='form-group'>
                  <div className='input-group'>
                    <input type='text' className='form-control' placeholder='name' aria-describedby='name' />
                    <span className='input-group-addon' id='name'><i className='fa fa-user' /> </span>
                  </div>
                  <div className='input-group '>
                    <input type='text' className='form-control' placeholder='email' aria-describedby='email' />
                    <span className='input-group-addon' id='email'><i className='fa fa-address-book' /> </span>
                  </div>
                  <textarea className='form-control' placeholder='Message' />
                  <button className='btn'>submit</button>
                </div>
              </div>
              <div data-target='slideInRight' className='col-sm-6 hidden-xs feed-item box animated boxHidded'>
                <div className='text-left'><h2>Developer</h2></div>
                <h5>Are you a developer? Take the test to make our system better!</h5>
                <br />
                <Link type='button' className='btnnn' to='/developer_test'>Pass the test</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
