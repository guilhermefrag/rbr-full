import { api } from '@/lib/axios';
import { Employee } from '@/types/server/employee';

type FetchEmployeeResponse = {
  employees: Employee[]
}

export async function fetchEmployees(): Promise<FetchEmployeeResponse>{
  const response = await api.get('/employees')
  return { employees: response.data }
}