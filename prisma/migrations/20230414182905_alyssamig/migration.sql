-- CreateTable
CREATE TABLE `Usuarios` (
    `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `tipoUsuario` INTEGER NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaModificacion` DATETIME(3) NOT NULL,
    `borrado` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Usuarios_correo_key`(`correo`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Propietarios` (
    `idPropietario` INTEGER NOT NULL AUTO_INCREMENT,
    `idUsuario` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apaterno` VARCHAR(191) NOT NULL,
    `amaterno` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `rfc` VARCHAR(191) NOT NULL,
    `tipoPropietario` INTEGER NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaModificacion` DATETIME(3) NOT NULL,
    `borrado` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Propietarios_email_key`(`email`),
    PRIMARY KEY (`idPropietario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arrendatarios` (
    `idArrendatario` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `rfc` VARCHAR(191) NOT NULL,
    `direccion` VARCHAR(191) NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaModificacion` DATETIME(3) NOT NULL,
    `borrado` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Arrendatarios_email_key`(`email`),
    PRIMARY KEY (`idArrendatario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Propiedades` (
    `idPropiedad` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `tipoPropiedad` INTEGER NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `ubicacion` VARCHAR(191) NOT NULL,
    `costo` DOUBLE NOT NULL,
    `anticipioMinimo` DOUBLE NULL,
    `mesesMinimo` INTEGER NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaModificacion` DATETIME(3) NOT NULL,
    `borrado` INTEGER NOT NULL DEFAULT 0,
    `estado` BOOLEAN NOT NULL DEFAULT false,
    `idPropietario` INTEGER NOT NULL,

    PRIMARY KEY (`idPropiedad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mantenimientos` (
    `idMantenimiento` INTEGER NOT NULL AUTO_INCREMENT,
    `tipoMantenimiento` INTEGER NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `proveedor` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `fechaMantenimiento` DATETIME(3) NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaModificacion` DATETIME(3) NOT NULL,
    `borrado` INTEGER NOT NULL DEFAULT 0,
    `idPropiedad` INTEGER NOT NULL,

    PRIMARY KEY (`idMantenimiento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contrato` (
    `idContrato` INTEGER NOT NULL AUTO_INCREMENT,
    `contrato` VARCHAR(191) NOT NULL,
    `tipoContrato` INTEGER NOT NULL,
    `fechaInicio` DATETIME(3) NOT NULL,
    `fechaFin` DATETIME(3) NOT NULL,
    `deposito` DOUBLE NULL,
    `duracion` INTEGER NOT NULL,
    `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fechaModificacion` DATETIME(3) NOT NULL,
    `estado` BOOLEAN NOT NULL DEFAULT true,
    `borrado` INTEGER NOT NULL DEFAULT 0,
    `idPropiedad` INTEGER NOT NULL,
    `idArrendatario` INTEGER NOT NULL,

    PRIMARY KEY (`idContrato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagos` (
    `idPago` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaVencimiento` DATETIME(3) NOT NULL,
    `fechaPago` DATETIME(3) NOT NULL,
    `pago` DOUBLE NOT NULL,
    `numPago` INTEGER NOT NULL,
    `mes` INTEGER NOT NULL DEFAULT 1,
    `anio` INTEGER NOT NULL DEFAULT 0,
    `fechaCracion` DATETIME(3) NOT NULL,
    `fechaModificacion` DATETIME(3) NOT NULL,
    `borrado` INTEGER NOT NULL,
    `idContrato` INTEGER NOT NULL,

    UNIQUE INDEX `Pagos_numPago_key`(`numPago`),
    PRIMARY KEY (`idPago`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Factura` (
    `idFactura` INTEGER NOT NULL AUTO_INCREMENT,
    `rfcPropietario` VARCHAR(191) NOT NULL,
    `rfcArrendatario` VARCHAR(191) NOT NULL,
    `ubicacion` VARCHAR(191) NOT NULL,
    `numFolio` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idFactura`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Propietarios` ADD CONSTRAINT `Propietarios_idUsuario_fkey` FOREIGN KEY (`idUsuario`) REFERENCES `Usuarios`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Propiedades` ADD CONSTRAINT `Propiedades_idPropietario_fkey` FOREIGN KEY (`idPropietario`) REFERENCES `Propietarios`(`idPropietario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mantenimientos` ADD CONSTRAINT `Mantenimientos_idPropiedad_fkey` FOREIGN KEY (`idPropiedad`) REFERENCES `Propiedades`(`idPropiedad`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_idPropiedad_fkey` FOREIGN KEY (`idPropiedad`) REFERENCES `Propiedades`(`idPropiedad`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_idArrendatario_fkey` FOREIGN KEY (`idArrendatario`) REFERENCES `Arrendatarios`(`idArrendatario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pagos` ADD CONSTRAINT `Pagos_idContrato_fkey` FOREIGN KEY (`idContrato`) REFERENCES `Contrato`(`idContrato`) ON DELETE RESTRICT ON UPDATE CASCADE;
