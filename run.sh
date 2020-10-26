#!/bin/bash
color=31
for name in "$@"; do
	yarn run "$name" | while IFS= read -r line; do
		printf "\033[%dm$name:\033[0m %s\n" $color "$line"
	done &
	(( color++ ))
done
wait