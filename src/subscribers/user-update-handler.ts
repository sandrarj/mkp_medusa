import { 
    UserService,
    type SubscriberConfig, 
    type SubscriberArgs, 
  } from "@medusajs/medusa"
  
  export default async function userUpdateHandler({ 
    data, eventName, container, pluginOptions, 
  }: SubscriberArgs<Record<string, any>>) {
    const userService: UserService = container.resolve(
      "userService"
    )
  
    const { id } = data
  
    const user = await userService.retrieve(id)
  
    // do something with the user...
    console.log('userUpdateHandler: executed.....')
  }
  
  export const config: SubscriberConfig = {
    event: UserService.Events.UPDATED,
    context: {
      subscriberId: "user-update-handler",
    },
  }