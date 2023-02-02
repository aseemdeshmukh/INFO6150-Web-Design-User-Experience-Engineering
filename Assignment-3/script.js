//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}
Title.prototype.getName = function () {
  return (this.mytitle);
}
var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};


var t = new Title("CONNECT WITH ME!");

var hideRow = document.getElementsByClassName('hideRow');
for (let i = 0; i < hideRow.length; i++) {
  hideRow[i].style.display = 'none';
}

document.getElementById('submitButton').disabled = 'disabled';

function mainFunction() {
  var table = document.getElementById("mainTable");
  var student_id = Math.floor((table.rows.length - 1) / 2) + 1;
  var old_count = table.rows.length;
  var row = table.insertRow(-1);
  var row2 = table.insertRow(-1);
  row2.style.display = 'none';
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  var cell5 = row.insertCell(5);
  var cell6 = row.insertCell(6);
  var cell7 = row.insertCell(7);
  var cell8 = row.insertCell(8);
  var cell9 = row.insertCell(9);
  var cell12 = row2.insertCell(0);
  cell0.innerHTML = '<td><input type="checkbox" onclick="childRec(this)"/><br /><br /><img src="down.png"  onclick="rowShow(this)" width="25px" /></td>';
  cell1.innerHTML = "Student " + student_id;
  cell2.innerHTML = "Teacher " + student_id;
  var status = ['Approved', 'Declined', 'Withheld'];
  cell3.innerHTML = `<td>${status[Math.floor(Math.random()*status.length)]}</td>`;
  var terms = ['Fall', 'Spring', 'Summer'];
  cell4.innerHTML = `<td>${terms[Math.floor(Math.random()*terms.length)]}</td>`;
  cell5.innerHTML = "TA";
  let num = Math.floor(Math.random()*90000) + 10000;
  cell6.innerHTML = `<td>${num}</td>`;  
  cell7.innerHTML = "100%";
  cell8.innerHTML = `<td><button class="deletebutton" onclick="deleteFn(this)">Delete</button></td>`;
  cell8.style.display = 'none';
  cell9.innerHTML = `<td><button class="edit" onclick="editFn()">Edit</button></td>`;
  cell9.style.display = 'none';
  cell12.innerHTML = `<td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td>`
  var parse_count = table.rows.length;

  if (parse_count > old_count) {
    alert("Record for "+cell1.innerText+" is created successfully!")
  } else {
    alert('Error in data addition')
  }

  var d = document.getElementsByClassName('hideRow');
  for (var i = 0; i < d.length; i++) {
    d[i].style.display = 'none';
    d[i].onClick = function () {
      var tr = this.parentNode.parentNode;
      let ti = tr.rowIndex;
      document.getElementById("mainTable").deleteRow(ti);
      //document.getElementById("mainTable").deleteRow(ti);
    }
  }
}

var toggle = document.getElementsByClassName('toggle');
for (let i = 0; i < toggle.length; i++) {
  toggle[i].style.display = 'none';
}

function rowShow(row) {
  var tr = row.parentNode.parentNode;
  let ti = tr.rowIndex;
  if (document.getElementsByTagName("tr")[ti + 1].style.display == 'none') {
    document.getElementsByTagName("tr")[ti + 1].style.display = '';
  } else {
    document.getElementsByTagName("tr")[ti + 1].style.display = 'none';
  }
}

function editFn() {
  alert("Edit the data below!");
}

function childRec(temp) {
  $(temp).closest('tr').toggleClass('activate');
  if (temp.checked) {
    temp.parentNode.parentNode.cells[temp.parentNode.parentNode.cells.length - 1].style.display = '';
    temp.parentNode.parentNode.cells[temp.parentNode.parentNode.cells.length - 2].style.display = '';
  } else {
    temp.parentNode.parentNode.cells[temp.parentNode.parentNode.cells.length - 1].style.display = 'none';
    temp.parentNode.parentNode.cells[temp.parentNode.parentNode.cells.length - 2].style.display = 'none';
  }
  var colorChange = document.getElementById('submitButton');
  if (temp.checked == true) {
    colorChange.className = "orangeBtn";
    colorChange.disabled = "";
  } else {
    colorChange.className = "greyBtn";
    colorChange.disabled = "disabled";
  }
}

function deleteFn(o) {
  var tr = o.parentNode.parentNode;
  let ti = tr.rowIndex;
  document.getElementById("mainTable").deleteRow(ti);
  //document.getElementById("mainTable").deleteRow(ti);
  alert('Data deleted successfully')
}