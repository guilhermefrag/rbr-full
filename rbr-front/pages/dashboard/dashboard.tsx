import { fetchEmployees } from '@/api/fetch-employees';
import { useQuery } from '@tanstack/react-query';
import { EmployeesTable } from './components/employees-table';
import { string } from 'zod';

export function Dashboard() {

  const { data: fetchEmployeesData, isLoading: fetchEmployeesIsLoading } = useQuery({
    queryKey: ['fetchEmployees'],
    queryFn: fetchEmployees
  })
  
  return (
    <div className='flex h-full w-full justify-center items-center align-middle'>
      <EmployeesTable
        employees={fetchEmployeesData?.employees || []}
        isLoading={fetchEmployeesIsLoading}
      />
    </div>
  );
}