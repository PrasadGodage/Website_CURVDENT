<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class RoleMaster extends Migration
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
            'role' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
           
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('role_master');
    }

    public function down()
    {
        $this->forge->dropTable('role_master');
    }
}
