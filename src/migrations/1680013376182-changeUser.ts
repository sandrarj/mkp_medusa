import { MigrationInterface, QueryRunner } from "typeorm"

class changeUser1680013376182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"user\"" + 
      " ADD COLUMN \"store_id\" text," +
      " ADD COLUMN \"is_admin\" text," +
      " ADD COLUMN \"status\" text"
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"user\" DROP COLUMN \"store_id\""
    )
  }
}

export default changeUser1680013376182