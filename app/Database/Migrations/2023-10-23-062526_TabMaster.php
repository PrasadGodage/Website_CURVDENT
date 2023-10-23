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
                'constraint' => '255',
            ],
            'is_subtab' => [
                'type' => 'TINYINT',
                'unique' => true,
                'constraint' => '1',
            ],
            'icon_id' => [
                'type' => 'INT',
                'constraint' => '11',
            ],
            'is_active' => [
                'type' => 'TINYINT',
                'null' => true
            ],
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('tab_master');
    }

    public function down()
    {
        $this->forge->dropTable('tab_master');
    }
}
