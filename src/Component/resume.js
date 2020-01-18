import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{height: "200px"}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Lip Kang</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <p>
                        Young, would like to create something great and desire to learn new things. 
                        Also a tech enthusiast and would like to try approach new technology, 
                        not a person for the sake of doing, bored task will kill me =D. 
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        {/* <h5>Address</h5>
                        <p>
                           
                        </p> */}
                        <h5>Phone</h5>
                        <p>010-2508029</p>
                        <h5>Email</h5>
                        <p>callmekang1996@gmail.com</p>
                        <h5>Web</h5>
                        <p>pending</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>

                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2016}
                            endYear={2018}
                            schoolName ="INTI International University"
                            archievement = "Degree of Computer Science"
                            schoolDescription ="I am description"
                        />
                        <Education
                            startYear={2014}
                            endYear={2016}
                            schoolName ="INTI International University"
                            archievement = "Diploma of Information Technology"
                            schoolDescription ="I am description"

                        />
                        <hr style={{borderTop: '3px solid #e22947'}}></hr>
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2018}
                            endYear={2019}
                            companyName="M360 Ideology Sdn Bhd"
                            jobName="Programmer"
                            jobDescription="descriptio"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}></hr>
                        
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={10}
                        />
       
                    </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default Resume;