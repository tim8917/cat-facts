import { render } from '@testing-library/react/pure';
import * as FavouriteFactsContext from '../../contexts/favourite-facts-context';
import { FavouriteFactsScreen } from './favourite-facts-screen';

describe('FavouriteFactsPanel', () => {
  describe('given no any favourite facts', () => {
    jest.spyOn(FavouriteFactsContext, 'useFavouriteFacts').mockReturnValue([]);

    const {queryByText} = render(
      <FavouriteFactsScreen />
    );

    it('then provides corresponding message', () => {
      expect(queryByText(/You have not yet favourite cat facts/i)).toBeTruthy();
    });
  });

  describe('given there are favourite facts', () => {
    jest.spyOn(FavouriteFactsContext, 'useFavouriteFacts').mockReturnValue([
      {_id: '1', text: 'fact-01'},
      {_id: '2', text: 'fact-02'},
    ]);

    const {queryByText} = render(
      <FavouriteFactsScreen />
    );

    it('then provides these facts texts', () => {
      expect(queryByText(/fact-01/i)).toBeTruthy();
      expect(queryByText(/fact-02/i)).toBeTruthy();

    });
  });
});
