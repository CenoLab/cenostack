package com.cenostack.ms.devops.service;

import com.cenostack.ms.devops.dto.base.Page;
import com.cenostack.ms.devops.entity.DevopsOpLogEntity;

import java.util.List;

public interface IDevLogService {
    List<DevopsOpLogEntity> getDevopsLogSimple(Page page);
    DevopsOpLogEntity getDevopsLog(Integer id);
}
