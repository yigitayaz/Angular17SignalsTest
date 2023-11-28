export interface User {
  id : number;
  name: string;
  surname: string;
  age: number;
  job: string;
  gender: string;
  address: string;
  phoneNumber: string;
}
export function getRandomUser(id: number): User {
  const names = ["Buğra", "Taylan", "Helin", "Özlem", "Yiğit", "Tugay", "Hazal", "Kadircan", "Nisa", "Alperen", "Kaan", "Tuncay", "Cemal"];
  const surnames = ["Ayaz", "Şenocak", "Tonkal", "Kantar", "Tırıç", "Kanber", "Sözer", "Kansu", "Dakdevir", "Doğan", "Demirtaş"];
  const jobs = ["Software Developer", "Graphic Designer", "CEO", "CTO", "CFO", "Marketing Specialist", "Product Designer", "Intern", "Socıal Media Manager"];
  const genders = ["Male", "Female", "LGBTQ+"];
  const addresses = ["123 Main Street", "456 Oak Avenue", "789 Pine Road", "101 Elm Lane", "202 Maple Drive", "303 Cedar Court", "404 Birch Street", "505 Walnut Way", "606 Pineapple Place", "707 Orange Grove"];

  const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

  return {
    id,
    name: getRandomElement(names),
    surname: getRandomElement(surnames),
    age: Math.floor(Math.random() * 30) + 20, // Random age between 20 and 50
    job: getRandomElement(jobs),
    gender: getRandomElement(genders),
    address: getRandomElement(addresses),
    phoneNumber: `${Math.floor(Math.random() * 9000000000) + 1000000000}` // Random 10-digit phone number
  };
}
