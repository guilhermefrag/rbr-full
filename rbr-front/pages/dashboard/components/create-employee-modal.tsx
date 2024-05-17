import { createEmployee } from '@/api/create-employee'
import { Employee } from '@/types/server/employee'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Button,
  FormLabel,
  Input,
  Toast,
} from '@chakra-ui/react'
import { useState } from 'react'

export function CreateEmployeeModal() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [name, setName] = useState<string>('')
  const [role, setRole] = useState<string>('')
  const [department, setDepartment] = useState<string>('')

  async function handleCreateEmployee() {
    const newEmployee: Employee = {
      name,
      role,
      department,
      admission_date: new Date().toISOString().replace(/T.*/, '').replace(/-/g, '/')
    }

    const response = await createEmployee({ employee: newEmployee })

    if (!response) {
      Toast({
        title: 'Error',
        description: 'Something went wrong on create employee. Please try again.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    window.location.reload();
    onClose()
  }

  return (
    <>
      <Button colorScheme='green' className='ml-3' onClick={onOpen}>Add Employee</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input
                placeholder='Role'
                onChange={(e) => setRole(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Department</FormLabel>
              <Input
                placeholder='Department'
                onChange={(e) => setDepartment(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={handleCreateEmployee}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}