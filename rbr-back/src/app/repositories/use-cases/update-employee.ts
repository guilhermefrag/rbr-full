import { EmployeeMongoRepository } from '../../../database/mongo-repositories/employee-mongo-repositories'
import { Employee } from '../../types/employee'

export class UpdateEmployeeUseCase {
  constructor(private employeeRepository: EmployeeMongoRepository) {}

  async execute(id: string, employee: Employee): Promise<any | null> {
    try {
      return await this.employeeRepository.update(id, employee)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}