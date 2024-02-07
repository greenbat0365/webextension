let url = chrome.runtime.getURL("database.csv");

let arrayobj = [];
        Papa.parse(url,{
          header: true,
          download: true,
          dynamicTyping: true,
          complete: function(results) {
            arrayobj = results.data;
            console.log(arrayobj);
            arrayobj.forEach((score) => {
                let p1 = score.Adsource;
                let p2 = score.Company;
                let p3 = score.UleadzTechnician;
                let p4 = score.Metros;
                let p5 = score.ServiceArea;
                let p6 = score.Affiliates;
                let p7 = score.HoursofOperation;
                let p8 = score.CantDoList;
                let p9 = score.Notes;
                console.log(p1);
                const reference = document.getElementById("panel-group");
                const actual = reference.lastElementChild;

                const createDiv1 = document.createElement('p');
                const createDiv2 = document.createElement('p');
                const createDiv3 = document.createElement('p');



                createDiv1.textContent = p1;
                createDiv2.textContent ='prokeys';
                createDiv3.textContent ='prokeys';
                actual.appendChild(createDiv1);
                actual.appendChild(createDiv2);
                actual.appendChild(createDiv3);
                })
            }
         });