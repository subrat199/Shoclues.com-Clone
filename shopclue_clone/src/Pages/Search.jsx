import { Box, Center, Heading, Image, Stack, useColorModeValue,Text } from '@chakra-ui/react'
import React from 'react'

const Search = () => {
  const [text,setText]=React.useState('')
  const [data, setData] = React.useState([])
  const handleChange = (e) => {
    setText(e.target.value)
}
const handleClick=()=>{
  getdata()
  setText("")
}
const getdata =async () =>{
try {
  const res=await fetch(`http://localhost:8080/products?q=${text}`)
  const res2=await res.json()
 setData(res2)
} catch (error) {
  console.log(error)
}
}
  return (
    <div>
      <div>
      <input type="text" style={{border:'1px solid red',width:"200px",marginTop:"20px",borderRadius:"10px"}} onChange={handleChange} value={text} placeholder={"Enter The Product"}/> <br />
      <button onClick={handleClick} style={{}}>Search</button>
      </div>
      {
       data.map((el)=>{
      return (
      // <div key={el.id}>
      //   <img src={el.image} alt="" />
      //   <h5>Name:{el.name}</h5>
      //   <h5>Price:{el.price}</h5>
      //   <h5>Rating:{el.rating}</h5>
      // </div>
      <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={('white', 'gray.800')}
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
            backgroundImage: `url(${el.image})`,
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
            src={el.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'} fontWeight={600}>
           Name: {
              el.name
            }
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'xl'} textColor={"white"}>
              Rs.{el.price}
            </Text>
          </Stack>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'xl'} textColor={"white"}>
              Rating:{el.rating}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
      )
       })
      }
    </div>
  )
}

export default Search