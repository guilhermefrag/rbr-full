import { updateEmployee } from '@/api/update-employee'
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

interface EditEmployeesModalProps {
  employee: Employee
}

export function EditEmployeesModal({ employee }: EditEmployeesModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [name, setName] = useState(employee.name)
  const [role, setRole] = useState(employee.role)
  const [department, setDepartment] = useState(employee.department)

  function handleEditEmployee() {
    const updatedEmployee: Employee = {
      ...employee,
      name,
      role,
      department
    }
    
    if (!updatedEmployee._id) {
      Toast({
        title: 'Error',
        description: 'Something went wrong on update employee. Please try again.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    const response = updateEmployee({ id: updatedEmployee._id, employee: updatedEmployee })
    if (!response) {
      Toast({
        title: 'Error',
        description: 'Something went wrong on update employee. Please try again.',
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
      <Button colorScheme='blue' className='mx-2' onClick={onOpen}>Edit</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Role</FormLabel>
              <Input
                placeholder='Role'
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Department</FormLabel>
              <Input
                placeholder='Department'
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleEditEmployee}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
