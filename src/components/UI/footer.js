import React from 'react'
import {Box, VStack, HStack, Text, Image} from '@chakra-ui/react'

import TravelLogo from '../../assets/icons/logo.svg'

const Footer = () => {
  return (
      <Box w={'100%'} padding={'3rem'} display={'flex'} flexDirection={'column'} bgColor={'#333333'} >
            <Image src={ TravelLogo } width={'150px'} alt="TravelBear Logo" />

            <Box display={'flex'} w='298px' alignSelf='flex-start' mt='1rem' flexDirection={'column'} >
                <Text color='#fff' >Experience comfort and adventure</Text>
                <Text mt='0.5rem' color='#fff'>Experience comfort and adventure Experience comfort and adventure </Text>
                <HStack>
                
                </HStack>
            </Box>
            
      </Box>
  )
}

export default Footer