<?php

namespace App\Models;

use CodeIgniter\Model;

class ActivityControlModel extends Model
{
    protected $db;
    protected $DBGroup          = 'default';
    protected $table            = 'activity_access_controls';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['id','activity_id','control_name'];

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

    // public function update($id, $data) {
	// 	return $this->db
    //                     ->table('activity_access_controls')
    //                     ->where(["id" => $id])
    //                     ->set($data)
    //                     ->update();
	// }

    public function get_activityControlById($id)
    {
        $builder = $this->db->table('activity_access_controls aac');
        $builder->select('aac.id, aac.activity_id, aac.control_name');
                

        if ($id != 0) {
            $builder->where('aac.id', $id);
            return $builder->get()->getRowArray();
        } else {
            return null;
        }
    }


    public function update_data($id, $data)
    {
        $builder = $this->db->table('activity_access_controls');
        $builder->where('id', $id);
        $builder->update($data);

        return true;
    }
}
