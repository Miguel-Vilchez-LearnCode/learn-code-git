const currentUrl = window.location.pathname;
const tith1 = document.querySelector('#h1');
const btnPrimary = document.querySelector('#primary');
const btnSuccess = document.querySelector('#success');
const btnWarning = document.querySelector('#warning');
const btnDanger = document.querySelector('#danger');
const shadow = document.querySelector('#shadow-border');
const btnNav1 = document.querySelector('#btn1');
const btnNav2 = document.querySelector('#btn2');
const iconoModo = document.querySelector('#icono');

btnPrimary.addEventListener('click', () => {

    shadow.classList.remove('shadow-success', 'shadow-warning', 'shadow-danger', 'border-success', 'border-warning', 'border-danger');
    shadow.classList.add('shadow-primary', 'border-primary');

    iconoModo.classList.remove('drop-success', 'drop-warning', 'drop-danger');
    iconoModo.classList.add('drop-primary');

    btnNav1.classList.remove('btn-verde-outline', 'btn-amarillo-outline', 'btn-rojo-outline');
    btnNav1.classList.add('btn-azul-outline');

    btnPrimary.classList.remove('h-20');
    btnDanger.classList.remove('h-30');
    btnWarning.classList.remove('h-30');
    btnSuccess.classList.remove('h-30');
    btnPrimary.classList.add('h-30');
    btnDanger.classList.add('h-20');
    btnWarning.classList.add('h-20');
    btnSuccess.classList.add('h-20');

    document.querySelectorAll('th').forEach(th => {
        th.classList.remove('bg-success', 'bg-warning', 'bg-danger');
        th.classList.add('bg-primary');
    });

    tith1.classList.remove('texto-gradiente-rojo', 'texto-gradiente-amarillo', 'texto-gradiente-verde');
    tith1.classList.add('texto-gradiente-azul');

    (async () => {
        try {
            const respuesta = await fetch('db/colorThem.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `color=${'primary'}`,
            });

            if (!respuesta.ok) {
                throw new Error(`HTTP error! status: ${respuesta.status}`);
            }

            const data = await respuesta.json();
            console.log('Tema Azul guardado en la base de datos:', data);
            // Opcional: Mostrar un mensaje al usuario de que el tema se guardó
        } catch (error) {
            console.error('Error al guardar el tema:', error);
            // Opcional: Mostrar un mensaje de error al usuario
        }
    })();

});

btnSuccess.addEventListener('click', () => {

    shadow.classList.remove('shadow-primary', 'shadow-warning', 'shadow-danger', 'border-primary', 'border-warning', 'border-danger');
    shadow.classList.add('shadow-success', 'border-success');

    iconoModo.classList.remove('drop-primary', 'drop-warning', 'drop-danger');
    iconoModo.classList.add('drop-success');

    btnNav1.classList.remove('btn-azul-outline', 'btn-amarillo-outline', 'btn-rojo-outline');
    btnNav1.classList.add('btn-verde-outline');

    btnSuccess.classList.remove('h-20');
    btnDanger.classList.remove('h-30');
    btnWarning.classList.remove('h-30');
    btnPrimary.classList.remove('h-30');
    btnSuccess.classList.add('h-30');
    btnDanger.classList.add('h-20');
    btnWarning.classList.add('h-20');
    btnPrimary.classList.add('h-20');

    document.querySelectorAll('th').forEach(th => {
        th.classList.remove('bg-primary', 'bg-warning', 'bg-danger');
        th.classList.add('bg-success');
    });

    tith1.classList.remove('texto-gradiente-azul', 'texto-gradiente-amarillo', 'texto-gradiente-rojo');
    tith1.classList.add('texto-gradiente-verde');

    (async () => {
        try {
            const respuesta = await fetch('db/colorThem.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `color=${'success'}`,
            });

            if (!respuesta.ok) {
                throw new Error(`HTTP error! status: ${respuesta.status}`);
            }

            const data = await respuesta.json();
            console.log('Tema Verde guardado en la base de datos:', data);
            // Opcional: Mostrar un mensaje al usuario de que el tema se guardó
        } catch (error) {
            console.error('Error al guardar el tema:', error);
            // Opcional: Mostrar un mensaje de error al usuario
        }
    })();

});

btnWarning.addEventListener('click', () => {

    shadow.classList.remove('shadow-primary', 'shadow-success', 'shadow-danger', 'border-primary', 'border-success', 'border-danger');
    shadow.classList.add('shadow-warning', 'border-warning');

    iconoModo.classList.remove('drop-primary', 'drop-success', 'drop-danger' );
    iconoModo.classList.add('drop-warning');

    btnNav1.classList.remove('btn-azul-outline', 'btn-verde-outline', 'btn-rojo-outline');
    btnNav1.classList.add('btn-amarillo-outline');

    btnWarning.classList.remove('h-20');
    btnDanger.classList.remove('h-30');
    btnSuccess.classList.remove('h-30');
    btnPrimary.classList.remove('h-30');
    btnWarning.classList.add('h-30');
    btnDanger.classList.add('h-20');
    btnSuccess.classList.add('h-20');
    btnPrimary.classList.add('h-20');

    document.querySelectorAll('th').forEach(th => {
        th.classList.remove('bg-primary', 'bg-success', 'bg-danger');
        th.classList.add('bg-warning');
    });

    tith1.classList.remove('texto-gradiente-azul', 'texto-gradiente-verde', 'texto-gradiente-rojo');
    tith1.classList.add('texto-gradiente-amarillo');

    (async () => {
        try {
            const respuesta = await fetch('db/colorThem.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `color=${'warning'}`,
            });

            if (!respuesta.ok) {
                throw new Error(`HTTP error! status: ${respuesta.status}`);
            }

            const data = await respuesta.json();
            console.log('Tema Amarillo guardado en la base de datos:', data);
            // Opcional: Mostrar un mensaje al usuario de que el tema se guardó
        } catch (error) {
            console.error('Error al guardar el tema:', error);
            // Opcional: Mostrar un mensaje de error al usuario
        }
    })();

});

btnDanger.addEventListener('click', () => {

    shadow.classList.remove('shadow-primary', 'shadow-success', 'shadow-warning', 'border-primary', 'border-success', 'border-warning');
    shadow.classList.add('shadow-danger', 'border-danger');

    iconoModo.classList.remove('drop-primary', 'drop-success', 'drop-warning');
    iconoModo.classList.add('drop-danger');

    btnNav1.classList.remove('btn-azul-outline', 'btn-verde-outline', 'btn-amarillo-outline');
    btnNav1.classList.add('btn-rojo-outline');

    btnDanger.classList.remove('h-20');
    btnWarning.classList.remove('h-30');
    btnSuccess.classList.remove('h-30');
    btnPrimary.classList.remove('h-30');
    btnDanger.classList.add('h-30');
    btnWarning.classList.add('h-20');
    btnSuccess.classList.add('h-20');
    btnPrimary.classList.add('h-20');

    document.querySelectorAll('th').forEach(th => {
        th.classList.remove('bg-primary', 'bg-warning', 'bg-success');
        th.classList.add('bg-danger');
    });

    tith1.classList.remove('texto-gradiente-azul', 'texto-gradiente-verde', 'texto-gradiente-amarillo');
    tith1.classList.add('texto-gradiente-rojo');

    (async () => {
        try {
            const respuesta = await fetch('db/colorThem.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `color=${'danger'}`,
            });

            if (!respuesta.ok) {
                throw new Error(`HTTP error! status: ${respuesta.status}`);
            }

            const data = await respuesta.json();
            console.log('Tema Rojo guardado en la base de datos:', data);
            // Opcional: Mostrar un mensaje al usuario de que el tema se guardó
        } catch (error) {
            console.error('Error al guardar el tema:', error);
            // Opcional: Mostrar un mensaje de error al usuario
        }
    })();

});

