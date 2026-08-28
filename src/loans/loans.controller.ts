import { Controller, Delete, Get  } from '@nestjs/common';
import { LoansService } from './loans.service.js';

@Controller('loans')
export class LoansController {
    constructor (private readonly Loans)

      @Get()
    getAllLoans() {
        return this.LoansService.getAllLoans();
    }
}


  
