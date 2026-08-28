import { Injectable } from '@nestjs/common';
import { Order } from './order.interface.js';

@Injectable()
export class OrdersService {
    private orders: Order[] = [
        { id: 1, customer: 'Laura', item: 'Café latte', status: 'pending' },
        { id: 2, customer: 'Mateo', item: 'Sándwich', status: 'ready' },
    ]


    getAllOrders(): Order[] {
        return this.orders
    }
    deleteAllOrders (): Order[] {
        return this.orders = [];
    }


}

