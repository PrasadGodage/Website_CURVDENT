<?php

namespace App\Models;

use CodeIgniter\Model;

class ProfileActivityModel extends Model
{
    protected $db;
    protected $DBGroup          = 'default';
    protected $table            = 'profile_activity_permission';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['activity_id','profile_id'];

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

    
    public function get_all_data($id)
    {
        $builder = $this->db->table('profile_activity_permission pap');
        $builder->select('pap.id as ppermission_id, pap.activity_id, am.activity_title, am.tab_id, am.icon_id, am.url, pap.profile_id, pm.profile, im.icon');
        $builder->join('activity_master am', 'am.id=pap.activity_id');
        $builder->join('profile_master pm', 'pm.id=pap.profile_id');
        $builder->join('icon_master im', 'im.id=am.icon_id');

        if ($id != 0) {
            $builder->where('pap.profile_id', $id);
            return $builder->get()->getResult();
        } else {
            return $builder->get()->getResultArray();
        }
    }

    public function delete_profile_activity($activityid, $profileid)
{
    $builder = $this->db->table('profile_access_control_permission');
    $builder->where('activity_id', $activityid);
    $builder->where('profile_id', $profileid);
    $builder->delete();

    $builder = $this->db->table('profile_activity_permission');
    $builder->where('activity_id', $activityid);
    $builder->where('profile_id', $profileid);
    $builder->delete();

    // Check if any rows were affected
    $deletedRows = $this->db->affectedRows();

    return $deletedRows;
}


}
