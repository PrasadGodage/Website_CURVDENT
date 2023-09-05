<?php

class ProfileModel extends CI_Model {

    public function insert_profile($data) {
        
        $this->db->insert('profile_master', $data);
        return $this->db->insert_id();
    }

    public function get_profile($id) {
        $data;
        $this->db->select('pm.id as profile_id,'
                . 'pm.`role_id`,'
                . 'rm.`role`,'
                . 'pm.profile,'
                . 'pm.`is_active`'
                );
        $this->db->from('profile_master pm');
        $this->db->join('role_master rm','rm.id=pm.role_id');
        
        
        if ($id != 0) {
            
             $this->db->where('pm.id',$id);
             $data = $this->db->get()->row_array();
        } else {
            
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    public function update_profile($id, $data){
        $this->db->where('id', $id);
        $this->db->update('profile_master', $data);
        
        return true;
    }
    public function delete_role($id) {
        return $this->db->delete('role_master', array('id' => $id));
    }
    
    public function find_profile($profile) {
          $data = $query = $this->db->get_where('profile_master', array('profile' => $profile))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

    public function get_profileByRole($roleid) {
        $data;
        $this->db->select('pm.id as profile_id,'
                . 'pm.`role_id`,'
                . 'rm.`role`,'
                . 'pm.profile,'
                . 'pm.`is_active`'
                );
        $this->db->from('profile_master pm');
        $this->db->join('role_master rm','rm.id=pm.role_id');
                    
             $this->db->where('pm.role_id',$roleid);
             $data = $this->db->get()->result();
        
        return $data;
    }

}
