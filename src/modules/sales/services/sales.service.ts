import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sale } from '../entities/sale.entity';
import { CreateSaleDto, UpdateSaleDto } from '../dto/sale.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private readonly saleRepository: Repository<Sale>
  ) {}

  async create(createSaleDto: CreateSaleDto): Promise<Sale> {
    try {
      const sale = this.saleRepository.create(createSaleDto);
      await this.saleRepository.save(sale);
      return sale;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error al crear la venta');
    }
  }

  async findAll(): Promise<Sale[]> {
    return await this.saleRepository.find({});
  }

  async findOne(id: number): Promise<Sale> {
    const sale = await this.saleRepository.findOne({
      where: { id },
      relations: ['customer', 'vehicle', 'vehicle.model', 'vehicle.model.brand'],
    });
    
    if (!sale) {
      throw new NotFoundException(`Venta con id ${id} no encontrada`);
    }
    return sale;
  }

  async update(id: number, updateSaleDto: UpdateSaleDto): Promise<Sale> {
    const sale = await this.findOne(id);
    Object.assign(sale, updateSaleDto);
    return await this.saleRepository.save(sale);
  }

  async remove(id: number): Promise<Sale> {
    const sale = await this.findOne(id);
    return await this.saleRepository.remove(sale);
  }
}