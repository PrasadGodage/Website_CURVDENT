<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CountryMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => '11',
                'auto_increment' => true,
            ],
            'country' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
                
            ],
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('country_master');
    }

    public function down()
    {
        $this->forge->dropTable('country_master');
    }
}
