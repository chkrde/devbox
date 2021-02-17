for i in $(command ls -l | egrep  '^d' | awk '{print $9}'); do echo "### $i ###" && pushd $i && git pull && popd && echo ""; done
