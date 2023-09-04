<?php

class InventoryModel extends CI_Model
{

    public function insert_inventory($data)
    {

        //insert inventory data in inventory_stock table
        $this->db->insert_batch('inventory_stock', $data);
        return $this->db->insert_id();
    }

    public function get_inventory($product_id, $purchaseId)
    {
        //if purchaseId!=0 then get inventory records based on product_id and ppdid
        // if purchaseId=0 then get inventory records based on product_id from inventory_stock

        $data = [];

        $this->db->select(
            'is.id,'
            . 'is.Product_Id,'
            . 'pm.productName,'
            . 'is.IMEINo,'
            . 'is.UIDNo_ICCDENo,'
            . 'is.SIM1No,'
            . 'is.SIM2No,'
            . 'is.Note,'
            . 'is.StkStatus,'
            . 'is.purchaseDate,'
            . 'is.PurchaseCreatedById,'
            . 'am.name,'
            . 'is.VenderId,'
            . 'vm.vendorName,'
            . 'is.PurchaseId,'
            . 'ppm.purchaseOrderNo,'
            . 'is.ActivationDate'
        );
        $this->db->from('inventory_stock is');
        $this->db->join('product_master pm', 'pm.id=is.Product_Id');
        $this->db->join('admin_master am', 'am.id=is.PurchaseCreatedById');
        $this->db->join('vendor_master vm', 'vm.id=is.VenderId');
        $this->db->join('product_purchase_master ppm', 'ppm.id=is.PurchaseId');
       

        if ($product_id != 0 && $purchaseId != 0) {
         
            $this->db->where('Product_Id', $product_id);
            $this->db->where('PurchaseId', $purchaseId);
            $data = $this->db->get()->result();

        } else if ($product_id != 0 && $purchaseId == 0) {

            $this->db->where('Product_Id', $product_id);
            $data = $this->db->get()->result();

        }else if($product_id == 0 && $purchaseId != 0){
            $this->db->where('PurchaseId', $purchaseId);
            $data = $this->db->get()->result();

        }else if($product_id == 0 && $purchaseId == 0){
            // $this->db->where('PurchaseId', $purchaseId);
            $this->db->where('StkStatus', 'Purchase');
            $data = $this->db->get()->result();
        }
        //return print_r($this->db->last_query());    
        return $data;
    }
    public function update_inventory($data)
    {
        //update inventory record in inventory_stock table
        // $this->db->where('id', $id);
        $this->db->update_batch('inventory_stock', $data, 'id');
        
        return true;
    }



    public function get_salesInventory($product_id, $salesId) 
    {
        //if purchaseId!=0 then get inventory records based on product_id and ppdid
        // if purchaseId=0 then get inventory records based on product_id from inventory_stock

        $data = [];

        $this->db->select(
            'is.id,'
            . 'is.Product_Id,'
            . 'pm.productName,'
            . 'is.IMEINo,'
            . 'is.UIDNo_ICCDENo,'
            . 'is.SIM1No,'
            . 'is.SIM2No,'
            . 'is.Note,'
            . 'is.StkStatus,'
            . 'is.salesDate,'
            . 'is.ClientId,'
            . 'cm.firstName,'
            . 'cm.lastName,'
            . 'is.SalesId,'
            . 'sm.salesOrderNo,'
            . 'is.ActivationDate'
        );
        $this->db->from('inventory_stock is');
        $this->db->join('product_master pm', 'pm.id=is.Product_Id');
        $this->db->join('sales_master sm', 'sm.id=is.SalesId');// is.id
        $this->db->join('client_master cm', 'cm.id=is.ClientId');
       

        if ($product_id != 0 && $salesId != 0) {
         
            $this->db->where('Product_Id', $product_id);
            $this->db->where('SalesId', $salesId);
            $data = $this->db->get()->result();

        } else if ($product_id != 0 && $salesId == 0) {

            $this->db->where('Product_Id', $product_id);
            $data = $this->db->get()->result();

        }else if($product_id == 0 && $salesId != 0){
            $this->db->where('SalesId', $salesId);
            $data = $this->db->get()->result();

        }
        // return print_r($this->db->last_query());    
        return $data;
    }


    public function find_inventory($id)
    {
        // find inventory record based on id from inventory table
    }


}