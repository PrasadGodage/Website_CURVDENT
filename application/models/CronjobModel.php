<?php

class CronjobModel extends CI_Model {

//    SELECT upm.`id` as upm_id, um.business_name,um.owner_name,um.emailid,um.contact2,um.is_active,pm.name as product_name,pm.description as product_description,upm.`user_id`,upm.`product_id`,upm.`installation_date`,upm.`installation_amount`,upm.`amc_amount_per_year`,upm.`upcomming_amc_date`,upm.`description` as user_product_description FROM `user_product_mapping` upm JOIN user_master um ON um.id=upm.user_id JOIN product_master pm ON pm.id=upm.product_id WHERE `upcomming_amc_date` BETWEEN CURRENT_DATE AND DATE_ADD(NOW(), INTERVAL 9 DAY)

    function getAmcExpireList() {
        $data = NULL;

        $this->db->select('upm.id as upm_id,'
                . 'upm.user_id,'
                . 'upm.product_id,'
                . ' um.business_name,'
                . 'um.owner_name,'
                . 'um.emailid,'
                . 'um.contact1,'
                . 'um.contact2,'
                . 'um.is_active,'
                . 'pm.name as product_name,'
                . 'pm.description as product_description,'
                . 'upm.installation_date,'
                . 'upm.installation_amount,'
                . 'upm.amc_amount_per_year,'
                . 'upm.upcomming_amc_date,'
                . 'upm.description as user_product_description');
        $this->db->from('user_product_mapping upm');
        $this->db->join('user_master um', 'um.id = upm.user_id');
        $this->db->join('product_master pm', 'pm.id = upm.product_id');
        $this->db->where('upm.upcomming_amc_date BETWEEN CURDATE() AND DATE_ADD(NOW(), INTERVAL 9 DAY)');
        $data = $this->db->get()->result();
        return $data;
    }

    
}
