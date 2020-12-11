import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
    { name: "portraits", description: "Portraits of people in my life" }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
    // baseline Test
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    })
    // snapshot test
    it("matches snapshot", () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe("Emoji is visible", () => {
    it("inserts emoji into h2", () => {
        //Arange
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);

        //Assert
        expect(getByLabelText("camera")).toHaveTextContent('📸')
    })
})

describe("Links are visible", () => {
    it("insert text into links", () => {
        //Arrange
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        //Assert
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})