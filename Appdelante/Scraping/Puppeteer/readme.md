# Pupperteer

## Centos 7 installation via SSH

Download node.js and add it ti the yum directory
> curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -


Install the gcc-c++ and run make to build it
> yum install gcc-c++ make

Install Node.js
> yum install nodejs --enablerepo=nodesource

Verify installation
> node -v

> npm -v

Final step (here)
>rm package-lock.json

>npm install

----------------------------------

Install Puppeteer using --unsafe-perm=true
> npm install -g puppeteer --unsafe-perm=true

Install missing Chromium dependencies
> yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc

## The browser cannot be launched without --no-sandbox
>const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']})

----------------------------------

https://docs.avoka.com/ManagerInstallation/chromium-puppeteer-linux.htm
https://hashlucifer.medium.com/puppeteer-on-centos-7-364d8fb7963e

If some Chromium dependencies are missing, add the following ones:

>yum install libXcomposite libXcursor libXdamage libXext libXi libXtst
cup-libs libmng libXScrnSaver libXrandr libXv alsa-lib
cairo pango atk at-spi2-atk gtk3
