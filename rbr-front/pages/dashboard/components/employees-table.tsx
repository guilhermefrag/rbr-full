import { Employee } from '@/types/server/employee';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import { EmployeesTableSkeleton } from './employees-table-skeleton';
import { EditEmployeesModal } from './edit-employee-modal';
import { DeleteEmployeeModal } from './delete-employee-modal';
import { CreateEmployeeModal } from './create-employee-modal';

interface EmployeesTableProps {
  employees: Employee[];
  isLoading: boolean;
}

export function EmployeesTable({ employees, isLoading }: EmployeesTableProps) {
  return (
    <>
      {isLoading ? (
        <EmployeesTableSkeleton />
      ) : (
        <div className="flex flex-col w-full mx-20 my-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Employee List</h2>
            <CreateEmployeeModal />
          </div>
          <TableContainer className="border-black border-2 rounded-xl">
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Role</Th>
                  <Th>Department</Th>
                  <Th>Admission Date</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {employees.map((employee) => (
                  <Tr key={employee._id}>
                    <Td>{employee.name}</Td>
                    <Td>{employee.role}</Td>
                    <Td>{employee.department}</Td>
                    <Td>{employee.admission_date}</Td>
                    <Td>
                      <EditEmployeesModal 
                        key={`edit-${employee._id}`}
                        employee={employee}
                      />
                      <DeleteEmployeeModal 
                        key={`delete-${employee._id}`}
                        id={employee._id}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
