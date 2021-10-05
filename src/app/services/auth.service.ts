import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject,Observable} from 'rxjs'
import { User } from './models/user';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject!: BehaviorSubject<boolean>;
  public user!: Observable<boolean>;
  public ActiveMenu! : Observable<any>;
  private ActiveMenuSubject = new BehaviorSubject<any>(0);
  

  public menulist:any = environment.menulist;
  public roleList:any = environment.userrole;
  public userlist:any = environment.userlist;
  public pagelist:any = environment.pagelist;
  constructor(private router: Router,private http : HttpClient,private localStorage: LocalstorageService
    ) {
      this.userSubject = new BehaviorSubject<boolean>(false);
        this.user = this.userSubject.asObservable();
      if(sessionStorage.getItem('userdata')){
        this.setLogin(true)
      }else{
        this.setLogin(false)
      }
  

     }

     
     public get userValue(): boolean{
       return this.userSubject.value;
     }
     public  setLogin(value: boolean){
       this.userSubject.next(value);
    }

    public setActiveMenu(obj:any){
      this.ActiveMenuSubject.next(obj);
    };
    public get getActiveMenu(): boolean{
      return this.ActiveMenuSubject.value;
    }
    getPageData(pageid:any){
        var page = this.pagelist.filter((obj: { pageid: any; }) => obj.pageid === pageid)[0];  
        if(page){
          return page.url
        }
        return '';
    }
     getSubmenu(submenu: any,mappedsubmenu: any){
      var matchSubMenu = [];
       for(let Mapsmenu of mappedsubmenu){
         for(let smenu of submenu){
            if(smenu.id == Mapsmenu.id){
              matchSubMenu.push({
                "id":Mapsmenu.id,
                "menuName":smenu.menuName,
                "pageid":smenu.pageid,
                 "status":Mapsmenu.status,
                 "submenu":Mapsmenu.status,
                 "pageurl":this.getPageData(smenu.pageid),
                "actions":Mapsmenu.actions
              })
            }
         }
      }
     return matchSubMenu
     }
      async login(userid: any,password: any){

        var userlist:any = this.userlist ;
        var findUserdata = userlist.filter((obj: { id: any; password: any; }) => obj.id == userid && obj.password === password);
      
             if(findUserdata){
              var userdata = findUserdata[0];
              var roledata = this.roleList.filter((obj: { roleid: any; }) => obj.roleid == userdata.role )[0];
              var menudata = roledata.menus;
              var assignedMenu = [];
              for(let menuIndex in menudata){
               
                var matchMenu = this.menulist.filter((obj: { id: any; }) => 
                obj.id == menudata[menuIndex].id)[0];
                assignedMenu.push({
                  id:matchMenu.id,
                  menuName:matchMenu.menuName,
                  status:matchMenu.status,
                  submenu:this.getSubmenu(matchMenu.submenu,menudata[menuIndex].submenu),
                })
              }
               
                  return {
                    data:{
                      "userdata":userdata,
                      "menu":assignedMenu},
                    'status':"200",
                    "message":"Success"
                  };
       
               }else{
                 return {
                   'status':"400",
                   "message":"Error"
                 }
               }
      
           
     };

     logout(){
       //
       sessionStorage.removeItem('userdata');

       this.userSubject.next(false)
       this.router.navigate(['/login']);
     }
}

function get(obj: any, path: string) {
  return path.split('.').reduce((r: { [x: string]: any; }, e: string | number) => {
    if (!r) return r;
    else return r[e] || undefined;
  }, obj);
}

function isEmpty(o: {}) {
  if (typeof o !== 'object') return true;
  else return !Object.keys(o).length;
}

function build(a: { [x: string]: any; }, b: any, o = null, prev = '') {
  return Object.keys(a).reduce(
    (r:any, e:any) => {
      const path = prev + (prev ? '.' + e : e);
      const bObj = get(b, path);
      const value = a[e] === bObj;

      if (typeof a[e] === 'object') {
        if (isEmpty(a[e]) && isEmpty(bObj)) {
          if (e in r) r[e] = r[e];
          else r[e] = true;
        } else if (!bObj && isEmpty(a[e])) {
          r[e] = value;
        } else {
          r[e] = build(a[e], b, r[e], path);
        }
      } else {
        r[e] = value;
      }
      return r;
    },
    o ? o : {}
  );
}

function compare(a: any, b: any) {
  const o = build(a, b);
  return build(b, a, o);
}

