#!/bin/bash

icon_on_air="backlight_3"

#muted=$( pactl list sources |grep 'alsa_input.usb-Focusrite_Scarlett_Solo_USB' -A6|grep 'Mute: yes' )
muted=$( pactl info | grep 'Default Source' | awk '{print $3}' |  while IFS= read -r source; do pactl list sources |grep $source -A6|grep 'Mute: yes';done )

# Switch state when muted. switch of icon and text possible, too
if [ "$muted" ]; then
    printf '{\"icon\":\"%s\", \"state\":\"Idle\", \"text\": \" on-air\"}' "$icon_on_air" 
else
    printf '{\"icon\":\"%s\", \"state\":\"Warning\", \"text\": \" on-air\"}' "$icon_on_air" 
fi
