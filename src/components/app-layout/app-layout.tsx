import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';
import { DailyFactScreen } from '../daily-fact-screen/daily-fact-screen';
import { FavouriteFactsScreen } from '../favourite-facts-screen/favourite-facts-screen';
import { TabPanel } from '../tab-panel/tab-panel';
import { SvgIconProps } from '@mui/material';

interface ScreenConfigItem {
  icon: React.FC<SvgIconProps>;
  label: string;
  screen: React.FC;
}

type ScreensConfigs = ScreenConfigItem[];

const screensConfigs: ScreensConfigs = [
  {
    icon: HomeIcon,
    label: 'cats',
    screen: DailyFactScreen,
  },
  {
    icon: FavoriteIcon,
    label: 'favourites',
    screen: FavouriteFactsScreen,
  },
];


export const AppLayout: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = async (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="cat facts app tabs">
          {screensConfigs.map(({icon: Icon, label}, index) => (
            <Tab icon={<Icon />} label={label} {...a11yProps(index)} key={label} />
          ))}
        </Tabs>
      </Box>
      {screensConfigs.map(({screen: Screen, label}, index) => (
        <TabPanel value={value} index={index} key={label}>
          <Screen />
        </TabPanel>
      ))}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `app-tab-${index}`,
    'aria-controls': `app-tabpanel-${index}`,
  };
}
