import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-description',
    templateUrl: './user-description.component.html',
    styleUrls: ['./user-description.component.css']
})
export class UserDescriptionComponent implements OnInit {

    public id: any;
    public response: any = {}

    constructor(private userService: UsersService, private route: ActivatedRoute) {
        this.id = this.route.snapshot.queryParamMap.get('id');
    }

    ngOnInit() { 
        this.getSingleUser();
    }

    public getSingleUser() {
        this.userService.getSingleUserById(this.id).subscribe((res) => {
            this.response = res;
            console.log(res);
        })
    }
}
