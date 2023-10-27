<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class StateMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => '11',
                'auto_increment' => true,
            ],
            'country_id' => [
                'type' => 'INT',
                'constraint' => '11',
            ],
            'state' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
                
            ],
            'is_active' => [
                'type' => 'TINYINT',
                'null' => true
            ],
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('state_master');
    }

    public function down()
    {
        $this->forge->dropTable('state_master');
    }
}
