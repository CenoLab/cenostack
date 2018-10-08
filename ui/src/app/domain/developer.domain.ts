export class Developer{
    id:Number;
    developerUsername:String;
    developerEmail:String;
    developerPhone:String;
    developerToken:String;
    lastModifyTime:String;
    createTime:String;



    toString():string{
        return JSON.stringify(this);
    }
}