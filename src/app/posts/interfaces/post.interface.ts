import { IUser } from 'src/app/users/interfaces/user.interface';

export interface IPost {
    id:     string;
    created_time: string;
    body:   string;
    author: IUser;
    images: Array<string>
}
