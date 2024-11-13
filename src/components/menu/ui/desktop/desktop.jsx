import React, { useState } from 'react';
import { Container, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MENU_ITEMS } from '../../../../consts';

const MotionText = motion(Text);

export const DesktopMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [previousIndex, setPreviousIndex] = useState(null);

  const handleClick = (index) => {
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <Container maxW={'77.5%'}>
      <Flex gap={18} borderBottom={'1px solid #D3D9DF'}>
        {MENU_ITEMS.map((item, index) => (
          <MotionText
            key={index}
            cursor="pointer"
            color={activeIndex === index ? '#1F2229' : '#7C8792'}
            borderBottom={activeIndex === index ? '2px solid #1F2229' : 'none'}
            py={'13px'}
            onClick={() => handleClick(index)}
            initial={{
              x:
                activeIndex === index
                  ? previousIndex !== null && index > previousIndex
                    ? 100
                    : -100
                  : 0,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}>
            {item}
          </MotionText>
        ))}
      </Flex>
    </Container>
  );
};
