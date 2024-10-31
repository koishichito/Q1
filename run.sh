#!/bin/bash

PORT=$1
docker build -t ast/akm .
docker run -d -it --rm -p $1:3000 ast/akm
echo "[+] Services is deployed on port $1."