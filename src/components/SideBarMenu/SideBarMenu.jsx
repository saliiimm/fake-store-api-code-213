/* eslint-disable react/prop-types */
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { GiBigDiamondRing } from 'react-icons/gi';
import { FcElectronics } from 'react-icons/fc';
import {
  IoWomanOutline,
  IoStorefrontOutline,
  IoManOutline,
} from 'react-icons/io5';

import DrawerHeader from '../DrawerHeader/DrawerHeader';

const drawerWidth = 240;

export default function SideBarMenu({ categories, setCategory }) {
  console.log(categories);
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={true}
    >
      <DrawerHeader style={{ alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://coach.code213.tech/assets/code213-logo-39522d09.svg" />
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setCategory('All the products');
            }}
          >
            <ListItemIcon>
              <IoStorefrontOutline size={30} />
            </ListItemIcon>
            <ListItemText primary={'All the products'} />
          </ListItemButton>
        </ListItem>
        {categories.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                setCategory(`${text}`);
              }}
            >
              <ListItemIcon>
                {text === 'electronics' && <FcElectronics size={30} />}
                {text === 'jewelery' && <GiBigDiamondRing size={30} />}
                {text === "men's clothing" && <IoManOutline size={30} />}
                {text === "women's clothing" && <IoWomanOutline size={30} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
