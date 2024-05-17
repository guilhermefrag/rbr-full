import { api } from '@/lib/axios';
import { Employee } from '@/types/server/employee';

interface GetEmployeeProps {
  id: number
}

type GetEmployeeResponse = {
  employee: Employee
}

export async function getEmployee({ id }: GetEmployeeProps): Promise<GetEmployeeResponse>{
  const response = await api.get(`/employees/${id}`)

  return { employee: response.data }
}