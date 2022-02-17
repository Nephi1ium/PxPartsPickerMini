const pdfArray = []

const x = document.getElementsByClassName("ttb");
const y = document.getElementsByClassName("tfb");
const coll = document.getElementsByClassName("collapsible");

const rbk = document.getElementById("z89.511");
const lbk = document.getElementById("z89.512");
const rak = document.getElementById("z89.612");
const lak = document.getElementById("z89.611");

const appOpenBut = document.querySelector("#stepOne");
const appCloseBut = document.querySelector("#stepTwo");


appOpenBut.addEventListener("click", () => disOpenNav());
appCloseBut.addEventListener("click", () => appOpenNav());




//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapse_sidebar/ 

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }


//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapse_sidebar/ 
// My own code! Below
function disOpenNav (){
    document.getElementById("stepOne").style.display = "none";
  }

  function appOpenNav (){
    document.getElementById("stepOne").style.display = "initial";
  }
// My own code, above

function changeStyle() {
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        console.log(x);
    }
    
  }
  function changeOStyle() {    
    for (let i = 0; i < y.length; i++) {
        y[i].style.display = "none";
        console.log(y);
    }
    
  }
  function changeChoices() {
    let x = document.getElementsByClassName("ttChoice");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "inline-block";
    }

    
  }
  function change1Choices() {
    let x = document.getElementsByClassName("tfChoice");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "inline-block";
    }

    
  }
  
  
  function resetChoices (x, y){
      let x1= x;
      let y1= y;
    while ( x1 === 1 && y1 === 1){
        document.location.reload(true);
    }

    
  }

function expandChoice (){
let i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      console.log(coll);
    } else {
      content.style.display = "block";
      console.log(coll);
    }
  });


}
}


$(function(){
    
$(document).ready(function(){
    $("#empVer").modal('show');
});


$('#closeMod').on('click', function() {
    $('#closeMod').modal('hide');
});

});



/* This is the function for resetting the clicking of the two buttons to reset both sections that dissappear.
var flag = true;
function myFunction(){
  let el = document.getElementById("demo");
  el.style.fontsize = flag ? "25px" : "";
  el.style.color= flag ? "#3AF702" : "";
  el.style.backgroundcolor=flag ? "red" : "";   
  flag = !flag; 
}    


<button type="change" onclick="myFunction()">Change!</button>
  
  /*
  ttPandS.getElementById("ttPandS").style.display = "none";
/* The below was grabbed from  https://www.geeksforgeeks.org/how-to-make-html-table-expand-on-click-using-javascript/ in an effort to create a table from the px data that would expand on click
class CellEntry {
            constructor() {
                this.sum = 0;
                this.percentage = 0;
            }
        }
  
        class OutletBasedRowEntry {
            constructor() {
                this.cells = {
                    Total: new CellEntry()
                };
                this.childRows = {};
            }
            add(entry) {
                this.cells.Total.sum += entry.netamount;
                this.getOrCreateCellById(
                    entry.outlet).sum += entry.netamount;
            }
            getOrCreateChildRowById(id) {
                if (!this.childRows[id]) 
                    this.childRows[id] = 
                        new OutletBasedRowEntry();
                return this.childRows[id];
            }
            getOrCreateCellById(id) {
                if (!this.cells[id]) 
                    this.cells[id] = new CellEntry();
                return this.cells[id];
            }
        }
  
        function tabulizeData(data) {
            let TotalRowEntry = new OutletBasedRowEntry();
            data.forEach(entry => {
                TotalRowEntry.add(entry);
                TotalRowEntry.getOrCreateChildRowById(
                        entry.brandname).add(entry);
                TotalRowEntry.getOrCreateChildRowById(
                        entry.brandname).
                        getOrCreateChildRowById(
                        entry.itemname).add(entry);
            });
            renderTable(TotalRowEntry);
        }
  
        function renderTable(TotalRowEntry) {
            let $table = $('#ExpenseTable');
            let $thead = $(
'<thead><tr><th>Brand Name</th></tr><tr><th></th></tr><tr><th>Total</th></tr><thead>'),
                $tbody = $('<tbody>');
            let $headingRows = $thead.find('tr');
  
            function addCellEntriesToRow(
                rowEntry, $row) {
                for (let cellName in 
                    TotalRowEntry.cells) {
                    let cellEntry = rowEntry
                        .getOrCreateCellById(cellName);
                    $('<td>').html(cellEntry.sum)
                            .appendTo($row);
                    $('<td>').html(cellEntry.percentage)
                                .appendTo($row);
                }
            }
  
            $.each(TotalRowEntry.cells, 
                function (cellName, cellEntry) {
                $('<th colspan=2>').html(cellName)
                    .appendTo($headingRows.eq(0));
                $('<th>PROFIT</th>')
                    .appendTo($headingRows.eq(1));
                $('<th>LOSS</th>').appendTo(
                    $headingRows.eq(1));
                $('<th>').html(cellEntry.sum)
                    .appendTo($headingRows.eq(2));
                $('<th>').html(cellEntry.percentage)
                    .appendTo($headingRows.eq(2));
            });
  
            $.each(TotalRowEntry.childRows, 
                function (brandName, rowEntry) {
                let $row = $('<tr>').appendTo($tbody);
                let rowId = 'row' + $row.index();
                let firstCell = $(
'<td><i class="fas fa-plus add-btn" data-toggle="collapse" data-target=".' 
                    + rowId + '"></i>' + brandName 
                    + '</td>').appendTo($row);
                addCellEntriesToRow(rowEntry, $row);
                $.each(rowEntry.childRows, function (
                        itemName, rowEntry) {
                    $row = $('<tr>').addClass('collapse ' 
                        + rowId).appendTo($tbody);
                    $('<td>').html(itemName).appendTo($row);
                    addCellEntriesToRow(rowEntry, $row);
                });
            });
  
            $thead.appendTo($table);
            $tbody.appendTo($table);
        }
  
        tabulizeData([{
            "outlet": "MUMBAI",
            "brandname": "HOTEL-1",
            "itemname": "Restaurant",
            "transactionType": "TransferIn",
            "netamount": 980
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-1",
            "itemname": "Hall",
            "transactionType": "TransferIn",
            "netamount": 130
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-1",
            "itemname": "Bakery",
            "transactionType": "TransferIn",
            "netamount": 500
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-2",
            "itemname": "Restaurant",
            "transactionType": "TransferIn",
            "netamount": 110
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-2",
            "itemname": "Party",
            "transactionType": "TransferIn",
            "netamount": 720
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-2",
            "itemname": "Pool",
            "transactionType": "TransferIn",
            "netamount": 40000
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-2",
            "itemname": "Bakery",
            "transactionType": "TransferIn",
            "netamount": 14000
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-2",
            "itemname": "Marriage",
            "transactionType": "TransferIn",
            "netamount": 500
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-2",
            "itemname": "Car Valet",
            "transactionType": "TransferIn",
            "netamount": 5500
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-2",
            "itemname": "Expense",
            "transactionType": "TransferIn",
            "netamount": 1000
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-3",
            "itemname": "Restaurant",
            "transactionType": "TransferIn",
            "netamount": 324
        },
        {
            "outlet": "MUMBAI",
            "brandname": "HOTEL-4",
            "itemname": "Party",
            "transactionType": "LOSS",
            "netamount": 476426
        },
        {
            "outlet": "JAIPUR",
            "brandname": "HOTEL-4",
            "itemname": "Party",
            "transactionType": "LOSS",
            "netamount": 115313
        },
        {
            "outlet": "BANGALORE",
            "brandname": "HOTEL-4",
            "itemname": "Party",
            "transactionType": "LOSS",
            "netamount": 92141
        }
        ]);

















/*
let part = document.getElementById("comp")



/*let itemHide = false;
let hover = 

function showChoices (itemHide){
while (hover = true) {
    show = !itemHide
}
}

Node.addEventListener('eventname', functionname);

Node.addEventListener('mouseover', functionname); */
/*
document.getElementById("pandS"),addEventListener('mouseover', function () {showChoice.innerHTML = butChoice.innerHTML;}, false); /* I currently do not have a
function yet which would control the animation or action of the intended front page design. Wherein the "first choice" can be hovered over and the next two choices 
are available to choose */


/* The below code moves all <li> items into an array that can then be called. This needs to be paired, or modified to allow an "addEventListener" to allocate
all the items into a "cart" of some kind. My current research talks about using Jquery, which I currently do not know how to do. *//*
window.addEventListener('load', getText);

var listItems = document.getElementById('list').getElementsByTagName('li');

myArray = map(listItems, getText);

function map(arrayLike, fn) {
var ret = [], i = -1, len = arrayLike.length;
while (++i < len) ret[i] = fn(arrayLike[i]);
return ret;
}

function getText(node) {
if (node.nodeType === 3) return node.data;
var txt = '';
if (node = node.firstChild) do {
    txt += getText(node);
} while (node = node.nextSibling);
return txt;
}


function showChoice (part, choose){
    if 
}

function userInput (identify){

    while (){

    }
}

/* The below is one way to use a jquery function
$(function(){
    $('h1').css('color', 'red')
}); */  
