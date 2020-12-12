import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent } from '@testing-library/react';
import Modal from '..';

const currentPhoto = {
    name: "park bench",
    category: "landscape",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}
const mockToggleModal = jest.fn();
afterEach(cleanup);

describe("Modal Component", () => {
    it("render", () => {
        render(<Modal currentPhoto={ currentPhoto }/>);
    })

    it("matches snapshot", () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        // Act: Simulate click event
        // Assert: Expected matcher
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto} />)
        fireEvent.click(getByText('Close this modal'))
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})  