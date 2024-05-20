import { Column, Entity } from "typeorm"
import { Order as MedusaOrder} from "@medusajs/medusa"

@Entity()
export class Order extends MedusaOrder {
  @Column()
  store_id: string;
}