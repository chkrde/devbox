#!/bin/bash
/usr/bin/pactl set-source-mute @DEFAULT_SOURCE@ toggle # 2>&1 | tee /home/kriegec/i3b-r.log
