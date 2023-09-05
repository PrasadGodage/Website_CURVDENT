function setCountryListDropdown(list) {

    $('#countryTable').dataTable().fnDestroy();
    $('#countryList').empty();
    var tblData = '';
    var detailUrl=(type=='master')?'superCountryDetails':'employeeCountryDetails';
    for (let k of list.keys()) {
        
        let country = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>` + country.id + `</td>
                        <td>` + country.country + `</td>
                        <td> <!--a href="#" onclick="updateCountryDetails(` + country.id + `)" title="Update Country" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a-->
                        <a href="`+base_url+`${detailUrl}/`+country.id+`" title="Update Country Detail" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
                        </td>
                </tr>
                `;
    }
    
    $('#countryList').html(tblData);
    $('#countryTable').DataTable();
}


