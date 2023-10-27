<?php

namespace App\Models;

use CodeIgniter\Model;

class ProfileActivityControlPermissionModel extends Model
{
    protected $db;
    protected $DBGroup          = 'default';
    protected $table            = 'profile_access_control_permission';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['profile_id','aac_id','activity_id','permission'];

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
        $builder = $this->db->table('profile_access_control_permission pacp');
        // $builder->select('pacp.id, pacp.profile_id, pm.profile, pacp.aac_id, pacp.activity_id, am.activity_title, am.url, pacp.permission');
        $builder->select('pacp.id, pacp.profile_id, pm.profile, pacp.aac_id, acc.control_name, pacp.activity_id, am.activity_title, am.url, pacp.permission');
        $builder->join('activity_access_controls acc', 'acc.id = pacp.aac_id');
        $builder->join('activity_master am', 'am.id = pacp.activity_id');
        $builder->join('profile_master pm', 'pm.id = pacp.profile_id');

        if ($id !== 0) {
            $builder->where('pacp.profile_id', $id);
            return $builder->get()->getResultArray();
        } else {
            return $builder->get()->getResultArray();
        }
    }

}
