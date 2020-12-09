import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
    // baseline Test
    it("renders", () => {
        render(<Nav />);
    });
    // snapshot test
    it("matches snapshot", () => {
        const { asFragment } = render(<Nav />);

        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe("Emoji is visible", () => {
    it("inserts emoji into h2", () => {
        //Arange
        const { getByLabelText } = render(<Nav />);

        //Assert
        expect(getByLabelText("camera")).toHaveTextContent('📸')
    })
})

describe("Links are visible", () => {
    it("insert text into links", () => {
        //Arrange
        const { getByTestId } = render(<Nav />);
        //Assert
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})