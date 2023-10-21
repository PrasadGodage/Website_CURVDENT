<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddStateMaster extends Migration
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
            'country_id' => [
                'type' => 'BIGINT',
                'constraint' => '255',
                'unsigned' => true,
            ],
            'state' => [
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
        $this->forge->addForeignKey('country_id', 'country_master', 'id');
        $this->forge->createTable('state_master');
    }

    public function down()
    {
        $this->forge->dropTable('state_master');
    }
}
