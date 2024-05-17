import { CreateEmployeeUseCase } from '../repositories/use-cases/create-employee'
import { UpdateEmployeeUseCase } from '../repositories/use-cases/update-employee'
import { GetEmployeeUseCase } from '../repositories/use-cases/get-employee'
import { FetchEmployeesUseCase } from '../repositories/use-cases/fetch-employees'
import { DeleteEmployeeUseCase } from '../repositories/use-cases/delete-employee'

export class EmployeeController {
  constructor(
    private createEmployeeUseCase: CreateEmployeeUseCase,
    private updateEmployeeUseCase: UpdateEmployeeUseCase,
    private getEmployeeUseCase: GetEmployeeUseCase,
    private fetchEmployeesUseCase: FetchEmployeesUseCase,
    private deleteEmployeeUseCase: DeleteEmployeeUseCase
  ) {}

  async create(req: any, res: any) {
    try {
      const { name, role, department, admission_date } = req.body
      const newEmployee = await this.createEmployeeUseCase.execute({ name, role, department, admission_date })
      res.status(201).json(newEmployee)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

  async update(req: any, res: any) {
    try {
      const { id } = req.params
      const { name, role, department, admission_date } = req.body
      const updatedEmployee = await this.updateEmployeeUseCase.execute(id, { name, role, department, admission_date })
      res.status(200).json(updatedEmployee)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

  async get(req: any, res: any) {
    try {
      const { id } = req.params
      const employee = await this.getEmployeeUseCase.execute(id)
      res.status(200).json(employee)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

  async fetch(req: any, res: any) {
    try {
      const employees = await this.fetchEmployeesUseCase.execute()
      res.status(200).json(employees)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

  async delete(req: any, res: any) {
    try {
      const { id } = req.params
      const deleted = await this.deleteEmployeeUseCase.execute(id)
      res.status(200).json(deleted)
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }

}