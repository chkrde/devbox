# Setup devbox

```bash
mkdir -p code/src/github.com/chkrde
cd ~/code/src/github.com/chkrde
git clone https://github.com/chkrde/devbox
```

```bash
sudo pacman -Syu
sudo pacman -S ansible
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
chkrde ALL=(ALL:ALL) NOPASSWD: ALL
```

```bash
ansible-playbook devbox.yaml
# ansible-playbook -K --tags "env"  devbox.yaml
```

```bash
go get github.com/dty1er/kubecolor/cmd/kubecolor
# go get -u  github.com/dty1er/kubecolor/cmd/kubecolor
```

## Workflow reminder

```bash
cd ~/.zpresto
git remote add upstream https://github.com/sorin-ionescu/prezto.git
git remote -v
git fetch upstream
git checkout master
git merge upstream/master
```

## Other

Firefox about:config settings

```txt
ui.context_menus.after_mouseup
```

## Todo
