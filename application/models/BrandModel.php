<?php

class BrandModel extends CI_Model {

    public function insert_brand($data) {
        
        $this->db->insert('brand_master', $data);
        return $this->db->insert_id();
    }

    public function get_brand($id) {
        $data=[];
        if ($id != 0) {
            $data = $query = $this->db->get_where('brand_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('brand_master')->result();
        }
        return $data;
    }
    
    public function update_brand($id, $data){
        $this->db->where('id', $id);
        $this->db->update('brand_master', $data);
        
        return true;
    }
    public function delete_brand($id) {
        return $this->db->delete('brand_master', array('id' => $id));
    }
    
    public function find_brand($brandName) {
          $data = $query = $this->db->get_where('brand_master', array('brandName' => $brandName))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
