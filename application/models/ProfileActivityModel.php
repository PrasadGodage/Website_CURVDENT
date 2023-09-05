<?php

class ProfileActivityModel extends CI_Model {

    public function insert_profile_activity($data) {
        
        $this->db->insert('profile_activity_permission', $data);
        return $this->db->insert_id();
    }

    public function get_profile_activity($id) {
        $data;
        $this->db->select('pap.id as ppermission_id,'
                . 'pap.`activity_id`,'
                . 'am.`activity_title`,'
                . 'am.`tab_id`,'
                . 'am.`icon_id`,'
                . 'am.`url`,'
                . 'pap.profile_id,'
                . 'pm.profile,'
                . 'im.icon,'
                );
        $this->db->from('profile_activity_permission pap');
        $this->db->join('activity_master am','am.id=pap.activity_id');
        $this->db->join('profile_master pm','pm.id=pap.profile_id');
        $this->db->join('icon_master im','im.id=am.icon_id');
        
        
        if ($id != 0) {
            
             $this->db->where('pap.profile_id',$id);
             $data = $this->db->get()->result();
        } else {
            
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    
    public function delete_profile_activity($activityid,$profileid) {
        
         $this->db->delete('profile_access_control_permission', array('activity_id' => $activityid,'profile_id' => $profileid));
         return $this->db->delete('profile_activity_permission', array('activity_id' => $activityid,'profile_id' => $profileid));
        
    }
    
    public function find_profile_activity($profileid,$activityid) {
          $data = $query = $this->db->get_where('profile_activity_permission', array('profile_id' => $profileid,'activity_id'=>$activityid))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }
    
}
