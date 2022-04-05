import React from 'react'
import {Box, VStack, HStack, Text, Image, Flex} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

import TravelLogo from '../../assets/icons/logo.svg'
import InstagramIcon from '../../assets/icons/dribbble.svg'
import DribbbleIcon from '../../assets/icons/instagram.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'
import YoutubeIcon from '../../assets/icons/youtube.svg'

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



const Footer = () => {
  return (
    <Box w={'100%'} display={'flex'} color='#fff'  justifyContent={'center'} bgColor={'#0E0E0E'} >
            
            <Box display='flex' padding={'3rem'} flexDirection={'column'} width='80%' justifyContent='center'> 
            
                <Box mt='1rem' display={'flex'} alignSelf='center' >
                    <Image src={ TravelLogo } width={'150px'} alt="TravelBear Logo" /> 
                </Box>
                <HStack justifyContent={'center'} mt='21px'
                flexDirection={{
                    base: 'column',
                    md: 'column',
                    lg: 'row',
                    xl: 'row',
                }}>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Help</Link>
                    <Link to='/'>Partnership</Link>
                </HStack>

                <Flex width='full' borderTop='1px' mt='3rem'>
                    <HStack padding='25px' w='100%' justifyContent='space-between'
                        flexDirection={{
                        base: 'column', // 0-48em
                        md: 'column',
                        lg: 'row', // 48em-80em,
                        xl: 'row', // 80em+
                        }}>
                        <Text> © 2020 TravelBear. All rights reserved </Text>

                        <HStack 
                        alignSelf={{
                            base: 'center',
                            md: 'center',
                            lg: 'flex-end',
                            xl: 'flex-end',
                        }}
                        order={{
                        base: '1', // 0-48em
                        md: '1',
                        lg: '2', // 48em-80em,
                        xl: '2', // 80em+
                        }}> 
                            <Link to='/'> <Image src={ InstagramIcon } alt='Instagram Icon' /> </Link>
                            <Link to='/'> <Image src={ DribbbleIcon } alt='Dribbble Icon' /> </Link>
                            <Link to='/'> <Image src={ TwitterIcon } alt='Twitter Icon' /> </Link>
                            <Link to='/'> <Image src={ YoutubeIcon } alt='Youtube Icon' /> </Link>
                        </HStack>
                    </HStack>
                </Flex>
            </Box>
    </Box>
            
      
  )
}

export default Footer