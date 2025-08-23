import React from "react";
import { Box } from "../src";

export const EnhancedBoxExample: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Enhanced Box Component Examples</h1>

      {/* Typography Example */}
      <Box
        as="section"
        margin="20px 0"
        padding="20px"
        backgroundColor="#f5f5f5"
        borderRadius="8px"
      >
        <h2>Typography & Text Styling</h2>
        <Box
          as="p"
          fontSize="18px"
          fontWeight="600"
          color="#333"
          lineHeight="1.6"
          textAlign="center"
          margin="10px 0"
        >
          This is a styled paragraph using the enhanced Box component
        </Box>

        <Box
          as="span"
          fontSize="14px"
          color="#666"
          fontStyle="italic"
          textDecoration="underline"
        >
          This is styled text with custom properties
        </Box>
      </Box>

      {/* Layout & Positioning Example */}
      <Box
        as="section"
        margin="20px 0"
        padding="20px"
        backgroundColor="#e8f4fd"
        borderRadius="8px"
        position="relative"
      >
        <h2>Layout & Positioning</h2>
        <Box
          position="absolute"
          top="10px"
          right="10px"
          backgroundColor="#ff6b6b"
          color="white"
          padding="5px 10px"
          borderRadius="4px"
          fontSize="12px"
        >
          Positioned
        </Box>

        <Box
          margin="20px 0"
          padding="15px"
          border="2px solid #4ecdc4"
          borderRadius="6px"
        >
          Box with custom border and spacing
        </Box>
      </Box>

      {/* Flexbox Example */}
      <Box
        as="section"
        margin="20px 0"
        padding="20px"
        backgroundColor="#f0f8e8"
        borderRadius="8px"
      >
        <h2>Flexbox Layout</h2>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
          padding="15px"
          backgroundColor="white"
          borderRadius="6px"
        >
          <Box
            padding="10px"
            backgroundColor="#ff9ff3"
            borderRadius="4px"
            flex="1"
            textAlign="center"
          >
            Flex Item 1
          </Box>
          <Box
            padding="10px"
            backgroundColor="#54a0ff"
            borderRadius="4px"
            flex="1"
            textAlign="center"
          >
            Flex Item 2
          </Box>
          <Box
            padding="10px"
            backgroundColor="#5f27cd"
            borderRadius="4px"
            flex="1"
            textAlign="center"
          >
            Flex Item 3
          </Box>
        </Box>
      </Box>

      {/* Grid Example */}
      <Box
        as="section"
        margin="20px 0"
        padding="20px"
        backgroundColor="#fff3e0"
        borderRadius="8px"
      >
        <h2>Grid Layout</h2>
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, 1fr)"
          gap="15px"
          padding="15px"
          backgroundColor="white"
          borderRadius="6px"
        >
          <Box
            padding="20px"
            backgroundColor="#ff7043"
            borderRadius="4px"
            textAlign="center"
            color="white"
          >
            Grid Item 1
          </Box>
          <Box
            padding="20px"
            backgroundColor="#42a5f5"
            borderRadius="4px"
            textAlign="center"
            color="white"
          >
            Grid Item 2
          </Box>
          <Box
            padding="20px"
            backgroundColor="#66bb6a"
            borderRadius="4px"
            textAlign="center"
            color="white"
          >
            Grid Item 3
          </Box>
        </Box>
      </Box>

      {/* Responsive Example */}
      <Box
        as="section"
        margin="20px 0"
        padding="20px"
        backgroundColor="#f3e5f5"
        borderRadius="8px"
      >
        <h2>Responsive Design</h2>
        <Box
          fontSize="16px"
          fontSize-tablet="18px"
          fontSize-desktop="20px"
          textAlign="center"
          textAlign-tablet="left"
          textAlign-desktop="right"
          padding="15px"
          backgroundColor="white"
          borderRadius="6px"
          border="1px solid #ddd"
        >
          This text changes size and alignment across breakpoints
        </Box>

        <Box
          display="block"
          display-tablet="flex"
          display-desktop="grid"
          flexDirection-tablet="column"
          gridTemplateColumns-desktop="repeat(2, 1fr)"
          gap-tablet="10px"
          gap-desktop="20px"
          margin="15px 0"
          padding="15px"
          backgroundColor="white"
          borderRadius="6px"
        >
          <Box
            padding="10px"
            backgroundColor="#ab47bc"
            borderRadius="4px"
            textAlign="center"
            color="white"
          >
            Responsive Item 1
          </Box>
          <Box
            padding="10px"
            backgroundColor="#8e24aa"
            borderRadius="4px"
            textAlign="center"
            color="white"
          >
            Responsive Item 2
          </Box>
        </Box>
      </Box>

      {/* Transform & Animation Example */}
      <Box
        as="section"
        margin="20px 0"
        padding="20px"
        backgroundColor="#e8f5e8"
        borderRadius="8px"
      >
        <h2>Transforms & Transitions</h2>
        <Box
          padding="20px"
          backgroundColor="#4caf50"
          color="white"
          borderRadius="6px"
          textAlign="center"
          cursor="pointer"
          transform="scale(1)"
          transition="all 0.3s ease"
          style={{
            ":hover": {
              transform: "scale(1.05)",
              backgroundColor: "#45a049",
            },
          }}
        >
          Hover me for transform effect
        </Box>
      </Box>
    </div>
  );
};

export default EnhancedBoxExample;
