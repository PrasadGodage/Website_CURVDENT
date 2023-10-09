<?php

class CategoryModel extends CI_Model {

    public function insert_category($data) {
        
        $this->db->insert('category', $data);
        return $this->db->insert_id();
    }

    public function get_category($id) {
        $data=[];
        if ($id != 0) {
            $this->db->select(
                'cm.id,'
                . 'cm.category_name,'
                . 'cm.slug,'
                . 'cm.is_active'
                
            );
            $this->db->from(' category cm');
            $query = $this->db->where('cm.id',$id);
            $data = $this->db->get()->result();
        }
           // $data = $query = $this->db->get_where('sales_master', array('id' => $id))->row_array();
        
         else
          {
            $this->db->select(
                'cm.id,'
                . 'cm.category_name,'
                . 'cm.slug,'
                . 'cm.is_active'                
                
            );
            $this->db->from('category cm');
            $this->db->order_by('cm.id', "desc");
            $data = $this->db->get()->result();
        } 
        // return print_r($this->db->last_query());    

        return $data;
    }
    
    public function update_category($id, $data){
        $this->db->where('id', $id);
        $this->db->update('category', $data);
        
        return true;
    }
    public function delete_category($id) {
        return $this->db->delete('category', array('id' => $id));
    }
    
    public function find_category($category_name) {
          $data = $query = $this->db->get_where('category', array('category_name' => $category_name))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

    
}

