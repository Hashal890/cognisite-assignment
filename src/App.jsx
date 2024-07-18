import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import ConstructionForm from "./components/ConstructionForm";
import ResultsChart from "./components/ResultsChart";

const App = () => {
  const [result, setResult] = useState(null);

  const handleCalculate = (height, width, dailyFeetPerPerson) => {
    const totalFeet = height * width;
    const daysPerPerson = totalFeet / dailyFeetPerPerson;
    const personsNeeded = Math.ceil(daysPerPerson);

    setResult({ totalFeet, daysPerPerson, personsNeeded });
  };

  return (
    <Box textAlign={"center"} mt={10} fontFamily={"cursive"}>
      <Heading as={"h1"} size={"xl"} mb={6}>
        Construction Calculator
      </Heading>
      <ConstructionForm onCalculate={handleCalculate} />
      {result && <ResultsChart result={result} />}
    </Box>
  );
};

export default App;
