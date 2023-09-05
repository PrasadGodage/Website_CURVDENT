<?php

class SalesDetailModel extends CI_Model {

    public function insert_salesDetail($data) {
   //insert sales detail in product_sales_details table
      
      $this->db->insert_batch('product_sales_details', $data);
            return $this->db->insert_id();
        }
    
        public function get_salesDetail($smid) { 
            $data=[];
            if ($smid != 0) {
                $this->db->select(
                    'psd.id,'
                    . 'psd.sm_id,'
                    . 'psd.product_id,'
                    . 'pm.productName,'
                    . 'psd.totalQty,'
                    . 'psd.itemTotalAmt,'
                    . 'psd.itemtotalDisc,'
                    . 'psd.itemtotalTax,'
                    . 'psd.itemnetBill'                    
                    
                );
                $this->db->from(' product_sales_details psd');
                // $this->db->join('sales_master sm', 'sm.id=psd.sm_id');
                $this->db->join('product_master pm', 'pm.id=psd.product_id');
              //$this->db->join('admin_master am', 'am.id=psd.createdBy');
               // $this->db->join('admin_master ams', 'ams.id=sm.lastModifiedBy');
                $query = $this->db->where('psd.sm_id',$smid);
                $data = $this->db->get()->result();
            }
              
                
            return $data;
        }


    

   // public function get_salesDetail($psd_id) {
        
        // get specific sales details based on sm_id(foreign key sales_master) from product_sales_details table



        
   // }
    
    public function update_salesDetail($id, $data){
        //update specific sales detail based on id in product_sales_details table
        $this->db->where('id', $id);
        $this->db->update('product_sales_details', $data);
        
        return true;
    }
    public function delete_salesDetail($id) {
        return $this->db->delete('product_sales_details', array('id' => $id));
    }
    
    
    public function find_salesDetail($id) {
         // find sales detail based on id from product_sales_details table
         $data = $query = $this->db->get_where('product_sales_details', array('id' => $id))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}






