import React from "react";
import ContactForm from "..";
import '@testing-library/jest-dom/extend-expect';
import { cleanup, getByTestId, render} from "@testing-library/react";

afterEach(cleanup);

describe("Contact Component", () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect (asFragment()).toMatchSnapshot()
    })
})

describe("h1 tag content matches", () => {
    it("inserts Contact me into h1 element",()=> {
        const { getByTestId } = render(<ContactForm />)
        
        expect(getByTestId('form-header')).toHaveTextContent('Contact me');
    })
    
})