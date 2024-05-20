import { 
    OrderService,
    type SubscriberConfig, 
    type SubscriberArgs, 
  } from "@medusajs/medusa"
  
  export default async function orderUpdateHandler({ 
    data, eventName, container, pluginOptions, 
  }: SubscriberArgs<Record<string, any>>) {
    const orderService: OrderService = container.resolve(
      "orderService"
    )
  
    const { id } = data
  
    const order = await orderService.retrieve(id)
  
    // do something with the order...
    console.log('orderUpdateHandler: executed.....')
  }
  
  export const config: SubscriberConfig = {
    event: OrderService.Events.UPDATED,
    context: {
      subscriberId: "order-update-handler",
    },
  }