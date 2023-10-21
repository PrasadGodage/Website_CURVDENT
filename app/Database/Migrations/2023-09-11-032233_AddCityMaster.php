<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddCityMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
                'auto_increment' => true
            ],
            'country_id' => [
                'type' => 'BIGINT',
                'constraint' => '255',
                'unsigned' => true,
            ],
            'state_id' => [
                'type' => 'BIGINT',
                'constraint' => '255',
                'unsigned' => true,
            ],
            'city' => [
                'type' => 'VARCHAR',
                'unique' => false,
                'constraint' => '255',
            ],
            
            'created_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
            ],
            'updated_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
            ],
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('country_id', 'country_master', 'id');
        $this->forge->addForeignKey('state_id', 'state_master', 'id');
        $this->forge->createTable('city_master');
    }

    public function down()
    {
        $this->forge->dropTable('city_master');
    }
}
