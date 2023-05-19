
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlFetch = 'https://aryka.herokuapp.com/presensi/' + presensiId;
