import React, { useState } from "react";
import "./dropdown.scss";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const STYLES = ["dropdown-dark", "dropdown-light"];

//Switch Styles

const Dropdown = ({ dropdownStyle }) => {
  const checkDropdownStyle = STYLES.includes(dropdownStyle)
    ? dropdownStyle
    : STYLES[0];
  const [rotation, setRotation] = useState(0);

  return (
    <Menu closeOnSelect={true} autoSelect={true} closeOnBlur={true}>
      <MenuButton
        as={Button}
        className={`${checkDropdownStyle}`}
        onClick={() => setRotation(rotation + 180)}
      >
        <div className="wrapper">
          <span>Sort by : </span> <b> Most Upvotes </b>
          <motion.div animate={{ rotate: rotation }}>
            <ChevronDownIcon />
          </motion.div>
        </div>
      </MenuButton>

      <MenuList minWidth="240px">
        <MenuOptionGroup type="radio" closeOnBlur={true}>
          <MenuItemOption value="most upvotes">Most Upvotes</MenuItemOption>
          <MenuDivider />
          <MenuItemOption value="least upvotes">Least Upvotes</MenuItemOption>
          <MenuDivider />
          <MenuItemOption value="most comments">Most Comments</MenuItemOption>
          <MenuDivider />
          <MenuItemOption value="least comments">Least Comments</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
