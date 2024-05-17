import { deleteEmployee } from '@/api/delete-employee'
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
  Toast,
} from '@chakra-ui/react'

interface DeleteEmployeesModalProps {
  id: string | undefined
}

export function DeleteEmployeeModal({ id }: DeleteEmployeesModalProps) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleDeleteEmployee() {
    const response = deleteEmployee({ id })
    if (!response) {
      Toast({
        title: 'Error',
        description: 'Something went wrong on delete employee. Please try again.',
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
      <Button colorScheme='red' className='mx-2' onClick={onOpen}>Delete</Button>
      <Modal isOpen={isOpen} onClose={onClose}>

        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Employee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Are you sure you want to delete this employee?</FormLabel>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <div className='flex gap-4'>
              <Button colorScheme='red' onClick={handleDeleteEmployee}>Delete</Button>
              <Button colorScheme='blue' onClick={onClose}>Cancel</Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}