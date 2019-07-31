import {StudentModel} from './student.model';

export class UserModel extends StudentModel {
    token: string;
    expire: number;

    constructor() {
        super();
    }
}
