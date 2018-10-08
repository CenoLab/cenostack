package com.cenostack.ms.devops.utils;

import com.cenostack.ms.devops.dto.devops.BuildCode;
import com.cenostack.ms.devops.dto.devops.DeployPackage;

import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ReadFile {

    public List<String> readGitDir(BuildCode buildCode) {
        List<String> gitList = new ArrayList<>();
        File file = new File(buildCode.codePath);
        File[] fileList = file.listFiles();
        for (int i = 0; i < fileList.length; i++) {
            if (fileList[i].isDirectory()) {
                File[] files = fileList[i].listFiles();
                for (int j = 0; j < files.length; j++) {
                    if(files[j].getName().equals(".git")){
                        gitList.add(fileList[i].getName());
                        continue;
                    }
                    System.out.println(files[j].getName());
                }
                System.out.println(fileList[i].getName());
            }
        }
        return gitList;
    }

    public List<String> readWarDir(DeployPackage deployPackage) {
        Set<String> projectSet = new HashSet<>();
        List<String> gitList = new ArrayList<>();
        File file = new File(deployPackage.buildPath);
        File[] fileList = file.listFiles();
        for (int i = 0; i < fileList.length; i++) { // b2b-service-order
            if (fileList[i].isDirectory()) {
                File[] branchs = fileList[i].listFiles();
                for (int j = 0; j < branchs.length; j++) { // branch
                        File[] versions = branchs[j].listFiles();
                        for (int k = 0; k < versions.length; k++) { // vsrsion
                            File[] wars = versions[k].listFiles();
                            for (int l = 0; l < wars.length; l++) { // vsrsion
                                if (wars[l].getName().endsWith(".war")) {
                                    System.out.println("FIND:" + wars[l].getName());
                                    projectSet.add(fileList[i].getName());
                                    continue;
                                }
                                System.out.println(wars[l].getName());
                            }
                            System.out.println(versions[k].getName());
                        }
                    System.out.println(branchs[j].getName());
                }
                System.out.println(fileList[i].getName());
            }
        }
        for(String a:projectSet){
            gitList.add(a);
        }

        return gitList;
    }

    public List<String> readProgectBranchs(DeployPackage deployPackage) {
        Set<String> projectSet = new HashSet<>();
        List<String> gitList = new ArrayList<>();
        File file = new File(deployPackage.buildPath+"/"+deployPackage.projectName);

                File[] branchs = file.listFiles();
                for (int j = 0; j < branchs.length; j++) { // branch
                    File[] versions = branchs[j].listFiles();
                    for (int k = 0; k < versions.length; k++) { // vsrsion
                        File[] wars = versions[k].listFiles();
                        for (int l = 0; l < wars.length; l++) { // vsrsion
                            if (wars[l].getName().endsWith(".war")) {
                                System.out.println("FIND:" + wars[l].getName());
                                projectSet.add(branchs[j].getName());
                                continue;
                            }
                            System.out.println(wars[l].getName());
                        }
                        System.out.println(versions[k].getName());
                    }
                    System.out.println(branchs[j].getName());
                }

        for(String a:projectSet){
            gitList.add(a);
        }

        return gitList;
    }

    public List<String> readProgectVersions(DeployPackage deployPackage) {
        Set<String> projectSet = new HashSet<>();
        List<String> gitList = new ArrayList<>();
        File file = new File(deployPackage.buildPath+"/"+deployPackage.projectName+"/"+deployPackage.gitBranch);


            File[] versions = file.listFiles();
            for (int k = 0; k < versions.length; k++) { // vsrsion
                File[] wars = versions[k].listFiles();
                for (int l = 0; l < wars.length; l++) { // vsrsion
                    if (wars[l].getName().endsWith(".war")) {
                        System.out.println("FIND:" + wars[l].getName());
                        projectSet.add(versions[k].getName());
                        continue;
                    }
                    System.out.println(wars[l].getName());
                }
                System.out.println(versions[k].getName());
            }
        for(String a:projectSet){
            gitList.add(a);
        }

        return gitList;
    }
}
