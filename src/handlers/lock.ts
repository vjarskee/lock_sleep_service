import { exec } from 'child_process'

export const lock = {
  name: 'lock',
  do() {
    exec('Rundll32.exe user32.dll,LockWorkStation')
  }
}
