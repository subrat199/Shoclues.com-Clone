import { Button, Stack,Text} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } 
  from '@chakra-ui/react'
  function Model ({image,price,name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Count,setCount]=useState(1)
    const navigate = useNavigate()
    const handleClick=()=>{
      alert('Thank you for Visiting The Website.You Have Successfully Purchase the Product.')
      setCount(1)
      navigate("/")

    }
    return (
      <>
     `   <Button onClick={onOpen}>ADD TO CART</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack>
              <img src={image} alt="" />
              <Text fontWeight={"800"}>Name:{name}</Text>
              <Text fontWeight={"600"}>price: Rs.{price}</Text>
              {/* <button onClick={()=>setCount(Count-1)} disabled={Count===1}>-</button>
              <button>{Count}</button>
              <button onClick={()=>setCount(Count+1)}>+</button> */}
              <Stack spacing={4} direction='row' align='center'>
  <Button colorScheme='teal' size='xs' onClick={()=>setCount(Count-1)} disabled={Count===1}>
    -
  </Button>
  <Button colorScheme='teal' size='xs'>
   {Count}
  </Button>
  <Button colorScheme='teal' size='xs' onClick={()=>setCount(Count+1)}>
    +
  </Button>
</Stack>
              <Text fontWeight={"600"}>TotalPrice:Rs.{Math.floor(Count * price)}</Text>
            </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={handleClick}>Buy</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Model