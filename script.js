let checkbox = document.querySelector("#switch");
let body = document.querySelector('body');

let localStorageTheme = localStorage.getItem("theme")

const setThemeColor = () => {
    localStorageTheme === "dark" ? setDarkMode() : setLightMode();
}

const setLightMode = () => {
    body.classList = 'light';
    localStorage.setItem("theme", "light")
    checkbox.checked = true;
}

const setDarkMode = () => {
    body.classList = 'dark';
    localStorage.setItem("theme", "dark")
    checkbox.checked = false;
}

setThemeColor()

checkbox.addEventListener('click', () => checkbox.checked ? setLightMode() : setDarkMode()) 







const slides = {
    1: {
      images: [
        "https://i.pinimg.com/736x/2d/19/9d/2d199db9bde4aca97233e5d9a8fce41f.jpg",
        "https://www.warhammer.com/app/resources/catalog/product/920x950/99120101491_LtTitus1.jpg?fm=webp&w=920&h=948",
        "https://www.warhammer.com/app/resources/catalog/product/920x950/99120101491_LtTitus2.jpg?fm=webp&w=920&h=948"
      ],
      currentIndex: 0
    },
    2: {
      images: [
        "https://i.pinimg.com/736x/70/02/16/7002163cff546eaf63dd108472776082.jpg",
        "https://www.warhammer.com/app/resources/catalog/product/920x950/99120105099_AMCommissar1.jpg?fm=webp&w=920&h=948",
        "https://www.warhammer.com/app/resources/catalog/product/920x950/99120105099_AMCommissar2.jpg?fm=webp&w=920&h=948"
      ],
      currentIndex: 0
    },
    3: {
        images: [
          "https://preview.redd.it/codex-adeptus-custodes-cover-art-by-jaime-martinez-v0-wunsd5jn5wzc1.jpeg?width=640&crop=smart&auto=webp&s=e6063f08e36afac75129f7cbfcfbcd20de15137a",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120108012_GeneralTrajannValoris01.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120108076_TrajannValorisFeature.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      4: {
        images: [
          "https://i.pinimg.com/736x/77/cd/95/77cd95eb3fe56136524a89cb844f340c.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070108007_PalatineLead.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070108007_PalatineFeature.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      5: {
        images: [
          "https://i.pinimg.com/736x/7a/5c/0a/7a5c0a3a91db6011a49781c4016124a2.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070116007_AMTechnoarchaeologist01.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070116007_AMTechnoarchaeologist02.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      6: {
        images: [
          "https://i.pinimg.com/736x/e0/45/e7/e045e73744a8a33868f5706527f2c765.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99590108089_AvengerStrikeBomber02.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99590108089_AvengerStrikeBomber04.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      7: {
        images: [
          "https://i.pinimg.com/736x/d6/16/67/d61667a707dcd05f8b91ca80c2b61877.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070108001_VindicareAssassin01.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070108001_VindicareAssassin03.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      8: {
        images: [
          "https://i.pinimg.com/564x/e7/1d/47/e71d47fcc7f6a4a5df4b6fe3286ad4ad.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070110007_RoyalWarden1.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070110007_RoyalWarden2.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      9: {
        images: [
          "https://preview.redd.it/what-audiobooks-or-regular-books-have-tyranids-as-the-main-v0-13ixloiavh1b1.jpg?width=640&crop=smart&auto=webp&s=53c8eb9e63aff842fc35754060c8bd8a0bce7975",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120106060_HiveTyrantLead.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120106060_HiveTyrantFeature.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      10: {
        images: [
          "https://i.pinimg.com/736x/4d/cb/96/4dcb967f440a7ee87ed022df489a982b.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120102093_CSMTerminatorLord02.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120102093_CSMTermLordSorcDetails.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      11: {
        images: [
          "https://i.pinimg.com/564x/8f/6d/19/8f6d19f63e48127dea4cab6764573968.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99129915075_Skulltaker1.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99129915075_Skulltaker2.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      12: {
        images: [
          "https://roguetrader.owlcat.games/storage/images/DaemonEngines/PD806%20Crusade%20of%20Fire%20Cover_TIF.Jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120108016_KnightTyrant.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120108016_KnightTyrantAlt.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      13: {
        images: [
          "https://i.pinimg.com/474x/5f/f0/65/5ff06559a6247e3db20f0b3d75e724c2.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120104077_AELAutarchLead.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120104077_AELAutarchFeature.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      14: {
        images: [
          "https://i.pinimg.com/736x/81/83/6c/81836c5e614004c6460671bff4e3b82f.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070117004_GSCClamavus01.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070117004_GSCClamavus02.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      15: {
        images: [
          "https://i.pinimg.com/736x/e1/35/21/e135211ffbff714ce193f4dace5095fb.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/threeSixty/99120113039_Breacher1360/01-01.jpg?fm=webp&w=920",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120113091_TAUCP6.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      16: {
        images: [
          "https://i.pinimg.com/564x/e9/57/1d/e9571d103363bc9eb8f857f901fb4797.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/threeSixty/99120113037_Commander1360/01-01.jpg?fm=webp&w=920",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120113091_TAUCP2.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      17: {
        images: [
          "https://images.cults3d.com/6i5Fw_qsCPUwLMjOaHTLqOCdDME=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/14047615/illustration-file/97f4ce9e-2410-4fc9-8a49-f3619a404334/Main-Body-Gunship-v7.png",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120113074_TAUDevilfishLead.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120113091_TAUCP5.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      18: {
        images: [
          "https://i.pinimg.com/originals/1a/9d/5b/1a9d5b6dc6ec6df5b0b96d0ee3f1cb04.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070103004_OrkMek01.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99070103004_OrkMek02.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      19: {
        images: [
          "https://i.pinimg.com/736x/68/06/2c/68062c76710e85a2e388bbcc275feff4.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103105_WarbossinMegaArmourLead.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103105_WarbossinMegaArmourFeature.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      },
      20: {
        images: [
          "https://i.pinimg.com/736x/da/e5/21/dae5215aa5ed01e1e96b4942c088229a.jpg",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103034_Morkanaut01.jpg?fm=webp&w=920&h=948",
          "https://www.warhammer.com/app/resources/catalog/product/920x950/99120103088_MorkanautFeature.jpg?fm=webp&w=920&h=948"
        ],
        currentIndex: 0
      }

  };
  
  function showSlide(slideNumber) {
    const slideImg = document.getElementById(`slide${slideNumber}`);
    slideImg.src = slides[slideNumber].images[slides[slideNumber].currentIndex];
  }
  
  function nextSlide(slideNumber) {
    const slide = slides[slideNumber];
    slide.currentIndex = (slide.currentIndex + 1) % slide.images.length;
    showSlide(slideNumber);
  }
  
  function prevSlide(slideNumber) {
    const slide = slides[slideNumber];
    slide.currentIndex = (slide.currentIndex - 1 + slide.images.length) % slide.images.length;
    showSlide(slideNumber);
  }