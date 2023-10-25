<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

use App\Controllers\BaseController;
use App\Models\IconModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class IconSeeder extends Seeder
{
    public function run()
    {
        
        $iconModel = new IconModel();

        // Fetch all products from the database
        $data = $iconModel->findAll();

        $this->db->table('icon_master')->insertBatch($data);
    }
}
