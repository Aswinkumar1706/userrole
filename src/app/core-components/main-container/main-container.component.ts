import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  sidebarData: any;
  userData: any;

  constructor(private localStorage: LocalstorageService,private authService : AuthService) {
    let res = this.localStorage.get('userdata');
    this.sidebarData = res['menu'];
    this.userData = res['userdata'];
   }

  ngOnInit(): void {
  }

}
