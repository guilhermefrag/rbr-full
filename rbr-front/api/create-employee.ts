import { api } from '@/lib/axios';
import { Employee } from '@/types/server/employee';


interface CreateEmployeeProps {
  employee: Employee
}

type CreateEmployeeResponse = {
  status: number
}

export async function createEmployee({ employee } : CreateEmployeeProps): Promise<CreateEmployeeResponse>{
  const response = await api.post('/employees', employee)

  return { status: response.status }
}