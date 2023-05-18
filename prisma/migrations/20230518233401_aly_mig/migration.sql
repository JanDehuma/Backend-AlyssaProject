-- DropForeignKey
ALTER TABLE `Pagos` DROP FOREIGN KEY `Pagos_idContrato_fkey`;

-- AlterTable
ALTER TABLE `Pagos` MODIFY `idContrato` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Pagos` ADD CONSTRAINT `Pagos_idContrato_fkey` FOREIGN KEY (`idContrato`) REFERENCES `Contrato`(`idContrato`) ON DELETE SET NULL ON UPDATE CASCADE;
