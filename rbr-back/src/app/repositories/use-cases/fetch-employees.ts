import { EmployeeMongoRepository } from '../../../database/mongo-repositories/employee-mongo-repositories'

export class FetchEmployeesUseCase {
  constructor(private employeeRepository: EmployeeMongoRepository) {}

  async execute(): Promise<any[] | []> {
    try {
      return await this.employeeRepository.findAll()
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}