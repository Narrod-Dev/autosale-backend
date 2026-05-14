import { InjectRepository } from "@nestjs/typeorm";
import { VehicleModel } from "../entities/vehicle-model.entity";
import { CreateVehicleModelDto } from "../dto/model.dto";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";


@Injectable()
export class ModelsService {
    constructor(
        @InjectRepository(VehicleModel)
        private readonly vehicleModelRepository: Repository<VehicleModel>,
    ) {}

    async create(
        createVehicleModelDto: CreateVehicleModelDto,
    ): Promise<VehicleModel> {
        const model = this.vehicleModelRepository.create(createVehicleModelDto);
        return await this.vehicleModelRepository.save(model);
    }
}
