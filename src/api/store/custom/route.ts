import type { 
    MedusaRequest, 
    MedusaResponse,
  } from "@medusajs/medusa"
import UserRepository from "src/repositories/user"
  
  import { EntityManager } from "typeorm"
  
  export const GET = async (
    req: MedusaRequest, 
    res: MedusaResponse
  ) => {
    // ...
  
    const userRepository: typeof UserRepository = 
    req.scope.resolve(
      "userRepository"
    )
    const manager: EntityManager = req.scope.resolve("manager")
    const productRepo = manager.withRepository(
      userRepository
    )
    productRepo.customFunction()
  
    // ...
  }