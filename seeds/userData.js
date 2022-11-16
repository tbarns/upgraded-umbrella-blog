const { User } = require('../models');

const userData = [
{
    user_name: 'Carol Anne',
    display_name: 'The_Only_Babadook',
    bio:"A single mother, plagued by the violent death of her husband, battles with her son's fear of a monster lurking in the house, but soon discovers a sinister presence all around her.",
    password: 'password1'
},
{
    user_name: 'Dori Birch',
    display_name: 'A_Drag_Queen_named_Cookie',
    bio:"Just a girl looking for cookies and mascara.",
    password: 'password2'
},
{
    user_name: 'Ric Medved',
    display_name: 'Zombiegeddon',
    bio:"Strange mysteries are enveloping Seattle, as unusually bloody crime scenes begin popping up with ever greater frequency. Compounding the chaos is the discovery of a new and deadly virus that is turning its victims into zombies. Eight strangers find their lives intersecting as they fight to stay alive while searching for answers, only to discover the origins of the pandemic are more frightening than anyone could have imagined. Humanity faces its greatest challenge yet as it comes to grips with the possibility of total annihilation.",
    password: 'password3'
},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
