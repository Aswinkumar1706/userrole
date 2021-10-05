import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userform!: FormGroup ;
  submitted: boolean = false;
  constructor(private authService: AuthService,private fb: FormBuilder,private router : Router) { 

  }

  ngOnInit(): void {
    this.userform = this.fb.group({
      'userid':"",
      'password':""
    })
  }
get user(){
  return this.userform.controls
}
  loginClicked(){
    this.submitted = true;
    if(this.userform.invalid){
return;
    }
       this.authService.login(this.user.userid.value,this.user.password.value).then((res: any)=>{
         console.log(res);
         if(res['status'] == '200'){
            sessionStorage.setItem('userdata',JSON.stringify(res.data));
            this.authService.setLogin(true);
             sessionStorage.setItem('permissions',JSON.stringify(res.data.menu[0].submenu[0].actions));
             this.authService.setActiveMenu(res.data.menu[0].submenu[0].actions);
            this.router.navigate(['/submenu1']);
         }
       })
  }

}
