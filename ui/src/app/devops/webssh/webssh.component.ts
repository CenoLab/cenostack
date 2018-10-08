import { Component, OnInit } from '@angular/core';
// import { Terminal } from 'xterm';
// import {fit} from 'xterm/lib/addons/fit/fit';
// import {terminadoAttach} from 'xterm/lib/addons/terminado/terminado';


@Component({
  selector: 'app-webssh',
  templateUrl: './webssh.component.html',
  styleUrls: ['./webssh.component.css']
})
export class WebsshComponent implements OnInit {

  // xterm:Terminal;
  // socket:WebSocket;
  
  constructor() { }

  ngOnInit() {
    // // Terminal.applyAddon(fit);
    // // Terminal.applyAddon(terminadoAttach);  // Apply the `terminado` addon
    // this.xterm = new Terminal();
    // this.socket = new WebSocket('wss://terminado.example.com/websocket');
    // // fit(this.xterm);
    // // terminadoAttach(this.xterm,this.socket,true,true);
    // this.xterm.open(document.getElementById('terminal'));
    // this.xterm.write('Hello from \x1B[1;3;31mGCY DevOps \x1B[0m $ ')
  }

}
