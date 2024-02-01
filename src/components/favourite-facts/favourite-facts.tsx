import { Box, List, ListItem, Typography } from '@mui/material';
import { useFavouriteFacts } from '../../../src/contexts/favourite-facts-context';
import { Fact } from '../../../src/model';

function FavouriteFacts() {
  const favouriteFacts = useFavouriteFacts();

  if (!favouriteFacts || !favouriteFacts.length) {
    return (
      <Box sx={{ fontStyle: 'italic' }}>You have not yet favourite cat facts</Box>
    );
  }

  return (
    <List>
      {favouriteFacts.map((fact: Fact) => (
        <ListItem key={fact._id} divider>
          <Typography>
            {fact.text}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default FavouriteFacts;
