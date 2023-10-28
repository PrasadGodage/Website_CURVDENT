<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class OfficeBranchMaster extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => '11',
                'auto_increment' => true
            ],
            'office_type_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'office_name' => [
                'type' => 'VARCHAR',
                'constraint' => '255'
                
            ],
            'address' => [
                'type' => 'VARCHAR',
                'constraint' => '255'
            ],
            'country_id' => [
                'type' => 'INT',
                'constraint' => '11'
            ],
            'state_id' => [
                'type' => 'INT',
                'constraint' => '11',
                'null' => true
            ],
            'city_id' => [
                'type' => 'INT',
                'constraint' => '11'
                
            ],
            'area_id' => [
                'type' => 'INT',
                'constraint' => '11',
                'null' => true
            ],
            'pincode' => [
                'type' => 'INT',
                'constraint' => '11'
            ],
            'hod_id' => [
                'type' => 'INT',
                'constraint' => '11'
            ],
            'created_by' => [
                'type' => 'VARCHAR',
                'constraint' => '255',
                'null' => true
            ],
            'created_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
            ],
            'modified_by' => [
                'type' => 'INT',
                'constraint' => '11',
                'null' => true
            ],
            'modified_at' => [
                'type' => 'TIMESTAMP',
                'null' => true
                
            ],
            'contact_number1' => [
                'type' => 'VARCHAR',
                'constraint' => '20',
                'null' => FALSE
            ],
            'contact_number2' => [
                'type' => 'VARCHAR',
                'constraint' => '20',
                'null' => TRUE
            ],
            'email_id' => [
                'type' => 'VARCHAR',
                'constraint' => '150'
                
            ],
                        
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('office_branch_master');
    }

    public function down()
    {
        $this->forge->dropTable('office_branch_master');
    }
}
