<?php

class ActivityModel extends CI_Model {

    public function insert_activity($data) {
        
        $this->db->insert('activity_master', $data);
        return $this->db->insert_id();
    }

    public function get_activity($id) {
        $data;
        $this->db->select('am.id as activity_id,'
                . 'am.`tab_id`,'
                . 'am.`icon_id`,'
                . 'tm.`tab_name`,'
                . 'tm.is_active as tabIsActive,'
                . 'am.activity_title,'
                . 'am.`url`,'
                . 'am.`is_active as actIsActive`,'
                . 'im.`icon`'
                );
        $this->db->from('activity_master am');
        $this->db->join('tab_master tm','tm.id=am.tab_id');
        $this->db->join('icon_master im','im.id=am.icon_id');
        
        
        if ($id != 0) {
            
             $this->db->where('am.id',$id);
             $data = $this->db->get()->row_array();
        } else {
            
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    public function update_activity($id, $data){
        $this->db->where('id', $id);
        $this->db->update('activity_master', $data);
        
        return true;
    }
    public function delete_role($id) {
        return $this->db->delete('role_master', array('id' => $id));
    }
    
    public function find_activityUrl($url) {
          $data = $query = $this->db->get_where('activity_master', array('url' => $url))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
