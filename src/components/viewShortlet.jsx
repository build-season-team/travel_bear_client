import React from 'react'
import {Box, HStack, Text, Image} from '@chakra-ui/react'
import ButtonComp from './UI/ButtonComp'

import HomeImage from '../assets/images/acommohomes.jpg'

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

const ViewShortlet = ({image, rating, title, amount, }) => {


  return (
    <Box display="flex" flexDirection="column" w="292px" borderRadius={'8px'} h="fit-content">
        <Image src={ HomeImage } borderTopEndRadius={'8px'} borderTopLeftRadius={'8px'} cursor={'pointer'} />

        <Text fontWeight={'bold'} fontSize={'16px'} textAlign='start' mt='1rem'>Exquisite Top Notch Lekki Homes </Text>

        <HStack mt={'1.2rem'}>
            <Text> {amount} </Text>
            <ButtonComp filled text={'Book Now'}/>
        </HStack>
        

    </Box>
  )
}

export default ViewShortlet;
