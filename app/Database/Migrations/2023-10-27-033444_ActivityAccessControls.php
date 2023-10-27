<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class ActivityAccessControls extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => '11',
                'auto_increment' => true,
            ],
            'activity_id' => [
                'type' => 'INT',
                'constraint' => '11',
                
            ],
            'control_name' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
                
            ],
            
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('activity_access_controls');
    }

    public function down()
    {
        $this->forge->dropTable('activity_access_controls');
    }
}
