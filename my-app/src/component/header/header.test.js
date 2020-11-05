import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr} from './../../../Utils'


//There are two test methods: 'test' and 'it'
//These are singular one off tests
test('1 should be 1', () =>{
    expect(1).toBe(1);
})


//Use of a optional 'describe' function. See test output for effects
describe('Header Component Test DEMO', () => {
    it('should render without errors', () =>{
        expect(2).toBe(2);
    })

    describe("Nested", () =>{
        it('should render without errors', () =>{
            expect(2).toBe(2);
        })
    })
})

////////////////////////////////////////////////////////////////////////

//Here is our actual test
describe('Header Component', () =>{
    it('should render without errors', () => {
        const component = shallow(<Header />);  //a shallow render of the header component only renders the header and nothing else
        console.log(component.debug()); //this will output what the component is!
        const wrapper = component.find(`[data-test="headerComponent"]`); //here is a change. we target a 'data-test' attribute instead of a className
        expect(wrapper.length).toBe(1); //there should be one .headerComponent
    });
    it('Should render a logo', () =>{
        const component = shallow(<Header />);
        const logo = component.find('.logoIMG');    //here we target a classname which isn't as great
        expect(logo.length).toBe(1);
    })
});

/////////////////////////////////////////////////////////////////////////

//lets try and minimize repetative code

const setUp = (props=[]) => {
    const component = shallow(<Header {...props} />);
    return component;
};

/* We are goign to move this to a UTILS folder since it will be reused often
const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}
*/

describe('Header Component', () =>{
    
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors', () => {
        const wrapper = findByTestAttr(component, "headerComponent")
        expect(wrapper.length).toBe(1)
    });
    it('Should render a logo', () =>{
        //const logo = component.find(`[data-test="logoIMG"]`);
        const logo = findByTestAttr(component, "logoIMG")
        expect(logo.length).toBe(1)
    })
});

