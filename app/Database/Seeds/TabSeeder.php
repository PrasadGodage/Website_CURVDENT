<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

use App\Controllers\BaseController;
use App\Models\TabModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class TabSeeder extends Seeder
{
    use ResponseTrait;

    public function run()
    {
        $tabModel = new TabModel();

        // Fetch all products from the database
        // $data = $tabModel->findAll();
        $data = $tabModel->get_data();

        $this->db->table('tab_master')->insertBatch($data);
    }
}
