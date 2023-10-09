<?php

class TabModel extends CI_Model {

    public function insert_tab($data) {
        
        $this->db->insert('tab_master', $data);
        return $this->db->insert_id();
    }

    public function get_tab($id) {
        $data;
        $this->db->select('tm.id,'
        . 'tm.`tab_name`,'
        . 'tm.`is_subtab`,'
        . 'tm.icon_id,'
        . 'tm.is_active,'
        . 'im.icon_title,'
        . 'im.icon,'
        );
$this->db->from('tab_master tm');
$this->db->join('icon_master im','im.id=tm.icon_id');

        if ($id != 0) {
            $query = $this->db->where('tm.id',$id);
            $data = $this->db->get()->row_array();
        } else {
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    public function update_tab($id, $data){
        $this->db->where('id', $id);
        $this->db->update('tab_master', $data);
        
        return true;
    }
    public function delete_role($id) {
        return $this->db->delete('role_master', array('id' => $id));
    }
    
    public function find_tab($tab) {
          $data = $query = $this->db->get_where('tab_master', array('tab_name' => $tab))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
