importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.precaching.precacheAndRoute(
  [{"revision":"1f6d6c8301513699479ada7d94fb2749","url":"build.sh"},{"revision":"ee4054a2a4ec6742c84ef446f72db289","url":"css/index-core.css"},{"revision":"c1852febee08909766f730c0939029b3","url":"css/index-override.css"},{"revision":"1a00a15e0a31d3483cf44999b2ea523a","url":"css/index.css"},{"revision":"03c154565abf30755803baee3fff3dd4","url":"css/styles.css"},{"revision":"b0ca91188f22d4ec49a964728182a4a5","url":"etc/dbv.xml"},{"revision":"e0fab7276982190ed2c423c16ec9e3d7","url":"favicon.png"},{"revision":"845a11ff13d8f01261dfed37cd961e45","url":"features/bottom-pane/init.js"},{"revision":"5a04e255cbf4defc0f6503a2602f45f6","url":"features/bottom-pane/main-pane.html"},{"revision":"dd5b96bc3c3ed31a0aa8058fa20487e8","url":"features/dictionary/init.js"},{"revision":"ebdbb87f3c1cdc111d78044dc495ad7c","url":"features/dictionary/main-pane.html"},{"revision":"66cdd9e06d3279146b4ac32b5d96aacb","url":"features/dictionary/tab.html"},{"revision":"7acc14222c03c7edb58a256a00a6436a","url":"features/landing-page/main-pane.html"},{"revision":"e66aa87166032a624057017ce572352e","url":"features/navigation/init.js"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"features/navigation/main-pane.html"},{"revision":"8234439f8b2b963a28469800c96e77bd","url":"features/navigation/tab.html"},{"revision":"c883c808303d518838264f6c557c9946","url":"features/other-dialogs/bookmarks.html"},{"revision":"16cdcea595671cf9523f1645d6623467","url":"features/other-dialogs/init.js"},{"revision":"64e5eb31ed0d8dbcfebd2daf40559393","url":"features/other-dialogs/paliquote.html"},{"revision":"77de2f03c43561d232b9c18ba779ece6","url":"features/other-dialogs/quicklinks.html"},{"revision":"7d2a337f548d31730e5649939c963bc5","url":"features/search/init.js"},{"revision":"0dbd474646a4eb279634987d26c5be10","url":"features/search/main-pane.html"},{"revision":"52750ccd3c012eb8623988b5db5bdb3f","url":"features/search/tab.html"},{"revision":"45d36c8e7fb0189a7728db7b230c99cd","url":"features/settings-dialog/init.js"},{"revision":"64c78138bc8533fd61e3c9b7e971745b","url":"features/settings-dialog/main-pane.html"},{"revision":"6ce021917e2065fc596af728bad3150d","url":"images/abt.gif"},{"revision":"eb5850b8361905a5f2eeea9450b34cc3","url":"images/ati.ico"},{"revision":"bce58c6692f5125cedb673d9e1898903","url":"images/bottomtrans.png"},{"revision":"2420a4fd99579b2f85520f3f0bacd570","url":"images/corb.png"},{"revision":"cbdf41c22c6eb484828a9009bac15ed1","url":"images/dwheel.png"},{"revision":"e4e9c71e7764bf140726242c17fb41b9","url":"images/hsizegrip.png"},{"revision":"76819f6cddc42a6e9aaf94ef792b546b","url":"images/imgbk.png"},{"revision":"945d79087d8811378f756e3a8cf83027","url":"images/logo.png"},{"revision":"301af766307a76b16ed61512accc9a59","url":"images/logo128.png"},{"revision":"c1d5ffc9dbe95217f35a85e09715c51d","url":"images/logo24.png"},{"revision":"5201866f751ff443b80315d34411fbe1","url":"images/logo48.png"},{"revision":"5d5927bfd051ca0ae4bc99079463f75e","url":"images/logo64.png"},{"revision":"35cd247502cfc65bc2319e2d2a3f0b56","url":"images/pencil.png"},{"revision":"6a131cd0296e2b877a1adec2e629224e","url":"images/vsizegrip.png"},{"revision":"3016098ff6be6ae82c84e0cf54adfcfc","url":"images/wisdom.png"},{"revision":"7480743c4d80d19a0b4879cee214f650","url":"index.html"},{"revision":"c5a3f31cced7aa8bdb7cffddd474dd67","url":"js/analysis_arrays.js"},{"revision":"ac4edcff461a63a22f68685b42fe8dd7","url":"js/analysis_declension.js"},{"revision":"45ca97fdbb51d9b0e34dc5ca7f4dd4e8","url":"js/analysis_function.js"},{"revision":"e6e9dd221983c8ee316052b603bf1c9e","url":"js/analysis_output.js"},{"revision":"f2b07b6f06f95e019480814b8b0ef07e","url":"js/ati_list.js"},{"revision":"39765cad28ae0b4258d167ffb31d5f58","url":"js/attlist.js"},{"revision":"8e6896cd97ae4512ab9aaadf48b2fa7b","url":"js/bv.js"},{"revision":"e45e1eefc0457c1604490ceba13e4148","url":"js/chrome.js"},{"revision":"7dc83486c093f4d54f08739ec6cda8d0","url":"js/config.js"},{"revision":"29dfb7cd99a4ef34ba324c6d1fa1eace","url":"js/conjugate.js"},{"revision":"7ac6baf14c0bb770ada8cfb31f19d68c","url":"js/convert.js"},{"revision":"be89a3ae810863bef83bdf34364f89e0","url":"js/dhpv.js"},{"revision":"63ef9691b0b9c4078a9f4afdaa9f0ef9","url":"js/dict_xml.js"},{"revision":"045b8a6496607be7fb19705ee57c7027","url":"js/dict.js"},{"revision":"b9ba58c08cbd9d7b907c708b92e4d746","url":"js/dppn.js"},{"revision":"6d9d610547668920981d4f725ba3901e","url":"js/dpr_pal.js"},{"revision":"f7258d5079567f1998a416f39e595922","url":"js/dprviewmodel.js"},{"revision":"bea37049d8764b81eec65aa0a3468b7d","url":"js/external/ajax/libs/knockout/3.5.0/knockout-min.js"},{"revision":"b1dbc64f8b1dfe0c089dd55b09bbbc72","url":"js/external/ajax/libs/popper.js/1.12.9/umd/popper.min.js"},{"revision":"855075c14fed65779e9226874c12d223","url":"js/external/ajax/libs/popper.js/1.16.0/dist/umd/popper.min.js"},{"revision":"5a8d96197ccef3ea377cc9dc3adc9276","url":"js/external/bootstrap/4.4.1/css/bootstrap-grid.css"},{"revision":"468fca75a599b11428e1b9a1822b32ed","url":"js/external/bootstrap/4.4.1/css/bootstrap-grid.css.map"},{"revision":"925b3e197524e3be06b0bea0fdba7522","url":"js/external/bootstrap/4.4.1/css/bootstrap-grid.min.css"},{"revision":"57e1ce0c5850ca3853c510d391f9bf87","url":"js/external/bootstrap/4.4.1/css/bootstrap-grid.min.css.map"},{"revision":"36e946d783a00414717590bdaa365178","url":"js/external/bootstrap/4.4.1/css/bootstrap-reboot.css"},{"revision":"602658511f996d88c06fb94c9e779451","url":"js/external/bootstrap/4.4.1/css/bootstrap-reboot.css.map"},{"revision":"733a7ba087751db42a147f23c5c643a5","url":"js/external/bootstrap/4.4.1/css/bootstrap-reboot.min.css"},{"revision":"88a457cfbc957bf226a5a1a550d6e68d","url":"js/external/bootstrap/4.4.1/css/bootstrap-reboot.min.css.map"},{"revision":"7b28bc04c3352a66ffc90c60f79e09ad","url":"js/external/bootstrap/4.4.1/css/bootstrap.css"},{"revision":"4563f76d1380c4115067b7a0af081679","url":"js/external/bootstrap/4.4.1/css/bootstrap.css.map"},{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"js/external/bootstrap/4.4.1/css/bootstrap.min.css"},{"revision":"2e863a645ac3bf565ae480c5b8b97fe7","url":"js/external/bootstrap/4.4.1/css/bootstrap.min.css.map"},{"revision":"f48ce11cbbedc33fce49334ff7529365","url":"js/external/bootstrap/4.4.1/js/bootstrap.bundle.js"},{"revision":"f71cf6369adc52138c90ac0702165b57","url":"js/external/bootstrap/4.4.1/js/bootstrap.bundle.js.map"},{"revision":"1ac3d5fcba485b4672c4a59957794939","url":"js/external/bootstrap/4.4.1/js/bootstrap.bundle.min.js"},{"revision":"4e47e3045b5cbd5b71ed6810e297a4ed","url":"js/external/bootstrap/4.4.1/js/bootstrap.bundle.min.js.map"},{"revision":"34c67892d15d30ddcce3c9994c515b3c","url":"js/external/bootstrap/4.4.1/js/bootstrap.js"},{"revision":"a73716a975665ff6e2b81f895f7eab2c","url":"js/external/bootstrap/4.4.1/js/bootstrap.js.map"},{"revision":"7451e07cd6077783b728c0c924da6629","url":"js/external/bootstrap/4.4.1/js/bootstrap.min.js"},{"revision":"e7faa89b97bef24e1db09c1894b638d1","url":"js/external/bootstrap/4.4.1/js/bootstrap.min.js.map"},{"revision":"4bb3dd721c4652feee0953261d329710","url":"js/external/font-awesome/4.7.0/css/font-awesome.css"},{"revision":"a0e784c4ca94c271b0338dfb02055be6","url":"js/external/font-awesome/4.7.0/css/font-awesome.min.css"},{"revision":"674f50d287a8c48dc19ba404d20fe713","url":"js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.eot"},{"revision":"acf3dcb7ff752b5296ca23ba2c7c2606","url":"js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"js/external/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2"},{"revision":"0d2717cd5d853e5c765ca032dfd41a4d","url":"js/external/font-awesome/4.7.0/fonts/FontAwesome.otf"},{"revision":"473957cfb255a781b42cb2af51d54a3b","url":"js/external/jquery-3.2.1.min.js"},{"revision":"a6b6350ee94a3ea74595c065cbf58af0","url":"js/external/jquery-3.4.1.min.js"},{"revision":"b7ef3d28aaf7e2aeb467b63e212927ec","url":"js/external/jquery-resizable.js"},{"revision":"e65fb172373d8aab2377f84b0ef2f824","url":"js/external/nanobar-0.4.2.min.js"},{"revision":"7ea717799ef7fa610f53ea03784ff68e","url":"js/external/ui/1.12.1/jquery-ui.min.js"},{"revision":"2c077850d2a53b5cc41a4b2a5ed23e95","url":"js/external/ui/1.12.1/themes/base/jquery-ui.css"},{"revision":"187ec0de9159f61da1002b93e6edd15c","url":"js/format.js"},{"revision":"bb4e93e81b01d6b0f7acb5848e3be99d","url":"js/globalObject.js"},{"revision":"ba289560addb53a1d98dd9958d16c649","url":"js/grammar.js"},{"revision":"ac02a0e023df72eed279c3a0ac152c09","url":"js/history.js"},{"revision":"45baec1922889e860b51c7db7ef11e49","url":"js/index.js"},{"revision":"471f1a255473252bd130d32721e8eaa6","url":"js/inflect.js"},{"revision":"fdaccc8d43e11e99882466e7d38dd5a4","url":"js/irreg.js"},{"revision":"cc5df93d0dc64ffdc83f146a882f760b","url":"js/keyboard_shortcuts.js"},{"revision":"72d8f8bc45c825d4c94f58c1dd269529","url":"js/listam.js"},{"revision":"128b58018ed1a06c73600e4d901e1b6d","url":"js/listsm.js"},{"revision":"5101e927630fbd96e91da43eef62e74c","url":"js/move.js"},{"revision":"1bef75de5496f08b50634d46345397ec","url":"js/nameno.js"},{"revision":"512c2b693b9bf86d68b1e50e97a98776","url":"js/navigation_common.js"},{"revision":"1cbd98cc7c49f965158d3cadf8c4789a","url":"js/navigation.js"},{"revision":"c6dc98c3e7ba0b5943c6bf33752b8879","url":"js/ped.js"},{"revision":"20640f6f6b740edd98993b65c2883c3d","url":"js/prefload.js"},{"revision":"79b04438e4a6c9c848d318605b11ba46","url":"js/receive.js"},{"revision":"c778b037c449db3b7b37e4ccad2e9f5b","url":"js/relatt.js"},{"revision":"9aa95f8c733defcbd2a4810d44488da7","url":"js/relmul.js"},{"revision":"b5f4a26de3a4e39ececd6cf69941bd25","url":"js/reltik.js"},{"revision":"3eaf30513d9ee6f15696b208685dab2a","url":"js/roots_link.js"},{"revision":"2bcae4aa114e437568a91289897806aa","url":"js/roots.js"},{"revision":"51c290451b30673d5d8efe4486b6f206","url":"js/search_history.js"},{"revision":"9a33d2271dfde212c8fa69eda21700ad","url":"js/search.js"},{"revision":"513986d14db23d5ac71dd3bfd1b8f817","url":"js/send_bottom.js"},{"revision":"1b067d31b5459b75a847d52ad7d926c1","url":"js/send.js"},{"revision":"6444657a5a26db8778f99107ab039195","url":"js/sortaz.js"},{"revision":"d16f22952fb444e515a816f010dd15b4","url":"js/tiklist.js"},{"revision":"e9ee03eca4d8921af122fd91341052d5","url":"js/titles.js"},{"revision":"93f5deef759a0068318527a8156f7120","url":"js/translate.js"},{"revision":"014b9d262804d5c0dd3e90757e29cca9","url":"js/translations.js"},{"revision":"6cd5e853d0e7c2b815c367972135ad1a","url":"js/translit.js"},{"revision":"24fb48bef40512472451bf9b3746d9b7","url":"js/web/chrome_sidebar.js"},{"revision":"c160aa65aa959a40acb499c2db66579e","url":"js/web/io.js"},{"revision":"4f9fafbf5f9ba699136bcf43c20fbe98","url":"js/web/navigation_sidebar.js"},{"revision":"0553a93a7a6b64d38a2bc21fab3cf127","url":"js/web/opts_sidebar.js"},{"revision":"cb1d999c932a68e51c9958ba692c8942","url":"js/web/search.js"},{"revision":"edc8e229844ae2a9ace40ca0368c4498","url":"js/web/send_sidebar.js"},{"revision":"a8bf37466ac074de45cbdad6a0f9acc7","url":"js/web/sidebar.js"},{"revision":"63121826e6f826b812ed2bc5f1f7f1e2","url":"js/web/xml_sidebar.js"},{"revision":"1315d995abd2594e6a8b4a2129f4dbab","url":"js/xml_load.js"},{"revision":"780eb96df8be4831df1f42e18fc80f9a","url":"js/xml.js"}],
  {
    ignoreURLParametersMatching: [/.*/],
  }
);

// This is a line and is important.
