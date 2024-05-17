import { api } from '@/lib/axios';
import { Employee } from '@/types/server/employee';

interface DeleteEmployeeProps {
  id: string | undefined
}

type DeleteEmployeeResponse = {
  deleted: boolean
}

export async function deleteEmployee({ id }: DeleteEmployeeProps): Promise<DeleteEmployeeResponse>{
  const response = await api.delete(`/employees/${id}`)

  return { deleted: response.data }
}