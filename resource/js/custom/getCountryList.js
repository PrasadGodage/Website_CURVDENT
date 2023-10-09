let countryList = new Map();

//function getCountryList() {

$(document).ready(function(){

    $.ajax({

        url: base_url+'country',

        type: 'GET',

        async:false,

        caches:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {

                    $('#countryTable').dataTable().fnDestroy();
                    $('#countryList').empty();
                    var tblData = '';
                    var detailUrl=(type=='master')?'superCountryDetails':'employeeCountryDetails';
                    var options = '<option value="" disabled selected hidden>Please Choose...</option>';

                    for (var i = 0; i < response.data.length; i++) {
                        
                        countryList.set(response.data[i].id, response.data[i]);

                        tblData += `
                        <tr>
                                <td>` + response.data[i].id + `</td>
                                <td>` + response.data[i].country + `</td>
                                <td> <!--a href="#" onclick="updateCountryDetails(` + response.data[i].id + `)" title="Update Country" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a-->
                                <a href="`+base_url+`${detailUrl}/`+response.data[i].id+`" title="Update Country Detail" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
                                </td>
                        </tr>
                        `;

                        options+=`<option value="`+response.data[i].id+`">`+response.data[i].country+`</option>`;
                    }
                    //setCountryListDropdown(countryList);
                    $('#countryList').html(tblData);
                    $('#countryTable').DataTable();
                    /////////////////////////////////
                    $('#country_id').html(options);
                    $('#state_id').prop('disabled',true);
                    $('#city_id').prop('disabled',true);
                }

            }

        }

    });

});
//}


//    getCountryList();






