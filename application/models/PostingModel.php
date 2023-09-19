<?php

class PostingModel extends CI_Model {

    public function insert_posting($data) {
        
        $this->db->insert('posting', $data);
        return $this->db->insert_id();
    }

    public function get_posting($id) {
        $data=[];
        if ($id != 0) {
            $this->db->select(
                'pm.id,'
                . 'pm.title,'
                . 'pm.seo_title,'
                . 'pm.content,'
                . 'pm.featured,'
                . 'pm.choice,'
                . 'pm.thread,'
                . 'pm.id_category,'
                . 'cm.category_name,'
                . 'pm.photo,'
                . 'pm.date,'
                . 'pm.is_active'
                
            );
            $this->db->from(' posting pm');
            $this->db->join('category cm', 'cm.id=pm.id_category');
            $query = $this->db->where('pm.id',$id);
            $data = $this->db->get()->result();
        }
           // $data = $query = $this->db->get_where('sales_master', array('id' => $id))->row_array();
        
         else
          {
            $this->db->select(
                'pm.id,'
                . 'pm.title,'
                . 'pm.seo_title,'
                . 'pm.content,'
                . 'pm.featured,'
                . 'pm.choice,'
                . 'pm.thread,'
                . 'pm.id_category,'
                . 'cm.category_name,'
                . 'pm.photo,'
                . 'pm.date,'
                . 'pm.is_active'
                
            );
            $this->db->from('posting pm');
            $this->db->join('category cm', 'cm.id=pm.id_category');
            $this->db->order_by('pm.id', "desc");
            $data = $this->db->get()->result();
        } 
        // return print_r($this->db->last_query());    

        return $data;
    }
    
    public function update_posting($id, $data){
        $this->db->where('id', $id);
        $this->db->update('posting', $data);
        
        return true;
    }
    public function delete_posting($id) {
        return $this->db->delete('posting', array('id' => $id));
    }
    
    public function find_posting($title) {
          $data = $query = $this->db->get_where('posting', array('title' => $title))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

    public function find_categoryid($categoryId) {
        $data = $query = $this->db->get_where('posting', array('id_category' => $categoryId))->row_array();
        if (!empty($data)) {
            return FALSE;
        } else {
        return TRUE;
            
        }
  }

    
}

