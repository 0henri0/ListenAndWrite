var z = document.getElementById("music").duration;

function buttonCompareClicked() {

    //alert(duration)
    
    var textareaAfter = document.getElementById("textareaAfter").value;
    textareaAfter2 = textareaAfter.toLowerCase()
    textareaAfter2 = textareaAfter2.split('.').join('')
    textareaAfter2 = textareaAfter2.split(',').join('')
    var mangNhap = textareaAfter2.split(" ")
    for (var k = 0; k < mangNhap.length - 1; k++) {
        if (mangNhap[k] == "") {
            mangNhap.splice(k, 1)
            k--;
        }
        if (mangNhap[k] == "have") {
            if (mangNhap[k + 1] == "not")
                mangNhap.splice(k, 2, "haven't")
        }
        if (mangNhap[k] == "has") {
            if (mangNhap[k + 1] == "not")
                mangNhap.splice(k, 2, "hasn't")
        }
        if (mangNhap[k] == "do") {
            if (mangNhap[k + 1] == "not")
                mangNhap.splice(k, 2, "don't")
        }
        if (mangNhap[k] == "does") {
            if (mangNhap[k + 1] == "not")
                mangNhap.splice(k, 2, "doesn't")
        }
        
    }
        

    var textAudio = "i haven't a apple. Then i buy a apple. then i don't eat it."
    textAudio1 = textAudio.toLowerCase()
    textAudio1 = textAudio1.split('.').join('')
    textAudio1 = textAudio1.split(',').join('')
    var mangDuLieu = textAudio1.split(" ")
    //i,haven't,a,apple,then,i,buy,a,apple,then,i,don't,eat,it
    //i,haven't,a,apple,then,i,buy,a,a,apple,then,i,don't,eat,it
    var kq = "";
    var i = 0, j = 0, tinhdiem = 0,diem = 0;
    while (1) {
        if (mangDuLieu[i] == mangNhap[j]) {
            kq += mangDuLieu[i] + " ";
            i++;
            j++;
            tinhdiem++;
            if (i == mangDuLieu.length) {
                while (j < mangNhap.length) {
                    kq += '<strike>' + mangNhap[j] + '<strike>' + " ";
                    j++;
                }
                break;
            }
        }
        else {
            
            kq += '<strike>' + mangNhap[j] + '</strike>' + " ";
            j++;
            if (j == mangNhap.length) {
                while (i < mangDuLieu.length) {
                    kq += mangDuLieu[i] + " ";
                    i++;
                }
                break;
            }
        }
    }




    if ( mangNhap.length == tinhdiem) alert(10);
    if (0.9 * mangNhap.length <= tinhdiem && tinhdiem < mangNhap.length) { alert(9); }
    if ((0.8 * mangNhap.length) <= tinhdiem && tinhdiem < (0.9 * mangNhap.length)) { alert(8); }
    if ((0.7 * mangNhap.length) <= tinhdiem && tinhdiem < (0.8 * mangNhap.length)) { alert(7); }
    if ((0.6 * mangNhap.length) <= tinhdiem && tinhdiem < (0.7 * mangNhap.length)) { alert(6); }
    if ((0.5 * mangNhap.length) <= tinhdiem && tinhdiem < (0.6 * mangNhap.length)) { alert(5); }
    if ((0.4 * mangNhap.length) <= tinhdiem && tinhdiem < (0.5 * mangNhap.length)) { alert(4); }
    if ((0.3 * mangNhap.length) <= tinhdiem && tinhdiem < (0.4 * mangNhap.length)) { alert(3); }
    if ((0.2 * mangNhap.length) <= tinhdiem && tinhdiem < (0.3 * mangNhap.length)) { alert(2); }
    if ((0.1 * mangNhap.length) <= tinhdiem && tinhdiem < (0.2 * mangNhap.length)) { alert(1); }
    if (0 <= tinhdiem && tinhdiem < (0.1 * mangNhap.length)) {
        alert(0);
    }
   
    document.getElementById("123").innerHTML = mangDuLieu;
    document.getElementById("textareaDifferences").innerHTML = kq
}