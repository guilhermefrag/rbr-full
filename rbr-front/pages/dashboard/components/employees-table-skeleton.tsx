import { Skeleton, SkeletonText } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

export function EmployeesTableSkeleton() {
  return (
    <TableContainer className='flex w-full mx-20 my-20 border-black border-2 rounded-xl'>
      <Table variant='simple'>
        <Tbody>
          {[...Array(5)].map((_, index) => (
            <Tr key={index}>
              <Td><SkeletonText mt='4' noOfLines={1} spacing='4' /></Td>
              <Td><SkeletonText mt='4' noOfLines={1} spacing='4' /></Td>
              <Td><SkeletonText mt='4' noOfLines={1} spacing='4' /></Td>
              <Td><SkeletonText mt='4' noOfLines={1} spacing='4' /></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}