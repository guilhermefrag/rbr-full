import { EmployeeMongoRepository } from '../../../database/mongo-repositories/employee-mongo-repositories'
import { Employee } from '../../types/employee'

export class CreateEmployeeUseCase{
  constructor(private employeeRepository: EmployeeMongoRepository){}
  
  async execute(employee: Employee): Promise<Employee>{
    try{
      return await this.employeeRepository.create(employee)
    }catch(error: any){
      throw new Error(error.message)
    }
    
  }
}