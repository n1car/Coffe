import { Injectable, NotFoundException } from '@nestjs/common';
import { Loan } from './loan.interface.js';
import { CreateLoanDto } from './dto/create-loan.dto.js';

@Injectable()
export class LoansService {
  private loans: Loan[] = [
    { id: 1, student: 'Laura', equipment: 'Laptop', status: 'returned' },
    { id: 2, student: 'Mateo', equipment: 'Tablet', status: 'borrowed' },
  ];

  private nextId = 3;

  getAllLoans(): Loan[] {
    return this.loans;
  }

  getLoansByStatus(status: 'borrowed' | 'returned'): Loan[] {
    return this.loans.filter((loan) => loan.status === status);
  }

  createLoan(createLoanDto: CreateLoanDto): Loan {
    const newLoan: Loan = {
      id: this.nextId++,
      student: createLoanDto.student,
      equipment: createLoanDto.equipment,
      status: 'borrowed',
    };

    this.loans.push(newLoan);
    return newLoan;
  }

  deleteLoan(id: number): Loan {
    const index = this.loans.findIndex((loan) => loan.id === id);

    if (index === -1) {
      throw new NotFoundException(`Loan with id ${id} not found`);
    }

    const deletedLoan = this.loans[index];
    this.loans.splice(index, 1);

    return deletedLoan;
  }
}