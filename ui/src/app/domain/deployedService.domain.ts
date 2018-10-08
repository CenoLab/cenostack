import { GitProject } from "./gitProject.domain";
import { BuildCode } from "./codeBuild.domain";
import { ServiceOther } from "./serviceOther.domain";

export class DeployedService{
    gitProject:GitProject;
    codeBuild:BuildCode;
    deployPackage:DeployedService;
    serviceOther:ServiceOther;
}