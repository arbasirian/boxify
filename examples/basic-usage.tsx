import React from "react";
import { Box } from "../src";

export const BasicUsageExample: React.FC = () => {
  return (
    <div>
      <h1>Boxify - Basic Usage Examples</h1>

      {/* Basic display examples */}
      <section>
        <h2>Display Properties</h2>

        <Box
          display="block"
          backgroundColor="lightblue"
          padding="10px"
          margin="10px 0"
        >
          Block display
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          backgroundColor="lightgreen"
          padding="10px"
          margin="10px 0"
        >
          <span>Flex item 1</span>
          <span>Flex item 2</span>
          <span>Flex item 3</span>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap="10px"
          backgroundColor="lightcoral"
          padding="10px"
          margin="10px 0"
        >
          <Box backgroundColor="white" padding="10px">
            Grid item 1
          </Box>
          <Box backgroundColor="white" padding="10px">
            Grid item 2
          </Box>
          <Box backgroundColor="white" padding="10px">
            Grid item 3
          </Box>
        </Box>
      </section>

      {/* Responsive display examples */}
      <section>
        <h2>Responsive Display</h2>

        <Box
          display="block"
          backgroundColor="lightyellow"
          padding="20px"
          margin="20px 0"
          tablet={{
            display: "flex",
            justifyContent: "space-around",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
          desktop={{
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          <Box backgroundColor="white" padding="15px">
            Responsive Item 1
          </Box>
          <Box backgroundColor="white" padding="15px">
            Responsive Item 2
          </Box>
          <Box backgroundColor="white" padding="15px">
            Responsive Item 3
          </Box>
        </Box>
      </section>

      {/* Layout examples */}
      <section>
        <h2>Layout Properties</h2>

        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          backgroundColor="lightgray"
          padding="20px"
          margin="20px 0"
          tablet={{
            flexDirection: "row",
          }}
        >
          <Box
            flex="1"
            backgroundColor="white"
            padding="20px"
            borderRadius="8px"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          >
            <h3>Card 1</h3>
            <p>
              This card will stack vertically on mobile and horizontally on
              larger screens.
            </p>
          </Box>

          <Box
            flex="1"
            backgroundColor="white"
            padding="20px"
            borderRadius="8px"
            boxShadow="0 2px 4px rgba(0,0,0,0.1)"
          >
            <h3>Card 2</h3>
            <p>Responsive layout with flexbox and grid support.</p>
          </Box>
        </Box>
      </section>

      {/* Custom element rendering */}
      <section>
        <h2>Custom Element Rendering</h2>

        <Box
          as="button"
          display="inline-block"
          backgroundColor="blue"
          color="white"
          padding="10px 20px"
          borderRadius="5px"
          border="none"
          cursor="pointer"
          margin="10px"
        >
          Button Element
        </Box>

        <Box
          as="section"
          display="block"
          backgroundColor="lightsteelblue"
          padding="15px"
          margin="10px 0"
          borderRadius="5px"
        >
          Section Element
        </Box>
      </section>
    </div>
  );
};

export default BasicUsageExample;
