<?php

class UserMasterModel extends CI_Model {

    public function insert_user($data) {

        $this->db->insert('user_master', $data);
        return $this->db->insert_id();
    }

    public function get_user($id) {
        $data;
        if ($id != 0) {
            $data = $query = $this->db->get_where('user_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('user_master')->result();
        }
        return $data;
    }

    public function update_user($data) {
        $this->db->where('id', $data['id']);
        $this->db->update('user_master', $data);
    }
    
    public function delete_user($id) {
        return $this->db->delete('user_master', array('id' => $id));
    }

}
