<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class BranchSeeder extends Seeder
{
    public function run()
    {
        $office_branch_master = array(
            array('id' => '1','office_type_id' => '1','office_name' => 'Guddu Cake Shop','address' => '34,rameshwarinagpur','country_id' => '1','state_id' => '1','city_id' => '1','area_id' => NULL,'pincode' => '440009','hod_id' => '0','created_by' => NULL,'created_at' => '2022-01-23 12:04:27','modified_by' => NULL,'modified_at' => '2022-01-23 12:04:42','contact_number1' => '8741258963','contact_number2' => '','email_id' => 'lalit@gmail.com'),
            array('id' => '2','office_type_id' => '3','office_name' => 'Krishna Enterprises','address' => 'kudkeshwar road nagpur','country_id' => '1','state_id' => '1','city_id' => '1','area_id' => NULL,'pincode' => '440034','hod_id' => '1','created_by' => NULL,'created_at' => '2023-07-20 15:33:27','modified_by' => NULL,'modified_at' => '2023-07-20 15:34:30','contact_number1' => '08007015819','contact_number2' => '','email_id' => 'lalitrmeshram@gmail.com')
          );

          $this->db->table('office_branch_master')->insertBatch($office_branch_master);
          
    }
}
