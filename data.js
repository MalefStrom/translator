const faker = require("faker");


var data = [];
faker.seed(100);

for(let i = 1;i<=100;i++) {
    data.push({
        id: i,
        title: faker.lorem.words(4),
        body: faker.lorem.sentences(10),
        created_at: faker.date.recent(20)
    })
}

module.exports = function(){
    return {
        data: data
    }
}

