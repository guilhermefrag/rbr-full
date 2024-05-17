import { Box, Flex, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Separator from './separator';

interface HeaderProps {
  children: ReactNode;
}

export default function Header() {
  return (
    <>
      <header className='h-[6em]'>
        <Box className='bg-green-500 px-4 py-3 h-full flex justify-center'>
          <Flex className='items-center text-xl px-7 border border-gray-300 rounded-lg shadow-lg'>
            <nav className='flex space-x-4'>
              <Link 
                href='/dashboard' 
                className='no-underline transform transition-transform duration-300 hover:scale-105 hover:text-green-200'
                _hover={{ textDecoration: 'none' }}
              >
                Dashboard
              </Link>
              <Separator />
              <Link 
                href='/employee' 
                className='no-underline transform transition-transform duration-300 hover:scale-105 hover:text-green-200'
                _hover={{ textDecoration: 'none' }}
              >
                Employee
              </Link>
            </nav>
          </Flex>
        </Box>
      </header>
    </>
  );
}
