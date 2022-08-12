import { render, screen } from '@testing-library/react';
import { PREPARATIONS } from '../../../constants';
import PreparationsViewList from '../PreparationsViewList';

describe('PreparationsViewList', () => {

    it ('should render 2 categories', () => {
        render(<PreparationsViewList preparations={PREPARATIONS} />);

        const catergoryElement = screen.queryAllByTestId("catergory-element");
        expect(catergoryElement.length).toEqual(2);
    });

    it ('should render 2 checked notes and 2 not checked notes', () => {
        render(<PreparationsViewList preparations={PREPARATIONS} />);

        const noteElement = screen.queryAllByTestId("note-element");
        expect(noteElement.length).toEqual(2);

        const checkedNoteElement = screen.queryAllByTestId("checked-note-element");
        expect(checkedNoteElement.length).toEqual(2);
    });
});
