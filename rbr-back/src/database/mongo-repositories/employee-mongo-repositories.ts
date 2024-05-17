import { Employee } from '../../app/types/employee'

export abstract class EmployeeMongoRepository {
  abstract findAll(): Promise<any[] | []>
  abstract findById(id: string): Promise<any | null>
  abstract create(employee: Employee): Promise<any>
  abstract update(id: string, employee: Employee): Promise<any | null>
  abstract delete(id: string): Promise<boolean>
}