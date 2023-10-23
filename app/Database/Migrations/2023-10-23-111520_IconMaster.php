<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class IconMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 11,
                'unsigned' => true,
                'auto_increment' => true
            ],
            'icon_title' => [
                'type' => 'VARCHAR',
                'unique' => true,
                'constraint' => '50',
            ],
            'icon' => [
                'type' => 'VARCHAR',
                'unique' => true,
                'constraint' => '50',
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
