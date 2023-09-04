<?php

class StateModel extends CI_Model {

    public function insert_state($data) {
        
        $this->db->insert('state_master', $data);
        return $this->db->insert_id();
    }

    public function get_state($id,$flag) {
        $data;
        $this->db->select('sm.id,'
        . 'sm.`country_id`,'
        . 'cm.`country`,'
        . 'sm.state,'
        . 'sm.is_active'
        );
$this->db->from('state_master sm');
$this->db->join('country_master cm','cm.id=sm.country_id');

        if ($id != 0 && $flag ==0) {
            $this->db->where('sm.country_id',$id);
             $data = $this->db->get()->result();
        } else if ($id != 0 && $flag ==1){
            $this->db->where('sm.id',$id);
             $data = $this->db->get()->row_array();
        }else{
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    public function update_state($id, $data){
        $this->db->where('id', $id);
        $this->db->update('state_master', $data);
        
        return true;
    }
    public function delete_state($id) {
        $this->db->where('id', $id);
       return $this->db->update('state_master',array('is_active'=>0));
    }
    
    public function find_state($state,$countryid) {
          $data = $query = $this->db->get_where('state_master', array('state' => $state,'country_id'=>$countryid))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
