import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Instruments=[
    { 
      prod_Id:1,
      name:'GUITER', 
      image:'https://acousticlife.tv/wp-content/uploads/2018/04/Group-of-Seven-Guitars-Group-shot.jpg',
      intro:'Guitars are used in many different genres of music, such as traditional, regional, and folk to modern punk, rock, metal or pop.',     
      sub:[
        {
          sub_id:1,
          name:'CLASSICAL GUITAR',
          image:'https://i.pinimg.com/originals/09/8f/99/098f99c9b35df800ccaf3e81393a11c2.jpg',
          Desc: 'Also known as fingerstyle guitar or nylon string guitar, a classical guitar is generally played using the fingers of the right hand.',
          details:{
            name:'CLASSICAL GUITAR',
            image:'https://i.pinimg.com/originals/09/8f/99/098f99c9b35df800ccaf3e81393a11c2.jpg',
            Desc: 'Also known as fingerstyle guitar or nylon string guitar, a classical guitar is generally played using the fingers of the right hand.',
          },
        },
        {
          sub_id:2,
          name:'SPANISH GUITAR',
          image:'https://www.retrofret.com/images/7102_Guitar/xLarge/7102_01.jpg',
          Desc: 'Spanish guitar or acoustic guitar is generally played using a plectrum or pick. The strings of this guitar is made up of metal.',
          details:{
            name:'SPANISH GUITAR',
            image:'https://www.retrofret.com/images/7102_Guitar/xLarge/7102_01.jpg',
            Desc: 'Spanish guitar or acoustic guitar is generally played using a plectrum or pick. The strings of this guitar is made up of metal.',
          },
        },        
        {
          sub_id:3,
          name:'ELECTRIC GUITAR',
          image:'https://static.roland.com/products/eurus_gs-1/images/eurus_gs-1_06_gal.jpg',
          Desc: 'A basic knowledge of either classical or Spanish guitar is necessary for learning to play the electric guitar.' ,    
          details:{
            name:'ELECTRIC GUITAR',
            image:'https://static.roland.com/products/eurus_gs-1/images/eurus_gs-1_06_gal.jpg',
            Desc: 'A basic knowledge of either classical or Spanish guitar is necessary for learning to play the electric guitar.' ,
          },
        },
        {
          sub_id:4,
          name:'BASS GUITAR',
          image:'https://img.freepik.com/free-vector/several-modern-electric-guitars_23-2147620713.jpg?w=2000',
          Desc:'In case of Bass Guitar also, some basic knowledge of either classical or Spanish guitar is required for learning.',
         details:{
            name:'BASS GUITAR',
            image:'https://img.freepik.com/free-vector/several-modern-electric-guitars_23-2147620713.jpg?w=2000',
            Desc:'In case of Bass Guitar also, some basic knowledge of either classical or Spanish guitar is required for learning.',
         } ,
        }
    
    ]},
    { 
      prod_Id:2,
      name:'VIOLIN', 
      image:'https://bloximages.chicago2.vip.townnews.com/lacrossetribune.com/content/tncms/assets/v3/editorial/2/71/271c5489-999f-5f48-870e-b53c5a473792/5a0227801cd86.image.jpg?resize=1200%2C675',
      intro:'The violin family comprises the violin, the viola, the cello (violoncello), and the double bass; it forms the backbone of the modern symphony orchestra.',
      sub:[
        {
          sub_id:1,
          name:'Violin',
          image:'https://images.squarespace-cdn.com/content/v1/550ba261e4b0215d222516fe/1428080216825-QAR8MH65K6T3ZWXYGXFX/The+Violin.jpg?format=2500w',
          Desc:'The Violin is a Hollow & Wooden Body Stringed Instrument. It is played with a Bow and is the highest-pitched member of the String Family',
          details:{
            name:'Violin',
            image:'https://images.squarespace-cdn.com/content/v1/550ba261e4b0215d222516fe/1428080216825-QAR8MH65K6T3ZWXYGXFX/The+Violin.jpg?format=2500w',
            Desc:'The Violin is a Hollow & Wooden Body Stringed Instrument. It is played with a Bow and is the highest-pitched member of the String Family',
          },
        },
        {
          sub_id:2,
          name:'Viola',
          image:'https://collectionapi.metmuseum.org/api/collection/v1/iiif/504490/1349674/main-image',
          Desc:'The viola is tuned to be one-fifth lower than the violin. This lower range attracts many musicians to the viola. The thicker strings require a heavier hand, faster bow tempo, and greater bow weight.',
          details:{
            name:'Viola',
            image:'https://collectionapi.metmuseum.org/api/collection/v1/iiif/504490/1349674/main-image',
            Desc:'The viola is tuned to be one-fifth lower than the violin. This lower range attracts many musicians to the viola. The thicker strings require a heavier hand, faster bow tempo, and greater bow weight.',
          }
        },
        {
          sub_id:3,
          name:'Cello',
          image:'https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/young-woman-playing-cello-pm-images.jpg?&targetx=0&targety=-23&imagewidth=500&imageheight=747&modelwidth=500&modelheight=700&backgroundcolor=2D170E&orientation=1',
          Desc:'The cello looks like the violin and viola but is much larger (around 4 feet long), and has thicker strings than either the violin or viola. Of all the string instruments, the cello sounds most like a human voice, and it can make a wide variety of tones, from warm low pitches to bright higher notes.',
          details:{
            name:'Cello',
            image:'https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/2/young-woman-playing-cello-pm-images.jpg?&targetx=0&targety=-23&imagewidth=500&imageheight=747&modelwidth=500&modelheight=700&backgroundcolor=2D170E&orientation=1',
            Desc:'The cello looks like the violin and viola but is much larger (around 4 feet long), and has thicker strings than either the violin or viola. Of all the string instruments, the cello sounds most like a human voice, and it can make a wide variety of tones, from warm low pitches to bright higher notes.',
          }
        },
        {
          sub_id:4,
          name:'Bass',
          image:'https://images.reverb.com/image/upload/s--fmkO8f36--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1444945213/xokg0b0i5t1amzs16rpl.jpg',
          Desc:'The bass’s strings sound the lowest notes on the piano reaching all the way to the lowest E, and sometimes C on the piano. Those notes are so low that you can almost count the number of vibrations per second.The bass’s thick, luxurious sound so perfectly gives the cello’s sweet, pure sound more weight.',
          details:{
            name:'Bass',
            image:'https://images.reverb.com/image/upload/s--fmkO8f36--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1444945213/xokg0b0i5t1amzs16rpl.jpg',
            Desc:'The bass’s strings sound the lowest notes on the piano reaching all the way to the lowest E, and sometimes C on the piano. Those notes are so low that you can almost count the number of vibrations per second.The bass’s thick, luxurious sound so perfectly gives the cello’s sweet, pure sound more weight.',
          }
        },
        {
          sub_id:5,
          name:'Double Bass',
          image:'https://digital-grinnell.nyc3.digitaloceanspaces.com/omeka-s/digital-grinnell/original/430e86bb22700047bc3a7e34c28590cf.jpg',
          Desc:'double bass, also called contrabass, string bass, bass, bass viol, bass fiddle, or bull fiddle, French contrebasse, German Kontrabass, stringed musical instrument, the lowest-pitched member of the violin family, sounding an octave lower than the cello.',
          details:{
            name:'Double Bass',
            image:'https://digital-grinnell.nyc3.digitaloceanspaces.com/omeka-s/digital-grinnell/original/430e86bb22700047bc3a7e34c28590cf.jpg',
            Desc:'double bass, also called contrabass, string bass, bass, bass viol, bass fiddle, or bull fiddle, French contrebasse, German Kontrabass, stringed musical instrument, the lowest-pitched member of the violin family, sounding an octave lower than the cello.',
          }
        }
    ]},
    { 
      prod_Id:3,
      image:'https://preview.redd.it/gnq9c458kwd51.jpg?auto=webp&s=03c1ca454168b3810202dd0cb507a9cfaf2e209d',
      name:'FLUTE', 
      intro:'The flute family comprises Piccolo, Alto Flute, Bass Flute, Wooden flute, Eb Soprano Flute, c Flute, and Plastic Flute. These types of flutes share the same note fingerings.  But they also differ in terms of the amount of breath, breath support, and embouchure formation between them.',
      sub:[
        {
          sub_id:1,
          name:'Piccolo Flute',
          image:'https://www.kesslerandsons.com/wp-content/uploads/2015/11/kessler-custom-deluxe-flute-with-piccolo.jpg',
          Desc:'Piccolo is the smallest family of the flute. You cannot compare it with the concert flute in terms of length. It’s also the second most recognized instrument in the flute family.',
          details:{
            name:'Piccolo Flute',
            image:'https://www.kesslerandsons.com/wp-content/uploads/2015/11/kessler-custom-deluxe-flute-with-piccolo.jpg',
            Desc:'Piccolo is the smallest family of the flute. You cannot compare it with the concert flute in terms of length. It’s also the second most recognized instrument in the flute family.',
          },
        },
        {
          sub_id:2,
          name:'Alto Flute',
          image:'https://savigny-le-temple.fr/sites/savignyletemple/files/image/page/4_flutes.jpg',
          Desc:'Alto flute tends to produce a mellow distinct one when you play it in it’s lower pitch. This flute is made with a thicker and longer body and the make up enables it to produce its alto sound. The flute enhances the dynamics of the lower tones while playing. But you must also know that you need excellent lung power to play this flute.',
          details:{
            name:'Alto Flute',
            image:'https://savigny-le-temple.fr/sites/savignyletemple/files/image/page/4_flutes.jpg',
            Desc:'Alto flute tends to produce a mellow distinct one when you play it in it’s lower pitch. This flute is made with a thicker and longer body and the make up enables it to produce its alto sound. The flute enhances the dynamics of the lower tones while playing. But you must also know that you need excellent lung power to play this flute.',
          },
        },
        {
          sub_id:3,
          name:'Bass Flute',
          image:'https://tempestmusicalinstruments.com/wp-content/uploads/2017/06/bass_flute_01-feat.jpg',
          Desc:'The bass flute is the least popular since it’s the least played flute. Despite being unpopular, the bass flute produces full round sounds and can reach full octave notes than the C flute. It’s also challenging to play because of its large size. Bass flute sizes also vary to some degree, whereby you can find some with 50-inch lengths, and the longest is about 60 inches.',
          details:{
            name:'Bass Flute',
            image:'https://tempestmusicalinstruments.com/wp-content/uploads/2017/06/bass_flute_01-feat.jpg',
            Desc:'The bass flute is the least popular since it’s the least played flute. Despite being unpopular, the bass flute produces full round sounds and can reach full octave notes than the C flute. It’s also challenging to play because of its large size. Bass flute sizes also vary to some degree, whereby you can find some with 50-inch lengths, and the longest is about 60 inches.', 
          },
        },
        {
          sub_id:4,
          name:'Wooden Flute',
          image:'https://media.istockphoto.com/id/1272414595/photo/bamboo-flute.jpg?s=612x612&w=0&k=20&c=Z5Lq3lY-OA2utqJmML6-yevCl4wGM8WdT3RJzMUlGMU=',
          Desc:'Wooden flutes also exist in different types.  They’re also called Native American flutes. Wooden flutes have a similar sound to a metal flute. It looks sharp, clean, and focused, just like the metal flute. Wooden flutes have a mellower, earthier, and a sound that’s a little softer. This is because it uses a wooden head joint and not a metalhead’s joint.',
          details:{
            name:'Wooden Flute',
            image:'https://media.istockphoto.com/id/1272414595/photo/bamboo-flute.jpg?s=612x612&w=0&k=20&c=Z5Lq3lY-OA2utqJmML6-yevCl4wGM8WdT3RJzMUlGMU=',
            Desc:'Wooden flutes also exist in different types.  They’re also called Native American flutes. Wooden flutes have a similar sound to a metal flute. It looks sharp, clean, and focused, just like the metal flute. Wooden flutes have a mellower, earthier, and a sound that’s a little softer. This is because it uses a wooden head joint and not a metalhead’s joint.',  
          },
        },
        {
         sub_id:5, 
          name:'Eb Soprano Flute',
          image:'https://images.reverb.com/image/upload/s--lHDJAE_P--/f_auto,t_large/v1603742876/c5ferolgjsaeesubfqok.jpg',
          Desc:'You can also call it the tierce flute. It’s the only type of flute that’s not pitched in G or C, making it a special member of the flute family. This flute is pitched in Eb, which is a minor third above other types of flute such as c flute and concert flute. The pitch key is also similar to baritone and alto saxophones. This enables it to be used by saxophone jazz players.',
          details:{
            name:'Eb Soprano Flute',
            image:'https://images.reverb.com/image/upload/s--lHDJAE_P--/f_auto,t_large/v1603742876/c5ferolgjsaeesubfqok.jpg',
            Desc:'You can also call it the tierce flute. It’s the only type of flute that’s not pitched in G or C, making it a special member of the flute family. This flute is pitched in Eb, which is a minor third above other types of flute such as c flute and concert flute. The pitch key is also similar to baritone and alto saxophones. This enables it to be used by saxophone jazz players.',
          },
        },
        {
          sub_id:6,
          name:'Concert Flute',
          image:'https://www.sweetwater.com/insync/media/2021/12/Flute-Buying-Guide-Featured-Image.jpg',
          Desc:'This is the most common instrument in the flute family. Many people playing flute use it more often, and that’s why it’s widely known in the flute family. Apart from its popularity, it is the ideal flute for beginners. So if you intend to become a flutist, then don’t hesitate to try it out.',
          details:{
            name:'Concert Flute',
            image:'https://www.sweetwater.com/insync/media/2021/12/Flute-Buying-Guide-Featured-Image.jpg',
            Desc:'This is the most common instrument in the flute family. Many people playing flute use it more often, and that’s why it’s widely known in the flute family. Apart from its popularity, it is the ideal flute for beginners. So if you intend to become a flutist, then don’t hesitate to try it out.',
          },
        }
      ]}
  ]
  constructor() { }
}
