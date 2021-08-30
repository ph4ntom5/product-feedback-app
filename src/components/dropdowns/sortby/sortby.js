import React, { useState } from "react";
import "./sortby.scss";
import { FormControl, Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const STYLES = ["sort-dark", "sort-light"];

//Switch Styles

const SortBy = ({ sortByStyle }) => {
  const Sorting = STYLES.includes(sortByStyle) ? sortByStyle : STYLES[0];
  const [rotation, setRotation] = useState(0);

  return (
    <FormControl
      id="country"
      className={`${Sorting}`}
      closeOnSelect={true}
      autoSelect={true}
      onClick={() => setRotation(rotation + 180)}
      closeOnBlur={true}
    >
      <div className="wrapper">
        <span>Sort by :</span>
        <Select>
          <option>Most Upvotes</option>
          <option>Least Upvotes</option>
          <option>Most Comments</option>
          <option>Least Comments</option>
        </Select>
        <motion.div animate={{ rotate: rotation }}>
          <ChevronDownIcon />
        </motion.div>
      </div>
    </FormControl>
  );
};

export default SortBy;
