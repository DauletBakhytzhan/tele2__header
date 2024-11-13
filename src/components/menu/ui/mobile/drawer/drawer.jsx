import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';
import logo from '../../../../../assets/Logo.svg';
import closeIcon from '../../../../../assets/close.svg';
import { MENU_ITEMS } from '../../../../../consts';

export const MenuDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          bg="gray.800"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={4}
          pr={2}
          pl={4}>
          <Box>
            <img src={logo} alt="Logo" style={{ width: '48px', height: '18px' }} />
          </Box>
          <Flex alignItems={'center'}>
            <img
              src={closeIcon}
              alt="closeIcon"
              style={{ width: '48px', height: '18px' }}
              onClick={onClose}
            />
          </Flex>
        </DrawerHeader>
        <DrawerBody p={0}>
          <Flex direction="column" mt={4} borderTop="1px solid #e2e8f0">
            {MENU_ITEMS.map((item, index) => (
              <Box
                key={index}
                py={4}
                px={6}
                borderBottom="1px solid #e2e8f0"
                _hover={{ bg: 'gray.50' }}>
                <Text fontSize="16px" fontWeight="700" color="#959597" lineHeight={'22px'}>
                  {item}
                </Text>
              </Box>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
