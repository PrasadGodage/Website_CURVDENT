<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class CountrySeeder extends Seeder
{
    public function run()
    {
        $data = array(
            array('id' => '1','country' => 'India'),
            array('id' => '2','country' => 'America')
          );
        
        
        $this->db->table('country_master')->insertBatch($data);
    }
}
