<?php

class NewsletterModel extends CI_Model {

    public function insert_newsletter($data) {
        
        $this->db->insert('newsletter_master', $data);
        return $this->db->insert_id();
    }

    public function get_newsletter($id) {
        $data=[];
        if ($id != 0) {
            $this->db->select(
                'nl.id,'
                . 'nl.email,'
                . 'nl.is_active'
                
            );
            $this->db->from('newsletter_master nl');
            $query = $this->db->where('nl.id',$id);
            $data = $this->db->get()->result();
        }
           // $data = $query = $this->db->get_where('sales_master', array('id' => $id))->row_array();
        
         else
          {
            $this->db->select(
                'nl.id,'
                . 'nl.email,'
                . 'nl.is_active'                
                
            );
            $this->db->from('newsletter_master nl');
            $this->db->order_by('nl.id', "desc");
            $data = $this->db->get()->result();
        } 
        // return print_r($this->db->last_query());    

        return $data;
    }
    
    public function update_newsletter($id, $data){
        $this->db->where('id', $id);
        $this->db->update('newsletter_master', $data);
        
        return true;
    }
    public function delete_newsletter($id) {
        return $this->db->delete('newsletter_master', array('id' => $id));
    }
    
    public function find_newsletter($email) {
          $data = $query = $this->db->get_where('newsletter_master', array('email' => $email))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

    
}

