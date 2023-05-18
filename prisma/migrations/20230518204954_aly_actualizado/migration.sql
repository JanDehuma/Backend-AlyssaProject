/*
  Warnings:

  - Added the required column `idPropietario` to the `Contrato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Contrato` ADD COLUMN `idPropietario` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_idPropietario_fkey` FOREIGN KEY (`idPropietario`) REFERENCES `Propietarios`(`idPropietario`) ON DELETE RESTRICT ON UPDATE CASCADE;
