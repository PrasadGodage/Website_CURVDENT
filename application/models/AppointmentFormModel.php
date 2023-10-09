<?php

class AppointmentFormModel extends CI_Model {

    public function insert_appointment($data) {
        
        $this->db->insert('appointment_master', $data);
        return $this->db->insert_id();
    }

    public function get_appointment($id) {
        $data=[];
         if ($id != 0) {
            $data = $query = $this->db->get_where('appointment_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('appointment_master')->result();
        }
        return $data;  
    }
    
    public function update_appointment($id, $data){
        $this->db->where('id', $id);
        $this->db->update('appointment_master', $data);
        
        return true;
    }
    public function delete_appointment($id) {
        return $this->db->delete('appointment_master', array('id' => $id));
    }
    
    public function find_appointment($patient_name) {
          $data = $query = $this->db->get_where('appointment_master', array('fullName' => $patient_name))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }    
}

