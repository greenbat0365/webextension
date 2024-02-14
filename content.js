const reference = document.getElementById("panel-group");
const actual = reference.lastElementChild;
const techtitle = document.querySelector('[title="Job Source"]');
var techtitletext = techtitle.textContent;
var trimmedtech = techtitletext.trim();

const createDiv1 = document.createElement("p");
const createDiv2 = document.createElement("p");
const createDiv3 = document.createElement("p");
const createDiv4 = document.createElement("p");
const createDiv5 = document.createElement("p");
const createDiv6 = document.createElement("p");
const createDiv7 = document.createElement("p");
const createDiv8 = document.createElement("p");
const createDiv9 = document.createElement("p");
const createDivLine1 = document.createElement("hr");
const createDivLine2 = document.createElement("hr");

let arrayobj = [];

const remotecsv =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSXkGTa78viY-XnN9qJL8i8yh1T9A8sEfEytCTankcTU6xB1-QDGDRFkFWNDlYvswyeJPwPblG-Pz0q/pub?gid=1727623462&single=true&output=csv";
Papa.parse(remotecsv, {
  error: function (err) {
    console.log(`Error: ${err.message}`);
  },
  download: true,
  complete: function (results) {
    arrayobj = results.data;
    console.log(arrayobj);

    for (var i = 0; i < arrayobj.length; i++) {
      for (var x = 0; x < arrayobj[i].length; x++) {
        let trimarrobj = arrayobj[i][x].trim();
        if (trimarrobj === trimmedtech) {
          createDiv1.textContent = arrayobj[i][0];
          createDiv2.textContent = arrayobj[i][1];
          createDiv3.textContent = arrayobj[i][2];
          createDiv4.textContent = arrayobj[i][3];
          createDiv5.textContent = arrayobj[i][4];
          createDiv6.textContent = arrayobj[i][5];
          
          let splitHours = arrayobj[i][6].split("--");
          let splitCantDo = arrayobj[i][7].split("--");
          let splitNotes = arrayobj[i][8].split("--");
          function createDivs(array) {
            for (let i = 0; i < array.length; i++) {
              const createDivFunction = document.createElement("p");
              createDivFunction.textContent = array[i];
              createDivFunction.style.margin = "0";
              actual.appendChild(createDivFunction);
              actual.appendChild(createDivLine1);
            }
          }
          function createDivNotes(array) {
            for (let i = 0; i < array.length; i++) {
              const createDivFunction = document.createElement("p");
              createDivFunction.textContent = array[i];
              //createDivFunction.style.margin = "0";
              actual.appendChild(createDivFunction);
              actual.appendChild(createDivLine2);
            }
          }

          createDivs(splitCantDo);
          createDivNotes(splitNotes);

          actual.appendChild(createDiv1);
          actual.appendChild(createDiv2);
          actual.appendChild(createDiv3);
          actual.appendChild(createDiv4);
          actual.appendChild(createDiv5);
          actual.appendChild(createDiv6);
          createDivs(splitHours);
          actual.appendChild(createDiv7);
          actual.appendChild(createDiv8);
          actual.appendChild(createDiv9);
        }
      }
    }
  },
});