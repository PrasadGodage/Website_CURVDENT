<?php

namespace App\Models;

use CodeIgniter\Model;

class OfficeBranchModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'office_branch_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['office_type_id','office_name','address','country_id','state_id','city_id','area_id','pincode','hod_id','created_by','created_at','modified_by','modified_at','contact_number1','contact_number2','email_id'];

    // Dates
    protected $useTimestamps = false;
    protected $dateFormat    = 'datetime';
    protected $createdField  = 'created_at';
    protected $updatedField  = 'updated_at';
    protected $deletedField  = 'deleted_at';

    // Validation
    protected $validationRules      = [];
    protected $validationMessages   = [];
    protected $skipValidation       = false;
    protected $cleanValidationRules = true;

    // Callbacks
    protected $allowCallbacks = true;
    protected $beforeInsert   = [];
    protected $afterInsert    = [];
    protected $beforeUpdate   = [];
    protected $afterUpdate    = [];
    protected $beforeFind     = [];
    protected $afterFind      = [];
    protected $beforeDelete   = [];
    protected $afterDelete    = [];


    public function __construct()
    {
        parent::__construct();
        $this->db = \Config\Database::connect();
        // OR $this->db = db_connect();
    }
    // public function insert_data($data)
    // {
    //     $this->db->table($this->table)->insert($data);
    //     return $this->db->insertID();
    // }

    // public function update_data($id, $data)
    // {
    //     $this->db->table($this->table)->update($data, array(
    //         "id" => $id,
    //     ));
    //     return $this->db->affectedRows();
    // }

    // public function delete_data($id)
    // {
    //     return $this->db->table($this->table)->delete(array(
    //         "id" => $id,
    //     ));
    // }

    
    // public function get_all_data($id)
    // {
    //     $builder = $this->db->table('activity_master am');
    //     $builder->select('am.id as activity_id, am.tab_id, am.icon_id,tm.tab_name , am.activity_title,am.url,im.icon, am.is_active');
    //     $builder->join('tab_master tm', 'tm.id=am.tab_id');
    //     $builder->join('icon_master im', 'im.id=am.icon_id');

    //     if ($id != 0) {
    //         $builder->where('am.id', $id);
    //         return $builder->get()->getRowArray();
    //     } else {
    //         return $builder->get()->getResultArray();
    //     }
    // }

}
