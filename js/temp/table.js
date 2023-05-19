export let isiTabel = 
`
<tr class="h-18 border-b border-coolGray-100">
    <th class="whitespace-nowrap px-4 bg-white text-left">
        <div class="flex items-center -m-2">
            <div class="w-auto p-2">
                <input class="w-4 h-4 bg-white rounded" type="checkbox">
            </div>
            <div class="w-auto p-2">
                <div class="flex items-center justify-center w-10 h-10 text-base font-medium text-#WARNALOGO#-600 bg-#WARNALOGO#-200 rounded-md">ULBI</div>
            </div>
            <div class="w-auto p-2">
                <p class="text-xs font-semibold text-coolGray-800">#NAMA#</p>
                <p class="text-xs font-medium text-coolGray-500">#NOHP#</p>
            </div>
        </div>
    </th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-left">#JABATAN#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-500 text-right">#LOKASI#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-#col#-500 text-left">#TANGGAL#</th>
    <th class="whitespace-nowrap px-4 bg-white text-sm font-medium text-#col#-500 text-left">#GAJIPOKOK#</th>
    <th class="whitespace-nowrap px-4 bg-white text-left">
        <div class="w-auto p-2">
        <p class="text-xs font-semibold text-coolGray-800">#JAMMASUK#</p>
        <p class="text-xs font-medium text-coolGray-500">#JAMKELUAR#</p>
        </div>
    </th>
    <th class="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
<a type="button" href="edit.html?presensiId=#IDEDIT#"> Edit
</a>
|
<button type="button" id="del_button" onclick="deleteData('#IDHAPUS#')"> Delete
</button>
</th>
</tr>`
