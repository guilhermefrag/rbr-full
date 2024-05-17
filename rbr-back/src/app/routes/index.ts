// employee-routes.js

import express from 'express'
import { EmployeeRepository } from '../repositories/employee/employee-repository'

import { CreateEmployeeUseCase } from '../repositories/use-cases/create-employee'
import { UpdateEmployeeUseCase } from '../repositories/use-cases/update-employee'
import { GetEmployeeUseCase } from '../repositories/use-cases/get-employee'
import { FetchEmployeesUseCase } from '../repositories/use-cases/fetch-employees'
import { DeleteEmployeeUseCase } from '../repositories/use-cases/delete-employee'

import { EmployeeController } from '../controllers/employee-controller'

const employeeRepository = new EmployeeRepository()

const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository)
const updateEmployeeUseCase = new UpdateEmployeeUseCase(employeeRepository)
const getEmployeeUseCase = new GetEmployeeUseCase(employeeRepository)
const fetchEmployeesUseCase = new FetchEmployeesUseCase(employeeRepository)
const deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeeRepository)

const employeeController = new EmployeeController(
  createEmployeeUseCase,
  updateEmployeeUseCase,
  getEmployeeUseCase,
  fetchEmployeesUseCase,
  deleteEmployeeUseCase
)

const router = express.Router()

router.use(express.json())

router.post('/employees', (req, res) => employeeController.create(req, res))
router.get('/employees', (req, res) => employeeController.fetch(req, res))
router.get('/employees/:id', (req, res) => employeeController.get(req, res))
router.put('/employees/:id', (req, res) => employeeController.update(req, res))
router.delete('/employees/:id', (req, res) => employeeController.delete(req, res))

export default router
