import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    public usuarios: any = {};

    constructor(private userService: UsersService, private router: Router) { }

    ngOnInit() {
        this.getUserData();
    }

    public getUserData() {
        this.userService.getAllUsers()
            .subscribe((res: any) => {
                this.usuarios = res;
            })
    }

    public goToDescription(id: any) {
        console.log(id);
        this.router.navigate(['/descripcion'], { queryParams: { id } });
    }
}
