import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  language: string = 'default';
  userData:any;
  @Input() navData: any;

  constructor(private localStorage: LocalstorageService,private authService : AuthService) {
       
       
   }

  ngOnInit(): void {
  }
  ngOnChanges(changes : SimpleChanges): void {
    this.userData = changes.navData.currentValue;
  }
  setLanguage(lang: string){
     this.language = lang;
  }
  logout(){
    this.authService.logout();
  }
}
