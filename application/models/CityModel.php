<?php

class CityModel extends CI_Model {

    public function insert_city($data) {
        
        $this->db->insert('city_master', $data);
        return $this->db->insert_id();
    }

    public function get_city($id,$flag) {
        $data;
        $this->db->select('cm.id,'
        . 'cm.`state_id`,'
        . 'ctm.`id as country_id`,'
        . 'sm.state,'
        . 'ctm.country,'
        . 'cm.city'
        );
$this->db->from('city_master cm');
$this->db->join('state_master sm','sm.id=cm.state_id');
$this->db->join('country_master ctm','ctm.id=sm.country_id');



        if ($id != 0 && $flag==0) {
            $this->db->where('cm.country_id',$id);
             $data = $this->db->get()->result();
        } else if ($id != 0 && $flag==1){
            $this->db->where('cm.id',$id);
            $data = $this->db->get()->result();
        }else if ($id != 0 && $flag==2){
            $this->db->where('cm.state_id',$id);
            $data = $this->db->get()->result();
        }
        return $data;
    }

    
    public function update_city($id, $data){
        $this->db->where('id', $id);
        $this->db->update('city_master', $data);
        
        return true;
    }
    public function delete_city($id) {
        return $this->db->delete('city_master', array('id' => $id));
    }
    
    public function find_city($city,$stateid) {
          $data = $query = $this->db->get_where('city_master', array('city' => $city,'state_id'=>$stateid))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
