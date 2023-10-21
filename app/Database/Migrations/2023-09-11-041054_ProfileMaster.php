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
                'constraint' => 255,
                'unsigned' => true,
                'auto_increment' => true
            ],
            'role_id' => [
                'type' => 'BIGINT',
                'constraint' => '255',
                'unsigned' => true,
            ],
            'profile' => [
                'type' => 'VARCHAR',
                'unique' => true,
                'constraint' => '255',
            ],
            'is_active' => [
                'type' => 'TINYINT',
                'constraint' => '1',
                'default'    => 0,
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
        $this->forge->addForeignKey('role_id', 'role_master', 'id');
        $this->forge->createTable('profile_master');
    }

    public function down()
    {
        $this->forge->dropTable('profile_master');
    }
}
