function setActivityControlList(list) {
    

    var data = '';
    
    data +=`<div class="row">`;
    for (let k of list.keys()) {
        
        let activity = list.get(k);
        
        
        data += `<div class="col-md-3 p-10">
        
        <a href="#" id="ctrl_`+activity.id+`" onclick="updateActivityControl(`+activity.id+`)" title="Edit" >`+activity.control_name+`<i class="mdi mdi-tooltip-edit"></i></a>
        </div>`;

       
       
    }
    data +=`</div>`;
$('#activityControlListTab').html(data);    

}
