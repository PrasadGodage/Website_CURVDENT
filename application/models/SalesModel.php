<?php

class SalesModel extends CI_Model {

    public function insert_sales($data) {
        
        $this->db->insert('sales_master', $data);
        return $this->db->insert_id();
    }

    public function get_sales($id) {
        $data=[];
        if ($id != 0) {
            $this->db->select(
                'sm.id,'
                . 'sm.salesOrderNo,'
                . 'sm.client_id,'
                . 'cm.firstName,'
                . 'cm.address1,'
                . 'cm.email,'
                . 'sm.totalQty,'
                . 'sm.itemTotalAmt,'
                . 'sm.totalDisc,'
                . 'sm.totalTax,'
                . 'sm.netBill,'
                . 'sm.paymentMtd,'
                . 'sm.created_at,'
                . 'sm.createdBy,'
                . 'am.name,'
                . 'sm.lastModified_at,'
                . 'sm.lastModifiedBy,'
                . 'ams.name,'
                . 'sm.salesDate'
                
            );
            $this->db->from(' sales_master sm');
            $this->db->join('client_master cm', 'cm.id=sm.client_id');
          $this->db->join('admin_master am', 'am.id=sm.createdBy');
            $this->db->join('admin_master ams', 'ams.id=sm.lastModifiedBy');
            $query = $this->db->where('sm.id',$id);
            $data = $this->db->get()->result();
        }
           // $data = $query = $this->db->get_where('sales_master', array('id' => $id))->row_array();
        
         else
          {
            $this->db->select(
                'sm.id,'
                . 'sm.salesOrderNo,'
                . 'sm.client_id,'
                . 'cm.firstName,'
                . 'cm.address1,'
                . 'cm.email,'
                . 'sm.totalQty,'
                . 'sm.itemTotalAmt,'
                . 'sm.totalDisc,'
                . 'sm.totalTax,'
                . 'sm.netBill,'
                . 'sm.paymentMtd,'
                . 'sm.created_at,'
                . 'sm.createdBy,'
                . 'am.name,'
                . 'sm.lastModified_at,'
                . 'sm.lastModifiedBy,'
                . 'ams.name,'
                . 'sm.salesDate'
                
                
            );
            $this->db->from('sales_master sm');
            $this->db->join('client_master cm', 'cm.id=sm.client_id');
            $this->db->join('admin_master am', 'am.id=sm.createdBy');
            $this->db->join('admin_master ams', 'ams.id=sm.lastModifiedBy');
            $this->db->order_by('sm.id', "desc");
            $data = $this->db->get()->result();
        } 
        // return print_r($this->db->last_query());    

        return $data;
    }
    
    public function update_sales($id, $data){
        $this->db->where('id', $id);
        $this->db->update('sales_master', $data);
        
        return true;
    }
    public function delete_sales($id) {
        return $this->db->delete('sales_master', array('id' => $id));
    }
    
    public function find_sales($client_id) {
          $data = $query = $this->db->get_where('sales_master', array('client_id' => $client_id))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

    
}

