function scraping_qiita_trend() {
  let url = "https://qiita.com/";
  // フェッチ実行
  let response = UrlFetchApp.fetch(url);
  let html = response.getContentText();
  let parser_html = Parser.data(html);

 // Parserライブラリ発動*from~toでスクリプトの抽出範囲を指定する
  let url_list = parser_html.from('<h2 class="css-1t4fpk1">').to('</h2>').iterate();
 // ランキングを書き出し
  for (let i = 0; i < url_list.length; i++) {
    let parser_url_info = Parser.data(url_list[i]);
    let url = parser_url_info.from('<a href="').to('"').build();
    let title = parser_url_info.from('<a href="'+url+'" class="css-2p454n" >').to('</a>').build();

    console.log('Title:'+title+'\n'+'URL:'+url);
  }
}
