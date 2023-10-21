<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddIconMaster extends Migration
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
            'icon_title' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ],
            'icon' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
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
        $this->forge->createTable('icon_master');
    }

    public function down()
    {
        $this->forge->dropTable('icon_master');
    }
}
