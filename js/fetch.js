// import { get } from "https://jscroot.github.io/api/croot.js";
// import { setInner } from "https://jscroot.github.io/element/croot.js";
// let urlAPI = "https://aryka.herokuapp.com/presensi";
// get(urlAPI,isiTablePresensi);
// function isiTablePresensi(results){
//     console.log(results);
//     results.forEach(isiRow);
// }
// function isiRow(value){
//     console.log(value)
// }

import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./temp/table.js";
let urlAPI = "https://aryka.herokuapp.com/presensi";
get(urlAPI, isiTablePresensi);
function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.biodata.phone_number)
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}