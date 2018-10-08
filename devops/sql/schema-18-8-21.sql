create database devops;
use devops;
drop table devops_container;
drop table devops_git_project;
drop table devops_git_user;
drop table devops_java_build;
drop table devops_java_deploy;

create  table if not exists devops_java_build(
  id int(32) not null primary key auto_increment,
  developer_id int(32) not null,

  project_name varchar(64) COLLATE utf8_general_ci  not null,

  git_project_id int(32) COLLATE utf8_general_ci  not null,
  git_branch varchar(64) COLLATE utf8_general_ci  not null,

  code_path varchar(64) COLLATE utf8_general_ci  not null,
  build_path varchar(64) COLLATE utf8_general_ci  not null,

  version varchar(64) COLLATE utf8_general_ci  not null,

  build_type varchar(16) COLLATE utf8_general_ci  not null,

  jvm_options varchar(128) COLLATE utf8_general_ci  not null,

  last_modify_time datetime default  current_timestamp,
  create_time datetime default current_timestamp
)Engine=InnoDB character set utf8;


create table if not exists devops_git_project(
  id int(32) not null primary key auto_increment,
  developer_id int(32) not null,

  project_name varchar(64) COLLATE utf8_general_ci  not null,
  git_path varchar(64) COLLATE utf8_general_ci  not null,
  git_user int(32) not null,

  last_modify_time datetime default  current_timestamp,
  create_time datetime default current_timestamp
)Engine=InnoDB character set utf8;


create table if not exists devops_git_user(
  id int(32) not null primary key auto_increment,
  developer_id int(32) not null,

  git_user_name varchar(64) COLLATE utf8_general_ci  not null,
  git_user_pwd varchar(64) COLLATE utf8_general_ci  not null,

  last_modify_time datetime default  current_timestamp,
  create_time datetime default current_timestamp
)Engine=InnoDB character set utf8;


create table if not exists devops_container(
  id int(32) not null primary key auto_increment,
  developer_id int(32) not null,

  container_host varchar(64) COLLATE utf8_general_ci  not null,
  container_user varchar(64) COLLATE utf8_general_ci  not null,
  container_pwd varchar(64) COLLATE utf8_general_ci  not null,
  container_port int(16) not null,

  last_modify_time datetime default  current_timestamp,
  create_time datetime default current_timestamp
)Engine=InnoDB character set utf8;



create table if not exists devops_java_deploy(
  id int(32) not null primary key auto_increment,
  developer_id int(32) not null,

  deploy_container int(32) not null,
  java_build int(32) not null,
  deploy_path varchar(64) COLLATE utf8_general_ci  not null,
  deploy_with_script int(32) COLLATE utf8_general_ci not null,

  last_modify_time datetime default  current_timestamp,
  create_time datetime default current_timestamp
)Engine=InnoDB character set utf8;


alter table devops_container add container_name varchar(32) COLLATE utf8_general_ci  not null;
alter table devops_container add container_desc varchar(64) COLLATE utf8_general_ci ;

show variables like'character_set_%';
show variables like'collation_%';
alter database devops character set utf8;
alter table devops.devops_container character set utf8;
alter table devops.devops_git_project character set utf8;
alter table devops.devops_git_user character set utf8;
alter table devops.devops_java_build character set utf8;
alter table devops.devops_java_deploy character set utf8;

alter table devops_java_deploy add version varchar(32) COLLATE utf8_general_ci  not null;
alter table devops_java_deploy add env varchar(32) not null COLLATE utf8_general_ci default 'prod';



create table devops_developer(
  id int(32) not null primary key auto_increment,

  developer_username varchar(32)  COLLATE utf8_general_ci not null,
  developer_password varchar(32)  COLLATE utf8_general_ci not null,

  developer_email varchar (64)  COLLATE utf8_general_ci,
  developer_phone varchar(16)  COLLATE utf8_general_ci,

  developer_token varchar(32)  COLLATE utf8_general_ci,

  last_modify_time datetime default  current_timestamp,
  create_time datetime default current_timestamp
)Engine=InnoDB;

insert into devops_developer
(developer_username,developer_password,developer_email,developer_phone,developer_token)
values
('yangxingfeng','d43a6ed8704d85adb7b049af56e7f8f6','yangxingfeng@jd.com','15122372903','d43a6ed8704d85adb7b049af56e7f8f6');


insert into devops_developer
(developer_username,developer_password,developer_email,developer_phone,developer_token)
values
('devops','2ce4755a1b5b6ad9d356f966dba68580','yangxingfeng@jd.com','15122372903','2ce4755a1b5b6ad9d356f966dba68580');

create table if not exists devops_log(
    id int(32) not null primary key auto_increment,
    developer_id int(32) not null,

    username varchar(32),
    command varchar(64),
    args varchar(64),
    dtime varchar(32),
    content varchar(128),
    ddesc varchar(128),
    result varchar(256),

    last_modify_time datetime default  current_timestamp,
    create_time datetime default current_timestamp

)Engine=InnoDB;