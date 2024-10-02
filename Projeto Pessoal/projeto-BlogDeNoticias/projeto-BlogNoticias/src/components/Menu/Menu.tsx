import React from 'react';
import { MenuWrapper, MenuList, MenuItem } from './MenuStyles';
type MenuProps = {
  items: string[];
};

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <MenuWrapper>
      <MenuList>
        {items.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;