import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import { useParams,Link as Routerid } from 'react-router-dom';
  export default function Productcard({Id,name,image,price,rating,off}) {
    return (
      <Center py={12}>
        <Routerid to={`/product/${Id}`}>
        <Box
          role={'group'}
          p={4}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
             
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}

            />
          </Box>
          <Stack pt={10} align={'center'}>
          <Text fontWeight={800} fontSize={'xl'}>
                name:{name}
              </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'l'}>
                price:{price}
              </Text>
              
            </Stack>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'l'}>
                rating:{rating}
              </Text>
              
            </Stack>
          </Stack>
        </Box>
        </Routerid>
      </Center>
    );
  }