---
templateKey: blog-post
title: RetroPie Full Setup
date: 2021-07-15T15:04:10.000Z
featuredpost: true
featuredimage: /img/flavor_wheel.jpg
description: Build an emulator with Raspberry Pi and Retropie
tags:
  - emulator
  - raspberry pi
  - retropie
  - gaming
---
![alto bot](/img/flavor_wheel.jpg)

##The Components
- What you'll need:
    - A Raspberry Pi (Pi 3 is used here)
    - Power connector
    - Wired mouse
    - Wired Keyboard
    - Micro SD card (and an SD card reader)
    - Game controller of choice
    - Some dough to donate to RetroPie. Because they deserve every penny!

##The Software
- Flash the SD Card
    - The easiest way to get RetroPie OS onto your micro SD card is to use Raspberry Pi Imager. Install it, open it, and select the OS you want to use. In this case, choose RetroPie. Be sure to choose the OS version required by your specific generation of Pi. Next, select the drive you've use to format the card.
    - Alternatively, you can download the RetroPie OS image and use balenaEtcher to flash the SD card from your downloaded image file.
- Pre-load games
  - If you want to pre-load some games onto the Pi (i.e. you want games to be available on startup), then take a moment to follow the instructions here....and return once you've completed that step. If you'd rather wait to load your games, you can continue on now.

##Connect the components
- Put the pieces together
- Turn it on. You should see the RetroPie loading screen. You won't have any emulators to choose from just yet. First, it wants you to map the controls of your wired controller. The instructions for doing this are fairly clear, and the mapping you choose will depend on your controller of choice, so I won't cover it here.
- You'll want to change the default user and password before proceeding. Press F4 on your wired keyboard. This will take you to the terminal. Now you can change your user name and password.
- Connect to WiFI
    - Once you've completed that step, you can connect your Pi to WiFi. Go back to the emulator screen by typing `emulatationstation` in the terminal. Now navigate to RetroPie > Configuration > Wifi > Connect to Wifi Network and enter your SSID and password.
- Enable file sharing
    - Samba
      - Navigate to RetroPie > Configuration > RetroPie Setup > Configuration / Tools > Install RetroPie Samba shares. to make your Pi accessible on your Windows network. 
- Enable SSH
  - As of RetroPie 4.2, SSH is disabled by default. You can enable it by going to raspi-config > Interface Options > SSH and selecting 'Yes' to enable it.
- Find Your IP Address
    - You can do this from the main menu in emulation station
    - Or, within the terminal, use the command....
