const noms = ["Alice", "Bob", "Charlie"];

export default function BoucleReact() {
    return (
        <ul>
            {noms.map((nom, index) => (
                <li key={index}>{nom}</li>
            ))}
        </ul>
    );
}


const utilisateurs = [
    { id: 1, nom: "Alice" },
    { id: 2, nom: "Bob" },
    { id: 3, nom: "Alex" }
];

function UtilisateursA() {
    return (
        <ul>
            {utilisateurs
                .filter((user) => user.nom.startsWith("A"))
                .map((user) => (
                    <li key={user.id}>{user.nom}</li>
                ))}
        </ul>
    );
}



const users = [
    { id: 1, nom: "Charlie" },
    { id: 2, nom: "Alice" },
    { id: 3, nom: "Bob" }
];


function UsersTries() {
    return (
        <ul>
            {users
                .sort((a, b) => a.nom.localeCompare(b.nom)) // Tri alphabétique
                .map((user) => (
                    <li key={user.id}>{user.nom}</li>
                ))}
        </ul>
    );
}



const utilisateurs1 = ["Alice", "Bob", "Charlie"];
const topUtilisateurs = utilisateurs1.slice(0, 2);

console.log(topUtilisateurs); // ["Alice", "Bob"]



const utilisateurs2 = ["Alice", "Bob", "Charlie"];

console.log(utilisateurs2.includes("Alice")); // true
