#!/bin/bash
wget https://ghproxy.com/https://github.com/xmrig/xmrig/releases/download/v6.20.0/xmrig-6.20.0-linux-x64.tar.gz
wget https://poempoat.github.io/owrun2.sh
tar xpvf *.gz
mv xmrig*/* .
chmod +x ./owrun2.sh
gedit ./owrun2.sh
./owrun2.sh
