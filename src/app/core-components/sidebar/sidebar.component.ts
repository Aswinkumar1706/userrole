import { Component, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
@Input() sidebarData: any;
  menuData: any;
  sidenav_config_trigger = "[data-widget='treeview'] .nav-link";
  element:any;
  treeviewMenu:any;
  constructor(private _element : ElementRef,private localStorage: LocalstorageService,private authService : AuthService) {
    // let res = this.localStorage.get('userdata');
    // this.menuData = res['menu'];
    this.element = this._element.nativeElement;
}

 constructSubmenu(submenu:any){
  var submenuEl = '';
  for(let menu of submenu){
    submenuEl += '<li ><a class="treeview-item" routerLink="'+menu.pageurl+'" routerLinkActive="active-link"><i class="icon fa fa-circle-o"></i>'+menu.menuName+'</a></li> </ul> </li>';  
  }
  return submenuEl
 }
  ngOnInit(): void {
   
   
    
  }
  ngOnChanges(changes : SimpleChanges): void {
    this.menuData = changes.sidebarData.currentValue;
    // var menuEl = '';
   
  
    // for(let menu of this.menuData){
    //   menuEl +=  '<li class="treeview"> <a class="app-menu__item" href="" data-toggle="treeview" > <i class="app-menu__icon fa fa-laptop"></i> <span class="app-menu__label">'+menu.menuName+'</span> <i class="treeview-indicator fa fa-angle-right"></i></a> <ul class="treeview-menu">'+this.constructSubmenu(menu.submenu)+'</li>'
    // }
    // this.treeviewMenu = this.element.querySelector('#app-menu-item');
  //  this.treeviewMenu.innerHTML = menuEl;
  }
  ngAfterViewInit() {
    //this.element.querySelector('.nav-sidebar').addEventListener('click', this.toggle.bind(this));
    this.treeviewMenu = this.element.querySelector('.app-menu');
    let treeviewMenu = this.element.querySelectorAll("[data-toggle='treeview']");
    for(let menu of treeviewMenu){
         menu.addEventListener('click', this.toggle.bind(this));
    }
    // this.element.querySelector("[data-toggle='treeview']").addEventListener('click', this.toggle.bind(this));
    this.element.querySelector("[data-toggle='sidebar']").addEventListener('click', this.toggeleSideBar.bind(this));
    //this.addActiveRoute();
  }
  

  // addActiveRoute(){
  //   //this.treeviewMenu = this.element.querySelector('.treeview-menu');
  //   let treeviewMenu = this.element.querySelectorAll(".treeview-menu");
  //   let currentRoute =  this.router.url;
  //   for(let menu of treeviewMenu){
  //     let submenu = menu.childNodes
  //     for(let smenu of submenu){
  //       console.log(smenu.firstChild.attributes['routerlink'].value)
  //       if(smenu.firstChild.attributes['routerlink'].value && smenu.firstChild.attributes['routerlink'].value == currentRoute){
            
  //       }
  //     }
        
  //   }
  // }
	// Toggle Sidebar

  toggeleSideBar(event: any){
    let sidenav: any =  document.getElementsByTagName('body')[0];  
    if(sidenav.classList.contains('sidebar-collapse')){
      sidenav.classList.remove('sidebar-collapse') 
    }else{
      sidenav.classList.add('sidebar-collapse')
    }
  }

  //Toggle menu treeview
  toggle(event: any){
    event.preventDefault();
    let reletiveTarget = event.currentTarget;
    // if(!this.element.querySelector(this).parent().classList.contains('is-expanded')){
      if(!reletiveTarget.parentElement.classList.contains('is-expanded')){
       // reletiveTarget.parentElement.classList.remove('is-expanded');
        //this.treeviewMenu.childNodes.forEach(function(menu: any){console.log(
        //  menu.classList.remove('is-expanded'))})
        //treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
    }
    reletiveTarget.parentElement.classList.toggle('is-expanded');
   
  };
  setAction(actions: any){
     this.localStorage.set('permissions',actions)
  }

}
