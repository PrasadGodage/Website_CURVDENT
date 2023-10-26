<?php

namespace App\Models;

use CodeIgniter\Model;

class EmployeeLoginModel extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'admin_master';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = ['role_id','profile_id','office_branch_id','name','profile_image','dob','age','gender','aadhar_no','pancard','userid','password','contact_number1','contact_number2','email_id','address','country_id','state_id','city_id','area_id','pincode','is_active','is_verified','created_at','created_by','modified_at','modified_by'];

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
}
