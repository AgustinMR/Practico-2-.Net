var app = angular.module('EmployeeApp', []);

app.controller('controller', function ($scope, $http) {
    $scope.ingresar = function () {
        ingresar2();
    };
    $scope.listar = function () {
        listar2();
        
        $http.get("http://localhost:49222/api/employees").then(function (response) {
            if (response !== undefined) {
                var emp = JSON.stringify(response.data);
                alert(emp);
                angular.forEach(JSON.parse(emp), function (employee) {
                    var tr = document.createElement("tr");
                    var td = document.createElement("td");
                    td.innerHTML = employee.EmployeeId;
                    var td2 = document.createElement("td");
                    td2.innerHTML = employee.Name;
                    var td3 = document.createElement("td");
                    td3.innerHTML = employee.StartDate;
                    tr.appendChild(td);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    document.getElementById("tabla").appendChild(tr);
                });
            }
        });
    };
});

function ingresar2() {
    'use strict';
    var divPrincipal = document.createElement("div");
    divPrincipal.className = "w3-col s12 m12 w3-light-grey l12 w3-right w3-card-2 w3-panel w3-opacity-min w3-round";
    divPrincipal.style.borderBottomStyle = "solid";
    divPrincipal.style.borderWidth = "5px";
    divPrincipal.style.borderBottomColor = "#388d6a";
    divPrincipal.style.display = "block";
    var span = document.createElement("span");
    span.className = "w3-closebtn w3-hover-none w3-hover-text-deep-orange";
    span.addEventListener("click", function () { document.getElementById("main").removeChild(divPrincipal); });
    var h3_1 = document.createElement("h3");
    h3_1.style.marginTop = "10px";
    h3_1.innerHTML = "×";
    h3_1.style.fontWeight = "bold";
    h3_1.className = "w3-right w3-closebtn w3-hover-text-red w3-hover-none w3-button";
    span.appendChild(h3_1);
    var h3_2 = document.createElement("h3");
    h3_2.style.color = "#388d6a";
    h3_2.className = "w3-margin-top w3-margin-left";
    h3_2.innerHTML = "Empleado Nuevo";
    var hr = document.createElement("hr");
    hr.className = "w3-green";
    var form = document.createElement("div");
    form.className = "w3-container";
    var label = document.createElement("label");
    label.className = "w3-label";
    label.innerHTML = "Nombre";
    form.appendChild(label);
    var input2 = document.createElement("input");
    input2.className = "w3-input w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    input2.type = "text";
    input2.style.width = "50%";
    input2.style.minWidth = "200px";
    input2.style.marginTop = "10px";
    input2.id = "nombreI";
    form.appendChild(input2);
    var label2 = document.createElement("label");
    label2.className = "w3-label";
    label2.innerHTML = "Start Date";
    form.appendChild(label2);
    var input3 = document.createElement("input");
    input3.className = "w3-input w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    input3.type = "text";
    input3.style.width = "50%";
    input3.style.minWidth = "200px";
    input3.style.marginTop = "10px";
    input3.id = "startDateI";
    form.appendChild(input3);
    var label3 = document.createElement("label");
    label3.className = "w3-label";
    label3.innerHTML = "Tipo de Contrato";
    form.appendChild(label3);
    var br = document.createElement("br");
    form.appendChild(br);
    var select = document.createElement("select");
    select.id = "selectI";
    select.className = "w3-select w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    select.style.width = "50%";
    select.style.marginTop = "10px";
    var option = document.createElement("option");
    option.value = "";
    option.disabled = "true";
    option.selected = "true";
    option.innerHTML = "Seleccionar";
    select.appendChild(option);
    var option2 = document.createElement("option");
    option2.value = "part";
    option2.innerHTML = "Part Time";
    select.appendChild(option2);
    var option3 = document.createElement("option");
    option3.value = "full";
    option3.innerHTML = "Full Time";
    select.appendChild(option3);
    form.appendChild(select);
    select.onchange = function () {
        if (select.value === "part") {
            document.getElementById("lbl4").style.display = "block";
            document.getElementById("salaryI").style.display = "block";
            document.getElementById("lbl5").style.display = "none";
            document.getElementById("hourlyRateI").style.display = "none";
        } else {
            document.getElementById("lbl4").style.display = "none";
            document.getElementById("salaryI").style.display = "none";
            document.getElementById("lbl5").style.display = "block";
            document.getElementById("hourlyRateI").style.display = "block";
        }
    };
    var br2 = document.createElement("br");
    form.appendChild(br2);
    var label4 = document.createElement("label");
    label4.className = "w3-label";
    label4.innerHTML = "Salary";
    label4.style.display = "none";
    label4.id = "lbl4";
    form.appendChild(label4);
    var input4 = document.createElement("input");
    input4.className = "w3-input w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    input4.type = "text";
    input4.style.width = "50%";
    input4.style.minWidth = "200px";
    input4.style.marginTop = "10px";
    input4.id = "salaryI";
    input4.style.display = "none";
    form.appendChild(input4);
    var label5 = document.createElement("label");
    label5.className = "w3-label";
    label5.innerHTML = "Hourly Rate";
    label5.style.display = "none";
    label5.id = "lbl5";
    form.appendChild(label5);
    var input5 = document.createElement("input");
    input5.className = "w3-input w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    input5.type = "text";
    input5.style.width = "50%";
    input5.style.minWidth = "200px";
    input5.style.marginTop = "10px";
    input5.style.display = "none";
    input5.id = "hourlyRateI";
    form.appendChild(input5);
    var div = document.createElement("div");
    div.className = "w3-col s12 m12 l12";
    div.align = "right";
    var button = document.createElement("button");
    button.className = "w3-btn w3-margin-top w3-margin-bottom w3-text-white w3-round";
    button.style.backgroundColor = "#388d6a";
    button.innerHTML = "INGRESAR";
    div.appendChild(button);
    form.appendChild(div);
    divPrincipal.appendChild(span);
    divPrincipal.appendChild(h3_2);
    divPrincipal.appendChild(hr);
    divPrincipal.appendChild(form);
    while (document.getElementById("main").firstChild) {
        document.getElementById("main").removeChild(document.getElementById("main").firstChild);
    }
    document.getElementById("main").appendChild(divPrincipal);
}
function modificar2() {
    "use strict";
    var divPrincipal = document.createElement("div");
    divPrincipal.className = "w3-col s12 m12 w3-light-grey l12 w3-right w3-card-2 w3-panel w3-opacity-min w3-round";
    divPrincipal.style.borderBottomStyle = "solid";
    divPrincipal.style.borderWidth = "5px";
    divPrincipal.style.borderBottomColor = "#388d6a";
    divPrincipal.style.display = "block";
    var span = document.createElement("span");
    span.className = "w3-closebtn w3-hover-none w3-hover-text-deep-orange";
    span.addEventListener("click", function () { document.getElementById("main").removeChild(divPrincipal); });
    var h3_1 = document.createElement("h3");
    h3_1.style.marginTop = "10px";
    h3_1.innerHTML = "×";
    h3_1.style.fontWeight = "bold";
    h3_1.className = "w3-right w3-closebtn w3-hover-text-red w3-hover-none w3-button";
    span.appendChild(h3_1);
    var h3_2 = document.createElement("h3");
    h3_2.style.color = "#388d6a";
    h3_2.className = "w3-margin-top w3-margin-left";
    h3_2.innerHTML = "Modificar Empleado";
    var form = document.createElement("div");
    form.className = "w3-container";
    var select = document.createElement("select");
    select.id = "selectM";
    select.className = "w3-select w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    select.style.width = "50%";
    form.appendChild(select);
    var div = document.createElement("div");
    div.className = "w3-col s12 m12 l12 w3-margin";
    //div.style.display = "none";
    div.style.marginTop = "20px";
    var label = document.createElement("label");
    label.className = "w3-label";
    label.innerHTML = "Nombre";
    div.appendChild(label);
    var input2 = document.createElement("input");
    input2.className = "w3-input w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    input2.type = "text";
    input2.style.width = "50%";
    input2.style.minWidth = "200px";
    input2.style.marginTop = "10px";
    input2.id = "nombreI";
    div.appendChild(input2);
    var label2 = document.createElement("label");
    label2.className = "w3-label";
    label2.innerHTML = "Start Date";
    div.appendChild(label2);
    var input3 = document.createElement("input");
    input3.className = "w3-input w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    input3.type = "text";
    input3.style.width = "50%";
    input3.style.minWidth = "200px";
    input3.style.marginTop = "10px";
    input3.id = "startDateI";
    div.appendChild(input3);
    var label3 = document.createElement("label");
    label3.className = "w3-label";
    label3.innerHTML = "Tipo de Contrato";
    div.appendChild(label3);
    var br = document.createElement("br");
    div.appendChild(br);
    var select2 = document.createElement("select");
    select2.id = "selectI";
    select2.className = "w3-select w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    select2.style.width = "50%";
    select2.style.marginTop = "10px";
    var option = document.createElement("option");
    option.value = "";
    option.disabled = "true";
    option.selected = "true";
    option.innerHTML = "Seleccionar";
    select2.appendChild(option);
    var option2 = document.createElement("option");
    option2.value = "part";
    option2.innerHTML = "Part Time";
    select2.appendChild(option2);
    var option3 = document.createElement("option");
    option3.value = "full";
    option3.innerHTML = "Full Time";
    select2.appendChild(option3);
    div.appendChild(select2);
    select2.onchange = function () {
        if (select2.value === "part") {
            document.getElementById("lbl4").style.display = "block";
            document.getElementById("salaryI").style.display = "block";
            document.getElementById("lbl5").style.display = "none";
            document.getElementById("hourlyRateI").style.display = "none";
        } else {
            document.getElementById("lbl4").style.display = "none";
            document.getElementById("salaryI").style.display = "none";
            document.getElementById("lbl5").style.display = "block";
            document.getElementById("hourlyRateI").style.display = "block";
        }
    };
    var br2 = document.createElement("br");
    div.appendChild(br2);
    var label4 = document.createElement("label");
    label4.className = "w3-label";
    label4.innerHTML = "Salary";
    label4.style.display = "none";
    label4.id = "lbl4";
    div.appendChild(label4);
    var input4 = document.createElement("input");
    input4.className = "w3-input w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    input4.type = "text";
    input4.style.width = "50%";
    input4.style.minWidth = "200px";
    input4.style.marginTop = "10px";
    input4.id = "salaryI";
    input4.style.display = "none";
    div.appendChild(input4);
    var label5 = document.createElement("label");
    label5.className = "w3-label";
    label5.innerHTML = "Hourly Rate";
    label5.style.display = "none";
    label5.id = "lbl5";
    div.appendChild(label5);
    var input5 = document.createElement("input");
    input5.className = "w3-input w3-bottombar w3-hover-border-grey w3-round w3-margin-bottom";
    input5.type = "text";
    input5.style.width = "50%";
    input5.style.minWidth = "200px";
    input5.style.marginTop = "10px";
    input5.style.display = "none";
    input5.id = "hourlyRateI";
    div.appendChild(input5);
    var div2 = document.createElement("div");
    div2.className = "w3-col s12 m12 l12";
    div2.align = "right";
    var button = document.createElement("button");
    button.className = "w3-btn w3-margin-right w3-margin-top w3-text-white w3-round";
    button.style.backgroundColor = "#388d6a";
    button.innerHTML = "MODIFICAR";
    div2.appendChild(button);
    div.appendChild(div2);
    divPrincipal.appendChild(span);
    divPrincipal.appendChild(h3_2);
    divPrincipal.appendChild(form);
    var hr = document.createElement("hr");
    divPrincipal.appendChild(hr);
    divPrincipal.appendChild(div);
    while (document.getElementById("main").firstChild) {
        document.getElementById("main").removeChild(document.getElementById("main").firstChild);
    }
    document.getElementById("main").appendChild(divPrincipal);
    /*$.get("http://localhost:10070/novedad/todas", function(respuesta){
        if(respuesta !== undefined){
            $.each(respuesta, function(index, n){
                var novedad = JSON.parse(n);
                var option = document.createElement("option");
                option.value = novedad["rid"];
                option.innerHTML = novedad["titulo"];
                document.getElementById("selectM"+x).appendChild(option);
            });
        }
    });*/
}
function listar2() {
    "use strict";
    var divPrincipal = document.createElement("div");
    divPrincipal.className = "w3-col s12 m12 w3-light-grey l12 w3-right w3-card-2 w3-panel w3-opacity-min w3-round";
    divPrincipal.style.borderBottomStyle = "solid";
    divPrincipal.style.borderWidth = "5px";
    divPrincipal.style.borderBottomColor = "#388d6a";
    divPrincipal.style.display = "block";
    var span = document.createElement("span");
    span.className = "w3-closebtn w3-hover-none w3-hover-text-deep-orange";
    span.addEventListener("click", function () { document.getElementById("main").removeChild(divPrincipal); });
    var h3_1 = document.createElement("h3");
    h3_1.style.fontWeight = "bold";
    h3_1.className = "w3-blosebtn w3-right w3-hover-text-red w3-button w3-hover-none";
    h3_1.innerHTML = "×";
    span.appendChild(h3_1);
    var h3_2 = document.createElement("h3");
    h3_2.style.color = "#388d6a";
    h3_2.className = "w3-margin-top w3-margin-left";
    h3_2.innerHTML = "Listado de Empleados";
    var table = document.createElement("table");
    table.className = "w3-table w3-striped w3-bordered w3-margin-bottom w3-margin-left w3-responsive w3-card-2 w3-round";
    table.style.width = "95%";
    table.id = "tabla";
    var tr = document.createElement("tr");
    tr.className = "w3-white";
    tr.style.borderBottomStyle = "solid";
    tr.style.borderColor = "#388d6a";
    tr.style.borderWidth = "4px";
    var th1 = document.createElement("th");
    th1.style.width = "10%";
    th1.style.color = "#388d6a";
    th1.innerHTML = "Employee ID";
    var th2 = document.createElement("th");
    th2.style.width = "15%";
    th2.style.color = "#388d6a";
    th2.innerHTML = "Nombre";
    var th3 = document.createElement("th");
    th3.style.width = "10%";
    th3.style.color = "#388d6a";
    th3.innerHTML = "Start Date";
    var th4 = document.createElement("th");
    th4.style.width = "10%";
    th4.style.color = "#388d6a";
    th4.innerHTML = "Emp. Type";
    var input = document.createElement("input");
    input.className = "w3-input w3-bottombar w3-white w3-hover-shadow w3-margin-top w3-margin-left w3-round";
    input.style.width = "95%";
    input.type = "text";
    input.placeholder = "Aplicar un filtro...";
    input.id = "filtro";
    input.addEventListener("keyup", function () {
        var input, filter, table, tr, td, i;
        input = document.getElementById("filtro");
        filter = input.value.toUpperCase();
        table = document.getElementById("tabla");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    table.appendChild(tr);
    divPrincipal.appendChild(span);
    divPrincipal.appendChild(h3_2);
    var hr = document.createElement("hr");
    hr.className = "w3-green";
    divPrincipal.appendChild(hr);
    divPrincipal.appendChild(input);
    divPrincipal.appendChild(table);
    while (document.getElementById("main").firstChild) {
        document.getElementById("main").removeChild(document.getElementById("main").firstChild);
    }
    document.getElementById("main").appendChild(divPrincipal);
    /*$.get("http://localhost:10070/curso/listar", function(respuesta){
        if(respuesta !== undefined){
            $.each(respuesta, function(index, c){
                var curso = JSON.parse(c);
                var row = document.createElement("tr");
                var cell = document.createElement("td");
                var cellText = document.createTextNode(curso.codigo);
                cell.appendChild(cellText);
                row.appendChild(cell);
                var cell2 = document.createElement("td");
                var cellText2 = document.createTextNode(curso.nombre);
                cell2.appendChild(cellText2);
                row.appendChild(cell2);
                var cell3 = document.createElement("td");
                var cellText3 = document.createTextNode(curso.semestre);
                cell3.appendChild(cellText3);
                row.appendChild(cell3);
            });
        }
    });*/
}