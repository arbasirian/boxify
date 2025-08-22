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
          as="span"
          display="inline-block"
          backgroundColor="blue"
          color="white"
          padding="10px 20px"
          borderRadius="5px"
          border="none"
          cursor="pointer"
          margin="10px"
        >
          Span Element
        </Box>

        <Box
          as="label"
          display="block"
          backgroundColor="lightsteelblue"
          padding="15px"
          margin="10px 0"
          borderRadius="5px"
          id="custom-label"
          data-testid="demo-label"
          aria-label="Demo label"
        >
          Label Element
        </Box>
      </section>

      {/* HTML Attributes Examples */}
      <section>
        <h2>HTML Attributes Support</h2>

        <Box
          as="label"
          htmlFor="name-input"
          display="block"
          margin="10px 0 5px 0"
          fontWeight="bold"
          color="#333"
        >
          Full Name
        </Box>

        <Box
          as="span"
          id="name-help"
          color="#666"
          fontSize="12px"
        >
          Please enter your full name as it appears on your ID
        </Box>

        <Box
          as="div"
          id="demo-container"
          data-testid="demo-container"
          aria-label="Demo container"
          display="block"
          margin="20px 0"
          padding="15px"
          backgroundColor="#f0f0f0"
          borderRadius="4px"
          border="1px solid #ddd"
        >
          This is a div container with various HTML attributes
        </Box>
      </section>
    </div>
  );
};

export default BasicUsageExample;
