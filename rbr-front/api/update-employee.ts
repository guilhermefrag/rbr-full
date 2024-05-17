import { api } from '@/lib/axios';
import { Employee } from '@/types/server/employee';

interface UpdateEmployeeProps {
  id: string | undefined,
  employee: Employee
}

type UpdateEmployeeResponse = {
  employee: Employee
}

export async function updateEmployee({ id, employee }: UpdateEmployeeProps): Promise<UpdateEmployeeResponse>{
  const response = await api.put(`/employees/${id}` , employee)

  return { employee: response.data }
}