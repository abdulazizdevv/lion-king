import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Container maxW={'1300px'}>
      <Box
        pt={{ base: '40px', lg: '80px' }}
        px={{ base: '30px', lg: '185px' }}
        rounded={{ base: 8, lg: 30 }}
        bg={'primary'}
      >
        <HStack
          flexWrap={'wrap'}
          w={'full'}
          justifyContent={'space-between'}
          alignItems={'start'}
        >
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Main menu
            </Text>
            <Stack mt={{ base: 7, lg: '50px' }} gap={{ base: 5, lg: 8 }}>
              <Link
                href='#why-us'
                _hover={{ color: 'red' }}
                fontSize={{ base: 13, lg: 24 }}
              >
                Why us
              </Link>
              <Link
                href='#partners'
                _hover={{ color: 'red' }}
                fontSize={{ base: 13, lg: 24 }}
              >
                Partners
              </Link>
              <Link
                href='#reviews'
                _hover={{ color: 'red' }}
                fontSize={{ base: 13, lg: 24 }}
              >
                Reviews
              </Link>
              <Link
                href='#contact'
                _hover={{ color: 'red' }}
                fontSize={{ base: 13, lg: 24 }}
              >
                Contact
              </Link>
            </Stack>
          </Stack>
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Contacts
            </Text>
            <Stack mt={{ base: 7, lg: '50px' }} gap={{ base: 5, lg: 8 }}>
              {/* <Link
                href='tel:6364421334'
                color={'red'}
                fontWeight={'bold'}
                fontSize={{ base: 13, lg: 24 }}
              >
                (636)-442-1334
              </Link> */}
              <Link
                href='tel:6176650707'
                fontWeight={'bold'}
                color={'red'}
                fontSize={{ base: 13, lg: 24 }}
              >
                617-665-0707
              </Link>
              <Box>
                <Text fontWeight={'semibold'} fontSize={{ base: 13, lg: 24 }}>
                  Email:
                </Text>
                <Link
                  href='mailto:lionking.transport.885@gmail.com'
                  fontSize={{ base: 13, lg: 24 }}
                >
                  lionking.transport.885@gmail.com
                </Link>
              </Box>
            </Stack>
          </Stack>
          <Stack color={'light'}>
            <Text fontSize={{ base: 13, lg: 25 }} fontWeight={700}>
              Address
            </Text>
            <Stack
              maxW={'343px'}
              mt={{ base: 7, lg: '50px' }}
              gap={{ base: 5, lg: 8 }}
            >
              <Box
                width={{ base: '186px', lg: '343px' }}
                mt={{ base: '25px', lg: '40px' }}
                height={{ base: '101px', lg: '186px' }}
              >
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58195.81001778325!2d-83.10391985924336!3d40.115087023428565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838ed5a62ca9a49%3A0xc920385261632246!2s2667%20Sawbury%20Blvd%20b%2C%20Columbus%2C%20OH%2043235%2C%20USA!5e0!3m2!1sen!2s!4v1752763804250!5m2!1sen!2s'
                  width='100%'
                  height='100%'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  style={{ border: 0 }}
                />
              </Box>
              <Text
                maxW={{ base: '186px', lg: '343px' }}
                fontSize={{ base: 11, lg: 18 }}
              >
                1600 Heritage Landing Suite 112C, Saint Peters, MO
              </Text>
            </Stack>
          </Stack>
        </HStack>
        <HStack
          display={{ base: 'none', lg: 'flex' }}
          justifyContent={{ base: 'start', lg: 'end' }}
          gap={5}
        >
          <Link
            target='_blank'
            href='https://www.youtube.com/@GFSGROUPLLC'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/youtube.svg'} alt='yotube' />
          </Link>
          <Link
            target='_blank'
            href='https://www.facebook.com/people/GFS-GROUP-LLC/61563779612468/'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/facebook.svg'} alt='yotube' />
          </Link>
          <Link
            target='_blank'
            href='https://www.instagram.com/gfsgroupllc'
            rounded={'full'}
          >
            <Image w={6} src={'/icons/instagram.svg'} alt='yotube' />
          </Link>
        </HStack>
        <Box
          display={{ base: 'none', lg: 'block' }}
          mb={'50px'}
          mt={2}
          h={'1px'}
          bg={'red'}
        />
        <HStack
          fontSize={{ base: 11, lg: 'md' }}
          pb={3}
          justifyContent={'space-between'}
          w={'full'}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Text color={'red'}>© 2025 Gfs-Groupllc. All Rights Reserved.</Text>
          <Link color={'red'}>Terms of Service</Link>
          <Link color={'red'}>Privacy Policy</Link>
        </HStack>
        <HStack
          display={{ base: 'flex', lg: 'none' }}
          justifyContent={'space-between'}
          w={'full'}
          pb={'10px'}
        >
          <Box>
            <HStack
              py={3}
              justifyContent={{ base: 'start', lg: 'end' }}
              gap={5}
            >
              <Link
                target='_blank'
                href='https://www.youtube.com/@GFSGROUPLLC'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/youtube.svg'} alt='yotube' />
              </Link>
              <Link
                target='_blank'
                href='https://www.facebook.com/people/GFS-GROUP-LLC/61563779612468/'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/facebook.svg'} alt='yotube' />
              </Link>
              <Link
                target='_blank'
                href='https://www.instagram.com/gfsgroupllc'
                rounded={'full'}
              >
                <Image w={6} src={'/icons/instagram.svg'} alt='yotube' />
              </Link>
            </HStack>
            <Text fontSize={10} color={'red'}>
              © 2025 Gfs-Groupllc. All Rights Reserved.
            </Text>
          </Box>
          <Stack>
            <Link fontSize={11} color={'red'}>
              Terms of Service
            </Link>
            <Link fontSize={11} color={'red'}>
              Privacy Policy
            </Link>
          </Stack>
        </HStack>
      </Box>
    </Container>
  );
}
