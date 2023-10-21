<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class TabMaster extends Migration
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
            'tab_name' => [
                'type' => 'VARCHAR',
                'unique' => true,
                'constraint' => '100',
            ],
            'is_subtab' => [
                'type' => 'TINYINT',
                'constraint' => '1',
                'default' => 0,
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
        $this->forge->addForeignKey('icon_id', 'icon_master', 'id');
        $this->forge->createTable('tab_master');
    }

    public function down()
    {
        $this->forge->dropTable('tab_master');
    }
}
