import { Lifetime } from "awilix"
import { 
  TransactionBaseService, 
  User,
} from "@medusajs/medusa"

class HelloService extends TransactionBaseService {

  protected readonly loggedInUser_: User | null
  // The default life time for a core service is SINGLETON
  static LIFE_TIME = Lifetime.SCOPED

  constructor(container, options) {
    super(arguments)

    try {
      this.loggedInUser_ = container.loggedInUser
    } catch (e) {
      // avoid errors when backend first runs
    }
  }

  // ...
}

export default HelloService