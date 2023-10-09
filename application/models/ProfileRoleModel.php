<?php

class ProfileRoleModel extends CI_Model {

    public function insert_profile_role($data) {
        
        $this->db->insert('profile_role_permission', $data);
        return $this->db->insert_id();
    }

    public function get_profile_role($id) {
        $data;
        $this->db->select('prp.id as ppermission_id,'
                . 'prp.`role_id`,'
                . 'rm.`role`,'
                . 'prp.profile_id,'
                . 'pm.profile'
                );
        $this->db->from('profile_role_permission prp');
        $this->db->join('role_master rm','rm.id=prp.role_id');
        $this->db->join('profile_master pm','pm.id=prp.profile_id');
        
        
        if ($id != 0) {
            
             $this->db->where('prp.profile_id',$id);
             $data = $this->db->get()->result();
        } else {
            
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    
    public function delete_profile_role($id) {
        return $this->db->delete('profile_role_permission', array('id' => $id));
    }
    
    public function find_profile_role($profileid,$roleid) {
          $data = $query = $this->db->get_where('profile_role_permission', array('profile_id' => $profileid,'role_id'=>$roleid))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }
    
}
