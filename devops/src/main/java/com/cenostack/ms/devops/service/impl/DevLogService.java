package com.cenostack.ms.devops.service.impl;

import com.cenostack.ms.devops.dto.base.Page;
import com.cenostack.ms.devops.annotation.ApiMapping;
import com.cenostack.ms.devops.dao.DevopsOpLogEntityMapper;
import com.cenostack.ms.devops.entity.DevopsOpLogEntity;
import com.cenostack.ms.devops.service.IDevLogService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class DevLogService implements IDevLogService {


    @Resource
    private DevopsOpLogEntityMapper devopsOpLogEntityMapper;

    @ApiMapping("api.devlog.list")
    public List<DevopsOpLogEntity> getDevopsLogSimple(Page page) {
        List<DevopsOpLogEntity> logEntities =  devopsOpLogEntityMapper.selectBaseByPage(page.page,page.num);
        for(DevopsOpLogEntity devopsOpLogEntity:logEntities){
            devopsOpLogEntity.setResult(null);
        }
        return  logEntities;
    }

    @ApiMapping("api.devlog.detail")
    public DevopsOpLogEntity getDevopsLog(Integer id) {
        return devopsOpLogEntityMapper.selectByPrimaryKey(id);
    }
}
