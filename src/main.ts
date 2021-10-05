import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
(async () =>{
  // let initemty = JSON.stringify({})
  // sessionStorage.setItem('userdata',initemty);
  const userrespons = await fetch ('/assets/fakedb/user.json');
  let userlist = await userrespons.json();
  const menurespons = await fetch ('/assets/fakedb/menu.json');
  let menulist = await menurespons.json();
  const rolerespons = await fetch ('/assets/fakedb/userrole.json');
  let rolelist = await rolerespons.json();
  const pagerespons = await fetch ('/assets/fakedb/page.json');
  let pagelist = await pagerespons.json();
  console.log(userlist)
  // sessionStorage.setItem('userlist',userlist.userlist);
  // sessionStorage.setItem('menulist',menulist.menuslist);
  // sessionStorage.setItem('rolelist',rolelist.userRoleList);
  // sessionStorage.setItem('pagelist',pagelist.pagelist);
  environment.menulist= menulist.menuslist;
  environment.userrole= rolelist.userRoleList;
  environment.pagelist= pagelist.pagelist;
  environment.userlist= userlist.userlist;
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
})();


