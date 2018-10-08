package com.cenostack.ms.devops.dto.devops;

/**
 * @author yangjt
 * @date 2018/8/20
 */
public class Command
{
    private String command;
    private String args;

    public String getCommand()
    {
        return command;
    }

    public Command(String command, String args) {
        this.command = command;
        this.args = args;
    }

    public void setCommand(String command)
    {
        this.command = command;
    }

    public String getArgs()
    {
        return args;
    }

    public void setArgs(String args)
    {
        this.args = args;
    }

    public void out(){
        System.out.println(command+" "+args);
    }

    @Override
    public String toString()
    {
        return "Request{" +
                "command='" + command + '\'' +
                ", args='" + args + '\'' +
                '}';
    }
}
