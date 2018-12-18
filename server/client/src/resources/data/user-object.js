import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';

@inject(DataServices)
export class User {

    constructor(data) {
            this.data = data;
            this.USER_SERVICE = 'users';
    }
}