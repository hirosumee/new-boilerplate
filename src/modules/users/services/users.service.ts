import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/users.interface';
import { UserDto } from '../dto/create-user.dto';
import { IEntityService } from '../../../interfaces/entity-service';

@Injectable()
export class UsersService implements IEntityService<User>{
  constructor(
    @InjectModel('users') private readonly userModel: Model<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async create(userDto: UserDto): Promise<User> {
    const createdUser = this.userModel(userDto);
    createdUser.save();
    return createdUser;
  }
  async findOne(query: object): Promise<User> {
    return this.userModel.findOne(query);
  }
  async findById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async find(query: object): Promise<User[]> {
    return undefined;
  }

  async findOneByEmail(email:string):Promise<User> {
    return this.userModel.findOne({ email });
  }
}
