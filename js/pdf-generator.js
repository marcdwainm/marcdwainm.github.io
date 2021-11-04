document.getElementById("download").addEventListener("click", () => {
    const invoice = this.document.getElementById("invoice");
    var opt = {
        margin: 0,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {scale: 2},
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(invoice).set(opt).save();
})

$(document).ready(function(){
    addDiv = function(){
        var medicineTableContent = document.createElement('div');
        medicineTableContent.classList.add('medicine-table-content')
        medicineTableContent.innerHTML = "<span contenteditable = 'true' class = 'left'>Drug Name</span><span contenteditable = 'true' class = 'center'>0mg</span><span contenteditable = 'true' class = 'right'>Sample Frequency</span>";

        var divTable = document.getElementById('medicine-table');
        divTable.appendChild(medicineTableContent);
    }

    $('#add-div').click(function(){
        addDiv();
    })

    $("#revert").click(function(){
        document.getElementById('name').innerHTML = 'Sample Name';
        document.getElementById('age').innerHTML = '0';
        document.getElementById('address').innerHTML = 'Sample Address';
        document.getElementById('date').innerHTML = '00/00/0000';

        var divTable = document.getElementById('medicine-table');
        var toDelete = divTable.getElementsByClassName('medicine-table-content');

        while(toDelete[0]){
            toDelete[0].parentNode.removeChild(toDelete[0]);
        }
        
        addDiv();
    })
        
})

