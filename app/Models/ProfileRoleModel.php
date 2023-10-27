<?php

namespace App\Models;

use CodeIgniter\Model;

class ProfileRoleModel extends Model
{

    protected $db;
    protected $DBGroup          = 'default';
    protected $table            = 'profile_role_permission';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['role_id','profile_id'];

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
    public function insert_data($data)
    {
        $this->db->table($this->table)->insert($data);
        return $this->db->insertID();
    }

    public function update_data($id, $data)
    {
        $this->db->table($this->table)->update($data, array(
            "id" => $id,
        ));
        return $this->db->affectedRows();
    }

    public function delete_data($id)
    {
        return $this->db->table($this->table)->delete(array(
            "id" => $id,
        ));
    }

    
    public function get_all_data($id = 0)
    {
        $builder = $this->db->table('profile_role_permission prp');
        $builder->select('prp.id as ppermission_id,prp.role_id, rm.role, prp.profile_id, pm.profile');
        $builder->join('role_master rm', 'rm.id = prp.role_id');
        $builder->join('profile_master pm', 'pm.id = prp.profile_id');

        if ($id != 0) {
            $builder->where('prp.profile_id', $id);
            return $builder->get()->getResult();
        } else {
            return $builder->get()->getResult();
        }
    }
}
