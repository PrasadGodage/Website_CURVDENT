<?php

namespace App\Models;

use CodeIgniter\Model;

class StateModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'state_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['country_id','state','is_active'];

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

    
    public function get_all_data1($id)
    {
        $builder = $this->db->table('state_master sm');
        $builder->select('sm.id as state_id, sm.country_id,sm.state,sm.is_active');
        $builder->join('country_master cm', 'cm.id=sm.id');
        
        if ($id != 0) {
            $builder->where('sm.id', $id);
            return $builder->get()->getRowArray();
        } else {
            return $builder->get()->getResultArray();
        }
    }

    public function get_all_data($id, $flag)
{
    $builder = $this->db->table('state_master sm');
    $builder->select('sm.id as state_id, sm.country_id,sm.state,sm.is_active');
    $builder->join('country_master cm', 'cm.id=sm.id');

    if ($id != 0 && $flag == 0) {
        $builder->where('sm.country_id', $id);
        $data = $builder->get()->getResult();
    } else if ($id != 0 && $flag == 1) {
        $builder->where('sm.id', $id);
        $data = $builder->get()->getRowArray();
    } else {
        $data = $builder->get()->getResult();
    }

    return $data;
}

}
