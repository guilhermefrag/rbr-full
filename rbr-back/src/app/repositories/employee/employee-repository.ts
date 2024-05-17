import { EmployeeMongoRepository } from '../../../database/mongo-repositories/employee-mongo-repositories'
import { Employee as EmployeeModel } from '../../../database/models/employee'
import { connection } from '../../../database/connection'
import { Employee } from '../../types/employee'

export class EmployeeRepository implements EmployeeMongoRepository {
  async findAll() {
    try {
      await connection()
      const employees = await EmployeeModel.find()
      return employees
    } catch (error) {
      throw new Error('Erro ao buscar todos os funcionários: ' + error)
    }
  }
  async findById(id: string) {
    try {
      await connection()
      const employee = await EmployeeModel.findById(id)
      return employee
    } catch (error) {
      throw new Error('Erro ao buscar um funcionário: ' + error)
    }
  }
  async create(employee: Employee) {
    try {
      await connection()
      const { name, role, department, admission_date } = employee
      const newEmployee = new EmployeeModel({ name, role, department, admission_date })
      await newEmployee.save()
      return newEmployee
    } catch (error) {
      throw new Error('Erro ao criar um novo funcionário: ' + error)
    }
  }
  async update(id: string, employee: Employee) {
    try {
      await connection()
      const { name, role, department, admission_date } = employee
      const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, { name, role, department, admission_date }, { new: true })
      return updatedEmployee
    } catch (error) {
      throw new Error('Erro ao atualizar um funcionário: ' + error)
    }
  }
  async delete(id: string) {
    try {
      await connection()
      await EmployeeModel.findByIdAndDelete(id)
      return true
    } catch (error) {
      throw new Error('Erro ao deletar um funcionário: ' + error)
    }
  }

}