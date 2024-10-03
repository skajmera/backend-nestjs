
import { Model } from 'mongoose';
import { Injectable,Inject,HttpStatus } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from '../interface/customer.interface';
@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_MODEL')
    private customerModel: Model<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<any> {
    const createdCustomer:Customer = new this.customerModel(createCustomerDto);
    const customerData = await createdCustomer.save()
    return {status:HttpStatus.CREATED,message:"Create Data Successfully",data:customerData}
  }


  async findOne(id: any):Promise<any> {
    const customer :Customer= await this.customerModel.findById(id).exec();
    return {status:HttpStatus.OK,message:"Get Successfully Data By Id",data:customer}
  }


  findAll() {
    return `This action returns all customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
