<?php

class PostNewsletterModel extends CI_Model {

    public function insert_postingNews($data) {
        
        $this->db->insert('PostNewsletter', $data);
        return $this->db->insert_id();
    }

    public function get_postingNews($id) {
        $data=[];
         if ($id != 0) {
            $data = $query = $this->db->get_where('PostNewsletter', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('PostNewsletter')->result();
        }
        return $data;  
    }
    
    public function update_postingNews($id, $data){
        $this->db->where('id', $id);
        $this->db->update('PostNewsletter', $data);
        
        return true;
    }
    public function delete_postingNews($id) {
        return $this->db->delete('PostNewsletter', array('id' => $id));
    }
    
    public function find_postingNews($title) {
          $data = $query = $this->db->get_where('PostNewsletter', array('title' => $title))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }    
}

