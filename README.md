# node-youtube-comments
Youtube comments automation library written in Node.js

node-youtube-comments is an Youtube automation/bot library written in modern, clean javascript node.js using python to download all comments from any video. 
Goal is to be very easy to set up, use, and extend, and download all youtube comments.

Setup

First install Node.js 8 or newer.
Second install Python.

Create a new directory or just clone the repository.

Adjust your magic.js to your needs.
If you want to see how it would work without doing any invasive actions:

Open a terminal in the directory

Run yarn or npm i

Open your magic.js and edit the videoId like:
https://www.youtube.com/watch?v=kxloC1MKTpg

Copy, paste the id -> kxloC1MKTpg

Save the file

Run node magic and wait.

The comments.json will appears, just open it.

NOTE: SOME VIDEOS HAS MORE THAN 1.000 COMMENTS AND THAT CAN BE SLOWLY.

You can run this code for example every day using cron or pm2 or similar to get analisys from your Channel or something else.
