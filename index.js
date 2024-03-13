import nodemailer from 'nodemailer';
import { exec } from 'child_process'
import { senMailAboutKungFuPanda$, mailOptions } from './entities/sendEmail.js';
async function ghalatia$() {
  return await new Promise((resolve, reject) => {
    exec("start vlc \"assets/Alarm.mp4\"", (error, stdout, stderr) => {
      resolve({});
    })
  });

}
async function getTimer$(secs) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000 * secs)
  })
}
async function checkAvailibility$() {
  return await fetch("https://kinoafisha.ge").then(s => s.text()).then(str => {
    let arr1 = new Array(), arr2 = new Array();
    for (let i = 0; i < str.length - 3; i++) {
      if (str[i] != "<") continue;

      let serte = str.substring(i, i + 4);
      if (serte == "<div") {
        arr1.push(["<div", i]);
        continue;
      }
      else if (serte == "</di" && arr1.length != 0) {
        arr2.push([(arr1[arr1.length - 1][1]), i + 3]);
        arr1.pop();
        continue;
      }
    }
    let the_container;
    for (let i = 0; i < arr2.length; i++) {
      let satu = str.substring((arr2[i])[0], (arr2[i])[1]);
      if (satu.indexOf("movie-body") != -1) {
        the_container = satu;
        break;
      }
    }

    let sakitxavi = Boolean(the_container.indexOf("კუნგ ფუ პანდა 4") != -1);
    // let sakitxavi = Boolean(the_container.indexOf("დიუნი") != -1);
    console.log(sakitxavi);
    if (sakitxavi) {
      return Promise.all([senMailAboutKungFuPanda$({
        ...mailOptions,
        html: `<a href="https://kinoafisha.ge">Kinoafisha, <b>!!!!!!კუნგ ფუ პანდაააა!!!!!!</b> </a>`
      }), ghalatia$()]).then(() => 'nw');
    } else {
      console.log("checked\n\n");
      return {};
    }
    //=====================
  });
}
function getRandomNumberInRange() {
  return Math.floor(Math.random() * 10) + 3;
}
async function doIt() {
  const isAvailable = await checkAvailibility$().then((response) => getTimer$(getRandomNumberInRange()).then(() => response)).then((status) => {

    return status === 'nw' ? null : doIt();
  }).catch(async (err) => {
    console.log(err.message);
    return await getTimer$(getRandomNumberInRange()).then(() => doIt());
  });
  return isAvailable || null;
}
(async () => {
  return await doIt();
})();

//========================