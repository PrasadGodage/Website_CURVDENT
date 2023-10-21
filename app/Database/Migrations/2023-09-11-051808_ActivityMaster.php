<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class ActivityMaster extends Migration
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
            'tab_id' => [
                'type' => 'BIGINT',
                'unsigned' => true,
                'constraint' => '255',
            ],
            'activity_title' => [
                'type' => 'VARCHAR',
                'unique' => true,
                'constraint' => '150',
            ],
            'url' => [
                'type' => 'VARCHAR',
                'unique' => true,
                'constraint' => '150',
            ],
            'icon_id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
            ],
            'is_active' => [
                'type' => 'TINYINT',
                'constraint' => '1',
                'default' => 0,
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
        $this->forge->addForeignKey('tab_id', 'tab_master', 'id');
        $this->forge->addForeignKey('icon_id', 'icon_master', 'id');
        $this->forge->createTable('activity_master');
    }

    public function down()
    {
        $this->forge->dropTable('activity_master');
    }
}
