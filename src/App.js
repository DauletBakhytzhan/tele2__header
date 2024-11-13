import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Header } from './components/header';
import { DesktopMenu } from './components/menu';

function App() {
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <Box>
      <Header />
    {!isMobile&& <DesktopMenu />}
    </Box>
  );
}

export default App;
