import { Directive, ElementRef, Input, NgModule, Renderer2, SimpleChanges } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appRoleBasedBtn]'
})
export class RoleBasedBtnDirective {
  @Input()
  action!: string;
  constructor(private element:ElementRef,private userService :AuthService) { }
 
 permissions:any ;
 
ngOnInit(){
  if(sessionStorage.getItem('permissions')){
    this.permissions = JSON.parse(sessionStorage.getItem('permissions') || '');
  }else{
    this.permissions = this.userService.getActiveMenu;
  }
  this.permissions[this.action] ? this.element.nativeElement.disabled = false:
  this.element.nativeElement.disabled= true
   



};

ngOnChanges(changes: SimpleChanges) {
  console.log(changes);
}

}

@NgModule({
  declarations: [ RoleBasedBtnDirective ],
  exports: [ RoleBasedBtnDirective ]
})

export class RequiredsignDirectiveModule {}




