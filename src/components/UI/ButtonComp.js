import React from 'react';
import '../UI/ButtonComp.css';

import { Box } from '@chakra-ui/react';


export const ButtonComp = ({ filled, text, icon, ...props }) => {
    return (
        <Box
            as='button'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='20px'
            py='12px'
            borderRadius='8px'
            fontSize='14px'
            fontWeight='semibold'
            bg={filled ? '#007AEC' : 'transparent'}
            borderColor={filled ? null : '#007AEC'}
            color={filled ? '#ffffff' : '#007AEC'}
            _hover={{ bg: '#003D76', borderColor:'#003D76', color:'#fff' }}
            _disabled={{ bg: '#55A6F2' }}
            _active={{
                bg: '#2A90EF',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _focus={{
                boxShadow:
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            {...props}
        >
            {text}   {icon}
        </Box>
    );
};

export default ButtonComp;