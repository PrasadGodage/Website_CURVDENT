let inventoryList = new Map();
// Get inventory List ------------------------------------------------------------------------------------------------

function getinventoryList() {
    $.ajax({

        url: ebase_url+'inventory_api',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        inventoryList.set(response.data[i].id, response.data[i]);
                    }
                    setInventoryList(inventoryList);
                }

            }

        }

    });
}
getinventoryList();

// vendor table show
function setInventoryList(list) {

    $('#inventoryTable').dataTable().fnDestroy();
    // $('#inventoryList').empty();
    var tblData = '';
    
    for (let k of list.keys()) {
        
        let inventory = list.get(k);

       
        tblData += `
        <tr>
                <td>` + inventory.id + `</td>
                <td>` + inventory.IMEINo + `</td>
                <td>` + inventory.UIDNo_ICCDENo + `</td>
                <td>` + inventory.SIM1No + `</td>
                <td>` + inventory.SIM2No + `</td>
                <td>` + inventory.purchaseDate + `</td>
                <td> <a href="#" onclick="viewInventoryDetails(${inventory.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>               
                </td>
                

        </tr>`            
    }
    
    $('#inventoryList').html(tblData);
    $('#inventoryTable').DataTable();
}

function viewInventoryDetails(id){
    let inventory = inventoryList.get(id.toString());
    
    console.log(inventory);
    
    $('#viewInventoryModal').modal('toggle');

}

$('#addInventoryBtn').click(function () {

    $(location).attr('href',ebase_url+'addPurchase');
     
    
 });

//import inventoryValidation script
var inventoryValidation = document.createElement('script');
inventoryValidation.src = ebase_url + 'resource/js/custom/inventoryValidation.js';
inventoryValidation.setAttribute("type", "text/javascript");
document.head.appendChild(inventoryValidation);