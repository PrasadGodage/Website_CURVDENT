<?php

class AdminModel extends CI_Model {

    public function insert_admin($data) {
        
        $this->db->insert('admin_master', $data);
        return $this->db->insert_id();
    }

    public function get_admin($id,$flag) {
        $data=[];
        $this->db->select('am.id,'
        . 'am.`role_id`,'
        . 'rm.`role`,'
        . 'am.`profile_id`,'
        . 'pm.`profile`,'
        . 'am.`office_branch_id`,'
        . 'obm.`office_name`,'
        . 'am.`name`,'
        . 'am.`profile_image`,'
        . 'am.`dob`,'
        . 'am.`age`,'
        . 'am.`aadhar_no`,'
        . 'am.`pancard`,'
        . 'am.`password`,'
        . 'am.`userid`,'
        . 'am.`contact_number1`,'
        . 'am.`contact_number2`,'
        . 'am.`email_id`,'
        . 'am.`city_id`,'
        . 'ctm.city,'
        . 'am.state_id,'
        . 'sm.state,'
        . 'am.`country_id`,'
        . 'cm.country,'
        . 'am.pincode,'
        . 'am.gender,'
        . 'am.address,'
        . 'am.is_active,'
        . 'am.is_verified,'
        . 'am.created_by,'
        . 'am.created_at,'
        . 'am.modified_by,'
        . 'am.modified_at'
        );
$this->db->from('admin_master am');
$this->db->join('role_master rm','rm.id=am.role_id');
$this->db->join('profile_master pm','pm.id=am.profile_id');
$this->db->join('office_branch_master obm','obm.id=am.office_branch_id');
$this->db->join('country_master cm','cm.id=am.country_id');
$this->db->join('state_master sm','sm.id=am.state_id');
$this->db->join('city_master ctm','ctm.id=am.city_id');



        /*if ($id != 0) {
            $this->db->where('am.id',$id);
             $data = $this->db->get()->row_array();
        } else {
            $data = $this->db->get()->result();
        }*/


        if($flag==1){
            //return only self created records
            $this->db->where('am.created_by',$id);
            $data = $this->db->get()->result();
        }else if($flag==2){
            //return self and its child created records
            $this->db->join('admin_master am2','am2.created_by=am.id');
            $this->db->where('am.created_by',$id);
            $data = $this->db->get()->result();
        }else if($flag==3){
            //retun all records
            $data = $this->db->get()->result();
        }else if($flag==4){
            $this->db->where('am.id',$id);
             $data = $this->db->get()->row_array();
        }
        return $data;
    }
    
    public function update_admin($id, $data){
        $this->db->where('id', $id);
        $this->db->update('admin_master', $data);
        
        return true;
    }
    public function delete_admin($id) {
        return $this->db->delete('office_branch_master', array('id' => $id));
    }
    
    public function find_admin($aadharNo) {
          $data = $query = $this->db->get_where('admin_master', array('aadhar_no' => $aadharNo))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

    public function find_userid($userid) {
        $data = $query = $this->db->get_where('admin_master', array('userid' => $userid))->row_array();
        if (!empty($data)) {
            return FALSE;
        } else {
        return TRUE;
            
        }
  }

}
