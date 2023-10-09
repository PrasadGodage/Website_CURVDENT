<?php

class RoleModel extends CI_Model {

    public function insert_role($data) {
        
        $this->db->insert('role_master', $data);
        return $this->db->insert_id();
    }

    public function get_role($id) {
        $data;
        if ($id != 0) {
            $data = $query = $this->db->get_where('role_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('role_master')->result();
        }
        return $data;
    }
    
    public function update_role($id, $data){
        $this->db->where('id', $id);
        $this->db->update('role_master', $data);
        
        return true;
    }
    public function delete_role($id) {
        return $this->db->delete('role_master', array('id' => $id));
    }
    
    public function find_role($role) {
          $data = $query = $this->db->get_where('role_master', array('role' => $role))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
