<?php

class CountryModel extends CI_Model {

    public function insert_country($data) {
        
        $this->db->insert('country_master', $data);
        return $this->db->insert_id();
    }

    public function get_country($id) {
        $data=[];
        if ($id != 0) {
            $data = $query = $this->db->get_where('country_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('country_master')->result();
        }
        return $data;
    }
    
    public function update_country($id, $data){
        $this->db->where('id', $id);
        $this->db->update('country_master', $data);
        
        return true;
    }
    public function delete_country($id) {
        return $this->db->delete('country_master', array('id' => $id));
    }
    
    public function find_country($country) {
          $data = $query = $this->db->get_where('country_master', array('country' => $country))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
