import { Button, Stack,Text} from '@chakra-ui/react';
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
    const handleClick=()=>{
      alert('Thank you for Visiting The Website.You Have Successfully Purchase the Product.')

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
              <Text>Name:{name}</Text>
              <Text>price: $ {price}</Text>
              <button onClick={()=>setCount(Count-1)} disabled={Count===1}>-</button>
              <button>{Count}</button>
              <button onClick={()=>setCount(Count+1)}>+</button>
              <Text>TotalPrice: $ {Math.floor(Count * price)}</Text>
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