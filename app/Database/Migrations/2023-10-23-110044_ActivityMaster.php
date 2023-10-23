<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class ActivityMaster extends Migration
{
    public function up()
    {
        //
        $this->forge->addField([
            'id' => [
                'type' => 'BIGINT',
                'constraint' => 255,
                'unsigned' => true,
                'auto_increment' => true
            ],
            'tab_id' => [
                'type' => 'INT',
                'unique' => true,
                'constraint' => '11',
            ],
            'icon_id' => [
                'type' => 'INT',
                'constraint' => '11',
            ],
            'activity_title' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
            ],
            'url' => [
                'type' => 'VARCHAR',
                'unique' => true,
                'constraint' => '255',
            ],
            'is_active' => [
                'type' => 'TINYINT',
                'null' => true
            ],
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('activity_master');
    }

    public function down()
    {
        $this->forge->dropTable('activity_master');
    }
}
