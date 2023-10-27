<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CityMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => '11',
                'unique' => true,
                'auto_increment' => true,
            ],
            'country_id' => [
                'type' => 'INT',
                'constraint' => '11',
            ],
            'state_id' => [
                'type' => 'INT',
                'constraint' => '11',
                
            ],
            'city' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
                
            ],
                   
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('city_master');
    }

    public function down()
    {
        $this->forge->dropTable('city_master');
    }
}
