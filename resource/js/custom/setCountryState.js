function setCountryStateList(list) {
        
    var data = '';
    
    data +=`<div class="row">`;
    for (let k of list.keys()) {
        
        let state = list.get(k);
        
        
        data += `<div class="col-md-3 p-10">
        <a href="#" id="update_`+state.id+`" onclick="updateCountryState(`+state.id+`)" title="Update State" >`+state.state+`<i class="mdi mdi-tooltip-edit text-info"></i></a>&nbsp;`;
        
         if(state.is_active==1){
           data +=`<a href="#" title="Active" ><i class="glyphicon glyphicon-record text-success"></i></a></div>`;
         }else{
            data +=`<a href="#"  title="Inactive" ><i class="glyphicon glyphicon-record text-danger"></i></a></div>`;
            
         }
        

    
       
    }
    data +=`</div>`;
    
$('#stateListId').html(data);    

}

//setCountryStateList(countryStateList);