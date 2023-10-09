<?php

class EmployeeLoginModel extends CI_Model {

    public function get_authenticate($data) {
        $this->db->select('am.id,'
        . 'am.`role_id`,'
        . 'rm.`role`,'
        . 'am.`profile_id`,'
        . 'pm.`profile`,'
        . 'am.`office_branch_id`,'
        . 'obm.`office_name`,'
        . 'am.`name`,'
        . 'am.`profile_image`,'
        . 'am.`dob`,'
        . 'am.`age`,'
        . 'am.`aadhar_no`,'
        . 'am.`pancard`,'
        . 'am.`password`,'
        . 'am.`userid`,'
        . 'am.`contact_number1`,'
        . 'am.`contact_number2`,'
        . 'am.`email_id`,'
        . 'am.`city_id`,'
        . 'ctm.city,'
        . 'am.state_id,'
        . 'sm.state,'
        . 'am.`country_id`,'
        . 'cm.country,'
        . 'am.pincode,'
        . 'am.gender,'
        . 'am.address,'
        . 'am.is_active,'
        . 'am.is_verified,'
        . 'am.created_by,'
        . 'am.created_at,'
        . 'am.modified_by,'
        . 'am.modified_at'
        );
        $this->db->from('admin_master am');
        $this->db->join('role_master rm','rm.id=am.role_id');
        $this->db->join('profile_master pm','pm.id=am.profile_id');
        $this->db->join('office_branch_master obm','obm.id=am.office_branch_id');
        $this->db->join('country_master cm','cm.id=am.country_id');
        $this->db->join('state_master sm','sm.id=am.state_id');
        $this->db->join('city_master ctm','ctm.id=am.city_id');
      $this->db->where("am.userid='".$data['userid']."' AND am.password='".$data['password']."'");
        $result = $this->db->get()->row_array();
        return $result;
    }

    public function send_mail($email) {
        $result = array();
        $sql = "SELECT * FROM admin_master WHERE userid = '$email'";
        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            $token = md5($email) . rand(10, 9999);
            $expFormat = mktime(
                    date("H"), date("i") + 15, date("s"), date("m"), date("d"), date("Y")
            );
            $expDate = date("Y-m-d H:i:s", $expFormat);
            $sql = "UPDATE admin_master SET token = '$token',expiry_date='$expDate' WHERE userid = '$email'";
            $query = $this->db->query($sql);
            //  $result['data'] = $query->result();
            $result['token'] = $token;
            $result['status'] = true;
        } else {
            $result['data'] = [];
            $result['status'] = false;
        }
        return $result;
    }

    public function check_link($email, $token) {
        $sql = "SELECT token,expiry_date FROM admin_master WHERE token = '$token' AND userid='$email'";
        $query = $this->db->query($sql);
        if ($query->num_rows() > 0) {
            $result['data'] = $query->row();
            $result['status'] = true;
        } else {
            $result['data'] = [];
            $result['status'] = false;
        }
        return $result;
    }

}
