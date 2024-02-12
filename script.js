var selectedRow=null;
function onFormSubmit(e){
     event.preventDefault();
     var formData=readFormData();
     if(selectedRow === null){
        insertNewRecord(formData);
     }
     else{
         updateRecord(formData)
     }
     resetForm();
}
function readFormData(){
    var formData={};
    formData["productcode"]=document.getElementById("productcode").value
    formData["product"]=document.getElementById("product").value
    formData["quantity"]=document.getElementById("quantity").value
    formData["priceper"]=document.getElementById("priceper").value
    return formData;
}
function insertNewRecord(data){
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length)
    var cell1=newRow.insertCell(0);
        cell1.innerHTML = data.productcode;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML = data.product;    
    var cell3=newRow.insertCell(2);
        cell3.innerHTML = data.quantity;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML = data.priceper;
    var cell5=newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>edit</button> <button onClick='onDelete(this)'>delete</button>`
     } 
     function onEdit(td){
        selectedRow = td.parentElement.parentElement;
        document.getElementById('productcode').value=selectedRow.cells[0].innerHTML;
        document.getElementById('product').value=selectedRow.cells[1].innerHTML;
        document.getElementById('quantity').value=selectedRow.cells[2].innerHTML;
        document.getElementById('priceper').value=selectedRow.cells[3].innerHTML;       
    }
    function updateRecord(formData){
        selectedRow.cells[0].innerHTML=formData.productcode
        selectedRow.cells[1].innerHTML=formData.product
        selectedRow.cells[2].innerHTML=formData.quantity
        selectedRow.cells[3].innerHTML=formData.priceper
    }
    function onDelete(td){
        if(confirm('do you want to delete this record?')){
            row=td.parentElement.parentElement;
            document.getElementById("storeList").deleteRow(row.rowIndex);
        }
        resetForm();
    }
    function resetForm(){
        document.getElementById('productCode').value=''
        document.getElementById('product').value=''
        document.getElementById('quantity').value=''
        document.getElementById('priceper').value=''
    }