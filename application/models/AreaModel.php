<?php

class AreaModel extends CI_Model {

    public function insert_area($data) {
        
        $this->db->insert('area_master', $data);
        return $this->db->insert_id();
    }

    public function get_area($id) {
        $data;
        $this->db->select('am.id,'
        . 'am.`city_id`,'
        . 'cm.`state_id`,'
        . 'ctm.`id as country_id`,'
        . 'sm.state,'
        . 'ctm.country,'
        . 'cm.city,'
        . 'am.area'
        );
$this->db->from('area_master am');
$this->db->join('city_master cm','cm.id=am.city_id');
$this->db->join('state_master sm','sm.id=cm.state_id');
$this->db->join('country_master ctm','ctm.id=sm.country_id');



        if ($id != 0) {
            $this->db->where('am.id',$id);
             $data = $this->db->get()->result();
        } else {
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    public function update_area($id, $data){
        $this->db->where('id', $id);
        $this->db->update('area_master', $data);
        
        return true;
    }
    public function delete_city($id) {
        return $this->db->delete('city_master', array('id' => $id));
    }
    
    public function find_area($cityid,$area) {
          $data = $query = $this->db->get_where('area_master', array('city_id' => $cityid,'area'=>$area))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
