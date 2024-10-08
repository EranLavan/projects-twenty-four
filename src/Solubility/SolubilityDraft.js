import React from 'react';
import Tooltip from './Tooltip';
// import style1 from './style1.module.css';
// import style2 from './style2.module.css';
import style from './style3.module.css';
// import style3 from './style3.module.css';
// import style4 from './style4.module.css';
// import style5 from './style5.module.css';
// import style6 from './style6.module.css';

// NOTE: all these different stylings and the option for the user
// to choose them personally works well with general CSS, but doesn't
// fit well with module CSS, so as now we have only one default style

function SolubilityDraft() {

  // const [style, setStyle] = useState(style1);
  // const [selectedStyle, setSelectedStyle] = useState('style2');

  // const handleStyleChange = (event) => {
  //   const selectedStyle = event.target.value;
  //   switch (selectedStyle) {
  //     case 'style1':
  //       setStyle(style1);
  //       break;
  //     case 'style2':
  //       setStyle(style2);
  //       break;
  //     case 'style3':
  //       setStyle(style3);
  //       break;
  //     case 'style4':
  //       setStyle(style4);
  //       break;
  //     case 'style5':
  //       setStyle(style5);
  //       break;
  //     case 'style6':
  //       setStyle(style6);
  //       break;
  //     default:
  //       setStyle(style4);
  //   }
  //   console.log(style);
  // };

  const data = [

// IMPORTANT: we can add specific numbers to the tooltip, not just Soluble/Insoluble

  {
    id: 1,

    anion: { 
      value: '<b>OH<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'H<sub>2</sub>O', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=water&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Water\n<img src="https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg" alt="Water" width=200 />'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiOH\nLithium Hydroxide\nSoluble\n<img src="https://nukem-isotopes.de/wp-content/uploads/2016/10/Lithium-Hydroxid-Isotopes-2.jpg" width=150 />' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaOH\nSodium Hydroxide\nHighly soluble\n<img src="https://media.licdn.com/dms/image/C4E12AQHNTk_DlltKvA/article-cover_image-shrink_720_1280/0/1628426265063?e=1724889600&v=beta&t=ZxbfN4Tgcrkf9or69ndzzkKEY-L0qQTPAKQRayXksq8" width=200 />'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KOH\nPotassium Hydroxide\nHighly soluble\n<img src="https://blog.agchemigroup.eu/content/images/2021/11/The-Usefulness-of-Potassium-Hydroxide-KOH-PIC-B.jpg" width=200 />'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonia+solution&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>3</sub><sup>.</sup>H<sub>2</sub>O\nAmmonia solution\nHighly soluble\n<img src="https://cdn11.bigcommerce.com/s-bbz4nwgpba/images/stencil/960w/attribute_rule_images/398_source_1653983871.jpg" width=120 />'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(OH)<sub>2</sub>\nBarium Hydroxide\nModerately Soluble\n<img src="http://www.restaurarconservar.com/WebRoot/ce_pt/Shops/298256/5967/EE06/D751/B8BB/5739/C0A8/1911/7E98/Barium_hydroxide_octahydrate_.jpg" width=200 />'
    },

    ca: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(OH)<sub>2</sub>\nCalcium Hydroxide\nSlightly Soluble\n<img src="https://sodimate-inc.com/wp-content/uploads/2017/05/calcium-hydroxide-slurry.jpg" width=120 />'
    },

    mg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(OH)<sub>2</sub>\nMagnesium Hydroxide\nRelatively insoluble\n<img src="https://www.amsfine.com/images/food-products/magnesium-hydroxide-1.jpg" width=200 />'
    },
    
    sr: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(OH)<sub>2</sub>\nStrontium Hydroxide\nSlightly Soluble\n<img src="https://tiimg.tistatic.com/fp/1/001/797/strontium-hydroxide-442.jpg" width=120 />'
    },
    
    al: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Al(OH)<sub>3</sub>\nAluminium Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/c0438193/800wm/C0438193-Testing_for_Al3_ions.jpg" width=250 />'
    },
    
    cr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cr(OH)<sub>3</sub>\nChromium Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/c0436798/800wm/C0436798-Chromium_III_hydroxide_formation.jpg" width=250 />'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(OH)<sub>2</sub>\nFerrous Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/c0430484/800wm/C0430484-Iron_II_hydroxide_precipitate.jpg" width=250 />'
    },
    
    fe3: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(OH)<sub>3</sub>\nFerric Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/a5000413/800wm/A5000413-Iron_III_hydroxide_precipitate.jpg" width=100 />'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mn(OH)<sub>2</sub>\nManganese Hydroxide\nRelatively insoluble\n<img src="https://www.sciencesource.com/pix/243/2438782-manganese-ii-hydroxide-precipitate.jpg" width=200 />'
    },
    
    zn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Zn(OH)<sub>2</sub>\nZinc Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/c0279455/800wm/C0279455-Zinc_Hydroxide_Precipitate.jpg" width=80 />'
    },
    
    ag: {
      value: '–',
      url: '',
      tooltip: 'Very unstable\nDecomposes into silver oxide upon contact with water'
    },
    
    hg: {
      value: '–',
      url: '',
      tooltip: 'Compound does not exist\nIons decompose into oxide upon contact in the solution'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Pb(OH)<sub>2</sub>\nLead Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/a5000409/800wm/A5000409-Lead_hydroxide_precipitate.jpg" width=100 />'
    },
    
    sn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sn(OH)<sub>2</sub>\nTin (II) Hydroxide\nRelatively insoluble\n<img src="https://www.public.asu.edu/~jpbirk/qual/qualanal/SN/Sn3a.gif" width=100 />'
    },
    
    cu: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+hydroxide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cu(OH)<sub>2</sub>\nCopper (II) Hydroxide\nRelatively insoluble\n<img src="https://media.sciencephoto.com/image/a5000411/800wm/A5000411-Copper_hydroxide_precipitate.jpg" width=80 />'
    }
  },

  {
    id: 2,

    anion: { 
      value: '<b>F<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrofluoric+acid+glass&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HF\nHydrofluoric Acid\nWeak acid'
    },

    li: { 
      value: 'sS', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiF\nLithium Fluoride\nSlightly soluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaF\nSodium Fluoride\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KF\nPotassium Fluoride\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>F\nAmmonium Fluoride\nSoluble'
    },

    ba: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaF<sub>2</sub>\nBarium Fluoride\nSlightly soluble'
    },

    ca: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaF<sub>2</sub>\nCalcium Fluoride\nRelatively insoluble'
    },

    mg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgF<sub>2</sub>\nMagnesium Fluoride\nRelatively insoluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrF<sub>2</sub>\nStrontium Fluoride\nRelatively insoluble'
    },
    
    al: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlF<sub>3</sub>\nAluminium Fluoride\nSlightly soluble'
    },
    
    cr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrF<sub>3</sub>\nChromium Fluoride\nRelatively insoluble'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeF<sub>3</sub>\nFerrous Fluoride\nRelatively insoluble'
    },
    
    fe3: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeF<sub>3</sub>\nFerric Fluoride\nRelatively insoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnF<sub>2</sub>\nManganese Fluoride\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnF<sub>2</sub>\nZinc Fluoride\nSoluble'
    },
    
    ag: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgF\nSilver Fluoride\nSoluble'
    },
    
    hg: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mercury Fluoride\nDecomposes in water'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbF<sub>2</sub>\nLead Fluoride\nRelatively insoluble'
    },
    
    sn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnF<sub>2</sub>\nTin (II) Fluoride\nSoluble'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+fluoride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuF<sub>2</sub>\nCopper (II) Fluoride\nSoluble'
    }
  },

  {
    id: 3,

    anion: { 
      value: '<b>Cl<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrochloric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HCl\nHydrochloric Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiCl\nLithium Chloride\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaCl\nSodium Chloride\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KCl\nPotassium Chloride\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>Cl\nAmmonium Chloride\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaCl<sub>2</sub>\nBarium Chloride\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaCl<sub>2</sub>\nCalcium Chloride\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgCl<sub>2</sub>\nMagnesium Chloride\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrCl<sub>2</sub>\nStrontium Chloride\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlCl<sub>3</sub>\nAluminium Chloride\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrCl<sub>3</sub>\nChromium (III) Chloride\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeCl<sub>2</sub>\nFerrous Chloride\nSoluble'
    },
    
    fe3: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeCl<sub>3</sub>\nFerric Chloride\nSoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnCl<sub>2</sub>\nManganese Chloride\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnCl<sub>2</sub>\nZinc Chloride\nSoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgCl\nSilver Chloride\nRelatively insoluble'
    },
    
    hg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgCl<sub>2</sub>\nMercury (II) Chloride\nSoluble'
    },
    
    pb: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbCl<sub>2</sub>\nLead Chloride\nSlightly Soluble'
    },
    
    sn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnCl<sub>2</sub>\nTin (II) Chloride\nSoluble'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+chloride&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuCl<sub>2</sub>\nCopper (II) Chloride\nSoluble'
    }
  },

  {
    id: 4,

    anion: { 
      value: '<b>Br<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrobromic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HBr\nHydrobromic Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiBr\nLithium Bromide\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaBr\nSodium Bromide\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KBr\nPotassium Bromide\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>Br\nAmmonium Bromide\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaBr<sub>2</sub>\nBarium Bromide\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaBr<sub>2</sub>\nCalcium Bromide\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgBr<sub>2</sub>\nMagnesium Bromide\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrBr<sub>2</sub>\nStrontium Bromide\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlBr<sub>3</sub>\nAluminium Bromide\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrBr<sub>3</sub>\nChromium (III) Bromide\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeBr<sub>2</sub>\nFerrous Bromide\nSoluble'
    },
    
    fe3: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeBr<sub>3</sub>\nFerric Bromide\nSoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnBr<sub>2</sub>\nManganese Bromide\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnBr<sub>2</sub>\nZinc Bromide\nSoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgBr\nSilver Bromide\nRelatively insoluble'
    },
    
    hg: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgBr2\nMercury bromide\nSlightly soluble'
    },
    
    pb: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbBr2\nLead (II) bromide\nSlightly soluble'
    },
    
    sn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnBr<sub>2</sub>\nTin (II) Bromide\nSoluble'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+bromide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuBr<sub>2</sub>\nCopper (II) Bromide\nSoluble'
    }
  },

  {
    id: 5,

    anion: { 
      value: '<b>I<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydroiodic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HI\nHydroiodic acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiI\nLithium Iodide\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaI\nSodium Iodide\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KI\nPotassium Iodide\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>I\nAmmonium Iodide\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaI<sub>2</sub>\nBarium Iodide\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaI<sub>2</sub>\nCalcium Iodide\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgI<sub>2</sub>\nMagnesium Iodide\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrI<sub>2</sub>\nStrontium Iodide\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlI<sub>3</sub>\nAluminium Iodide\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrI<sub>3</sub>\nChromium (III) Iodide\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeI<sub>2</sub>\nFerrous Iodide\nSoluble'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Very unstable'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnI<sub>2</sub>\nManganese (II) Iodide\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnI<sub>2</sub>\nZinc Iodide\nSoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgI\nSilver Iodide\nRelatively Insoluble'
    },
    
    hg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgI<sub>2</sub>\nMercury (II) Iodide\nRelatively insoluble'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbI<sub>2</sub>\nLead Iodide\nRelatively insoluble'
    },
    
    sn: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+iodide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnI<sub>2</sub>\nTin (II) Iodide\nSlightly Soluble'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound\ndoes not exist'
    }
  },

  {
    id: 6,

    anion: { 
      value: '<b>S<sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrogen+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>S\nHydrogen Sulfide\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>2</sub>S\nLithium Sulfide\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>S\nSodium Sulfide\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>S\nPotassium Sulfide\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(NH<sub>4</sub>)<sub>2</sub>S\nAmmonium Sulfide\nSoluble'
    },

    ba: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaS\nBarium Sulfide\nStrongly hydrolyzed in water'
    },

    ca: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaS\nCalcium Sulfide\nStrongly hydrolyzed in water'
    },

    mg: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgS\nMagnesium Sulfide\nDecomposes in water'
    },
    
    sr: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrS\nStrontium Sulfide\nSlightly soluble'
    },
    
    al: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Al<sub>2</sub>S<sub>3</sub>\nAluminium Sulfide\nDecomposes in water'
    },
    
    cr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cr<sub>2</sub>S<sub>3</sub>\nChromium (III) Sulfide\nRelatively Insoluble'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeS\nFerrous Sulfide\nRelatively Insoluble'
    },
    
    fe3: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe<sub>2</sub>S<sub>3</sub>\nFerric Sulfide\nDecomposes in water to FeS'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnS\nManganese (II) Sulfide\nRelatively Insoluble'
    },
    
    zn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnS\nZinc Sulfide\nRelatively Insoluble'
    },
    
    ag: {
      value: 'I*',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ag<sub>2</sub>S\nSilver Sulfide\nInsoluble (very low K<sub>sp</sub>)'
    },
    
    hg: {
      value: 'I*',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgS\nMercury Sulfide\nInsoluble (very low K<sub>sp</sub>)'
    },
    
    pb: {
      value: 'I*',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbS\nLead Sulfide\nInsoluble (very low K<sub>sp</sub>)'
    },
    
    sn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnS\nTin Sulfide\nRelatively insoluble'
    },
    
    cu: {
      value: 'I*',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuS\nCopper Sulfide\nInsoluble (very low K<sub>sp</sub>)'
    }
  },

  {
    id: 7,

    anion: { 
      value: '<b>HS<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=hydrogen+sulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>S\nHydrogen Sulfide\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiHS\nLithium Hydrosulfide\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaHS\nSodium Hydrosulfide\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KHS\nPotassium Hydrosulfide\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>HS\nAmmonium Hydrosulfide\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(HS)<sub>2</sub>\nBarium Hydrosulfide\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(HS)<sub>2</sub>\nCalcium Hydrosulfide\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(HS)<sub>2</sub>\nMagnesium Hydrosulfide\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+hydrosulfide&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(HS)<sub>2</sub>\nStrontium Hydrosulfide\nSoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 8,

    anion: { 
      value: '<b>SO<sub>3</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sulfurous+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>SO<sub>3</sub>\nSulfurous Acid\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>2</sub>SO<sub>3</sub>\nLithium Sulfite\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>SO<sub>3</sub>\nSodium Sulfite\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>SO<sub>3</sub>\nPotassium Sulfite\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(NH<sub>4</sub>)<sub>2</sub>SO<sub>3</sub>\nLithium Sulfite\nSoluble'
    },

    ba: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaSO<sub>3</sub>\nBarium Sulfite\nRelatively insoluble'
    },

    ca: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaSO<sub>3</sub>\nBarium Sulfite\nRelatively insoluble'
    },

    mg: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgSO<sub>3</sub>\nMagnesium Sulfite\nSlightly soluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrSO<sub>3</sub>\nStrontium Sulfite\nRelatively insoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeSO<sub>3</sub>\nFerrous Sulfite\nRelatively insoluble'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnSO<sub>3</sub>\nZinc Sulfite\nSlightly soluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ag<sub>2</sub>SO<sub>3</sub>\nSilver Sulfite\nRelatively insoluble'
    },
    
    hg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgSO<sub>3</sub>\nMercury (II) Sulfite\nRelatively insoluble'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+sulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbSO<sub>3</sub>\nLead Sulfite\nRelatively insoluble'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 9,

    anion: { 
      value: '<b>HSO<sub>3</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: '',
      tooltip: 'H<sub>2</sub>SO<sub>3</sub>\nSulfurous Acid\nWeak acid'
    },

    li: { 
      value: '?', 
      url: '',
      tooltip: 'Compound does not exist' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+hydrosulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaHSO<sub>3</sub>\nSodium hydrosulfite\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+hydrosulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KHSO<sub>3</sub>\nPotassium hydrosulfite\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+hydrosulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>HSO<sub>3</sub>\nAmmonium hydrosulfite\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+hydrosulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(HSO<sub>3</sub>)<sub>2</sub>\nBarium hydrosulfite\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+hydrosulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(HSO<sub>3</sub>)<sub>2</sub>\nCalcium hydrosulfite\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+hydrosulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(HSO<sub>3</sub>)<sub>2</sub>\nMagnesium hydrosulfite\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+hydrosulfite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(HSO<sub>3</sub>)<sub>2</sub>\nStrontium hydrosulfite\nSoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 10,

    anion: { 
      value: '<b>SO<sub>4</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sulfuric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>SO<sub>4</sub>\nSulfuric Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>2</sub>SO<sub>4</sub>\nLithium Sulfate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>SO<sub>4</sub>\nSodium Sulfate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>SO<sub>4</sub>\nPotassium Sulfate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>\nAmmonium Sulfate\nSoluble'
    },

    ba: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaSO<sub>4</sub>\nBarium Sulfate\nRelatively insoluble'
    },

    ca: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaSO<sub>4</sub>\nCalcium Sulfate\nSlightly soluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgSO<sub>4</sub>\nMagnesium Sulfate\nSoluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrSO<sub>4</sub>\nStrontium Sulfate\nRelatively insoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>\nAluminium Sulfate\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>\nChromium Sulfate\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeSO<sub>4</sub>\nFerrous Sulfate\nSoluble'
    },
    
    fe3: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>\nFerric Sulfate\nSoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnSO<sub>4</sub>\nManganese Sulfate\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnSO<sub>4</sub>\nZinc Sulfate\nSoluble'
    },
    
    ag: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ag<sub>2</sub>SO<sub>4</sub>\nSilver Sulfate\nSlightly Soluble'
    },
    
    hg: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgSO<sub>4</sub>\nMercury (II) Sulfate\nHydrolyses in water'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbSO<sub>4</sub>\nLead Sulfate\nRelatively insoluble'
    },
    
    sn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnSO<sub>4</sub>\nTin Sulfate\nSoluble'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+sulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuSO<sub>4</sub>\nCopper (II) Sulfate\nSoluble'
    }
  },

  {
    id: 11,

    anion: { 
      value: '<b>HSO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sulfuric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>SO<sub>4</sub>\nSulfuric Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+hydrosulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiHSO<sub>4</sub>\nLithium hydrosulfate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+hydrosulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaHSO<sub>4</sub>\nSodium hydrosulfate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+hydrosulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KHSO<sub>4</sub>\nPotassium hydrosulfate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+hydrosulfate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>HSO<sub>4</sub>\nAmmonium hydrosulfate\nSoluble'
    },

    ba: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },

    ca: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },

    mg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 12,

    anion: { 
      value: '<b>NO<sub>3</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=nitric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HNO<sub>3</sub>\nNitric Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiNO<sub>3</sub>\nLithium Nitrate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaNO<sub>3</sub>\nSodium Nitrate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KNO<sub>3</sub>\nPotassium Nitrate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>NO<sub>3</sub>\nAmmonium Nitrate\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(NO<sub>3</sub>)<sub>2</sub>\nBarium Nitrate\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(NO<sub>3</sub>)<sub>2</sub>\nCalcium Nitrate\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(NO<sub>3</sub>)<sub>2</sub>\nMagnesium Nitrate\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(NO<sub>3</sub>)<sub>2</sub>\nStrontium Nitrate\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Al(NO<sub>3</sub>)<sub>3</sub>\nAluminium Nitrate\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cr(NO<sub>3</sub>)<sub>3</sub>\nChromium Nitrate\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(NO<sub>3</sub>)<sub>2</sub>\nFerrous Nitrate\nSoluble'
    },
    
    fe3: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(NO<sub>3</sub>)<sub>3</sub>\nFerric Nitrate\nSoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mn(NO<sub>3</sub>)<sub>2</sub>\nManganese Nitrate\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Zn(NO<sub>3</sub>)<sub>2</sub>\nZinc Nitrate\nSoluble'
    },
    
    ag: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgNO<sub>3</sub>\nSilver Nitrate\nSoluble'
    },
    
    hg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Hg(NO<sub>3</sub>)<sub>2</sub>\nMercury Nitrate\nSoluble'
    },
    
    pb: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Pb(NO<sub>3</sub>)<sub>2</sub>\nLead Nitrate\nSoluble'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+nitrate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cu(NO<sub>3</sub>)<sub>2</sub>\nCopper (II) Nitrate\nSoluble'
    }
  },

  {
    id: 13,

    anion: { 
      value: '<b>NO<sub>2</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=nitrous+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HNO<sub>2</sub>\nNitrous Acid\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiNO<sub>2</sub>\nLithium Nitrite\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaNO<sub>2</sub>\nSodium Nitrite\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KNO<sub>2</sub>\nPotassium Nitrite\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>NO<sub>2</sub>\nAmmonium Nitrite\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(NO<sub>2</sub>)<sub>2</sub>\nBarium Nitrite\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(NO<sub>2</sub>)<sub>2</sub>\nCalcium Nitrite\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(NO<sub>2</sub>)<sub>2</sub>\nMagnesium Nitrite\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(NO<sub>2</sub>)<sub>2</sub>\nStrontium Nitrite\nSoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    ag: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+nitrite&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgNO<sub>2</sub>\nSilver Nitrite\nSlightly soluble'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 14,

    anion: { 
      value: '<b>PO<sub>4</sub><sup>3-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=phosphoric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>3</sub>PO<sub>4</sub>\nPhosphoric Acid\nRelatively weak acid'
    },

    li: { 
      value: 'I', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>3</sub>PO<sub>4</sub>\nLithium Phosphate\nRelatively insoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>3</sub>PO<sub>4</sub>\nSodium Phosphate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>3</sub>PO<sub>4</sub>\nPotassium Phosphate\nSoluble'
    },

    nh4: {
      value: '–',
      url: '',
      tooltip: 'Hydrolyzes into HPO<sub>4</sub><sup>2-</sup> almost completely'
    },

    ba: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nBarium Phosphate\nRelatively insoluble'
    },

    ca: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nCalcium Phosphate\nRelatively insoluble'
    },

    mg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nMagnesium Phosphate\nRelatively insoluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nStrontium Phosphate\nRelatively insoluble'
    },
    
    al: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AlPO<sub>4</sub>\nAluminium Phosphate\nRelatively insoluble'
    },
    
    cr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CrPO<sub>4</sub>\nChromium (III) Phosphate\nRelatively insoluble'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nFerrous Phosphate\nRelatively insoluble'
    },
    
    fe3: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FePO<sub>4</sub>\nFerric Phosphate\nRelatively insoluble'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nManganese Phosphate\nRelatively insoluble'
    },
    
    zn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Zn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nZinc Phosphate\nRelatively insoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ag<sub>3</sub>PO<sub>4</sub>\nSilver Phosphate\nRelatively insoluble'
    },
    
    hg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Hg<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nMercury Phosphate\nRelatively insoluble'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Pb<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nLead Phosphate\nRelatively insoluble'
    },
    
    sn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nTin (II) Phosphate\nRelatively insoluble'
    },
    
    cu: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+phosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cu<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>\nCopper (II) Phosphate\nRelatively insoluble'
    }
  },

  {
    id: 15,

    anion: { 
      value: '<b>HPO<sub>4</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=phosphoric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>3</sub>PO<sub>4</sub>\nPhosphoric acid\nRelatively weak acid'
    },

    li: { 
      value: '?', 
      url: '',
      tooltip: 'Compound does not exist' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>HPO<sub>4</sub>\nSodium Hydrophosphate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>HPO<sub>4</sub>\nPotassium Hydrophosphate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(NH<sub>4</sub>)<sub>2</sub>HPO<sub>4</sub>\nAmmonium Hydrophosphate\nSoluble'
    },

    ba: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaHPO<sub>4</sub>\nBarium Hydrophosphate\nRelatively insoluble'
    },

    ca: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaHPO<sub>4</sub>\nCalcium Hydrophosphate\nRelatively insoluble'
    },

    mg: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgHPO<sub>4</sub>\nMagnesium Hydrophosphate\nSlightly Soluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrHPO<sub>4</sub>\nStrontium Hydrophosphate\nRelatively insoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeHPO<sub>4</sub>\nFerrous Hydrophosphate\nRelatively insoluble'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnHPO<sub>4</sub>\nManganese Hydrophosphate\nRelatively insoluble'
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbHPO<sub>4</sub>\nLead Hydrophosphate\nSlightly Soluble'
    },
    
    sn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+hydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnHPO<sub>4</sub>\nTin (II) Hydrophosphate\nRelatively insoluble'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 16,

    anion: { 
      value: '<b>H<sub>2</sub>PO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=phosphoric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>3</sub>PO<sub>4</sub>\nPhosphoric acid\nRelatively weak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiH<sub>2</sub>PO<sub>4</sub>\nLithium Dihydrophosphate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaH<sub>2</sub>PO<sub>4</sub>\nSodium Dihydrophosphate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KH<sub>2</sub>PO<sub>4</sub>\nPotassium Dihydrophosphate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>H<sub>2</sub>PO<sub>4</sub>\nAmmonium Dihydrophosphate\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>\nBarium Dihydrophosphate\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>\nCalcium Dihydrophosphate\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>\nMagnesium Dihydrophosphate\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>\nStrontium Dihydrophosphate\nSoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>\nFerrous Dihydrophosphate\nSoluble'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mn(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>\nManganese Dihydrophosphate\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Zn(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>\nZinc Dihydrophosphate\nSoluble'
    },
    
    ag: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+dihydrophosphate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgH<sub>2</sub>PO<sub>4</sub>\nSilver Dihydrophosphate\nSoluble'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 17,

    anion: { 
      value: '<b>CO<sub>3</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>CO<sub>3</sub>\nCarbonic Acid\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>2</sub>CO<sub>3</sub>\nLithium Carbonate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>CO<sub>3</sub>\nSodium Carbonate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>CO<sub>3</sub>\nPotassium Carbonate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>\nAmmonium Carbonate\nSoluble'
    },

    ba: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaCO<sub>3</sub>\nBarium Carbonate\nRelatively insoluble'
    },

    ca: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaCO<sub>3</sub>\nCalcium Carbonate\nRelatively insoluble'
    },

    mg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgCO<sub>3</sub>\nMagnesium Carbonate\nRelatively insoluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrCO<sub>3</sub>\nStrontium Carbonate\nRelatively insoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeCO<sub>3</sub>\nFerrous Carbonate\nRelatively insoluble'
    },
    
    fe3: {
      value: '–',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnCO<sub>3</sub>\nManganese Carbonate\nRelatively insoluble'
    },
    
    zn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnCO<sub>3</sub>\nZinc Carbonate\nRelatively insoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ag<sub>2</sub>CO<sub>3</sub>\nSilver Carbonate\nRelatively insoluble'
    },
    
    hg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgCO<sub>3</sub>\nMercury Carbonate\nRelatively insoluble'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbCO<sub>3</sub>\nLead Carbonate\nRelatively insoluble'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuCO<sub>3</sub>\nCopper Carbonate\nRelatively insoluble'
    }
  },

  {
    id: 18,

    anion: { 
      value: '<b>HCO<sub>3</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+carbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>CO<sub>3</sub>\nCarbonic Acid\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiHCO<sub>3</sub>\nLithium Hydrocarbonate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaHCO<sub>3</sub>\nSodium Hydrocarbonate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KHCO<sub>3</sub>\nPotassium Hydrocarbonate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>HCO<sub>3</sub>\nAmmonium Hydrocarbonate\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(HCO<sub>3</sub>)<sub>2</sub>\nBarium Hydrocarbonate\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(HCO<sub>3</sub>)<sub>2</sub>\nCalcium Hydrocarbonate\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(HCO<sub>3</sub>)<sub>2</sub>\nMagnesium Hydrocarbonate\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(HCO<sub>3</sub>)<sub>2</sub>\nStrontium Hydrocarbonate\nSoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(HCO<sub>3</sub>)<sub>2</sub>\nFerrous Hydrocarbonate\nSoluble'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+hydrocarbonate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Pb(HCO<sub>3</sub>)<sub>2</sub>\nLead Hydrocarbonate\nSoluble'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 19,

    anion: { 
      value: '<b>CH<sub>3</sub>COO<sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=acetic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CH<sub>3</sub>COOH\nAcetic Acid\nWeak acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CH<sub>3</sub>COOLi\nLithium Acetate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CH<sub>3</sub>COONa\nSodium Acetate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CH<sub>3</sub>COOK\nPotassium Acetate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CH<sub>3</sub>COONH<sub>4</sub>\nAmmonium Acetate\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Ba\nBarium Acetate\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Ca\nCalcium Acetate\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Mg\nMagnesium Acetate\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Sr\nStrontium Acetate\nSoluble'
    },
    
    al: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Strongly hydrolized in water solution'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>3</sub>Cr\nChromium (III) Acetate\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Fe\nFerrous Acetate\nSoluble'
    },
    
    fe3: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Strongly hydrolized in water solution'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Mn\nManganese Acetate\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Zn\nZinc Acetate\nSoluble'
    },
    
    ag: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CH<sub>3</sub>COOAg\nSilver Acetate\nSoluble'
    },
    
    hg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Hg\nMercury Acetate\nSoluble'
    },
    
    pb: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Pb\nLead Acetate\nSoluble'
    },
    
    sn: {
      value: '–',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Strongly hydrolized in water solution'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+acetate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(CH<sub>3</sub>COO)<sub>2</sub>Cu\nCopper Acetate\nSoluble'
    }
  },

  {
    id: 20,

    anion: { 
      value: '<b>SiO<sub>3</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'I', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silicic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>SiO<sub>3</sub>\nSilicic Acid\nInsoluble'
    },

    li: { 
      value: 'I', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>2</sub>SiO<sub>3</sub>\nLithium Silicate\nRelatively Insoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>SiO<sub>3</sub>\nSodium Silicate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>SiO<sub>3</sub>\nPotassium Silicate\nSoluble'
    },

    nh4: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },

    ba: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaSiO<sub>3</sub>\nBarium Silicate\nRelatively Insoluble'
    },

    ca: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaSiO<sub>3</sub>\nCalcium Silicate\nRelatively Insoluble'
    },

    mg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgSiO<sub>3</sub>\nMagnesium Silicate\nRelatively Insoluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrSiO<sub>3</sub>\nStrontium Silicate\nRelatively Insoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'FeSiO<sub>3</sub>\nFerrous Silicate\nRelatively Insoluble'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnSiO<sub>3</sub>\nManganese Silicate\nRelatively Insoluble'
    },
    
    zn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnSiO<sub>3</sub>\nZinc Silicate\nRelatively Insoluble'
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbSiO<sub>3</sub>\nLead Silicate\nRelatively Insoluble'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+silicate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuSiO<sub>3</sub>\nCopper Silicate\nRelatively Insoluble'
    }
  },

  {
    id: 21,

    anion: { 
      value: '<b>MnO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=permanganic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HMnO<sub>4</sub>\nPermanganic Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiMnO<sub>4</sub>\nLithium Permanganate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaMnO<sub>4</sub>\nSodium Permanganate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KMnO<sub>4</sub>\nPotassium Permanganate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>MnO<sub>4</sub>\nAmmonium Permanganate\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(MnO<sub>4</sub>)<sub>2</sub>\nBarium Permanganate\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(MnO<sub>4</sub>)<sub>2</sub>\nCalcium Permanganate\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(MnO<sub>4</sub>)<sub>2</sub>\nMagnesium Permanganate\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(MnO<sub>4</sub>)<sub>2</sub>\nStrontium Permanganate\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Al(MnO<sub>4</sub>)<sub>3</sub>\nAluminium Permanganate\nSoluble'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe3: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+permanganate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Zn(MnO<sub>4</sub>)<sub>2</sub>\nZinc Permanganate\nSoluble'
    },
    
    ag: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    hg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    pb: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    }
  },

  {
    id: 22,

    anion: { 
      value: '<b>Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=dichromic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>\nDichromic Acid\nSoluble'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>\nLithium Dichromate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>\nSodium Dichromate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>\nPotassium Dichromate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>\nAmmonium Dichromate\nSoluble'
    },

    ba: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaCr<sub>2</sub>O<sub>7</sub>\nBarium Dichromate\nSlightly soluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaCr<sub>2</sub>O<sub>7</sub>\nCalcium Dichromate\nSoluble'
    },

    mg: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrCr<sub>2</sub>O<sub>7</sub>\nStrontium Dichromate\nRelatively insoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe3: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe<sub>2</sub>(Cr<sub>2</sub>O<sub>7</sub>)<sub>3</sub>\nFerric Dichromate\nSoluble'
    },
    
    mn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    zn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ag<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>\nSilver Dichromate\nRelatively insoluble'
    },
    
    hg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgCr<sub>2</sub>O<sub>7</sub>\nMercury Dichromate\nRelatively insoluble'
    },
    
    pb: {
      value: 'sS',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbCr<sub>2</sub>O<sub>7</sub>\nLead Dichromate\nSlightly soluble'
    },
    
    sn: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+dichromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuCr<sub>2</sub>O<sub>7</sub>\nCopper Dichromate\nSoluble'
    }
  },

  {
    id: 23,

    anion: { 
      value: '<b>CrO<sub>4</sub><sup>2-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromic+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'H<sub>2</sub>CrO<sub>4</sub>\nChromic Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Li<sub>2</sub>CrO<sub>4</sub>\nLithium Chromate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Na<sub>2</sub>CrO<sub>4</sub>\nSodium Chromate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'K<sub>2</sub>CrO<sub>4</sub>\nPotassium Chromate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: '(NH<sub>4</sub>)<sub>2</sub>CrO<sub>4</sub>\nAmmonium Chromate\nSoluble'
    },

    ba: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'BaCrO<sub>4</sub>\nBarium Chromate\nRelatively insoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CaCrO<sub>4</sub>\nCalcium Chromate\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MgCrO<sub>4</sub>\nMagnesium Chromate\nRelatively insoluble'
    },
    
    sr: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SrCrO<sub>4</sub>\nStrontium Chromate\nRelatively insoluble'
    },
    
    al: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    cr: {
      value: '?',
      url: '',
      tooltip: 'Compound does not exist'
    },
    
    fe2: {
      value: '?',
      url: '',
      tooltip: 'FeCrO<sub>4</sub>\nFerrous Chromate\nRelatively insoluble'
    },
    
    fe3: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe<sub>2</sub>(CrO<sub>4</sub>)<sub>3</sub>\nFerric Chromate\nRelatively insoluble'
    },
    
    mn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'MnCrO<sub>4</sub>\nManganese Chromate\nRelatively insoluble'
    },
    
    zn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'ZnCrO<sub>4</sub>\nZinc Chromate\nRelatively insoluble'
    },
    
    ag: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ag<sub>2</sub>CrO<sub>4</sub>\nSilver Chromate\nRelatively insoluble'
    },
    
    hg: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HgCrO<sub>4</sub>\nMercury Chromate\nRelatively insoluble'
    },
    
    pb: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'PbCrO<sub>4</sub>\nLead Chromate\nRelatively insoluble'
    },
    
    sn: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'SnCrO<sub>4</sub>\nTin (II) Chromate\nRelatively insoluble'
    },
    
    cu: {
      value: 'I',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+chromate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'CuCrO<sub>4</sub>\nCopper Chromate\nRelatively insoluble'
    }
  },

  {
    id: 24,

    anion: { 
      value: '<b>ClO<sub>4</sub><sup>-</sup></b>', 
      url: '',
      tooltip: '' 
    },

    h: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=perchloric+acid&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'HClO<sub>4</sub>\nPerchloric Acid\nStrong acid'
    },

    li: { 
      value: 'S', 
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lithium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'LiClO<sub>4</sub>\nLithium Perchlorate\nSoluble' 
    },

    na: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=sodium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NaClO<sub>4</sub>\nSodium Perchlorate\nSoluble'
    },

    k: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=potassium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'KClO<sub>4</sub>\nPotassium Perchlorate\nSoluble'
    },

    nh4: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ammonium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'NH<sub>4</sub>ClO<sub>4</sub>\nAmmonium Perchlorate\nSoluble'
    },

    ba: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=barium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ba(ClO<sub>4</sub>)<sub>2</sub>\nBarium Perchlorate\nSoluble'
    },

    ca: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=calcium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Ca(ClO<sub>4</sub>)<sub>2</sub>\nCalcium Perchlorate\nSoluble'
    },

    mg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=magnesium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mg(ClO<sub>4</sub>)<sub>2</sub>\nMagnesium Perchlorate\nSoluble'
    },
    
    sr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=strontium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Sr(ClO<sub>4</sub>)<sub>2</sub>\nStrontium Perchlorate\nSoluble'
    },
    
    al: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=aluminium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Al(ClO<sub>4</sub>)<sub>3</sub>\nAluminium Perchlorate\nSoluble'
    },
    
    cr: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=chromium+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cr(ClO<sub>4</sub>)<sub>3</sub>\nChromium (III) Perchlorate\nSoluble'
    },
    
    fe2: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferrous+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(ClO<sub>4</sub>)<sub>2</sub>\nFerrous Perchlorate\nSoluble'
    },
    
    fe3: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=ferric+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Fe(ClO<sub>4</sub>)<sub>3</sub>\nFerric Perchlorate\nSoluble'
    },
    
    mn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=manganese+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Mn(ClO<sub>4</sub>)<sub>2</sub>\nManganese Perchlorate\nSoluble'
    },
    
    zn: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=zinc+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Zn(ClO<sub>4</sub>)<sub>2</sub>\nZinc Perchlorate\nSoluble'
    },
    
    ag: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=silver+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'AgClO<sub>4</sub>\nSilver Perchlorate\nSoluble'
    },
    
    hg: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=mercury+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Hg(ClO<sub>4</sub>)<sub>2</sub>\nMercury Perchlorate\nSoluble'
    },
    
    pb: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=lead+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Pb(ClO<sub>4</sub>)<sub>2</sub>\nLead Perchlorate\nSoluble'
    },
    
    sn: {
      value: '?',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=tin+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Compound does not exist'
    },
    
    cu: {
      value: 'S',
      url: 'https://www.google.com/search?sca_esv=681d2c6e37d88c1e&rlz=1C1CHZN_enEN940EN940&sxsrf=ADLYWIJqKpgwgnqwusv6maijLE_HBKvizw:1719690620776&q=copper+perchlorate&tbm=isch&source=lnms&fbs=AEQNm0Cjmfui-wh8X_MyYW04R9TpUPIG0MT0vgp9Xt5p8amNX8OCB6eLMfPIJTt-OFLq3eJ5rgOcBnDGxdebLPV1TRIGrGyrbHSNAljEyYJ7-QT7GKh55IcVxL7IxkCgzHWoEfJifPz3e_MtObTRRSLDzpmC9FWcc-7-ms3x7zUVOjCVnHHNUEXC3cYSCjc6XzD1gUJcGsEd_DonwSiz3wYZQD7TmeFpkvtBJJ28uvInV-obHnyBWjAoQ3goihz2GtZo4STXonkz&sa=X&ved=2ahUKEwjxt8zkyoGHAxWXUaQEHUc5BDUQ0pQJegQIDRAB&biw=1301&bih=548&dpr=1',
      tooltip: 'Cu(ClO<sub>4</sub>)<sub>2</sub>\nCopper Perchlorate\nSoluble'
    }
  },
]

  const handleCellClick = (url) => {
    if (url) {
      window.open(url, '_blank');
      console.log(`Opened in a new tab: ${url}`);
    }
  };

  // console.log(style)

  return (

    <div className={style.appContainer}>

    {/* <p>Choose your style:</p>
    <select 
      value={selectedStyle} 
      onChange={handleStyleChange}
    >
        <option value="style1">Style 1</option>
        <option value="style2">Style 2</option>
        <option value="style3">Style 3</option>
        <option value="style4">Style 4</option>
        <option value="style5">Style 5</option>
        <option value="style6">Style 6</option>
    </select> */}

      <h1 style={{ textAlign: 'center' }}>
        Clickable Solubility Chart
      </h1>
      <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>(Just click to see the pictures of the substance!)</h3>

      <table
        border="1"
      >
        <thead>
          <tr>
            <th></th>
            <th>H<sup>+</sup></th>
            <th>Li<sup>+</sup></th>
            <th>Na<sup>+</sup></th>
            <th>K<sup>+</sup></th>
            <th>NH<sub>4</sub><sup>+</sup></th>
            <th>Ba<sup>2+</sup></th>
            <th>Ca<sup>2+</sup></th>
            <th>Mg<sup>2+</sup></th>
            <th>Sr<sup>2+</sup></th>
            <th>Al<sup>3+</sup></th>
            <th>Cr<sup>3+</sup></th>
            <th>Fe<sup>2+</sup></th>
            <th>Fe<sup>3+</sup></th>
            <th>Mn<sup>2+</sup></th>
            <th>Zn<sup>2+</sup></th>
            <th>Ag<sup>+</sup></th>
            <th>Hg<sup>2+</sup></th>
            <th>Pb<sup>2+</sup></th>
            <th>Sn<sup>2+</sup></th>
            <th>Cu<sup>2+</sup></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {/* <td>{row.anion.value}</td> */}
              <td className={style.anionColumn} dangerouslySetInnerHTML={{ __html: row.anion.value }}></td>
              
              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.h.url)}>
                <Tooltip text={row.h.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.h.value }}></span>
                </Tooltip>
              </td>
              
              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.li.url)}>
                <Tooltip text={row.li.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.li.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.na.url)}>
                <Tooltip text={row.na.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.na.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.k.url)}>
                <Tooltip text={row.k.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.k.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.nh4.url)}>
                <Tooltip text={row.nh4.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.nh4.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.ba.url)}>
                <Tooltip text={row.ba.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.ba.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.ca.url)}>
                <Tooltip text={row.ca.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.ca.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.mg.url)}>
                <Tooltip text={row.mg.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.mg.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.sr.url)}>
                <Tooltip text={row.sr.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.sr.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.al.url)}>
                <Tooltip text={row.al.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.al.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.cr.url)}>
                <Tooltip text={row.cr.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.cr.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.fe2.url)}>
                <Tooltip text={row.fe2.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.fe2.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.fe3.url)}>
                <Tooltip text={row.fe3.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.fe3.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.mn.url)}>
                <Tooltip text={row.mn.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.mn.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.zn.url)}>
                <Tooltip text={row.zn.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.zn.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.ag.url)}>
                <Tooltip text={row.ag.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.ag.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.hg.url)}>
                <Tooltip text={row.hg.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.hg.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.pb.url)}>
                <Tooltip text={row.pb.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.pb.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.sn.url)}>
                <Tooltip text={row.sn.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.sn.value }}></span>
                </Tooltip>
              </td>

              <td className={`${style.clickable} ${style.equalWidth}`} onClick={() => handleCellClick(row.cu.url)}>
                <Tooltip text={row.cu.tooltip}>
                  <span dangerouslySetInnerHTML={{ __html: row.cu.value }}></span>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default SolubilityDraft
