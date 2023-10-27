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
    protected $allowedFields    = ['activity_id','control_name'];

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
        if ($id != 0) {
            $query = $this->db->table('activity_access_controls')
                            ->where('id', $id)
                            ->get();
            return $query->getRowArray();
        } else {
            return [];
        }
    }


    public function update_data($id, $data)
    {
        $this->db->table($this->table)->update($data, array(
            "id" => $id,
        ));
        return $this->db->affectedRows();
    }
}
