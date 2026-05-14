import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    ParseIntPipe, 
    Patch, 
    Post 
} from '@nestjs/common';
import { BrandsService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dto/brand.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
    constructor( private readonly brandsService: BrandsService ) {}

    @Post()
    create(@Body() createBrandDto: CreateBrandDto) {
        return this.brandsService.create(createBrandDto);
    }

    @Get()
    findAll() {
        return this.brandsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.brandsService.findOne(id);
    }

    // Patch se usa para actualizar parcialmente un recurso, mientras que Put se usa para reemplazar completamente un recurso. En este caso, como solo queremos actualizar algunos campos de la marca, es más apropiado usar Patch.
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number,
    @Body() updateBrandDto: UpdateBrandDto) {
        return this.brandsService.update(id, updateBrandDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.brandsService.remove(id);
    }

}
