import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from '..';

afterEach(cleanup); // Prevent any leftover memory data after each test that could give false results

//declare the component you want to test
describe('About component', () => {
    // First Test
    it('renders', () => { //test 1
        render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => { // test 2
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})