import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { PanaderiaService } from './panaderia.service';

@Controller('panaderia')
export class PanaderiaController {

    constructor(private readonly panaderiaService: PanaderiaService) {}

    @Get('find')
    async panaderias() {
        return this.panaderiaService.panaderias();
    }

    @Post('create')
    async createCustomer(@Body() dto: any) {
        console.log('dto', dto);
        return this.panaderiaService.createCustomer(dto);
    }

    @Put('update/:id')
    async updateCustomer(@Param('id') id: number , @Body() dto: any) {
        console.log('dto', dto);
        return this.panaderiaService.updateCustomer(id, dto);
    }

    @Put('delete/:id')
    async deleteCustomer(@Param('id') id: number ) {
        return this.panaderiaService.deleteCustomer(id);
    }
}
