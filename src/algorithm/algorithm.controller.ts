import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { AlgorithmService } from './algorithm.service';
import { CreateAlgorithmDto } from './dto/create-algorithm.dto';
import { UpdateAlgorithmDto } from './dto/update-algorithm.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Algorithm')
@Controller('algorithm')
export class AlgorithmController {
  constructor(private readonly algorithmService: AlgorithmService) {}

  @Post()
  async create(@Body() createAlgorithmDto: CreateAlgorithmDto) {
    return await this.algorithmService.create(createAlgorithmDto);
  }

  @Get()
  async findAll() {
    return await this.algorithmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.algorithmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlgorithmDto: UpdateAlgorithmDto) {
    return this.algorithmService.update(+id, updateAlgorithmDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.algorithmService.remove(id);
  }
}
