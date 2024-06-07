import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PanaderiaService {
  constructor(private prisma: PrismaService) {}

  async panaderias() {
    try {
      const customers = await this.prisma.customers.findMany();
      // Convertimos cada BigInt a String
      return customers;
    } catch (error) {
      console.error('Error al obtener los clientes:', error);
      throw error;
    }
  }

  async panaderia(id: number) {
    return this.prisma.customers.findUnique({
      where: { id },
    });
  }

  async createCustomer(dto: any) {
    try {
      const newCustomer = await this.prisma.customers.create({
        data: dto,
      });
      return newCustomer;
    } catch (error) {
      console.error('Error al crear el cliente:', error);
      throw error;
    }
  }

  async updateCustomer(id: number, dto: any) {
    try {
      const updatedCustomer = await this.prisma.customers.update({
        where: { id: Number(id) },
        data: dto,
      });
      return updatedCustomer;
    } catch (error) {
      console.error('Error al actualizar el cliente:', error);
      throw error;
    }
  }

  async deleteCustomer(id: number) {
    try {
      const deletedCustomer = await this.prisma.customers.update({
        where: { id: Number(id) },
        data: { status: false },
      });
      return deletedCustomer;
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
      throw error;
    }
  }
}
