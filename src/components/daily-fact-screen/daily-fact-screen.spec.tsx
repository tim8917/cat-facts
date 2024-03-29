import {fireEvent, render} from '@testing-library/react/pure';
import * as CurrentFactContext from '../../contexts/current-fact-context';
import { DailyFactScreen } from './daily-fact-screen';

const useCurrentFactMockValues = {
  fact: {_id: '1', text: 'fact-01'}, 
  loadRandomFact: jest.fn(),
  addToFavourites: jest.fn()
};

describe('FactComponent', () => {
  jest.spyOn(CurrentFactContext, 'useCurrentFact').mockImplementation(() => useCurrentFactMockValues);

  const {queryByTitle, queryByText, getByTitle} = render(
    <DailyFactScreen />
  );

  it('then it behaves correctly', () => {
    expect(queryByText(/fact-01/i)).toBeTruthy();
    expect(queryByTitle('delete')).toBeTruthy();
    expect(queryByTitle('add to favourites')).toBeTruthy();

    expect(useCurrentFactMockValues.loadRandomFact).toHaveBeenCalledTimes(0);
    expect(useCurrentFactMockValues.addToFavourites).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTitle('delete'));

    expect(useCurrentFactMockValues.loadRandomFact).toHaveBeenCalledTimes(1);
    expect(useCurrentFactMockValues.addToFavourites).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTitle('add to favourites'));

    expect(useCurrentFactMockValues.loadRandomFact).toHaveBeenCalledTimes(2);
    expect(useCurrentFactMockValues.addToFavourites).toHaveBeenCalledTimes(1);
    expect(useCurrentFactMockValues.addToFavourites).toHaveBeenCalledWith(useCurrentFactMockValues.fact);
  });

});
