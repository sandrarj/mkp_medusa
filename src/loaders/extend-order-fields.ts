export default async function () {
    const imports = (await import(
      "@medusajs/medusa/dist/api/routes/store/orders/index"
    )) as any
    imports.allowedStoreOrdersFields = [
      ...imports.allowedStoreOrdersFields,
      "store_id",
    ]
    imports.defaultStoreOrdersFields = [
      ...imports.defaultStoreOrdersFields,
      "store_id",
    ]
  }