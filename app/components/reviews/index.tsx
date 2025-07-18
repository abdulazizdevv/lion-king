'use client';
import { Box, Container, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Card } from './reviews-card';
import { keyframes } from '@emotion/react';

const testimonials = [
  {
    id: 1,
    name: 'JOHN',
    review:
      "I've been with this company for over than a  year, and it's been a game-changer for my business. They treat owner-operators with respect, keep the communication open, and make sure you're never sitting without a load. The dispatch  team actually listens and works with you — that alone sets them apart.",
  },
  {
    id: 2,
    name: 'ANNA',
    review:
      'What I appreciate most is their honesty. From day one, they were upfront about rates, routes, and expectations. No surprises, just solid work and steady pay. That kind of transparency is hard to find in this industry',
  },
  {
    id: 3,
    name: 'ROBERT',
    review:
      'The service is top notch. My shipments arrive on time, even when they go through several countries. LION KING is a reliable partner.',
  },
  {
    id: 4,
    name: 'MICHAEL',
    review:
      'The dispatch team is professional and easy to work with — they get that we’re out here trying to run a business, not just clock hours. They plan well, respect my time, and make sure I get home when I ask. That kind of flexibility is why I’ve stuck around.',
  },
  {
    id: 5,
    name: 'DANIEL',
    review:
      'I’ve worked with a few different carriers in my time, and this is the first one that truly delivered on their promises. On-time pay, no forced dispatch, and real support when issues come up. They’ve earned my loyalty.',
  },
  {
    id: 6,
    name: 'LIZA',
    review:
      'Every time I contact LION KING, the staff is super kind and helpful. I feel like they really care. Love this level of service!',
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

function Reviews() {
  return (
    <>
      <Container pt={{ base: '35px', lg: '100px' }}>
        <Text
          color={'primary'}
          textAlign={'center'}
          fontWeight={'semibold'}
          fontSize={{ base: 33, lg: 51 }}
        >
          Reviews
        </Text>
        <Text
          mt={{ base: '11px', lg: '27px' }}
          textAlign={'center'}
          mx={'auto'}
          color={'primary'}
          maxW={'787px'}
          fontSize={{ base: 11, lg: 25 }}
        >
          Discover why businesses trust LION KING for reliable and efficient
          logistics solutions worldwide.
        </Text>
      </Container>
      <Box
        overflow={'hidden'}
        bg={'primary'}
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
          gap={4}
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
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card
              key={`${testimonial.id}-${index}`}
              name={testimonial.name}
              review={testimonial.review}
            />
          ))}
        </HStack>
      </Box>
    </>
  );
}

export default Reviews;
