import { MigrationInterface, QueryRunner } from "typeorm"

class changeOrder1680013376181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"order\"" + 
      " ADD COLUMN \"store_id\" text"
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"order\" DROP COLUMN \"store_id\""
    )
  }
}

export default changeOrder1680013376181