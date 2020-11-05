/*
Class components are stateful
Is a ES6 class
This just contain a render()
*/

import React, { Component }  from 'react';

class Headline extends Component {
    
    //constructor taking in props. See App.js for where it gets passed in
    constructor(props){
        super(props);
    }
    
    
    render(){
        
        //properites: see apps.js for where it gets passed in
        const {header, desc} = this.props;
        
        if(!header){
            return null;
        }

        return(
            <div data-test="HeadlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">
                    {desc}
                </p>
            </div>
        )
    }
}

export default Headline;