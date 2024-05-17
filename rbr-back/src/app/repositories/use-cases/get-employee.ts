import { EmployeeMongoRepository } from '../../../database/mongo-repositories/employee-mongo-repositories'

export class GetEmployeeUseCase {
  constructor(private employeeRepository: EmployeeMongoRepository) {}

  async execute(id: string): Promise<any> {
    try {
      return await this.employeeRepository.findById(id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}