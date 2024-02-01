import { fireEvent, render } from '@testing-library/react/pure';
import * as CurrentFactContext from '../../../src/contexts/current-fact-context';
import * as FavouriteFactsContext from '../../contexts/favourite-facts-context';
import AppLayout from './app-layout';

const useCurrentFactMockValues = {
  fact: {_id: '1', text: 'fact-01'}, 
  loadRandomFact: jest.fn(),
  addToFavourites: jest.fn()
};

describe('AppLayout', () => {
  jest.spyOn(CurrentFactContext, 'useCurrentFact').mockImplementation(() => useCurrentFactMockValues);
  jest.spyOn(FavouriteFactsContext, 'useFavouriteFacts').mockReturnValue([]);

  const {queryByText, getByRole, queryByRole} = render(
    <AppLayout />
  );

  it('then behaves correctly', () => {
    expect(queryByRole('tab', { name: 'cats' })).toBeTruthy();
    expect(queryByRole('tab', { name: 'favourites' })).toBeTruthy();

    expect(queryByText(/fact-01/i)).toBeTruthy();
    expect(queryByText(/You have not yet favourite cat facts/i)).toBeFalsy();

    fireEvent.click(getByRole('tab', { name: 'favourites' }));
    expect(queryByText(/fact-01/i)).toBeFalsy();
    expect(queryByText(/You have not yet favourite cat facts/i)).toBeTruthy();

    fireEvent.click(getByRole('tab', { name: 'cats' }));
    expect(queryByText(/fact-01/i)).toBeTruthy();
    expect(queryByText(/You have not yet favourite cat facts/i)).toBeFalsy();
  });

});
