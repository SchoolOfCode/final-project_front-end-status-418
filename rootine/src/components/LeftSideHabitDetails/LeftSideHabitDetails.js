import UploadHabit from "../UploadHabit/UploadHabit";
import DetailsPanel from "../DetailsPanel/DetailsPanel";
//prettier-ignore
import { Box,  VStack } from "@chakra-ui/react";

export default function LeftSideHabitDetails({ isFormDisplayed }) {
  //When switchDisplay is true, the habit details panel shows, when false, AddNewHabit panel shows
  //Button added to perform the switch
  // ❗ This is temporary!

  const vStackProps = {
    className: "view-container",
    width: "auto",
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box>
      <VStack {...vStackProps}>
        {isFormDisplayed ? <UploadHabit /> : <DetailsPanel />}
      </VStack>
    </Box>
  );
}
