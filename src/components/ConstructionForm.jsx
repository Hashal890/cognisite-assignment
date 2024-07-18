import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const ConstructionForm = ({ onCalculate }) => {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [dailyFeet, setDailyFeet] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCalculate(parseFloat(height), parseFloat(width), parseFloat(dailyFeet));
  };

  return (
    <Box
      as={"form"}
      onSubmit={handleSubmit}
      maxWidth={"400px"}
      margin={"auto"}
      mt={4}
    >
      <FormControl mb={4}>
        <FormLabel>Height (feet):</FormLabel>
        <Input
          type={"number"}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Width (feet):</FormLabel>
        <Input
          type={"number"}
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Daily Feet per Person:</FormLabel>
        <Input
          type={"number"}
          value={dailyFeet}
          onChange={(e) => setDailyFeet(e.target.value)}
          required
        />
      </FormControl>
      <Button type={"submit"} colorScheme={"teal"} width={"full"}>
        Calculate
      </Button>
    </Box>
  );
};

export default ConstructionForm;
