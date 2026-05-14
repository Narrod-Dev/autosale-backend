import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from '../entities/brand.entity';
import { Repository } from 'typeorm';
import { CreateBrandDto, UpdateBrandDto } from '../dto/brand.dto';

@Injectable()
export class BrandsService {
    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>,
    ) {}

    async create(createBrandDto: CreateBrandDto): Promise<Brand> {
        const brand = this.brandRepository.create(createBrandDto);
        return await this.brandRepository.save(brand);
    }

    async findAll(): Promise<Brand[]> {
        return await this.brandRepository.find();
    }

    async findOne(id : number): Promise<Brand> {
        const brand = await this.brandRepository.findOneBy({id});
        if (!brand ) {
            throw new NotFoundException('Brand con id ${id} no encontrado');
        }
        return brand;
    }

    async update(id: number, updateBrandDto: UpdateBrandDto): Promise<Brand> {
        const brand = await this.findOne(id);
        Object.assign(brand, updateBrandDto);
        return await this.brandRepository.save(brand);
    }

    // void se usa para indicar que la función no devuelve ningún valor. En este caso, como la función remove no devuelve ningún valor, es apropiado usar void.
    // Se cambiara el void a futuro porque necesitaremos un registro
    async remove(id: number): Promise<void> {
        const brand = await this.findOne(id);
        await this.brandRepository.remove(brand);
    }
}
