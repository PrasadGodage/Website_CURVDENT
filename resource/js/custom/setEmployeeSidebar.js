function setEmployeeSidebar(){
var sidebarData=`<ul class="sidebar-menu" data-widget="tree">
            <li class="header nav-small-cap">Menu Bar</li>`;

for (var i=0;i<tabPermission.length;i++) {
       if(tabPermission[i].is_active==1){
        if(tabPermission[i].is_subtab==1){
         sidebarData +=`<li class="treeview">
         <a href="#">
             <i class="${tabPermission[i].icon}"></i> <span>${tabPermission[i].tab_name}</span>
             <span class="pull-right-container">
                 <i class="fa fa-angle-right pull-right"></i>
             </span>
         </a>
         <ul class="treeview-menu" style="display: none;">`;           
        }
          for(var j = 0; j <activityPermission.length;j++){
            if(tabPermission[i].tab_id==activityPermission[j].tab_id){
                sidebarData +=`<li><a href="${ebase_url+activityPermission[j].url}"><i class="${activityPermission[j].icon}"></i>${activityPermission[j].activity_title}</a></li>`;
            }//if


          }//for j
        if(tabPermission[i].is_subtab==1){
          sidebarData +=`</ul></li>`;
        }

       }   //if
             

}// for i
sidebarData +=`</ul>`;

$('.sidebar').html(sidebarData);
}

setEmployeeSidebar();