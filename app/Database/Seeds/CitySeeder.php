<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class CitySeeder extends Seeder
{
    public function run()
    {
        $data = array(
            array('id' => '1','country_id' => '1','state_id' => '1','city' => 'Pune'),
            array('id' => '2','country_id' => '1','state_id' => '1','city' => 'Sangamner')
          );

          $this->db->table('city_master')->insertBatch($data);
    }
}
