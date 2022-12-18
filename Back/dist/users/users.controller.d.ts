import { Users } from './users.schema';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly UsersService;
    constructor(UsersService: UsersService);
    getUsers(): Promise<Users[]>;
    getUser(res: any, id: string): Promise<Users>;
    create(res: any, body: any): Promise<void>;
    checkUser(body: any): Promise<any>;
    update(res: any, id: number, body: any): Promise<void>;
    delete(res: any, id: number): Promise<void>;
}
