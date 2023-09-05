<?php

class PurchaseModel extends CI_Model {

    public function insert_purchase($data) {
        
        $this->db->insert('product_purchase_master', $data);
        return $this->db->insert_id();
    }

    public function get_purchase($id) { 
        $data=[];
        if ($id != 0) {
            $this->db->select(
                'ppm.id,'
                . 'ppm.purchaseOrderNo,'
                . 'ppm.vendor_id,'
                . 'vm.vendorName,'
                . 'vm.gstin,'
                . 'vm.contactFirm,'
                . 'ppm.totalQty,'
                . 'ppm.itemTotalAmt,'
                . 'ppm.totalDisc,'
                . 'ppm.totalTax,'
                . 'ppm.netBill,'
                . 'ppm.paymentMtd,'
                . 'ppm.created_at,'
                . 'ppm.createdBy,'
                . 'am.name,'
                . 'ppm.lastModified_at,'
                . 'ppm.lastModifiedBy,'
                . 'lam.name,'
                . 'ppm.purchaseDate'
                
            );
            $this->db->from('product_purchase_master ppm');
            $this->db->join('vendor_master vm', 'vm.id=ppm.vendor_id');
            $this->db->join('admin_master am', 'am.id=ppm.createdBy');
            $this->db->join('admin_master lam', 'lam.id=ppm.lastModifiedBy');
            $query = $this->db->where('ppm.id',$id);
            $data = $this->db->get()->result();
        } else {
            $this->db->select(
                'ppm.id,'
                . 'ppm.purchaseOrderNo,'
                . 'ppm.vendor_id,'
                . 'vm.vendorName,'
                . 'vm.gstin,'
                . 'vm.contactFirm,'
                . 'ppm.totalQty,'
                . 'ppm.itemTotalAmt,'
                . 'ppm.totalDisc,'
                . 'ppm.totalTax,'
                . 'ppm.netBill,'
                . 'ppm.paymentMtd,'
                . 'ppm.created_at,'
                . 'ppm.createdBy,'
                . 'am.name,'
                . 'ppm.lastModified_at,'
                . 'ppm.lastModifiedBy,'
                . 'lam.name,'
                . 'ppm.purchaseDate'
                
            );
            $this->db->from('product_purchase_master ppm');
            $this->db->join('vendor_master vm', 'vm.id=ppm.vendor_id');
            $this->db->join('admin_master am', 'am.id=ppm.createdBy');
            $this->db->join('admin_master lam', 'lam.id=ppm.lastModifiedBy');
            $this->db->order_by('ppm.id', "desc");
            $data = $this->db->get()->result();
        }
        return $data;
    }
    
    public function update_purchase($id, $data){
        $this->db->where('id', $id);
        $this->db->update('product_purchase_master', $data);
        
        return true;
    }
    public function delete_purchase($id) {
        return $this->db->delete('product_purchase_master', array('id' => $id));
    }
    
    public function find_purchase($vendor_id) {
          $data = $query = $this->db->get_where('product_purchase_master', array('vendor_id' => $vendor_id))->row_array();
          if (!empty($data)) {
              return FALSE;
          } else {
          return TRUE;
              
          }
    }

    
}

