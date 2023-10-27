<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class ProfileAccessControlPermission extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => '11',
                'auto_increment' => true,
            ],
            'profile_id' => [
                'type' => 'INT',
                'constraint' => '11',
                
            ],
            'aac_id' => [
                'type' => 'INT',
                'constraint' => '11',
                
            ],
            'activity_id' => [
                'type' => 'INT',
                'constraint' => '11',
                
            ],
            'permission' => [
                'type' => 'INT',
                'constraint' => '11',
                'default' => '0',
                
            ],
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('profile_access_control_permission');
    }

    public function down()
    {
        $this->forge->dropTable('profile_access_control_permission');
    }
}
