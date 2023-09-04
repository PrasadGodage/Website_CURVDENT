<?php

class UploadCakeImagesModel extends CI_Model {

    public function insert_cakeimages($data) {
        
        $this->db->insert('cake_images_master', $data);
        return $this->db->insert_id();
    }

    public function get_cake_images($id) {
        $data;
        if ($id != 0) {
            $data = $query = $this->db->get_where('cake_images_master', array('id' => $id))->row_array();
        } else {
            $data = $this->db->get('cake_images_master')->result();
        }
        return $data;
    }
    
    public function update_cake_mages($id, $data){
        $this->db->where('id', $id);
        $this->db->update('cake_images_master', $data);
        
        return true;
    }
    public function delete_role($id) {
        return $this->db->delete('role_master', array('id' => $id));
    }
    
    public function find_cakeid($cakeDetailId) {
          $data = $query = $this->db->get_where('cake_images_master', array('cake_detail_id' => $cakeDetailId))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

}
