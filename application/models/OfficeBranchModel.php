<?php

class OfficeBranchModel extends CI_Model {

    public function insert_branch($data) {
        
        $this->db->insert('office_branch_master', $data);
        return $this->db->insert_id();
    }

    public function get_branch($id) {
        $data;
        $this->db->select('obm.id,'
        . 'obm.`office_type_id`,'
        . 'otm.`type`,'
        . 'obm.`office_name`,'
        . 'obm.`address`,'
        . 'obm.`area_id`,'
        . 'obm.`city_id`,'
        . 'cm.city,'
        . 'obm.state_id,'
        . 'sm.state,'
        . 'obm.`country_id`,'
        . 'ctm.country,'
        . 'obm.pincode,'
        . 'obm.contact_number1,'
        . 'obm.contact_number2,'
        . 'obm.email_id,'
        . 'obm.hod_id,'
        . 'obm.created_by,'
        . 'obm.created_at,'
        . 'obm.modified_by,'
        . 'obm.modified_at'
        );
$this->db->from('office_branch_master obm');
$this->db->join('office_type_master otm','otm.id=obm.office_type_id');
$this->db->join('city_master cm','cm.id=obm.city_id');
$this->db->join('state_master sm','sm.id=obm.state_id');
$this->db->join('country_master ctm','ctm.id=obm.country_id');



        if ($id != 0) {
            $this->db->where('obm.id',$id);
             $data = $this->db->get()->row_array();
        } else {
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    public function update_branch($id, $data){
        $this->db->where('id', $id);
        $this->db->update('office_branch_master', $data);
        
        return true;
    }
    public function delete_branch($id) {
        return $this->db->delete('office_branch_master', array('id' => $id));
    }
    
    public function find_branch($officeTypeId,$officeName) {
          $data = $query = $this->db->get_where('office_branch_master', array('office_type_id' => $officeTypeId,'office_name'=>$officeName))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
