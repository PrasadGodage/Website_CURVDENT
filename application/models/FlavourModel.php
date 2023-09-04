<?php

class FlavourModel extends CI_Model {

    public function insert_flavour($data) {
        
        $this->db->insert('flavour_master', $data);
        return $this->db->insert_id();
    }

    public function get_flavour($id) {
        $data;
        if ($id != 0) {
            $data =$this->db->get_where('flavour_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('flavour_master')->result();
        }
        return $data;
    }
    
    public function update_flavour($id, $data){
        $this->db->where('id', $id);
        $this->db->update('flavour_master', $data);
        
        return true;
    }
    public function delete_flavour($id) {
        return $this->db->delete('flavour_master', array('id' => $id));
    }
    
    public function find_flavour($flavour) {
          $data = $this->db->get_where('flavour_master', array('flavour' => $flavour))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
