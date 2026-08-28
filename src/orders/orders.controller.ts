import { Controller, Delete, Get } from '@nestjs/common';
import { OrdersService } from './orders.service.js';

@Controller('orders')
export class OrdersController {
    constructor(private readonly OrdersService: OrdersService) {}

    @Get()
    getAllOrders() {
        return this.OrdersService.getAllOrders();
    }

    @Delete("/delete")
    deleteAllOrders (){
        return this.OrdersService.getAllOrders();
    }
}
