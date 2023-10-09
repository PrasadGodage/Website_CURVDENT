<?php

class ClientModel extends CI_Model { 

    public function insert_client($data) {
        
        $this->db->insert('client_master', $data);
        return $this->db->insert_id();
    }

    public function get_client($id) {
        $data;
        if ($id != 0) {
            $data = $query = $this->db->get_where('client_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('client_master')->result(); 
        }
        return $data;
    }

    
    public function update_client($id,$data){
        $this->db->where('id', $id);
        $this->db->update('client_master', $data);
        
        return true;
    }
    public function delete_client($id) {
        return $this->db->delete('client_master', array('id' => $id)); 
    }
    
    public function find_client($client) {
          $data = $query = $this->db->get_where('client_master', array('firstName' => $client))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }
    public function get_authenticate($data) {
        $data = $query = $this->db->get_where('client_master', array('firstName' => $data['firstName'],'firstName'=>$data['firstName']))->row_array();
        return $data;
    }
}
