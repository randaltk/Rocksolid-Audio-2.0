import React from "react";

import { SpinnerWrapper, SpinnerImg } from "./styles";
import SpinLogo from "../../assets/spinner.png";
import { motion } from "framer-motion";

function Spinner() {
  return (
    <>
      <SpinnerWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360, delay: 1 }}
          transition={{ delay: 0, duration: 2 }}
        >
          <SpinnerImg src={SpinLogo} />
        </motion.div>
      </SpinnerWrapper>
    </>
  );
}

export default Spinner;
