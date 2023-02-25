import React from 'react'
import {Link as ReactLink, Navigate} from  'react-router-dom'
import { VStack } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('black', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
         <ReactLink to='/'>
         <img src="https://live.staticflickr.com/7026/6820841979_823ae095c9_b.jpg" alt="" width={"200px"} height={"70px"} border={"none"}/>
         </ReactLink>
          </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-start'}
          direction={'row'}
          spacing={6}>
            <ReactLink to='/store'>
            <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Store
          </Text>
            </ReactLink>  
          <ReactLink to='/men'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Men
          </Text>
          </ReactLink>
          <ReactLink to='/women'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
              Women
          </Text>
          </ReactLink>
          <ReactLink to='/onlyApple'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            OnlyApple
          </Text>
          </ReactLink>
          <ReactLink to='/accessories'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Accessories
          </Text>
          </ReactLink>
          <ReactLink to='/support'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Support
          </Text>
          </ReactLink>
          <ReactLink to='/login'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Login
          </Text>
          </ReactLink>
          <ReactLink to='/admin'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Admin
          </Text>
          </ReactLink>
          <ReactLink to='/search'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Search
          </Text>
          </ReactLink>
          <ReactLink to='/addtocart'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
             cart
          </Text>
          </ReactLink>
          <ReactLink to='/signup'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Signup
          </Text>
          </ReactLink>
        </Stack>
      </Flex>
      <VStack>
        <Text w={'100%'} bg='teal' color='white' padding={'10px'} border='grey' marginTop={'-2px'}>
        Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank credit cards.‡ Plus No Cost EMI from most leading banks.‡‡ Shop now
         </Text>
    </VStack>
    {/* <Introducing/>       */}
      <Collapse in={isOpen} animateOpacity>
      </Collapse>
      <Stack
          flex={{ base: 1, md: 0 }}
          justify={'space-evenly'}
          direction={'row'}
          border={"1px solid black"}
          height={"50px"}
          align={"center"}
          marginTop={'5px'}
          bg={"#A52A2A"}
          color={"white"}
          
          spacing={6}>
            <ReactLink to='/timesales'>
            <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Time Sales
          </Text>
            </ReactLink>
          <ReactLink to='/Food & Beverage'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Food & Beverage
          </Text>
          </ReactLink>
          <ReactLink to='/Flu Care'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
              Flu Care
          </Text>
          </ReactLink>
          <ReactLink to='/Personal Hygiene'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
           Personal Hygiene
          </Text>
          </ReactLink>
          <ReactLink to='/Home Cleaning'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Home Cleaning
          </Text>
          </ReactLink>
          <ReactLink to='/Nutrition & Supplement'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
         Nutrition & Supplement
          </Text>
          </ReactLink>
          <ReactLink to='/ Kitchen & Dining'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Kitchen & Dining
          </Text>
          </ReactLink>
          <ReactLink to='/Refurbished Mobiles'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
          Refurbished Mobiles
          </Text>
          </ReactLink>
          <ReactLink to='/Mobile Accessories'>
          <Text
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Mobile Accessories
          </Text>
          </ReactLink>
        </Stack>  
    </Box>
  );
}
const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    <Stack direction={'row'} spacing={4}>
        <Box>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                
              </Link>
            </PopoverTrigger>
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                 
                </Stack>
              </PopoverContent>
          </Popover>
        </Box>
    </Stack>
  );
};
