import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://dashboard.heroku.com/apps/aryka";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}