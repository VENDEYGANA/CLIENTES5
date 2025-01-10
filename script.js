document.addEventListener('DOMContentLoaded', cargarDatos);

function iniciarSesion() {
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioValido = usuarios.find(function(u) {
        return u.usuario === usuario && u.password === password;
    });

    if (usuarioValido) {
        mostrarMainContainer();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function registrar() {
    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioExistente = usuarios.find(function(u) {
        return u.usuario === usuario;
    });

    if (usuarioExistente) {
        alert('El usuario ya existe');
    } else {
        usuarios.push({ usuario: usuario, password: password });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Usuario registrado correctamente');
    }
}

function mostrarMainContainer() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
}

function guardarDatos() {
    var cuenta = document.getElementById('cuenta').value;
    var comprador = document.getElementById('comprador').value;
    var fechaCompra = new Date();
    var fechaCompraFormateada = fechaCompra.toLocaleDateString() + ' ' + fechaCompra.toLocaleTimeString();
    var fechaVencimiento = new Date(fechaCompra);
    fechaVencimiento.setDate(fechaVencimiento.getDate() + 29);
    var fechaVencimientoFormateada = fechaVencimiento.toLocaleDateString() + ' ' + fechaVencimiento.toLocaleTimeString();
    var proveedor = "VENDE Y GANA";

    if (cuenta && comprador) {
        var registros = JSON.parse(localStorage.getItem('registros')) || [];
        
        var nuevoRegistro = {
            cuenta: cuenta,
            comprador: comprador,
            fechaCompra: fechaCompraFormateada,
            fechaVencimiento: fechaVencimientoFormateada,
            proveedor: proveedor
        };
        
        registros.push(nuevoRegistro);
        localStorage.setItem('registros', JSON.stringify(registros));
        
        agregarRegistroATabla(nuevoRegistro);

        document.getElementById('cuenta').value = '';
        document.getElementById('comprador').value = '';
    } else {
        alert('Por favor, ingrese todos los datos.');
    }
}

function cargarDatos() {
    var registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.forEach(agregarRegistroATabla);
}

function agregarRegistroATabla(registro) {
    var tableBody = document.getElementById('datos-body');
    var row = document.createElement('tr');

    var cellCuenta = document.createElement('td');
    var cellComprador = document.createElement('td');
    var cellFechaCompra = document.createElement('td');
    var cellFechaVencimiento = document.createElement('td');
    var cellProveedor = document.createElement('td');
    var cellCopiar = document.createElement('td');

    cellCuenta.textContent = registro.cuenta;
    cellComprador.textContent = registro.comprador;
    cellFechaCompra.textContent = registro.fechaCompra;
    cellFechaVencimiento.textContent = registro.fechaVencimiento;
    cellProveedor.textContent = registro.proveedor;
    cellCopiar.innerHTML = '<button onclick="copiarDatos(this)">Copiar</button>';

    row.appendChild(cellCuenta);
    row.appendChild(cellComprador);
    row.appendChild(cellFechaCompra);
    row.appendChild(cellFechaVencimiento);
    row.appendChild(cellProveedor);
    row.appendChild(cellCopiar);

    tableBody.appendChild(row);
}

function copiarDatos(button) {
    var row = button.closest('tr');
    var cuenta = row.cells[0].textContent;
    var comprador = row.cells[1].textContent;
    var fechaCompra = row[_{{{CITATION{{{_1{](https://github.com/la9una/web/tree/ba1073ae044ebb7b538a3b13f0f9598f7c410bb6/docs%2Fbootstrap%2Falignci.md)