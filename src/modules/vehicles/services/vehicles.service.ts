import { Injectable } from '@nestjs/common';
<<<<<<< HEAD

@Injectable()
export class VehiclesService {}
=======
import { CreateVehicleDto } from '../dto/vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor() {}

  create(createVehicleDto: CreateVehicleDto) {
    return createVehicleDto;
  }
}
>>>>>>> f88a7f3 (firts commit class 4)
