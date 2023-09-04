<?php

class ProfileTabModel extends CI_Model {

    public function insert_profile_tab($data) {
        
        $this->db->insert_batch('profile_tab_permission', $data);
        return $this->db->insert_id();
    }

    public function get_profile_tab($id,$flag) {
        $data;
        $this->db->select('ptp.id as ppermission_id,'
                . 'ptp.`tab_id`,'
                . 'tm.`tab_name`,'
                . 'tm.`icon_id`,'
                . 'tm.`is_subtab`,'
                . 'tm.`is_active`,'
                . 'ptp.profile_id,'
                . 'pm.profile,'
                . 'im.icon'
                );
        $this->db->from('profile_tab_permission ptp');
        $this->db->join('tab_master tm','tm.id=ptp.tab_id');
        $this->db->join('icon_master im','im.id=tm.icon_id');
        $this->db->join('profile_master pm','pm.id=ptp.profile_id');
        
        
        if ($id != 0 && $flag==1) {
            
             $this->db->where('ptp.profile_id',$id);
             $data = $this->db->get()->result();
        } else if ($id != 0 && $flag==2){
            $this->db->where('ptp.id',$id);
            $data = $this->db->get()->row_array();
        }
        return $data;
    }
    
    
    public function delete_profile_tab($id) {
        return $this->db->delete('profile_tab_permission', array('id' => $id));
    }
    
    public function find_profile_tab($profileid,$tabid) {
          $data = $query = $this->db->get_where('profile_tab_permission', array('profile_id' => $profileid,'tab_id'=>$tabid))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }
    
}
