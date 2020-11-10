import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import checkPropTypes from 'check-prop-types';

import { findByTestAttr, checkProps} from '../../../Utils';

const setUp = (props={}) => {
    const component = shallw(<Headline {...props} />)
    return component;
};

describe('Headline Component', () => {
    
    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Tet Desc',
                tempArr: [{
                    fname: 'Test fname',
                    lname: 'test lname',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false
                }]
            };

            //const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name);   
            const propsErr = checkProps(Headline, expectedProps)    //does the same as above, instead we use a utility function
            expect(propsErr).toBeUndefined(); //there should be no error this these conditions


        });

    });

    describe('Have props', () => {

    });
    describe('Have NO props', () => {

    });

});