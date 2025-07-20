'use client';
import {
  Box,
  Center,
  Container,
  HStack,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import React from 'react';

const knowDatas = [
  {
    title: '01',
    text: 'We know what drivers deserve — real respect, steady miles, and top pay.',
  },
  {
    title: '02',
    text: 'At LION KING GROUP, you’re not just a number — you’re part of a team that values your time, your skills, and your life on and off the road.',
  },
  {
    title: '03',
    text: 'We offer competitive rates, flexible routes, and 24/7 support to keep you moving and earning.',
  },
  {
    title: '04',
    text: 'Ready for a company  that drives your success?  Join LION KING GROUP today — Where Drivers Come First!',
  },
  {
    title: '05',
    text: 'Drive with confidence knowing you’re supported by well-maintained, late-model trucks that keep you safe and on schedule.',
  },
  {
    title: '06',
    text: 'We help you plan your routes and home time to ensure you spend more quality time with your family while still maximizing your income.',
  },
  {
    title: '07',
    text: 'Get paid on time, every time — with our reliable weekly settlements, you can count on consistent cash flow for your hard work.',
  },
];
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;
function WhyUs() {
  return (
    <Container maxW={'1360px'}>
      <Center gap={{ base: 3, lg: 7 }} flexDir={'column'} color={'primary'}>
        <Text fontWeight={'semibold'} fontSize={{ base: '33px', lg: '51px' }}>
          Why <Span color={'red'}>us?</Span>
        </Text>
        <Text
          maxW={'787px'}
          textAlign={'center'}
          fontSize={{ base: '11px', lg: '25px' }}
          lineHeight={{ base: '14px', lg: '32px' }}
        >
          At Lion King Transportation, we deliver more than just rides — we
          provide safe, reliable, and comfortable service with a royal touch.
          Our professional drivers, clean vehicles, and on-time guarantee make
          every trip smooth and stress-free.
        </Text>
      </Center>
      <Center
        bg={'primary'}
        color={'light'}
        mt={{ base: '40px', lg: '80px' }}
        rounded={{ base: 8, lg: 30 }}
        gap={{ base: '40px', lg: '150px' }}
      >
        <Text fontSize={{ base: 87, lg: 340 }}>1+</Text>
        <Text fontSize={{ base: 20, lg: 80 }}>
          YEARS OF <br /> EXCELLENT <br /> SERVICE
        </Text>
      </Center>
      <Box
        overflow={'hidden'}
        w={'full'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        <HStack
          py={{ base: '27px', lg: '70px' }}
          gap={5}
          pb={4}
          align='stretch'
          css={{
            display: 'flex',
            width: 'max-content',
            animation: `${scroll} 25s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {[...knowDatas, ...knowDatas]?.map((el) => (
            <Stack
              w={'350px'}
              key={el.title}
              alignItems={'center'}
              color={'primary'}
            >
              <Text fontWeight={500} fontSize={{ base: 34, lg: 63 }}>
                {el?.title}
              </Text>
              <Text textAlign={'center'} fontSize={{ base: 11, lg: 21 }}>
                {el?.text}
              </Text>
            </Stack>
          ))}
        </HStack>
      </Box>
    </Container>
  );
}

export default WhyUs;
