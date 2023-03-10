const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'blue' //1
  },
  {
    tag_name: 'black' //2
  },
  {
    tag_name: 'red' //3
  },
  {
    tag_name: 'white' //4
  },
  {
    tag_name: 'green' //5
  },
  {
    tag_name: 'pink' //6
  },
  {
    tag_name: 'yellow' //7
  },
  {
    tag_name: 'grey' //8
  },
  {
    tag_name: 'orange' //9
  },
  {
    tag_name: 'mens' //10
  },
  {
    tag_name: 'womens' //11
  },
  {
    tag_name: 'Size 1' //12
  },
  {
    tag_name: 'Size 2'  //13
  },
  {
    tag_name: 'Size 3' //14 
  },
  {
    tag_name: 'Size 4' //15
  },
  {
    tag_name: 'Size 5' //16
  },
  {
    tag_name: 'Size 6' //17
  },
  {
    tag_name: 'Size 7' //18
  },
  {
    tag_name: 'Size 8' //19
  },
  {
    tag_name: 'Size 9' //20
  },
  {
    tag_name: 'Size 10' //21
  },
   {
    tag_name: 'Reebok' //22
  },
 {
    tag_name: 'Adidas' //23
  },
   {
    tag_name: 'New Balance' //24
  },
  {
    tag_name: 'Lugz' //25
  },
  {
    tag_name: 'Ever Boots' //26
  },
  {
    tag_name: 'Nike' //27
  },
  {
    tag_name: 'Amazon Essentials' //28
  },
  {
    tag_name: 'Sketchers' //29
  },
  {
    tag_name: 'Allegra K' //29
  },
  {
    tag_name: 'Crocs' //30
  },
  {
    tag_name: 'Hey Dude' //31
  },
  {
    tag_name: 'Bruno Marc' //32
  },
  {
    tag_name: 'Puma' //33
  },
  {
    tag_name: 'Brown' //34
  },
]

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
