<?php

class VendorModel extends CI_Model {

    public function insert_vendor($data) {
        
        $this->db->insert('vendor_master', $data);
        return $this->db->insert_id();
    }

    public function get_vendor($id) {
        $data=[];
        if ($id != 0) {
            $data = $query = $this->db->get_where('vendor_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('vendor_master')->result();
        }
        return $data;
    }
    
    public function update_vendor($id, $data){
        $this->db->where('id', $id);
        $this->db->update('vendor_master', $data);
        
        return true;
    }
    public function delete_vendor($id) {
        return $this->db->delete('vendor_master', array('id' => $id));
    }
    
    public function find_vendor($vendorName) {
          $data = $query = $this->db->get_where('vendor_master', array('vendorName' => $vendorName))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }
    
    public function get_authenticate($data) {
        $data = $query = $this->db->get_where('vendor_master', array('vendorName' => $data['vendorName'],'vendorName'=>$data['vendortName']))->row_array();
        return $data;
    }


}
