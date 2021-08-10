Swal.fire({
    title: "bienvenido",
    // text:
    // html:
    icon: "happy",
    // confirmButtonText:
    // footer:
    // width:
    // padding:
    // background:
    // grow:
    // backdrop:
    // timer:
    // timerProgressBar:
    // toast:
    // position:
    // allowOutsideClick:
    // allowEscapeKey:
    // allowEnterKey:
    // stopKeydownPropagation:

    // input:
    // inputPlaceholder:
    // inputValue:
    // inputOptions:

    //  customClass:
    // 	container:
    // 	popup:
    // 	header:
    // 	title:
    // 	closeButton:
    // 	icon:
    // 	image:
    // 	content:
    // 	input:
    // 	actions:
    // 	confirmButton:
    // 	cancelButton:
    // 	footer:	

    // showConfirmButton:
    // confirmButtonColor:
    // confirmButtonAriaLabel:

    // showCancelButton:
    // cancelButtonText:
    // cancelButtonColor:
    // cancelButtonAriaLabel:

    // buttonsStyling:
    // showCloseButton:
    // closeButtonAriaLabel:


    // imageUrl:
    // imageWidth:
    // imageHeight:
    // imageAlt:
});

// Swal.fire({
//     title: 'Este sera nuestro simulador',
//     width: 600,
//     padding: '3em',
//     background: '#fff url(/images/trees.png)',
//     backdrop: `
// 	  rgba(0,0,123,0.4)
// 	  url("/images/nyan-cat.gif")
// 	  left top
// 	  no-repeat
// 	`
// });
let saludo = prompt("dame tu nombre")
if (saludo == "yenko") {
    Swal.fire({

        title: "bienvenido" + " " + saludo
    });
}