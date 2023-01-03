import { exec } from 'child_process'

export const sleep = {
  name: 'sleep',
  do() {
    exec('rundll32.exe powrprof.dll,SetSuspendState 0,1,0')
  }
}
