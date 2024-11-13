import React from 'react';
import { Flex, IconButton, Text, Container } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import location from '../../assets/location.svg';
import logo from '../../assets/Logo.svg';
import { BellIcon } from '../bell';
import { MenuDrawer } from '../menu';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="header"
        width="100%"
        p={{ base: 0, md: '4' }}
        py={{ base: 2, md: 0 }}
        bg="gray.800"
        color="white"
        align="center"
        justify="space-between">
        <Container maxW={{ base: '100%', md: '77.5%' }}>
          <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Text fontWeight="bold" fontSize="xl">
              <img src={logo} alt="Logo" width="48px" height="18px" />
            </Text>
            <Flex gap={{ base: 2, lg: 0 }}>
              <Flex gap={'30px'} flexDirection={'row'} alignItems={'center'}>
                <Flex gap={4} display={{ base: 'none', md: 'flex' }}>
                  <img src={location} alt="location" width="12px" height="18px" />
                  <Text color={'#7C8792'} fontSize={14} fontWeight={400}>
                    Москва и облость
                  </Text>
                </Flex>
                <BellIcon />
              </Flex>
              <Flex display={{ base: 'flex', md: 'none' }}>
                <IconButton
                  icon={<HamburgerIcon />}
                  aria-label="Open Menu"
                  onClick={onOpen}
                  mr={2}
                  ml={1}
                />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
