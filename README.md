# Setup devbox

```bash
mkdir -p code/src/github.com/chkrde
cd ~/code/src/github.com/chkrde
git clone https://github.com/chkrde/devbox
```

```bash
sudo apt-get update && apt-get upgrade
sudo apt-get install -y software-properties-common
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt-get install -y ansible
```

```bash
sudo visudo
# Add after groups
chkrde	ALL=(ALL:ALL) NOPASSWD: ALL
```

```bash
ansible-playbook devbox.yaml
# ansible-playbook -K --tags "env"  devbox.yaml
```

## Todo

- get rid of snapd
- merge firefox/user.js with github.com/pyllyukko/user.js/tree/relaxed
- copy/link firefox/user.js to profile folder
