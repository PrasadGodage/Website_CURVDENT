<?php

class UnitModel extends CI_Model {

    public function insert_unit($data) {
        
        $this->db->insert('unit_master', $data);
        return $this->db->insert_id();
    }

    public function get_unit($id) {
        $data;
        if ($id != 0) {
            $data = $query = $this->db->get_where('unit_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('unit_master')->result();
        }
        return $data;
    }
    
    public function update_unit($id, $data){
        $this->db->where('id', $id);
        $this->db->update('unit_master', $data);
        
        return true;
    }
    public function delete_unit($id) {
        return $this->db->delete('unit_master', array('id' => $id));
    }
    
    public function find_unit($unit) {
          $data = $query = $this->db->get_where('unit_master', array('unit' => $unit))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
