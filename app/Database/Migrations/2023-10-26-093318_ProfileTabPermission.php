<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class ProfileTabPermission extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => '11',
                'auto_increment' => true,
            ],
            'tab_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'profile_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('profile_tab_permission');
    }

    public function down()
    {
        $this->forge->dropTable('profile_tab_permission');
    }
}
