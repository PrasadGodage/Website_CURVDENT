<?php

class ShoppingCardModel extends CI_Model {

    public function generate_order($data) {
        
        $this->db->insert('shopping_order_master', $data);
        return $this->db->insert_id();
    }

    public function insert_cart_details($data) {
        $this->db->insert_batch('shopping_order_details', $data);
        return $this->db->insert_id();
    }

   public function update_admin_status($id,$data){
    $this->db->where('id', $id);
    $this->db->update('shopping_order_master', $data);
   }
    public function get_order_details($clientid=0) {
        $orderData=[];
        $orderDetails=[];
        $result=[];
        if($clientid!=0){
        $orderData = $this->db->order_by('createdAt', 'DESC')->get_where('shopping_order_master', array('clientid' => $clientid))->result();
        $orderDetails=$this->db->get_where('shopping_order_details', array('clientid' => $clientid))->result();
       }else{
        $orderData = $this->db->order_by('createdAt', 'DESC')->get('shopping_order_master')->result();
        $orderDetails=$this->db->get('shopping_order_details')->result();
       }
        
        $index=0;
        
        foreach ($orderData as $order){
            $tempArr=[];
        $tempArr['id']=$order->id;
        $tempArr['clientid']=$order->clientid;
        $tempArr['clientName']=$order->clientName;
        $tempArr['status']=$order->status;
        $tempArr['remark']=$order->remark;
        $tempArr['totalItem']=$order->totalItem;
        $tempArr['totalCost']=$order->totalCost;
        $tempArr['clientStatus']=$order->clientStatus;
        $tempArr['createdAt']=$order->createdAt;

        $tempDetailArr=[];
        $i=0;
                foreach($orderDetails as $detail){
                    if($detail->somid==$order->id){
                        
                        //$tempDetailArr[$i]=array("cakecat"=>$detail->cakecat,"flavour"=>$detail->flavour,"qty"=>$detail->qty,"price"=>$detail->price,"img"=>$detail->img);
                        $tempDetailArr[$i]=$detail;
                       $i++;
                    }
                }
                $tempArr['orderDetails']=$tempDetailArr;     

             $result[$index]=$tempArr;
             $index++;
        }
        return $result;
    }
}
