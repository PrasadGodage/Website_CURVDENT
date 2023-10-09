function setCountryStateCityList(list) {
        
    var data = '';
    for (let k of list.keys()) {
        
        let state = list.get(k);
        if(state.is_active==1){
    data +=`<div class="container">
    <div class="row">
    <div class="col-12">
    <h6>`+state.state+`</h6>
    </div>
    </div>
    <div class="row">`;
    for (let k of countryStateCityList.keys()) {
        
        let city = countryStateCityList.get(k);
        
        if(state.id==city.state_id){
        data += `<div class="col-md-3 p-10">
        <a href="#" id="update_`+city.id+`" onclick="updateCountryStateCity(`+city.id+`)" title="Update City" >`+city.city+`<i class="mdi mdi-tooltip-edit text-success"></i></a>
        <!--a href="#" id="delete_`+city.id+`" onclick="deleteCountryState(`+city.id+`)" title="Delete State" ><i class="fa fa-trash text-danger"></i></a-->
        </div>`;
    }
    
       
    }
    data +=`</div><hr></div>`;
}
}

$('#cityListId').html(data);    

}
//setCountryStateCityList(countryStateList);

