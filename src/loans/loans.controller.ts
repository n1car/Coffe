import {
    Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query,
} from '@nestjs/common';
import { LoansService } from './loans.service.js';
import { CreateLoanDto } from './dto/create-loan.dto.js';

@Controller('loans')
export class LoansController {
    constructor(private readonly loansService: LoansService) { }

    @Get()
    getAllLoans(@Query('status') status?: 'borrowed' | 'returned') {
        if (status) {
            return this.loansService.getLoansByStatus(status);
        }
        return this.loansService.getAllLoans();
    }

    @Post()
    createLoan(@Body() createLoanDto: CreateLoanDto) {
        return this.loansService.createLoan(createLoanDto);
    }

    @Delete(':id')
    deleteLoan(@Param('id', ParseIntPipe) id: number) {
        return this.loansService.deleteLoan(id);
    }
}