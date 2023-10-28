<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class StateSeeder extends Seeder
{
    public function run()
    {
        $data = array(
            array('id' => '1','country_id' => '1','state' => 'Maharashtra','is_active' => '1'),
            array('id' => '2','country_id' => '1','state' => 'Gujrat','is_active' => '1')
          );

          $this->db->table('state_master')->insertBatch($data);
    }
}
