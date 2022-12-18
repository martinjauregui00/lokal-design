import { Users, UsersDocument } from './users.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private UsersModel;
    constructor(UsersModel: Model<UsersDocument>);
    getUsers(): Promise<Users[]>;
    getUser(id: string): Promise<Users[]>;
    checkUser(body: any): Promise<Users[]>;
    create(body: any): Promise<Users[]>;
    update(id: number, body: any): Promise<Users[]>;
    delete(id: number): Promise<Users[]>;
}
