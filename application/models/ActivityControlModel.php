<?php

class ActivityControlModel extends CI_Model {

    public function insert_activityControl($data)
    {
        
        $this->db->insert('activity_access_controls', $data);
        return $this->db->insert_id();
    }

    public function get_activityControl($id) {
        $data;
        if ($id != 0) {
            $data = $query = $this->db->get_where('activity_access_controls', array('activity_id' => $id))->result();
        } else {
            $data = $this->db->get('activity_access_controls')->result();
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
    public function delete_role($id) {
        return $this->db->delete('role_master', array('id' => $id));
    }
    
    public function find_activityControl($data) {
          $data = $query = $this->db->get_where('activity_access_controls', array('activity_id' => $data['activity_id'],'control_name'=>$data['control_name']))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
