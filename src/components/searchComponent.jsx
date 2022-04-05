import React from 'react'
import {Box, VStack, HStack, Text, Image, Flex, Select, InputGroup, Input, InputLeftElement, InputRightElement, Button, Avatar} from '@chakra-ui/react'
import ButtonComp from './UI/ButtonComp'


import HousingIcon from '../assets/icons/building.svg'
import AirplaneIcon from '../assets/icons/airplane.svg'
import HeartIcon from '../assets/icons/orange-heart.svg'
import HouseIcon from '../assets/icons/house.svg'
import SearchIcon from '../assets/icons/search.svg'

// Reponsive styling
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


    
    // 2. Update the breakpoints as key-value pairs
    const breakpoints = createBreakpoints({
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1536px',
    })
    
    // 3. Extend the theme
    const theme = extendTheme({ breakpoints })



const SearchComponent = () => {
  return (
    <Box width='100%' display='flex' justifyContent='center'>
        
        <Box display='flex' zIndex='100' bgColor='#fff' justifyContent='space-between' marginTop='4rem' width='90%' padding='2rem' height='fit-content' borderRadius='8px'
        direction={{
          base: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
          '2x1': 'row',
        }}>
            <Box width='60%' display={'flex'} bgColor='inherit' justifyContent='space-between' 
            direction={{
              base: 'column',
              md: 'column',
              lg: 'row',
              xl: 'row',
              '2x1': 'row',
            }} >
             
              <HStack paddingLeft='10px' borderRadius='4px' bgColor='#007AEC1A' > 
                  <Image src={ HousingIcon } size='40%' cursor='pointer' />
                  <Select cursor='pointer' color='#000' border='0px' placeholder='Book Acommodation'>
                    <option color='#000'  value='hotels'>Hotels</option>
                    <option color='#000' value='shortlets'>Shortlets</option>
                  </Select>
              </HStack>

              <HStack borderRadius='4px' padding='10px' cursor='pointer' bgColor='#FF4B4B1A'>
                  <Image src={ AirplaneIcon } bgColor='inherit' alt='airplane Icon' />
                  <Text color='#000' bgColor='#FF4B4B1A'>Travel</Text>
              </HStack> 

              <HStack padding='10px' borderRadius='4px' cursor='pointer' bgColor='#FC980F1A'>
                  <Image src={ HeartIcon } bgColor='#FC980F1A' alt='airplane Icon' />
                  <Text color='#000' bgColor='#FC980F1A' >Trips</Text>
              </HStack>

              <HStack padding='10px' borderRadius='4px' cursor='pointer' bgColor='#167BA91A'>
                  <Image src={ HouseIcon } bgColor='inherit' alt='airplane Icon' />
                  <Text color='#000' bgColor='inherit' >Lease Shortlets</Text>
              </HStack> 
            </Box>

            <Box w='40%' display={'flex'} bgColor='inherit' justifyContent='flex-end'>
                <InputGroup bgColor='inherit' w='80%'>
                  <Input placeholder='Quick search by type, city' />
                  <InputRightElement  padding='10px' children={ <ButtonComp filled icon={ <Avatar size='20px' bgColor='#fff' src={ SearchIcon } /> } />} />
                </InputGroup>

            </Box>

            
            
        </Box>
        
    </Box>
  )
}

export default SearchComponent