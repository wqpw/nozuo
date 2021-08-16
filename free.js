var targetNode = $('#content')[0];
var config = { attributes: true, childList: true, subtree: true };
var callback = function() {
$('.entry-title').each(function(i, el){
  if (/【VR】|奏音かのん|中尾芽衣子|中野七緒|今井夏帆|広瀬結香|永井マリア|愛瀬るか|汐河佳奈|森本つぐみ|赤瀬尚子|根尾あかり|坂元ななせ|篠崎かんな|つぼみ|中山ふみか|宝田もなみ|上原亜衣|春風ひかる|初音みのり|星あめり|佐知子|ボルボ中野|麻生千春|坂下真希|まみや羽花/.test($(el).text())) {
    $(el).parents('.hentry').css('opacity', '0.4');
  } else if (/ 楪カレン|葵つかさ|三上悠亜/.test($(el).text())) {
    $(el).find('a').css('color', 'red');
  }
})
}
var throttled = _.throttle(callback, 100);
var observer = new MutationObserver(throttled);
// 开始观察已配置突变的目标节点
observer.observe(targetNode, config);
