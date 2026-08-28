import { Injectable } from '@nestjs/common';
import { Loan } from './loan.interface.js';

@Injectable()
export class LoansService {
    private loans: Loan []= [
        { id: 1, student: 'Laura', equipment: 'Café latte', status: 'returned' },
        
        { id: 2, student: 'Mateo', equipment: 'Sándwich', status: 'borrowed' },
    ]

       getAllLoans(): Loan [] {
            return this.loans
        }
}

