<template>
  <section class="article">
    <!-- <h1>Article {{this.$route.params.article}}</h1> -->

    <!-- Alert -->
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>
    <header>
      <h1>{{ articleSelected.station }}</h1>
      <div class="headlineIntro"></div>
    </header>
    <div class="sidebar">
      <h2>{{ articleSelected.status }}</h2>
    </div>

    <article>
      <div class="article__intro">
        <div class="intro__petit">
          <div class="petitInfo petitInfo--ouverture">
            <h2>Ouverture</h2>
            <p>{{ openingStation }}</p>
          </div>
          <div class="petitInfo petitInfo--ligne">
            <h2>Ligne</h2>

            <div class="petitInfo--ligneFex">
              <div v-for="select in articleSelected.linesStation" :key="select._id">
                <div class="ligne--icon">{{ select.ligne }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="intro__imageBox">
          <section v-for="select in articleSelected.firstPicture" :key="select._id">
            <img
              v-bind:src="select.link"
              class="intro__imag__image__image"
              v-bind:alt="select.title"
              v-bind:year="select.date"
            >
            <p class="intro__imag__image__text">
              <span>{{ select.date }}</span>
              {{ select.title }}
            </p>
          </section>
        </div>
      </div>
      <div class="map--navigation article__map">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 970 790">
          <title>paris_map</title>
          <g id="Line">
            <polyline
              id="_1_1"
              data-name="1_1"
              year="1900"
              class="ligne ligne--1"
              ligne="1"
              points="130.47 190.05 319.18 378.76 571.76 378.43 614.54 421.21 651.33 421.21 695.02 464.89 695.02 503.98 728.93 537.89 816.88 449.95 831.81 464.88"
            ></polyline>
            <polyline
              id="_1_3"
              data-name="1_2"
              class="ligne ligne--1"
              ligne="1"
              year="1934"
              points="831.81 464.88 842.17 475.24 897.35 475.24 958.57 536.46"
            ></polyline>

            <polyline
              id="_2_1"
              data-name="2_1"
              class="ligne ligne--2"
              ligne="2"
              year="1900"
              points="140.32 303.37 96.06 259.11 140.32 303.37 192.06 251.64 335.19 108.51 697.32 108.51 732.95 144.15 732.95 225.77 817.45 310.27 817.45 422.66 844.18 449.38"
            ></polyline>

            <polyline
              id="_3_1"
              data-name="3_1"
              class="ligne ligne--3"
              ligne="3"
              year="1904"
              points="298.96 145.86 357.6 204.5 357.6 239.57 439.66 321.62 617.99 321.62 669.37 270.25 729.5 270.25 777.54 318.28 866.71 318.28"
            ></polyline>
            <line
              id="_3_2"
              data-name="3_2"
              class="ligne ligne--3"
              ligne="3"
              year="1911"
              x1="231.53"
              y1="78.43"
              x2="298.96"
              y2="145.86"
            ></line>

            <polyline
              id="_4_1"
              data-name="4_1"
              class="ligne ligne--4"
              ligne="4"
              year="1908"
              points="508.78 10.79 543.84 45.86 543.84 117.71 607.64 117.71 632.36 135.43 632.36 183.24 591.84 223.76 591.84 330.39 524.87 330.39 524.87 377.89"
            ></polyline>
            <polyline
              id="_4_2"
              data-name="4_2"
              class="ligne ligne--4"
              ligne="4"
              year="1909"
              points="484.93 601.56 499.29 615.92 499.29 682.17 464.95 716.52"
            ></polyline>
            <polyline
              id="_4_3"
              data-name="4_3"
              class="ligne ligne--4"
              ligne="4"
              year="1910"
              points="524.87 377.89 524.87 398.21 491.53 431.55 491.53 476.39 421.41 476.39 421.41 586.75 470.12 586.75 484.93 601.56"
            ></polyline>

            <polyline
              id="_5_1"
              data-name="5_1"
              class="ligne ligne--5"
              ligne="5"
              year="1906"
              points="650.66 234.86 650.66 255.16 738.4 342.9 662.89 418.4 662.89 600.61 619.38 644.13 619.38 665.04"
            ></polyline>
            <polyline
              id="_5_2"
              data-name="5_2"
              class="ligne ligne--5"
              ligne="5"
              year="1907"
              points="637.53 135.6 637.53 208.09 650.66 221.22 650.66 234.86"
            ></polyline>

            <polyline
              id="_6_1"
              data-name="6_1"
              class="ligne ligne--6"
              ligne="6"
              year="1903"
              points="119.36 379.43 119.36 331.38 195.58 255.16"
            ></polyline>
            <line
              id="_6_2"
              data-name="6_2"
              class="ligne ligne--6"
              ligne="6"
              year="1903"
              x1="119.36"
              y1="434.34"
              x2="119.36"
              y2="379.42"
            ></line>
            <polyline
              id="_6_3"
              data-name="6_3"
              class="ligne ligne--6"
              ligne="6"
              year="1906"
              points="619.38 664.52 540.74 664.52 470.75 594.54 328.38 594.54 264.79 530.95 215.98 530.95 119.36 434.34"
            ></polyline>
            <polyline
              id="_6_4"
              data-name="6_4"
              class="ligne ligne--6"
              ligne="6"
              year="1904"
              points="824.25 470.08 865.49 511.32 712.29 664.52 619.38 664.52"
            ></polyline>

            <polyline
              id="_7_1"
              data-name="7_1"
              class="ligne ligne--7"
              ligne="7"
              year="1910"
              points="401.81 283.78 506.79 178.8 656.54 178.8 700.82 134.52 700.82 100.46 762.08 39.2"
            ></polyline>
            <line
              id="_7_2"
              data-name="7_2"
              class="ligne ligne--7"
              ligne="7"
              year="1916"
              x1="401.81"
              y1="378.76"
              x2="401.81"
              y2="283.78"
            ></line>
            <polyline
              id="_7_3"
              data-name="7_3"
              class="ligne ligne--7"
              ligne="7"
              year="1926"
              points="576.01 422.82 541.69 388.5 401.81 388.5 401.81 378.76"
            ></polyline>
            <polyline
              id="_7_4"
              data-name="7_4"
              class="ligne ligne--7"
              ligne="7"
              year="1930"
              points="684.52 728.21 630.78 728.21 613.03 710.45 613.03 664.62 613.03 644.13 571.71 602.81 571.71 538.8 593.94 538.8 613.03 538.8 613.03 459.84 576.01 422.82"
            ></polyline>
            <polyline
              id="_7_bis"
              data-name="7_bis"
              class="ligne ligne--7"
              ligne="7"
              year="1926"
              points="816.58 159.41 844.02 186.85 857.43 186.85 884.97 159.31 857.5 131.85 843.11 131.85 816.06 158.9 758.43 158.9 717.21 117.67 693.11 141.78"
            ></polyline>

            <polyline
              id="_8_2"
              data-name="8_2"
              class="ligne ligne--8"
              ligne="8"
              year="1913"
              points="462.35 265.76 641.13 265.76 669.41 294.04 655.64 307.81 655.64 418.15 701.87 464.38 733.16 464.38 860.51 589.74 829.36 620.88"
            ></polyline>

            <polyline
              id="_9_1"
              data-name="9_1"
              class="ligne ligne--9"
              ligne="9"
              year="1922"
              points="63.62 626.9 63.62 379.43 119.36 379.43"
            ></polyline>
            <polyline
              id="_9_2"
              data-name="9_2"
              class="ligne ligne--9"
              ligne="9"
              year="1923"
              points="119.36 379.43 197.85 379.43 343.8 233.48 368.27 257.95 462.14 257.95"
            ></polyline>
            <polyline
              id="_9_3"
              data-name="9_3"
              class="ligne ligne--9"
              ligne="9"
              year="1934"
              points="5.67 716.52 63.62 658.57 63.62 626.9"
            ></polyline>
            <polyline
              id="_9_4"
              data-name="9_4"
              class="ligne ligne--9"
              ligne="9"
              year="1934"
              points="462.14 257.95 643.85 257.95 846.33 460.43 949.21 357.55"
            ></polyline>

            <polyline
              id="_10_1"
              data-name="10_1"
              class="ligne ligne--8"
              ligne="8"
              year="1913"
              points="133.55 562.54 100.07 595.49 16.59 595.49 15.32 595.49 48.27 562.54 172.46 562.54 210.84 525.83 225.94 525.83 225.95 525.95 225.95 464.64 299.13 391.45 299.13 321.62 356.49 321.62 397.39 280.72 412.34 265.76 462.2 265.76"
            ></polyline>
            <polyline
              id="_10_4"
              data-name="10_4"
              class="ligne ligne--10"
              ligne="10"
              year="1923"
              points="337.95 546.73 281.7 490.47 281.7 408.17"
            ></polyline>
            <polyline
              id="_10_2"
              data-name="10_2"
              class="ligne ligne--10"
              ligne="10"
              year="1926"
              points="481.3 481.6 401.81 481.6 337.32 546.09"
            ></polyline>

            <polyline
              id="_10_3"
              data-name="10_3"
              class="ligne ligne--10"
              ligne="10"
              year="1930"
              points="481.3 481.6 518.97 481.6 570.28 532.91 594.28 532.91"
            ></polyline>

            <polyline
              id="_11_1"
              data-name="11_1"
              class="ligne ligne--11"
              ligne="11"
              year="1935"
              points="921.44 199.33 751.35 199.33 561.23 388.45 524.87 388.45"
            ></polyline>

            <polyline
              id="_12_1"
              data-name="12_1"
              class="ligne ligne--12"
              ligne="12"
              year="1910"
              points="469.44 194.73 370.82 194.73 370.82 225.77 305.87 290.73 305.87 421.21 436.06 551.4 436.06 579.86 363.93 579.86 236.29 707.49"
            ></polyline>
            <polyline
              id="_12_2"
              data-name="12_2"
              class="ligne ligne--12"
              ligne="12"
              year="1912"
              points="469.44 194.73 480.04 194.73 480.04 55.63 509.28 55.63 517.28 55.63 637.53 55.63 637.53 15.39"
            ></polyline>
            <line
              id="_12_3"
              data-name="12_3"
              class="ligne ligne--12"
              ligne="12"
              year="1934"
              x1="236.29"
              y1="707.49"
              x2="179.41"
              y2="764.37"
            ></line>

            <line
              id="_13_1"
              data-name="13_1"
              class="ligne ligne--13"
              ligne="13"
              year="1912"
              x1="364.87"
              y1="218.5"
              x2="364.87"
              y2="10.79"
            ></line>
            <line
              id="_13_2-2"
              data-name="13_2"
              class="ligne ligne--13"
              ligne="13"
              year="1912"
              x1="314.67"
              y1="25.77"
              x2="364.31"
              y2="75.4"
            ></line>

            <polyline
              id="_3_bis"
              data-name="3_bis"
              class="ligne ligne--3"
              ligne="3"
              year="1921"
              points="865.49 318.28 865.49 305.39 922.16 248.73 922.16 190.61"
            ></polyline>
          </g>
          <g id="points">
            <circle class="cls-2" cx="508.65" cy="10.62" r="0"></circle>
            <circle class="cls-2" cx="527.51" cy="29.64" r="0"></circle>
            <circle class="cls-2" cx="543.85" cy="55.65" r="0"></circle>
            <circle class="cls-2" cx="637.39" cy="43.85" r="0"></circle>
            <circle class="cls-2" cx="637.39" cy="14.04" r="0"></circle>
            <circle class="cls-2" cx="543.89" cy="78.81" r="0"></circle>
            <circle class="cls-2" cx="577.26" cy="118.01" r="0"></circle>
            <circle class="cls-2" cx="633.52" cy="107.85" r="0"></circle>
            <circle class="cls-2" cx="672.14" cy="164.01" r="0"></circle>
            <circle class="cls-2" cx="692.1" cy="142.9" r="0"></circle>
            <circle class="cls-2" cx="710.48" cy="92.1" r="0"></circle>
            <circle class="cls-2" cx="727.94" cy="74.35" r="0"></circle>
            <circle class="cls-2" cx="745.36" cy="57.46" r="0"></circle>
            <circle class="cls-2" cx="763.46" cy="39.2" r="0"></circle>
            <circle class="cls-2" cx="650.74" cy="234.86" r="0"></circle>
            <circle class="cls-2" cx="704.05" cy="247.19" r="0"></circle>
            <circle class="cls-2" cx="733.68" cy="217.3" r="0"></circle>
            <circle class="cls-2" cx="771.28" cy="199.94" r="0"></circle>

            <circle
              class="station"
              station="couronnes"
              bubble="Trauma"
              cx="758.78"
              cy="251.05"
              r="1"
            ></circle>
            <circle
              class="station"
              station="menilmontant"
              bubble="Trauma"
              cx="789.39"
              cy="281.58"
              r="1"
            ></circle>

            <circle class="station" station="pere" bubble="Morte" cx="816.71" cy="318.28" r="1"></circle>

            <circle class="cls-2" cx="816.71" cy="349.96" r="0"></circle>
            <circle class="cls-2" cx="817.14" cy="389.45" r="0"></circle>
            <circle class="cls-2" cx="822.01" cy="426.62" r="0"></circle>
            <circle class="cls-2" cx="870.24" cy="437.31" r="0"></circle>
            <circle class="cls-2" cx="958.57" cy="536.18" r="0"></circle>
            <circle class="cls-2" cx="935.08" cy="512.54" r="0"></circle>
            <circle class="cls-2" cx="916.53" cy="494.12" r="0"></circle>
            <circle class="station" station="ligne1" bubble="Carrier" cx="882.02" cy="475" r="1"></circle>
            <circle class="cls-2" cx="865.49" cy="510.91" r="0"></circle>
            <circle class="cls-2" cx="844.18" cy="533.27" r="0"></circle>
            <circle class="cls-2" cx="823.39" cy="553.27" r="0"></circle>
            <circle class="cls-2" cx="795.15" cy="525.52" r="0"></circle>
            <circle class="cls-2" cx="768.93" cy="498.14" r="0"></circle>
            <circle class="cls-2" cx="742.02" cy="472.25" r="0"></circle>
            <circle class="cls-2" cx="705.67" cy="516.41" r="0"></circle>
            <circle class="cls-2" cx="690.37" cy="452.4" r="0"></circle>
            <circle class="cls-2" cx="687.5" cy="393.32" r="0"></circle>
            <circle class="cls-2" cx="712.69" cy="368.7" r="0"></circle>
            <circle class="cls-2" cx="655.48" cy="331.85" r="0"></circle>
            <circle class="cls-2" cx="655.48" cy="363.65" r="0"></circle>
            <circle class="cls-2" cx="655.48" cy="393.32" r="0"></circle>
            <circle class="cls-2" cx="663.17" cy="510.91" r="0"></circle>
            <circle class="cls-2" cx="662.99" cy="560.07" r="0"></circle>
            <circle class="cls-2" cx="663.17" cy="601.56" r="0"></circle>
            <circle class="cls-2" cx="642.86" cy="620.88" r="0"></circle>
            <circle class="cls-2" cx="657.12" cy="663.57" r="0"></circle>
            <circle class="cls-2" cx="694.08" cy="664.52" r="0"></circle>
            <circle class="cls-2" cx="730.76" cy="646.35" r="0"></circle>
            <circle class="cls-2" cx="769.77" cy="606.81" r="0"></circle>
            <circle class="cls-2" cx="795.15" cy="582.76" r="0"></circle>
            <circle class="cls-2" cx="589.18" cy="663.57" r="0"></circle>
            <circle class="cls-2" cx="593.05" cy="624.75" r="0"></circle>
            <circle class="cls-2" cx="571.93" cy="594.98" r="0"></circle>
            <circle class="cls-2" cx="570.93" cy="563.4" r="0"></circle>
            <circle class="cls-2" cx="560.13" cy="522.35" r="0"></circle>
            <circle class="cls-2" cx="540.74" cy="502.12" r="0"></circle>
            <circle class="cls-2" cx="513.15" cy="481.6" r="0"></circle>
            <circle class="cls-2" cx="446.75" cy="483.93" r="0"></circle>
            <circle class="cls-2" cx="433.37" cy="475" r="0"></circle>
            <circle class="cls-2" cx="554.11" cy="664.52" r="0"></circle>
            <circle class="cls-2" cx="465.59" cy="715.89" r="0"></circle>
            <circle class="cls-2" cx="481.44" cy="699.95" r="0"></circle>
            <circle class="cls-2" cx="500.13" cy="659.45" r="0"></circle>
            <circle class="cls-2" cx="524.56" cy="647.95" r="0"></circle>
            <circle class="cls-2" cx="499.72" cy="623.54" r="0"></circle>
            <circle class="cls-2" cx="434.23" cy="594.98" r="0"></circle>
            <circle class="cls-2" cx="421.41" cy="545.39" r="0"></circle>
            <circle class="cls-2" cx="421.41" cy="507.38" r="0"></circle>
            <circle class="cls-2" cx="436.92" cy="559.2" r="0"></circle>
            <circle class="cls-2" cx="408.47" cy="522.35" r="0"></circle>
            <circle class="cls-2" cx="384.48" cy="499.64" r="0"></circle>
            <circle class="cls-2" cx="361.13" cy="522.35" r="0"></circle>
            <circle class="cls-2" cx="338.5" cy="546.73" r="0"></circle>
            <circle class="cls-2" cx="298.65" cy="554.25" r="0"></circle>
            <circle class="cls-2" cx="309.67" cy="575.45" r="0"></circle>
            <circle class="cls-2" cx="280.5" cy="546.73" r="0"></circle>
            <circle class="cls-2" cx="300.99" cy="507.38" r="0"></circle>
            <circle class="cls-2" cx="281.7" cy="452.96" r="0"></circle>
            <circle class="cls-2" cx="281.7" cy="408.17" r="0"></circle>
            <circle class="cls-2" cx="283.06" cy="341.85" r="0"></circle>
            <circle class="cls-2" cx="353.39" cy="378.76" r="0"></circle>
            <circle class="cls-2" cx="441.07" cy="376.48" r="0"></circle>
            <circle class="cls-2" cx="401.81" cy="377.89" r="0"></circle>
            <circle class="cls-2" cx="401.81" cy="329.34" r="0"></circle>
            <circle class="cls-2" cx="473.57" cy="389.45" r="0"></circle>
            <circle class="cls-2" cx="574.97" cy="422.82" r="0"></circle>
            <circle class="cls-2" cx="610.6" cy="455.14" r="0"></circle>
            <circle class="cls-2" cx="254.98" cy="436.26" r="0"></circle>
            <circle class="cls-2" cx="225.94" cy="475" r="0"></circle>
            <circle class="cls-2" cx="179.41" cy="764.37" r="0"></circle>
            <circle class="cls-2" cx="210.15" cy="735.38" r="0"></circle>
            <circle class="cls-2" cx="236.99" cy="707.49" r="0"></circle>
            <circle class="cls-2" cx="264.38" cy="679.81" r="0"></circle>
            <circle class="cls-2" cx="292.48" cy="651.86" r="0"></circle>
            <circle class="cls-2" cx="319.51" cy="624.47" r="0"></circle>
            <circle class="cls-2" cx="350.14" cy="594.98" r="0"></circle>
            <circle class="cls-2" cx="363.69" cy="580.94" r="0"></circle>
            <circle class="cls-2" cx="455.35" cy="586.8" r="0"></circle>
            <circle class="cls-2" cx="645.49" cy="728.46" r="0"></circle>
            <circle class="cls-2" cx="684.52" cy="729.46" r="0"></circle>
            <circle class="cls-2" cx="612.6" cy="710.03" r="0"></circle>
            <circle class="cls-2" cx="841.77" cy="571.67" r="0"></circle>
            <circle class="cls-2" cx="852.53" cy="598.34" r="0"></circle>
            <circle class="cls-2" cx="829.88" cy="620.88" r="0"></circle>
            <circle class="cls-2" cx="886.25" cy="422.67" r="0"></circle>
            <circle class="cls-2" cx="902.48" cy="404.77" r="0"></circle>
            <circle class="cls-2" cx="918.58" cy="389.45" r="0"></circle>
            <circle class="cls-2" cx="935.02" cy="373.21" r="0"></circle>
            <circle class="cls-2" cx="949.21" cy="357.57" r="0"></circle>
            <circle class="cls-2" cx="784.29" cy="319.18" r="0"></circle>
            <circle class="cls-2" cx="746.34" cy="360.76" r="0"></circle>
            <circle class="cls-2" cx="768.23" cy="382.65" r="0"></circle>
            <circle class="cls-2" cx="788.39" cy="403.36" r="0"></circle>
            <circle class="cls-2" cx="808.33" cy="422.67" r="0"></circle>
            <circle class="cls-2" cx="760.46" cy="301.84" r="0"></circle>
            <circle class="cls-2" cx="893.83" cy="277.71" r="0"></circle>
            <circle class="cls-2" cx="922.16" cy="237.02" r="0"></circle>
            <circle class="cls-2" cx="816.71" cy="199.94" r="0"></circle>
            <circle class="cls-2" cx="892.5" cy="199.94" r="0"></circle>
            <circle class="cls-2" cx="831.81" cy="174.31" r="0"></circle>
            <circle class="cls-2" cx="797.36" cy="159.41" r="0"></circle>
            <circle class="cls-2" cx="753.18" cy="158.45" r="0"></circle>
            <circle class="cls-2" cx="852.15" cy="131.42" r="0"></circle>
            <circle class="cls-2" cx="882.34" cy="158.08" r="0"></circle>
            <circle class="cls-2" cx="733.68" cy="178.18" r="0"></circle>
            <circle class="cls-2" cx="523.86" cy="109.85" r="0"></circle>
            <circle class="cls-2" cx="554.51" cy="179.43" r="0"></circle>
            <circle class="cls-2" cx="470.12" cy="321.6" r="0"></circle>
            <circle class="cls-2" cx="429.5" cy="311.01" r="0"></circle>
            <circle class="cls-2" cx="429.14" cy="258.31" r="0"></circle>
            <circle class="cls-2" cx="378.45" cy="259.03" r="0"></circle>
            <circle class="cls-2" cx="334.63" cy="243.32" r="0"></circle>
            <circle class="cls-2" cx="295.41" cy="282.11" r="0"></circle>
            <circle class="cls-2" cx="509.28" cy="321.6" r="0"></circle>
            <circle class="cls-2" cx="524.87" cy="335.72" r="0"></circle>
            <circle class="cls-2" cx="524.87" cy="357.7" r="0"></circle>
            <circle class="cls-2" cx="600.31" cy="349.96" r="0"></circle>

            <circle class="station" station="cite" bubble="Genie" cx="507.3" cy="414.96" r="1"></circle>

            <circle class="station" station="hotle " bubble="Triumph" cx="571.11" cy="378.76" r="1"></circle>

            <circle class="cls-2" cx="610.6" cy="418.8" r="0"></circle>
            <circle class="cls-2" cx="604.18" cy="211.72" r="0"></circle>
            <circle class="cls-2" cx="480.08" cy="108.51" r="0"></circle>
            <circle class="cls-2" cx="480.08" cy="151.81" r="0"></circle>
            <circle class="cls-2" cx="497.3" cy="188.83" r="0"></circle>
            <circle class="cls-2" cx="469.44" cy="194.93" r="0"></circle>
            <circle class="cls-2" cx="477.44" cy="209.41" r="0"></circle>
            <circle class="cls-2" cx="409.04" cy="194.93" r="0"></circle>
            <circle class="cls-2" cx="306.67" cy="420.33" r="0"></circle>
            <circle class="cls-2" cx="221.56" cy="355.98" r="0"></circle>
            <circle class="cls-2" cx="170.49" cy="377.89" r="0"></circle>
            <circle class="cls-2" cx="119.36" cy="379.42" r="0"></circle>
            <circle class="cls-2" cx="123.23" cy="327.13" r="0"></circle>
            <circle class="cls-2" cx="158.89" cy="293.71" r="0"></circle>
            <circle class="cls-2" cx="134.34" cy="294.68" r="0"></circle>
            <circle class="cls-2" cx="223.31" cy="222.37" r="0"></circle>

            <circle
              class="station"
              station="courcelles"
              bubble="Vie Prive"
              cx="248.91"
              cy="196.56"
              r="1"
            ></circle>

            <circle class="cls-2" cx="273.52" cy="171.69" r="0"></circle>
            <circle class="cls-2" cx="299.66" cy="145.95" r="0"></circle>
            <circle class="cls-2" cx="326.21" cy="118.01" r="0"></circle>
            <circle class="cls-2" cx="330.08" cy="175.56" r="0"></circle>
            <circle class="cls-2" cx="231.15" cy="78.81" r="0"></circle>
            <circle class="cls-2" cx="252.78" cy="100.46" r="0"></circle>
            <circle class="cls-2" cx="265.78" cy="112.38" r="0"></circle>
            <circle class="cls-2" cx="281.7" cy="130.23" r="0"></circle>
            <circle class="cls-2" cx="92.2" cy="257.36" r="0"></circle>
            <circle class="cls-2" cx="73.27" cy="377.89" r="0"></circle>
            <circle class="cls-2" cx="63.1" cy="428.06" r="0"></circle>
            <circle class="cls-2" cx="63.1" cy="475" r="0"></circle>
            <circle class="cls-2" cx="156.15" cy="472.98" r="0"></circle>
            <circle class="cls-2" cx="188.61" cy="499.64" r="0"></circle>
            <circle class="cls-2" cx="119.36" cy="435.28" r="0"></circle>
            <circle class="cls-2" cx="63.1" cy="520.7" r="0"></circle>
            <circle class="cls-2" cx="63.1" cy="562.54" r="0"></circle>
            <circle class="cls-2" cx="82.33" cy="594.98" r="0"></circle>
            <circle class="cls-2" cx="99.93" cy="563.07" r="0"></circle>
            <circle class="cls-2" cx="112.73" cy="584.81" r="0"></circle>
            <circle class="cls-2" cx="148.8" cy="563.07" r="0"></circle>
            <circle class="cls-2" cx="180.88" cy="554.25" r="0"></circle>
            <circle class="cls-2" cx="200.14" cy="536" r="0"></circle>
            <circle class="cls-2" cx="29.89" cy="580.94" r="0"></circle>
            <circle class="cls-2" cx="63.1" cy="595.49" r="0"></circle>
            <circle class="cls-2" cx="63.1" cy="626.9" r="0"></circle>
            <circle class="cls-2" cx="63.1" cy="658.31" r="0"></circle>
            <circle class="cls-2" cx="44.75" cy="675.95" r="0"></circle>
            <circle class="cls-2" cx="8.25" cy="715.89" r="0"></circle>
            <circle class="cls-2" cx="26.02" cy="698.01" r="0"></circle>
            <circle class="cls-2" cx="258.85" cy="319.39" r="0"></circle>
            <circle class="cls-2" cx="227.18" cy="285.97" r="0"></circle>
            <circle class="cls-2" cx="166.63" cy="225.42" r="0"></circle>
            <circle class="cls-2" cx="130.47" cy="189.26" r="0"></circle>
            <circle class="cls-2" cx="334.63" cy="447.16" r="0"></circle>
            <circle class="cls-2" cx="361.13" cy="473.69" r="0"></circle>
            <circle class="cls-2" cx="363.31" cy="151.81" r="0"></circle>
            <circle class="cls-2" cx="363.31" cy="109.85" r="0"></circle>
            <circle class="cls-2" cx="421.41" cy="108.51" r="0"></circle>
            <circle class="cls-2" cx="363.31" cy="80.98" r="0"></circle>
            <circle class="cls-2" cx="337.82" cy="47.55" r="0"></circle>
            <circle class="cls-2" cx="316.52" cy="25.77" r="0"></circle>
            <circle class="cls-2" cx="363.31" cy="43.68" r="0"></circle>
            <circle class="cls-2" cx="363.31" cy="10.17" r="0"></circle>
            <circle class="cls-2" cx="480.08" cy="84.85" r="0"></circle>
            <circle class="cls-2" cx="480.08" cy="55.69" r="0"></circle>
            <circle class="cls-2" cx="509.28" cy="56.01" r="0"></circle>
          </g>
          <g id="connection">
            <rect
              class="cls-2"
              x="357.55"
              y="205.34"
              width="9"
              height="26.33"
              rx="3.14"
              transform="translate(579.92 -142.92) rotate(90)"
            ></rect>
            <rect class="cls-2" x="573.34" y="105.99" width="7.74" height="13.49" rx="2.25"></rect>
            <rect
              class="cls-2"
              x="305.67"
              y="316.52"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(632.8 13.72) rotate(90)"
            ></rect>
            <rect
              class="cls-2"
              x="627.95"
              y="124.66"
              width="7.74"
              height="21.87"
              rx="2.87"
              transform="translate(767.42 -496.22) rotate(90)"
            ></rect>
            <rect class="cls-2" x="587.71" y="255.47" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="556.26" y="255.47" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="458.33" y="255.49" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="501.54" y="255.49" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="861.63" y="308.13" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="918.29" y="188.49" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="847.97" y="182.04" width="7.74" height="22.34" rx="2.9"></rect>
            <rect class="cls-2" x="659.12" y="422.82" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="562.39" y="318.73" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="477.44" y="472.63" width="7.74" height="13.49" rx="2.25"></rect>
            <rect class="cls-2" x="222.07" y="521.32" width="7.74" height="13.49" rx="2.25"></rect>
            <rect
              class="cls-2"
              x="189.09"
              y="246.75"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(508.64 296.3) rotate(135)"
            ></rect>
            <rect
              class="cls-2"
              x="300.8"
              y="351.61"
              width="7.74"
              height="23.7"
              rx="3.22"
              transform="translate(777.1 405.03) rotate(135)"
            ></rect>
            <rect
              class="cls-2"
              x="628.49"
              y="308.13"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(-37.44 539.37) rotate(-45)"
            ></rect>
            <rect
              class="cls-2"
              x="631.38"
              y="172.68"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(814.67 -455.82) rotate(90)"
            ></rect>
            <rect
              class="cls-2"
              x="313.91"
              y="256.16"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(-92.82 301.7) rotate(-45)"
            ></rect>
            <rect
              class="cls-2"
              x="395.91"
              y="274.52"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(-81.79 365.06) rotate(-45)"
            ></rect>
            <rect class="cls-2" x="590.08" y="528.78" width="7.74" height="13.49" rx="2.25"></rect>
            <rect
              class="cls-2"
              x="832.31"
              y="443.46"
              width="7.74"
              height="33.64"
              rx="2"
              transform="translate(570.37 -456.45) rotate(45)"
            ></rect>
            <rect
              class="cls-2"
              x="478.92"
              y="596.79"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(568.17 -164.61) rotate(45)"
            ></rect>
            <rect
              class="station"
              station="montparnasse"
              bubble="morte"
              x="410.7"
              y="573.06"
              width="10"
              height="28.67"
              rx="3.66"
              transform="translate(536.78 -121.1) rotate(45)"
            ></rect>
            <rect
              class="cls-2"
              x="612.92"
              y="657.87"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(1281.4 47.83) rotate(90)"
            ></rect>
            <rect
              class="cls-2"
              x="688.12"
              y="296.24"
              width="7.74"
              height="13.49"
              rx="2.25"
              transform="translate(416.92 -400.57) rotate(45)"
            ></rect>
            <rect class="cls-2" x="521" y="368.35" width="7.74" height="24.86" rx="3.48"></rect>
          </g>
        </svg>
      </div>
      <div class="article__imageStaition">
        <div class="imageStaition__image">
          <section v-for="select in articleSelected.pictures" :key="select._id">
            <img
              v-bind:src="select.link"
              class="imageStaition__image__image"
              v-bind:alt="select.title"
              v-bind:year="select.date"
            >

            <!-- Text hover -->
            <div class>
              <p>{{ select.title }}</p>
            </div>

            <!--  -->
          </section>
        </div>
        <div class="imageStaition__timeline">
          <section v-for="select in articleSelected.pictures" :key="select._id">
            <span class="imageStaition__timelineYear">{{ select.date }}</span>
          </section>
        </div>
      </div>

      <div class="article--nom" v-if="ifStation === false">
        <h2 class="article--nom__headline">{{ articleSelected.station }}</h2>

        <section v-for="select in articleSelected.explicationNom" :key="select._id">
          <p class="article--nom__paragraph">{{ select.text }}</p>
          <br>
        </section>
      </div>

      <div class="button button--article">Prochaine station</div>
    </article>

    <footer class="footer--article">
      <a href="navigation.html" class="link--nav">
        <img src="../../../assets/ressources/img/icon.png" alt>
      </a>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      currentId: 2,

      /* Error */
      formError: null,

      /* Article select informations */
      articleSelected: {
        _id: null,
        station: null,
        status: null,
        linesStation: null,
        linkBienvenue: null,
        explicationNom: null,
        events: null,
        pictures: null,
        videos: null,
        audios: null,
        firstPicture: null,
        nextStep: null,
        map: null
      },

      /* Article */
      ifStation: false,
      openingStation: null
    };
  },

  methods: {
    /*
     * Load the select article
     */
    async selectArticle(select) {
      /* this.currentId = select; */
      try {
        let article = await this.$store.dispatch("article", {
          _id: this.currentId
        });

        /* Give data to articleSelected */
        this.articleSelected._id = article.data.data[0]._id;
        this.articleSelected.station = article.data.data[0].station;
        this.articleSelected.status = article.data.data[0].status;
        this.articleSelected.linesStation = JSON.parse(
          article.data.data[0].linesStation
        );
        this.articleSelected.linkBienvenue = article.data.data[0].linkBienvenue;
        this.articleSelected.explicationNom = JSON.parse(
          article.data.data[0].explicationNom
        );
        this.articleSelected.events = JSON.parse(article.data.data[0].events);
        this.articleSelected.videos = JSON.parse(article.data.data[0].videos);
        this.articleSelected.audios = JSON.parse(article.data.data[0].audios);
        this.articleSelected.firstPicture = JSON.parse(
          article.data.data[0].firstPicture
        );

        console.log(this.articleSelected.firstPicture);

        this.articleSelected.pictures = JSON.parse(
          article.data.data[0].pictures
        );
        this.articleSelected.map = JSON.parse(article.data.data[0].map);
        this.articleSelected.nextStep = JSON.parse(
          article.data.data[0].nextStep
        );

        this.openingStation = this.articleSelected.linesStation[0].date;

        this.mapShow();
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     *
     */
    mapShow() {
      /* console.log(this.articleSelected.map); */

      this.articleSelected.map.forEach(select => {
        let selectMap;
        if (select.select === `Ligne`) {
          selectMap = document.querySelectorAll(`.${select.name}`);
          this.ifStation = true;
        } else if (select.select === `Station`) {
          let stationSelect = document.querySelector(
            `[station = "${select.name}"]`
          );
          stationSelect.classList.add(`active`);
        }

        selectMap.forEach(selectAll => {
          if (select.select === `Ligne`) {
            let ligneSelect = select.name.split("ligne--");
            switch (ligneSelect[1]) {
              case "1":
                selectAll.style.stroke = "#FFCD00";
                break;
              case "2":
                selectAll.style.stroke = "#003CA6";
                break;
              case "3":
                selectAll.style.stroke = "#837902";
                break;
              case "4":
                selectAll.style.stroke = "#CF009E";
                break;
              case "5":
                selectAll.style.stroke = "#FF7E2E";
                break;
              case "6":
                selectAll.style.stroke = "#6ECA97";
                break;
              case "7":
                selectAll.style.stroke = "#FA9ABA";
                break;
              case "8":
                selectAll.style.stroke = "#E19BDF";
                break;
              case "9":
                selectAll.style.stroke = "#B6BD00";
                break;
              case "10":
                selectAll.style.stroke = "#C9910D";
                break;
              case "11":
                selectAll.style.stroke = "#704B1C";
                break;
              case "12":
                selectAll.style.stroke = "#007852";
                break;
              case "13":
                selectAll.style.stroke = "#6EC4E8";
                break;
              case "14":
                selectAll.style.stroke = "#62259D";
                break;

              default:
                colorSelect.style.stroke = "green";
                break;
            }
          }
        });

        /* console.log(selectMap) */
      });
    }
  },

  mounted: function mounted() {
    /*
     * Load articles
     */

    this.currentId = this.$route.params.article;
    this.selectArticle();
    //
  },
  //

  updated: function updated(params) {
    let imageBox = document.querySelector(".imageStaition__image");
    let images = document.querySelectorAll(".imageStaition__image__image");
    let imageActive;
    for (let i = 0; i < images.length; i++) {
      if (i === 0) {
        images[0].classList.add("imageVisible");
        imageActive = document.querySelector(".imageVisible");
      }

      images[i].style.display = "none";
    }
    imageActive.style.display = "block";

    let imageActiveHeight = imageActive.offsetHeight;
    imageBox.style.height = imageActiveHeight + "px";

    let years = document.querySelectorAll(".imageStaition__timelineYear");
    let selectYear = "";

    for (let i = 0; i < years.length; i++) {
      if (i === 0) {
        years[0].classList.add("active");
      }

      years[i].addEventListener("click", function() {
        for (let i = 0; i < years.length; i++) {
          years[i].classList.remove("active");
        }
        selectYear = years[i].innerHTML;
        years[i].classList.add("active");
        for (let i = 0; i < images.length; i++) {
          images[i].style.display = "none";
          images[i].classList.remove("imageVisible");
          if (selectYear === images[i].getAttribute("year")) {
            images[i].style.display = "block";
            images[i].classList.add("imageVisible");

            //height
            let imageActiveHeight = images[i].offsetHeight;
            imageBox.style.height = imageActiveHeight + "px";
          }
        }
      });
    }

    let introScroll = document.querySelector(".intro__petit");

    window.addEventListener("scroll", () => {
      if (window.matchMedia("(min-width: 640px)").matches) {
        if (document.documentElement.scrollTop > window.innerHeight) {
          introScroll.classList.add("fadeOut");
        } else {
          introScroll.classList.remove("fadeOut");
        }
      }
    });
  }
};
</script>
