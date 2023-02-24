// import React from 'react';
// // Create the WelcomeTitle React component​​​​​​‌​​‌‌‌‌‌‌‌​‌​​‌​​​​‌​​​‌‌ here
// // Modify this function if you want to change the preview
// // It will not be evaluated as part of the assessment

// function WelcomeTitle ({user = null, primary = false}) {
//     let str = "Welcome"
//     if (user) str+= ` ${user}`
//     str += "!"

//     if (primary) {
//         return <h1>{str}</h1>
//     } else {
//         return <h2>{str}</h2>
//     }
// }

// export function Preview() {
//     return <WelcomeTitle user='Peter' primary />;
// }

// function computeJoinPoint(s1, s2) {
//     const list1 = [s1]
//     const list2 = [s2]
//     let joinPoint = -1 // point de jointure choisi par défault, "remplace null"

//     while (Math.max(...list1) < 20000000 || Math.max(...list2) < 20000000) {
//         s1 = s1 + ("" + s1).split("").map(char => parseInt(char)).reduce((a, b) => a + b, 0) // reduce fait la somme après la conversion chiffre en texte et texte en chiffre
//         list1.push(s1)
//         if (list2.includes(s1)) {
//             joinPoint = s1
//             break;
//         } // trouver point de jointure

//         s2 = s2 + ("" + s2).split("").map(char => parseInt(char)).reduce((a, b) => a + b, 0)
//         list2.push(s2)
//         if (list1.includes(s2)) {
//             joinPoint = s2
//             break;
//         }
//     }

//     return joinPoint
// }

// // conditionné affichage du 0
// // sorting des users
// // affichage des users
// function ListUsers({users = []}) {
//     const sortedUsers = users.sort((a, b) => {
//         if (a.lastName < b.lastName) return -1
//         if (a.lastName > b.lastName) return 1
//         return 0
//     })

//     return (
//         <div>
//             <div className='user-count'>Users: {users.length}</div>
//             {users.length > 0 &&
//                 <ul className='user-list'>
//                     {sortedUsers.map((user, index) => {
//                         return <li key={index}>{user.firstName} {user.lastName}</li>
//                     })}
//                 </ul>
//             }
//         </div>
//     )
// }
// focus

// export function Preview() {
//     return <ListUsers users={[{firstName: 'Donald', lastName: 'Knuth'}, {firstName: 'Ada', lastName: 'Lovelace'}]} />;
// }

// export default ListUsers;
