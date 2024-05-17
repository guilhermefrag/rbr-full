import { EmployeeMongoRepository } from '../../../database/mongo-repositories/employee-mongo-repositories'

export class DeleteEmployeeUseCase {
  constructor(private employeeRepository: EmployeeMongoRepository) {}

  async execute(id: string): Promise<boolean> {
    try {
      return await this.employeeRepository.delete(id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}