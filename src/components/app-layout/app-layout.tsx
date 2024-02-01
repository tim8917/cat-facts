import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';
import FactComponent from '../fact/fact';
import FavouriteFacts from '../favourite-facts/favourite-facts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AppLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = async (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<HomeIcon />} label="cats" {...a11yProps(0)} />
          <Tab icon={<FavoriteIcon />} label="favourites" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <FactComponent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <FavouriteFacts />
      </CustomTabPanel>
    </Box>
  );
}
