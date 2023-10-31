<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

use App\Controllers\BaseController;
use App\Models\IconModel;
use CodeIgniter\API\ResponseTrait;
use \Firebase\JWT\JWT;

class IconSeeder extends Seeder
{
    use ResponseTrait;

    public function run()
    {

        $iconModel = new IconModel();

        // Fetch all products from the database
        $icon_master = array(
            array('id' => '1','icon_title' => 'Dashboard','icon' => 'fa fa-dashboard'),
            array('id' => '2','icon_title' => 'Spinner','icon' => 'fa fa-fw fa-spinner'),
            array('id' => '3','icon_title' => 'Briefcase','icon' => 'glyphicon glyphicon-briefcase'),
            array('id' => '4','icon_title' => 'Location marker','icon' => 'fa fa-map-marker'),
            array('id' => '5','icon_title' => 'Bank','icon' => 'fa fa-bank'),
            array('id' => '6','icon_title' => 'Car','icon' => 'fa fa-automobile'),
            array('id' => '7','icon_title' => 'Cake','icon' => 'fa fa-birthday-cake'),
            array('id' => '8','icon_title' => 'Astrik','icon' => 'fa fa-asterisk'),
            array('id' => '9','icon_title' => 'Edit','icon' => 'fa fa-edit'),
            array('id' => '10','icon_title' => 'Bell','icon' => 'fa fa-bell-o'),
            array('id' => '11','icon_title' => 'Bookmark','icon' => 'fa fa-bookmark'),
            array('id' => '12','icon_title' => 'Circle','icon' => 'fa fa-circle-o'),
            array('id' => '13','icon_title' => 'Bars','icon' => 'fa fa-bars'),
            array('id' => '14','icon_title' => 'Archive','icon' => 'fa fa-archive')
          );

        $this->db->table('icon_master')->insertBatch($icon_master);
    }
}
