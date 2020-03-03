function voegtoe() {
    var nrbox = document.formulier.nrbox.value;
    if (nrbox == "") {
        document.write("U heeft niets ingevuld!");
    } else if (isNaN(nrbox)) {
        document.write("U heeft geen  cijfer ingevuld!");
    } else {
        for (i = 0; i < nrbox.length; i++) {
            nrbox[i];
        }
    }
}

function bereken(bereken) {
    for (i = 0; i < nrbox.length; i++) {
        (i + i) * nrbox.length
    }

}