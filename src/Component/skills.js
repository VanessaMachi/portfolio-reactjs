import React, { Component } from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Grid>
                <Cell col={12}>
           
                {/* Simple Progress Bar */}
                <div style={{display: 'flex'}}>{this.props.skill} <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} /> </div>

                </Cell>
            </Grid>
        );
    }
}
 
export default Skills;