export default async function () {
    const imports = (await import(
      "@medusajs/medusa/dist/api/routes/admin/users/index"
    )) as any
    imports.allowedStoreUsersFields = [
      ...imports.allowedStoreUsersFields,
      "store_id","is_admin","status"
    ]
    imports.defaultStoreUsersFields = [
      ...imports.defaultStoreUsersFields,
      "store_id","is_admin","status"
    ]
  }