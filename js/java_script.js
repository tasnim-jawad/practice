// alert(`hallo warld`);

let pic = '';

for (let index = 3; index <= 8; index++){
    pic +=`

        <div id="picture" class="img">
            <img src="img/${index}.png" alt="">
        </div>

    `;
}
document.getElementById("gallery").innerHTML = pic;
    
function name_reverce(){
    document.getElementById(`demo1`).innerHTML =`fahim jawad ahid ajmol jamil`
}

// let info_title = [
//     'name',
//     'age',
//     'roll',
//     'year'
// ]
// let student_info = [
//     [
//         'jamil',
//         23,
//         45,
//         50
//     ],
//     [
//         'ajmol',
//         223,
//         453,
//         540
//     ],
//     [
//         'ahid',
//         223,
//         453,
//         435
//     ],
//     [
//         'fahim',
//         273,
//         845,
//         590
//     ],
// ]
// student_info.push('dhaka')
// console.log(student_info[3]);
// console.log(student_info);
// console.log(student_info.length);

// for (let index = 0; index < student_info.length; index++) {
//     const info = student_info[index];

//     // console.log(info);

//     for (let index2 = 0; index2 < info.length; index2++) {
//         const titless = info[index2];
//         // console.log(titless);
//         console.log(`${info_title[index2]}:${titless}`);
//     }
//     console.log('');
// }




let student_info =[
        22,
        23,
        45,
        50,
        46,
        47,
        48,
        49,
        55,
        45,
]
let student_info2 =[
    'ajmol',
    223,
    453,
    540
]
let student_info3 =[
    'ahidajmol',
    3,
    53,
    0
]

// let all_togede = [...student_info, ...student_info2, ...student_info3];
//     // console.log(all_togede);
//     Array.isArray(all_togede)
//     console.log(all_togede);

// console.log(student_info.includes(50));
// console.log(student_info.indexOf(50));
// console.log(student_info.reverse());

// console.log(student_info.sort(function(a, b){return b - a})[student_info.length - 1 ]);
// console.log(student_info.sort(function(a, b){return a-b})[student_info.length - 1]);

// console.log(student_info);

// localStorage.setItem('student',JSON.stringify(student_info))
localStorage.setItem('man',JSON.stringify(student_info))

let paisi =JSON.parse( localStorage.getItem('man') ) ;

console.log(paisi);