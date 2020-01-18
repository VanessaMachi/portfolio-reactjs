import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Grid>
                <Cell col={4}>
                    
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    
                </Cell>
                <Cell col={8}>
                    
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <h6 style={{marginTop: '0px'}}>{this.props.archievement}</h6>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>

        );
    }
}
 
export default Education;