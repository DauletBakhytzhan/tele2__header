import React from 'react';
import { Box } from '@chakra-ui/react';
import bellIcon from '../../assets/Notification-Bell.svg';
import { bellAnimation, zoomAnimation } from '../../consts';

export const BellIcon = () => {
  return (
    <Box position="relative" zIndex="99" width="27px" height="27px" textAlign="center">
      <Box
        as="img"
        src={bellIcon}
        animation={`${bellAnimation} 1s infinite`}
        width="100%"
        height="100%"
      />

      <Box
        position="absolute"
        zIndex="1"
        top="4px"
        right="6px"
        width="10px"
        height="10px"
        borderRadius="50%"
        bg="#3FCBFF"
        animation={`${zoomAnimation} 3s infinite`}
      />
    </Box>
  );
};
