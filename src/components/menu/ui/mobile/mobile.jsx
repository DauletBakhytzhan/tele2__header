import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { MENU_ITEMS } from '../../../../consts';

export const MobileMenu = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerContent>
    
        <DrawerHeader>TELE2</DrawerHeader>
        <DrawerBody>
          <VStack align="start" spacing={4}>
            {MENU_ITEMS.map((item, index) => (
              <Text key={index} cursor="pointer" _hover={{ color: 'gray.400' }}>
                {item}
              </Text>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
