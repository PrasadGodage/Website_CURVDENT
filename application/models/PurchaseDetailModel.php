<?php

class PurchaseDetailModel extends CI_Model
{

    public function insert_purchaseDetail($data)
    {
        
            $this->db->insert_batch('product_purchase_details', $data);
            return true;
        
    }

    public function get_purchaseDetail($ppmid)
    {
        $data = [];
        if ($ppmid != 0) {
            $this->db->select(
                'ppd.id,'
                . 'ppd.ppm_id,'
                . 'ppd.product_id,'
                . 'pm.productName,'
                . 'ppd.totalQty,'
                . 'ppd.itemTotalAmt,'
                . 'ppd.itemtotalDisc,'
                . 'ppd.itemtotalTax,'
                . 'ppd.itemnetBill'
            );
            $this->db->from('product_purchase_details ppd');
            $this->db->join('product_master pm', 'pm.id=ppd.product_id');
            $query = $this->db->where('ppd.ppm_id', $ppmid);
            $data = $this->db->get()->result();
        }

        return $data;
    }

    public function update_purchaseDetail($id, $data)
    {
        $this->db->where('id', $id);
        $this->db->update('product_purchase_details', $data);

        return true;
    }
    public function delete_purchaseDetail($id)
    {
        return $this->db->delete('product_purchase_details', array('id' => $id));
    }

    public function find_purchaseDetail($id)
    {
        $data = $query = $this->db->get_where('product_purchase_details', array('ppm_id' => $id))->row_array();
        if (!empty($data)) {
            return FALSE;
        } else {
            return TRUE;

        }
    }


}