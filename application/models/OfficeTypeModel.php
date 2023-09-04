<?php

class OfficeTypeModel extends CI_Model {

    public function insert_office_type($data) {
        
        $this->db->insert('office_type_master', $data);
        return $this->db->insert_id();
    }

    public function get_office_type($id) {
        $data;
        if ($id != 0) {
            $data = $query = $this->db->get_where('office_type_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('office_type_master')->result();
        }
        return $data;
    }
    
    public function update_office_type($id, $data){
        $this->db->where('id', $id);
        $this->db->update('office_type_master', $data);
        
        return true;
    }
    public function delete_office_type($id) {
        return $this->db->delete('office_type_master', array('id' => $id));
    }
    
    public function find_office_type($type) {
          $data = $query = $this->db->get_where('office_type_master', array('type' => $type))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
