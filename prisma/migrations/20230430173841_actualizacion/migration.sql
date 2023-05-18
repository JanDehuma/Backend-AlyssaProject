-- AlterTable
ALTER TABLE `Propiedades` MODIFY `estado` BOOLEAN NOT NULL DEFAULT true;

ALTER TABLE `Mantenimientos` ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT true;


