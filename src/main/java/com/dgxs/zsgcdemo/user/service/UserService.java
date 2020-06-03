package com.dgxs.zsgcdemo.user.service;

import com.dgxs.zsgcdemo.user.entity.UserEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

public interface UserService {

    List<UserEntity> getAll(Map map);

    void delById(Integer id);

    //保存用户
    public void save(UserEntity userEntity);

    //根据id查询用户数据
    public UserEntity getUserById(Integer id);

    //根据id修改用户数据
    public void updateUserById(@RequestBody UserEntity userEntity);
}
