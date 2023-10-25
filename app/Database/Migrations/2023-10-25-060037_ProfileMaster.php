<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class ProfileMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'BIGINT',
                'constraint' => '255',
                'unsigned' => true,
                'auto_increment' => true
            ],
            'role_id' => [
                'type' => 'INT',
                'constraint' => '11',
                'unique' => true,
                
            ],
            'profile' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'is_active' => [
                'type' => 'TINYINT',
                'null' => true,
                'constraint' => '4',
            ],
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('profile_master');
    }

    public function down()
    {
        $this->forge->dropTable('profile_master');
    }
}
