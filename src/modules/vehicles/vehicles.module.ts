import { Module } from '@nestjs/common';
import { VehiclesController } from './controllers/vehicles.controller';
import { VehiclesService } from './services/vehicles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';

@Module({
<<<<<<< HEAD
  imports: [
    TypeOrmModule.forFeature([Vehicle]) // Importante para usar el repositorio
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports: [TypeOrmModule] // Permite que otros módulos vean esta entidad si es necesario
=======
  imports: [TypeOrmModule.forFeature([Vehicle])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports: [VehiclesService],
>>>>>>> f88a7f3 (firts commit class 4)
})
export class VehiclesModule {}
