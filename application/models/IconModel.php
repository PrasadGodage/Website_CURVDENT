<?php

class IconModel extends CI_Model {

    public function insert_icon($data) {
        
        $this->db->insert('icon_master', $data);
        return $this->db->insert_id();
    }

    public function get_icon($id) {
        $data=[];
        if ($id != 0) {
            $data = $query = $this->db->get_where('icon_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('icon_master')->result();
        }
        return $data;
    }
    
    public function update_icon($id, $data){
        $this->db->where('id', $id);
        $this->db->update('icon_master', $data);
        
        return true;
    }
    public function delete_icon($id) {
        return $this->db->delete('icon_master', array('id' => $id));
    }
    
    public function find_icon($icon) {
          $data = $query = $this->db->get_where('icon_master', array('icon' => $icon))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
