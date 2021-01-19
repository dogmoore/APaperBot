#!/usr/bin/bash
@ECHO OFF
TITLE APaperBot Console
ECHO Fetching files from github, please wait a moment
GIT fetch https://github.com/dogmoore/APaperBot
ECHO files fetched, now starting up bot
NODE index.js
PAUSE
