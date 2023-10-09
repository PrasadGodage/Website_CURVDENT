<?php

class ProductModel extends CI_Model {

    public function insert_product($data) {
        
        $this->db->insert('product_master', $data);
        return $this->db->insert_id();
    }

    public function get_product($id) {
        $data=[];
        if ($id != 0) {
            $this->db->select('pm.id,'
        . 'pm.brand_id ,'
        . 'pm.productName,'
        . 'pm.availableStock,'
        . 'bm.brandName'
        );
     $this->db->from('product_master pm');
      $this->db->join('brand_master bm','bm.id=pm.brand_id');
       $query = $this->db->where('pm.id',$id);
        $data = $this->db->get()->row_array();
          
        } else {
            $this->db->select('pm.id,'
            . 'pm.brand_id ,'
            . 'pm.productName,'
            . 'pm.availableStock,'
            . 'bm.brandName'
            );
         $this->db->from('product_master pm');
          $this->db->join('brand_master bm','bm.id=pm.brand_id');
           $data = $this->db->get()->result();
           // $data = $this->db->get('product_master')->result();
        }
        return $data;
    }
    
    public function update_product($id, $data){
        $this->db->where('id', $id);
        $this->db->update('product_master', $data);
        
        return true;
    }
    public function delete_product($id) {
        return $this->db->delete('product_master', array('id' => $id));
    }
    
    public function find_product($productName) {
          $data = $query = $this->db->get_where('product_master', array('productName' => $productName))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

    public function get_authenticate($data) {
        $data = $query = $this->db->get_where('product_master', array('productName' => $data['productName'],'productName'=>$data['productName']))->row_array();
        return $data;
    }

}
