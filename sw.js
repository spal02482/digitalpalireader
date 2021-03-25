/*
 * Version: #{DeploymentReleaseNumber}#
 */

// NOTE: On updating the workbox version, need to change the corresponding in azure-pipelines.yml (build) and "Generate sw.js" step (release).
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');
importScripts('/_dprhtml/js/globalObject.js');
importScripts('/_dprhtml/features/installation/init.js');

workbox.core.setCacheNameDetails({
  prefix: 'dpr',
  suffix: 'v5',
  precache: 'precache',
  runtime: 'runtime',
  googleAnalytics: 'google-analytics-name',
});

addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.precaching.precacheAndRoute(
  [{"revision":"7c8ff762f1e3c6064b10f0040c41919c","url":"_dprhtml/css/font-styles.css"},{"revision":"3dd44044b7ab38389d9d2f3f9522f791","url":"_dprhtml/css/index-core.css"},{"revision":"c1852febee08909766f730c0939029b3","url":"_dprhtml/css/index-override.css"},{"revision":"aea22e8c67533fa47a2135e3c6defc06","url":"_dprhtml/css/index.css"},{"revision":"39a5e241c64b34c6b13faa8eaf4786e7","url":"_dprhtml/css/styles.css"},{"revision":"b0ca91188f22d4ec49a964728182a4a5","url":"_dprhtml/etc/dbv.xml"},{"revision":"f8d47540063c47423aee76a3271d3c53","url":"_dprhtml/features/bottom-pane/init.js"},{"revision":"91af1a7f7c03b2bcb44e3b551a3b9a66","url":"_dprhtml/features/bottom-pane/main-pane.html"},{"revision":"ad69130bfb8c027ba66be2dabd9cc0bd","url":"_dprhtml/features/dictionary/init.js"},{"revision":"5c61d1170382a92132a22b10b6e396ad","url":"_dprhtml/features/dictionary/main-pane.html"},{"revision":"7d6b56b5ec31c1902b3434cb8ce53364","url":"_dprhtml/features/dictionary/tab.html"},{"revision":"500a62e0408d495bbdede61e8a1b208a","url":"_dprhtml/features/installation/init.js"},{"revision":"979934333157acb6088027a70854d8f0","url":"_dprhtml/features/installation/main-pane.html"},{"revision":"3343fb196de462972f7a9efedc453f75","url":"_dprhtml/features/landing-page/main-pane.html"},{"revision":"2cb7a1b67d2af6740bc43b390ef2b82c","url":"_dprhtml/features/navigation/init.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"_dprhtml/features/navigation/main-pane.html"},{"revision":"82ca2c661352d0695d0fde62922c35df","url":"_dprhtml/features/navigation/tab.html"},{"revision":"56a125e2239950c1c9874e7908247ba5","url":"_dprhtml/features/other-dialogs/bookmarks.html"},{"revision":"46f7c8a260b2b719d5bd35a75a61c846","url":"_dprhtml/features/other-dialogs/init.js"},{"revision":"64e5eb31ed0d8dbcfebd2daf40559393","url":"_dprhtml/features/other-dialogs/paliquote.html"},{"revision":"2253cb7a1f2feaa3ffef0cb789278f79","url":"_dprhtml/features/other-dialogs/quicklinks.html"},{"revision":"7f3af4a8c18ca81d3a26c2f43ae83b7f","url":"_dprhtml/features/search/init.js"},{"revision":"f0a7693e3472e24e904ab99781b380c6","url":"_dprhtml/features/search/main-pane.html"},{"revision":"667cdcb31c25668eed9e2f651b62c4ad","url":"_dprhtml/features/search/tab.html"},{"revision":"cd70a0d5639251550e5e7ef6a5cda207","url":"_dprhtml/features/settings-dialog/init.js"},{"revision":"c9045e3fb292228aee46b0b46bd88dc4","url":"_dprhtml/features/settings-dialog/main-pane.html"},{"revision":"6ddaab6bfece8eeaddda0ae79da9dc58","url":"_dprhtml/fonts/lanna/Hariphunchai.otf"},{"revision":"a7b6f1de127ea6c2afc228c618de9042","url":"_dprhtml/fonts/lao/LaoPaliAlpha-Light.woff"},{"revision":"4f2b38f7201c91a575941da40b74130a","url":"_dprhtml/fonts/lao/LaoPaliAlpha-Regular.woff"},{"revision":"9db1fa231d9e330dfb54dc7ecb364705","url":"_dprhtml/fonts/myanmar/mm3-multi-os(16-08-2011).ttf"},{"revision":"1bc0f26e3c17bbff56c2c4b7021dedf4","url":"_dprhtml/fonts/NotoSansBrahmi-Regular.ttf"},{"revision":"05f02226c638c9a958ba11bddb09f7e4","url":"_dprhtml/fonts/NotoSansGurmukhi-Bold.ttf"},{"revision":"6d065e7df67eeb91bbb49567a9c1985b","url":"_dprhtml/fonts/NotoSansGurmukhi-Regular.ttf"},{"revision":"9657f6c9f618701ca01f956d233cc93d","url":"_dprhtml/fonts/NotoSerif-Bold.ttf"},{"revision":"baf49f7ce0e708833551b740eef40adf","url":"_dprhtml/fonts/NotoSerif-Regular.ttf"},{"revision":"c30d372aa88dd0951fa88d884b1e727f","url":"_dprhtml/fonts/NotoSerifBengali-Bold.ttf"},{"revision":"9da6e3f71c40ed72eb18caa3cfc56987","url":"_dprhtml/fonts/NotoSerifBengali-Regular.ttf"},{"revision":"c5f529cdc91480139b7b88bce556ebda","url":"_dprhtml/fonts/NotoSerifDevanagari-Bold.ttf"},{"revision":"6df18030b1c3b6f9beac45e9efbced1d","url":"_dprhtml/fonts/NotoSerifDevanagari-Regular.ttf"},{"revision":"cf5400e66473b1e9de632ea20cbf2a71","url":"_dprhtml/fonts/NotoSerifGujarati-Bold.ttf"},{"revision":"d8d59acd2d25e9afc8c4de78fbf114ea","url":"_dprhtml/fonts/NotoSerifGujarati-Regular.ttf"},{"revision":"3dcfc6ac8883832d44320dce477e1e9b","url":"_dprhtml/fonts/NotoSerifKannada-Bold.ttf"},{"revision":"ba6ead125bc4d70d4138510b1c273e23","url":"_dprhtml/fonts/NotoSerifKannada-Regular.ttf"},{"revision":"e94b42207995451b5104eb83b26a6332","url":"_dprhtml/fonts/NotoSerifKhmer-Bold.ttf"},{"revision":"987aa6b6e896e9e3a7bfdd7253780ba9","url":"_dprhtml/fonts/NotoSerifKhmer-Regular.ttf"},{"revision":"8ac6860614ef697ff438daf8ac4b6ccf","url":"_dprhtml/fonts/NotoSerifMalayalam-Bold.ttf"},{"revision":"5852c3fee9ddfd3f284e9b5b967afefa","url":"_dprhtml/fonts/NotoSerifMalayalam-Regular.ttf"},{"revision":"d852f868debb1a97f6b909c5c0391e9e","url":"_dprhtml/fonts/NotoSerifSinhala-Bold.ttf"},{"revision":"22354b655f55cb7a6534195f4bbaec51","url":"_dprhtml/fonts/NotoSerifSinhala-Regular.ttf"},{"revision":"f52ff6549cb08de0b9c72e94a0bcd40c","url":"_dprhtml/fonts/NotoSerifTelugu-Bold.ttf"},{"revision":"1dd62b7c305407e53b203627870be1fb","url":"_dprhtml/fonts/NotoSerifTelugu-Regular.ttf"},{"revision":"bdd8eb542ab9aa84e5809edb230f07cc","url":"_dprhtml/fonts/thai/THSarabunNew-Bold.ttf"},{"revision":"45905ce12b4739c794a5ebdaee506202","url":"_dprhtml/fonts/thai/THSarabunNew.ttf"},{"revision":"5f7ac78f4a2088593d6c1edd830e1b07","url":"_dprhtml/fonts/tibetian/NotoSansTibetan-Bold.ttf"},{"revision":"9e9ee102381482b3fcf06faac5f731e5","url":"_dprhtml/fonts/tibetian/NotoSansTibetan-Regular.ttf"},{"revision":"6ce021917e2065fc596af728bad3150d","url":"_dprhtml/images/abt.gif"},{"revision":"eb5850b8361905a5f2eeea9450b34cc3","url":"_dprhtml/images/ati.ico"},{"revision":"bce58c6692f5125cedb673d9e1898903","url":"_dprhtml/images/bottomtrans.png"},{"revision":"2420a4fd99579b2f85520f3f0bacd570","url":"_dprhtml/images/corb.png"},{"revision":"a6d1ce4da156d226909db8a70e411f5e","url":"_dprhtml/images/dt.ico"},{"revision":"cbdf41c22c6eb484828a9009bac15ed1","url":"_dprhtml/images/dwheel.png"},{"revision":"e4e9c71e7764bf140726242c17fb41b9","url":"_dprhtml/images/hsizegrip.png"},{"revision":"76819f6cddc42a6e9aaf94ef792b546b","url":"_dprhtml/images/imgbk.png"},{"revision":"945d79087d8811378f756e3a8cf83027","url":"_dprhtml/images/logo.png"},{"revision":"301af766307a76b16ed61512accc9a59","url":"_dprhtml/images/logo128.png"},{"revision":"6b5ce0d238b28b41270c65e6311f9f02","url":"_dprhtml/images/logo152.png"},{"revision":"e5448c4062fc0d09bd68fbcc4b1e201c","url":"_dprhtml/images/logo192.png"},{"revision":"c1d5ffc9dbe95217f35a85e09715c51d","url":"_dprhtml/images/logo24.png"},{"revision":"5201866f751ff443b80315d34411fbe1","url":"_dprhtml/images/logo48.png"},{"revision":"39665321963bc507327cfe7517f612e2","url":"_dprhtml/images/logo512.png"},{"revision":"5d5927bfd051ca0ae4bc99079463f75e","url":"_dprhtml/images/logo64.png"},{"revision":"35cd247502cfc65bc2319e2d2a3f0b56","url":"_dprhtml/images/pencil.png"},{"revision":"6a131cd0296e2b877a1adec2e629224e","url":"_dprhtml/images/vsizegrip.png"},{"revision":"3016098ff6be6ae82c84e0cf54adfcfc","url":"_dprhtml/images/wisdom.png"},{"revision":"2cc782b1ca679ededffad469a839d463","url":"_dprhtml/index.html"},{"revision":"c5a3f31cced7aa8bdb7cffddd474dd67","url":"_dprhtml/js/analysis_arrays.js"},{"revision":"6d4334800d7270fce3155621e2aeb6dc","url":"_dprhtml/js/analysis_declension.js"},{"revision":"0150ffc171f96d79205633782993f9e4","url":"_dprhtml/js/analysis_function.js"},{"revision":"d100077b40a5f52a24294f920850c201","url":"_dprhtml/js/analysis_output.js"},{"revision":"7831b30f2729dc3cb0c261c8b3652cce","url":"_dprhtml/js/ati_list.js"},{"revision":"39765cad28ae0b4258d167ffb31d5f58","url":"_dprhtml/js/attlist.js"},{"revision":"8cbe9eba0f6a135138461f1e0f86a26e","url":"_dprhtml/js/bookmarks.js"},{"revision":"1937cf586c1497c29982050a1b5922da","url":"_dprhtml/js/bv.js"},{"revision":"517fa43c093151bd8b5d512712aa0673","url":"_dprhtml/js/chrome.js"},{"revision":"f8242cf013f66efba40e3127e09ed19b","url":"_dprhtml/js/config.js"},{"revision":"350196f3864c2e7f81df2bc92d530940","url":"_dprhtml/js/conjugate.js"},{"revision":"8e5ad677f0fdd6e6baeeab9486fbe4ce","url":"_dprhtml/js/convert.js"},{"revision":"be89a3ae810863bef83bdf34364f89e0","url":"_dprhtml/js/dhpv.js"},{"revision":"4bc64f9ff4814170a4b276554d7a9927","url":"_dprhtml/js/dict_xml.js"},{"revision":"c9de01807c90ed7f92b21e63d1bf1315","url":"_dprhtml/js/dict.js"},{"revision":"26615880f17b120653eb593b5438f891","url":"_dprhtml/js/dppn.js"},{"revision":"f5a8a2426a9c04a8f33114c63cd8f77b","url":"_dprhtml/js/dpr_pal.js"},{"revision":"4b7f9fe645a46b58a7d18fe646d961b8","url":"_dprhtml/js/dprviewmodel.js"},{"revision":"c2e1b7a43cb60cee03846fd1e7c2852e","url":"_dprhtml/js/dt_list.js"},{"revision":"bea37049d8764b81eec65aa0a3468b7d","url":"_dprhtml/js/external/ajax/libs/knockout/3.5.0/knockout-min.js"},{"revision":"855075c14fed65779e9226874c12d223","url":"_dprhtml/js/external/ajax/libs/popper.js/1.16.0/dist/umd/popper.min.js"},{"revision":"5a8d96197ccef3ea377cc9dc3adc9276","url":"_dprhtml/js/external/bootstrap/4.4.1/css/bootstrap-grid.css"},{"revision":"925b3e197524e3be06b0bea0fdba7522","url":"_dprhtml/js/external/bootstrap/4.4.1/css/bootstrap-grid.min.css"},{"revision":"36e946d783a00414717590bdaa365178","url":"_dprhtml/js/external/bootstrap/4.4.1/css/bootstrap-reboot.css"},{"revision":"733a7ba087751db42a147f23c5c643a5","url":"_dprhtml/js/external/bootstrap/4.4.1/css/bootstrap-reboot.min.css"},{"revision":"7b28bc04c3352a66ffc90c60f79e09ad","url":"_dprhtml/js/external/bootstrap/4.4.1/css/bootstrap.css"},{"revision":"cc1382088863aa74eda6e6c8820df514","url":"_dprhtml/js/external/bootstrap/4.4.1/css/bootstrap.min.css"},{"revision":"34c67892d15d30ddcce3c9994c515b3c","url":"_dprhtml/js/external/bootstrap/4.4.1/js/bootstrap.js"},{"revision":"7451e07cd6077783b728c0c924da6629","url":"_dprhtml/js/external/bootstrap/4.4.1/js/bootstrap.min.js"},{"revision":"4bb3dd721c4652feee0953261d329710","url":"_dprhtml/js/external/font-awesome/4.7.0/css/font-awesome.css"},{"revision":"a0e784c4ca94c271b0338dfb02055be6","url":"_dprhtml/js/external/font-awesome/4.7.0/css/font-awesome.min.css"},{"revision":"674f50d287a8c48dc19ba404d20fe713","url":"_dprhtml/js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.eot"},{"revision":"acf3dcb7ff752b5296ca23ba2c7c2606","url":"_dprhtml/js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"_dprhtml/js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"_dprhtml/js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"_dprhtml/js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2"},{"revision":"0d2717cd5d853e5c765ca032dfd41a4d","url":"_dprhtml/js/external/font-awesome/4.7.0/fonts/FontAwesome.otf"},{"revision":"a6b6350ee94a3ea74595c065cbf58af0","url":"_dprhtml/js/external/jquery-3.4.1.min.js"},{"revision":"b7ef3d28aaf7e2aeb467b63e212927ec","url":"_dprhtml/js/external/jquery-resizable.js"},{"revision":"e65fb172373d8aab2377f84b0ef2f824","url":"_dprhtml/js/external/nanobar-0.4.2.min.js"},{"revision":"f7f3db985f2156264ef5842993e3fcf3","url":"_dprhtml/js/format.js"},{"revision":"ac6d9274666cb3c213d5590a94aaca61","url":"_dprhtml/js/globalObject.js"},{"revision":"73a53e8d41eb3b28ab3875c5096feea9","url":"_dprhtml/js/grammar.js"},{"revision":"0578ffca348f51d5502a4729be2bb0cf","url":"_dprhtml/js/history.js"},{"revision":"5326b6a81e5236786628604632086715","url":"_dprhtml/js/index.js"},{"revision":"471f1a255473252bd130d32721e8eaa6","url":"_dprhtml/js/inflect.js"},{"revision":"fdaccc8d43e11e99882466e7d38dd5a4","url":"_dprhtml/js/irreg.js"},{"revision":"cc5df93d0dc64ffdc83f146a882f760b","url":"_dprhtml/js/keyboard_shortcuts.js"},{"revision":"95f0e06dddab38b649afc2c127c58b70","url":"_dprhtml/js/listam.js"},{"revision":"128b58018ed1a06c73600e4d901e1b6d","url":"_dprhtml/js/listsm.js"},{"revision":"80e50396984385b76c8692f7caba4898","url":"_dprhtml/js/move.js"},{"revision":"1bef75de5496f08b50634d46345397ec","url":"_dprhtml/js/nameno.js"},{"revision":"05f02661b6787206e1492813ad40746e","url":"_dprhtml/js/navigation_common.js"},{"revision":"4effd42263d2a8a91ae8cb90ec986e30","url":"_dprhtml/js/navigation.js"},{"revision":"c6dc98c3e7ba0b5943c6bf33752b8879","url":"_dprhtml/js/ped.js"},{"revision":"3cf8896af9a29bc5dbffa4c992fdad43","url":"_dprhtml/js/prefload.js"},{"revision":"61432d41e0998045c288656681611074","url":"_dprhtml/js/receive.js"},{"revision":"c778b037c449db3b7b37e4ccad2e9f5b","url":"_dprhtml/js/relatt.js"},{"revision":"9aa95f8c733defcbd2a4810d44488da7","url":"_dprhtml/js/relmul.js"},{"revision":"b5f4a26de3a4e39ececd6cf69941bd25","url":"_dprhtml/js/reltik.js"},{"revision":"3eaf30513d9ee6f15696b208685dab2a","url":"_dprhtml/js/roots_link.js"},{"revision":"2bcae4aa114e437568a91289897806aa","url":"_dprhtml/js/roots.js"},{"revision":"edbad4ceece2ccddb81c119d1b5372e5","url":"_dprhtml/js/search_history.js"},{"revision":"29c3d249895d0c86ac3da02b03231ac0","url":"_dprhtml/js/search.js"},{"revision":"5ab787ec52bcc0f6f2b95fd96104c5db","url":"_dprhtml/js/send_bottom.js"},{"revision":"32cb1cb2cbfe63e69fa74dcf99c4f271","url":"_dprhtml/js/send.js"},{"revision":"3002962d4930be7a72d8b014011d85f7","url":"_dprhtml/js/sortaz.js"},{"revision":"d1b60e834e77c0aded2e1e2d3581fe1a","url":"_dprhtml/js/swipe_gestures.js"},{"revision":"d16f22952fb444e515a816f010dd15b4","url":"_dprhtml/js/tiklist.js"},{"revision":"e9ee03eca4d8921af122fd91341052d5","url":"_dprhtml/js/titles.js"},{"revision":"1643f01b2ad77b6075e91badf2bf3671","url":"_dprhtml/js/translate.js"},{"revision":"cd8e30e134f2cc7635b61cd280985dd2","url":"_dprhtml/js/translations.js"},{"revision":"32ba4720091120c0b2fd7753f9f92c87","url":"_dprhtml/js/translit.js"},{"revision":"d8fe055a6357ca46e5723fa1ca456c7c","url":"_dprhtml/js/translitCore.js"},{"revision":"eab8f53782df896c815c45f2e3c30750","url":"_dprhtml/js/web/chrome_sidebar.js"},{"revision":"d9861a9c6afc893ba2170f2524662de5","url":"_dprhtml/js/web/io.js"},{"revision":"02253e6bb88ad9e24d64acaad40d245c","url":"_dprhtml/js/web/navigation_sidebar.js"},{"revision":"03b88e1d611662fb65f44ca05bdf519e","url":"_dprhtml/js/web/opts_sidebar.js"},{"revision":"d9cb2b36c0af2a3cf77e064028a7e8fc","url":"_dprhtml/js/web/search.js"},{"revision":"88b98c41aca6cf05d695d2d90caef3c7","url":"_dprhtml/js/web/send_sidebar.js"},{"revision":"49223f4696a440736c2fc1a904e3b29d","url":"_dprhtml/js/web/xml_sidebar.js"},{"revision":"7b08d86b00d1448ae771b443e4664fdc","url":"_dprhtml/js/xml_load.js"},{"revision":"29a7a54a84cc8c75749934c77714eb6a","url":"_dprhtml/js/xml.js"},{"revision":"9eb0342ea3f3c75ade52439b8449fdd0","url":"_dprhtml/sw.js"},{"revision":"b7cfae838bd73b777a51345989756cb8","url":"docs/pali/cheat.htm"},{"revision":"421c8cce7c08ae5422a4d3ce49789432","url":"docs/pali/compound.htm"},{"revision":"349978e5cb5c70086d142c31b70e6c83","url":"docs/pali/cped-abbv.htm"},{"revision":"ab1623e7698d34676f195a93adae8df9","url":"docs/pali/GMD/all.htm"},{"revision":"3a14622d2c672b29f6cf2b12f9ccafb0","url":"docs/pali/GMD/index.htm"},{"revision":"f09bc8b5ca7d6b3e6f2394fd69b1c025","url":"docs/pali/GMD/index.html"},{"revision":"f60eb7375a0d062b72acc3fdc17eafc4","url":"docs/pali/GMD/indext.html"},{"revision":"25b06f40e6ec166890bac01cd97e63a4","url":"docs/pali/GMD/mark0.gif"},{"revision":"dc824d9e9914579e61ecd4cba5ab96df","url":"docs/pali/GMD/mark1.gif"},{"revision":"1b244dc0e75aba8065cfe417b42f77ad","url":"docs/pali/ped-abbv.htm"},{"revision":"484a1f49931468a07aaf675c44ce8284","url":"index-unsupported.html"},{"revision":"61d69716d5afea76d66a6ad83bdcbb0f","url":"index-upgrade.html"},{"revision":"5b639305b5cd4c35cac17c698f548130","url":"index.html"},{"revision":"9296cde5f4035498c380ab32b74bf357","url":"manifest.webmanifest"},{"revision":"e0fab7276982190ed2c423c16ec9e3d7","url":"favicon.png"}],
  {
    ignoreURLParametersMatching: [/.*/],
  }
);

DPRComponentRegistry.registry.forEach(
  component => {
    workbox.routing.registerRoute(
      component.capture,
      new workbox.strategies.CacheFirst({
        cacheName: DPRComponentRegistry.getComponentCacheName(component.id),
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxAgeSeconds: 720 * 24 * 60 * 60,
            maxEntries: 10000,
          }),
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          })
        ],
      }),
    );
  }
)
