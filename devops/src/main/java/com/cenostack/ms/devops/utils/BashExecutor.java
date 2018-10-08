package com.cenostack.ms.devops.utils;

import org.springframework.stereotype.Component;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class BashExecutor {

    List<String> result;

    public BashExecutor() {
        this.result = new ArrayList<>();
    }

    public List<String> executeShell(String command, String[] args) throws IOException, InterruptedException {

        List<String> commands = new ArrayList<>();
        commands.add(command);
        for(String arg:args){
            commands.add(arg);
        }
        String[] commandsString = new String[commands.size()];
        final Process process = Runtime.getRuntime().exec(commands.toArray(commandsString));
        printMessage(process.getInputStream());
        printMessage(process.getErrorStream());

        int value = process.waitFor();

        return result;
    }

    private void printMessage(final InputStream input) {
        new Thread(new Runnable() {
            public void run() {
                Reader reader = new InputStreamReader(input);
                BufferedReader bf = new BufferedReader(reader);
                String line = null;
                try {
                    while((line=bf.readLine())!=null) {
                        result.add(line);
                    }
                } catch (IOException e) {
                    result.add(e.getMessage());
                    e.printStackTrace();
                }
            }
        }).start();
    }

}
