import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Projects extends Component {

    //constructor
    constructor(props){
        super(props)
        this.state = {activeTab : 0}
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://reactjs.org/logo-og.png) center / cover'}}>
                            React Projects #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </CardText>
                        
                        <CardActions border>
                            <Button src="https://github.com/VanessaMachi/OOP_Study_Python" colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="shared" />
                        </CardMenu>
                    </Card>
                    {/* Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://reactjs.org/logo-og.png) center / cover'}}>
                            React Projects #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </CardText>
                        
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="shared" />
                        </CardMenu>
                    </Card>
                    {/* Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:
                        'url(https://reactjs.org/logo-og.png) center / cover'}}>
                            React Projects #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </CardText>
                        
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="shared" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){

            return(
                <div><h1>This is Angular</h1></div>
            )
        }
        else if(this.state.activeTab === 2){

            return(
                <div><h1>This is VueJs</h1></div>
            )
        }
        else if(this.state.activeTab === 3){

            return(
                <div><h1>This is MongoDB</h1></div>
            )
        }
    }

    
    
    render() { 
        return (
          <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJs</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
          </div>  
          );
    }
}
 
export default Projects;
