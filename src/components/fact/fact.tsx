import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Star';
import styled from "@emotion/styled";
import { useCurrentFact } from '../../../src/contexts/current-fact-context';

const Root = styled.div`
  position: relative;
  padding: 10px 40px 50px 5px;
  &:hover {
    .buttons-box {
      display: flex;
    }
  }
`;

const ButtonsBox = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  top: 0;
  right: 0;
`;

const TextBox = styled.div`

`;

function FactComponent() {
  const {fact, loadRandomFact, addToFavourites} = useCurrentFact();

  async function handleAddToFavourites() {
    addToFavourites(fact);
    loadRandomFact();
  }

  async function handleDelete() {
    loadRandomFact();
  }

  if (!fact) {
    return ;
  }

  return (
    <Root>
      <TextBox>
        {fact.text}
        {/* The RAM sensor is down, back up the redundant driver so we can copy the JSON bus!. */}
      </TextBox>
      <ButtonsBox className="buttons-box">
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="favourite" onClick={handleAddToFavourites}>
          <FavoriteIcon />
        </IconButton>
      </ButtonsBox>
    </Root>
  );
}

export default FactComponent;
