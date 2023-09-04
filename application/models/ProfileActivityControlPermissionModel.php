<?php

class ProfileActivityControlPermissionModel extends CI_Model {

    public function insert_profile_activity_permission($data)
    {
        
        $this->db->insert_batch('profile_access_control_permission', $data);
        return $this->db->insert_id();
    }

    public function get_profile_activity_permission($id) {
        $data;
        $this->db->select('pacp.id,'
                . 'pacp.`profile_id`,'
                . 'pm.`profile`,'
                . 'pacp.`aac_id`,'
                . 'acc.`control_name`,'
                . 'pacp.`activity_id`,'
                . 'am.`activity_title`,'
                . 'am.`url`,'
                . 'pacp.`permission`'
                
                );
        $this->db->from('profile_access_control_permission pacp');
        $this->db->join('activity_access_controls acc','acc.id=pacp.aac_id');
        $this->db->join('activity_master am','am.id=pacp.activity_id');
        $this->db->join('profile_master pm','pm.id=pacp.profile_id');
        


        if ($id != 0) {
            //$data = $query = $this->db->get_where('profile_access_control_permission', array('profile_id' => $id))->result();
            $this->db->where('pacp.profile_id',$id);
             $data = $this->db->get()->result();
        } else {
            $data = $this->db->get('profile_access_control_permission')->result();
        }
        return $data;
    }
    
    public function get_activityControlById($id){
        $data;
        if ($id != 0) {
            $data = $query = $this->db->get_where('activity_access_controls', array('id' => $id))->row_array();
        } else {
            $data = [];
        }
        return $data;
    }

    public function update_activity_control($id, $data){
        $this->db->where('id', $id);
        $this->db->update('activity_access_controls', $data);
        
        return true;
    }
    public function deletePermission($profile_id,$activity_id) {
        return $this->db->delete('profile_access_control_permission', array('profile_id' => $profile_id, 'activity_id' => $activity_id));
    }
    
    public function find_permission($profile_id,$activity_id) {
          $data = $query = $this->db->get_where('profile_access_control_permission', array('profile_id' => $profile_id, 'activity_id' => $activity_id))->result();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
