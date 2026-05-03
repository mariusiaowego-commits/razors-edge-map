/**
 * char-panel.js — 人物侧边栏逻辑
 * characters数据内联，不依赖运行时fetch
 */

var CharPanel = (function() {
  'use strict';

  var _characters = {"larry": {"bio": "Lawrence 'Larry' Darrell is a young American pilot who served in the RAF during World War I. After surviving the war, he returns home to America but feels alienated from conventional society. He rejects his affluent future — his engagement to Isabel and a promising career in business — to pursue spiritual truth. Larry lives simply in Paris, reading philosophy obsessively, then embarks on an Eastern pilgrimage that takes him through the Mediterranean, across India, and eventually to enlightenment.", "arc": "Larry begins as a restless, grief-stricken young man searching for meaning after the war's trauma. In Paris, he withdraws from normal life and immerses himself in philosophy, seeking answers that books cannot provide. His journey East (Athens, Jerusalem, Cairo, India) transforms him from intellectual questioning to direct spiritual practice. After years of study and meditation, he achieves enlightenment at Suez — returning to America as a changed man who can now live fully in the world while remaining spiritually free.", "motivation": "Larry seeks an absolute answer to 'the why of things' — a direct, personal experience of the divine that will resolve his existential anguish and give his life transcendent meaning.", "quotes": [{"text": "I want to find out what the monks are trying to find out. I want to get rid of the barrier between myself and God.", "chapter": "Part Two, Chapter 14"}, {"text": "I've been reading about the great philosophers of the East and I want to go to India and sit at the feet of the great masters there.", "chapter": "Part One, Chapter 5"}, {"text": "I think the important thing is not to find any formulas, but to discover the quality of spirit that enables a man to get in touch with the divine.", "chapter": "Part Four, Chapter 17"}]}, "isabel": {"bio": "Isabel Porter is Larry's initial fiancée and the novel's representative of conventional values. She is beautiful, intelligent, and deeply attached to material comfort and social status. Born into modest circumstances but determined to climb the social ladder, she chooses security over love when she breaks her engagement to Larry. She marries the wealthy Gray Templeton and raises two daughters, living what appears to be a successful, enviable life — yet she remains haunted by her choice.", "arc": "Isabel evolves from a young woman genuinely in love with Larry into someone who progressively values money and status more than spiritual ideals. Her decision to marry Gray is portrayed sympathetically — she is not evil, just human. By the novel's end, she has everything she thought she wanted but acknowledges a persistent emptiness. Her final conversation with Larry reveals her lingering feelings and the life she might have had.", "motivation": "Isabel wants security, social advancement, and conventional happiness — she believes these can be achieved through wealth and status rather than spiritual seeking.", "quotes": [{"text": "I wasn't Influence. I was just a friend. I love you, Larry, and I want you to be happy. But don't you think you're rather shirking your responsibilities?", "chapter": "Part One, Chapter 2"}, {"text": "I don't want to seem hard-hearted, but after all, one has to be practical. You can't expect a girl to wait around forever.", "chapter": "Part One, Chapter 3"}]}, "bradshaw": {"bio": "Mrs. Louisa (Lool) Bradshaw is a middle-aged American widow and devout Quaker who met Larry in Paris through mutual acquaintances. She is warm, spiritual, and genuinely pious — her faith informs her entire worldview. After her husband's death, she travels the world and eventually settles in India, where she becomes associated with Mahatma Gandhi. It is she who tells Larry about the great sages of the Himalayas and plants the seed for his journey to India.", "arc": "Mrs. Bradshaw functions as Larry's spiritual messenger — she does not teach him directly but redirects his quest toward Eastern wisdom. She appears briefly in Paris, then more importantly in Athens where she gives Larry the crucial information about Indian spiritual masters. Her role is catalytic: she sets Larry on his path but does not accompany him.", "motivation": "Mrs. Bradshaw seeks to serve God through service to humanity — she is motivated by faith, compassion, and a desire to help others on their spiritual journey.", "quotes": [{"text": "There are two great streams of spiritual knowledge in the world: the stream of the West and the stream of the East. You have drunk of the stream of the West. But the East has other waters to offer.", "chapter": "Part One, Chapter 7"}, {"text": "There is in India a man of extraordinary spiritual power. He is a sage of the Himalayas. I have heard people speak of him with awe.", "chapter": "Part One, Chapter 7"}]}, "sophie": {"bio": "Sophie Macdonald is Larry's old friend from Chicago — a plain, intellectual girl he once courted lightly before the war. After marrying a young lawyer and having a child, her family is killed in a horrific car accident. Overwhelmed by grief, she descends into alcoholism and sexual promiscuity, drifting through Europe as a broken shadow of herself. When she encounters Larry and Isabel in Paris years later, she is a cautionary figure — proof of what happens when grief destroys a human being.", "arc": "Sophie begins as a hopeful young woman, then suffers the novel's most devastating tragedy. Her descent is rapid and total — she becomes an alcoholic floating through European capitals. Her brief reunion with Larry and Isabel in Paris is poignant; Larry pities her while Isabel fears her. Sophie eventually books passage on a ship and disappears mysteriously at sea, presumably choosing death over continued existence.", "motivation": "Sophie is driven by grief so overwhelming that she cannot function normally — her drinking and sexual behavior are forms of self-destruction, a search for obliteration rather than pleasure.", "quotes": [{"text": "You don't know what it's like to lose everything. I had a husband and a child and I loved them more than anything in the world. And now they're gone.", "chapter": "Part One, Chapter 4"}, {"text": "I'm not fit for decent society. I'm sloppy and dirty and I drink too much. Why should you bother with me?", "chapter": "Part One, Chapter 4"}]}, "landor": {"bio": "Walter Savage Landor (1775–1864) was a renowned English poet and writer, best known for his philosophical dialogues and classical verse. Though not a character in Maugham's novel, his poem 'Dying Speech of an Old Philosopher' serves as the epigraph for Chapter 5 of The Razor's Edge. The poem captures the novel's central theme — Landor's lines about 'I have drunk and seen the spider' and being 'cumbered with the joy of a great rest' resonate with Larry's spiritual journey toward enlightenment and liberation from earthly attachments.", "arc": "Landor does not appear as a character in the narrative — his poem functions as an epigraph that frames Larry's story. The poem is quoted at the beginning of Chapter 5, which depicts Larry's deepening commitment to his spiritual path after leaving Paris. The epigraph suggests that enlightenment involves seeing through illusion ('the spider') and finding ultimate peace ('a great rest').", "motivation": "Landor as quoted represents the aspiration toward philosophical wisdom and spiritual transcendence — his 'dying speech' is not about death but about liberation from the anxieties of worldly life.", "quotes": [{"text": "I have drunk and seen the spider. Though God's珊瑚 to mine eyes, I have had my day. I will be glad to be Cumbered with the joy of a great rest.", "chapter": "Chapter 5, Epigraph"}]}};

  function getCharacter(id) { return _characters[id] || null; }
  function getAllCharacters() { return _characters; }

  function buildPanelHtml() {
    var html = '';
    Object.keys(_characters).forEach(function(key) {
      html += buildCharItemHtml(key, _characters[key]);
    });
    return html;
  }

  function buildCharItemHtml(key, c) {
    var locationLabel = '';
    if (c.locations && c.locations.length === 1) {
      var wp = MapData.getWaypoint(c.locations[0]);
      locationLabel = wp ? wp.city + ' · ' + wp.zh : '';
    } else if (c.locations && c.locations.length > 1) {
      locationLabel = c.locations.map(function(id) {
        var wp = MapData.getWaypoint(id);
        return wp ? wp.city + ' · ' + wp.zh : '';
      }).join(' → ');
    } else {
      locationLabel = key === 'sophie' ? 'Lost at Sea · 航海失踪' :
                      key === 'landor' ? '英国' : '';
    }

    var hasDetail = !!(c.bio || c.arc || c.motivation || (c.quotes && c.quotes.length));

    var html = '<div class="char-item"' + (locationLabel ? ' onclick="CharPanel.toggle(\'' + key + '\')"' : '') + '>';
    html += '<div class="c-name">' + c.name + '</div>';
    html += '<div class="c-zh">' + c.zh + '</div>';
    html += '<div class="c-desc">' + c.desc + '</div>';
    if (locationLabel) {
      var isSophie = key === 'sophie';
      html += '<div class="c-city">&#9679; <span' + (isSophie ? ' style="color:#c46a6a;"' : '') + '>' + locationLabel + '</span></div>';
    }

    html += '<div class="char-detail" id="char-detail-' + key + '" style="display:none;">';
    if (hasDetail) {
      if (c.bio) html += '<div class="char-bio"><strong>人物小传：</strong>' + c.bio + '</div>';
      if (c.arc) html += '<div class="char-arc"><strong>人物弧线：</strong>' + c.arc + '</div>';
      if (c.motivation) html += '<div class="char-motivation"><strong>核心动机：</strong>' + c.motivation + '</div>';
      if (c.quotes && c.quotes.length) {
        html += '<div class="char-quotes"><strong>关键引语：</strong>';
        c.quotes.forEach(function(q) {
          html += '<blockquote>&#8220;' + q.text + '&#8221;<br><span style="color:#5a6a7a;font-size:9px;">— ' + (q.chapter || '') + '</span></blockquote>';
        });
        html += '</div>';
      }
    } else {
      html += '<div class="popup-empty">人物档案待填充</div>';
    }
    html += '</div></div>';
    return html;
  }

  function toggle(key) {
    var c = _characters[key];
    if (c && c.locations && c.locations.length > 0) {
      var id = c.locations[0];
      var wp = MapData.getWaypoint(id);
      if (wp && window.map) {
        window.map.flyTo([wp.lat, wp.lng], 8, { duration: 1.4 });
        setTimeout(function() {
          window.map.eachLayer(function(layer) {
            if (layer instanceof L.CircleMarker) {
              var ll = layer.getLatLng();
              if (Math.abs(ll.lat - wp.lat) < 0.01 && Math.abs(ll.lng - wp.lng) < 0.01) layer.openPopup();
            }
          });
        }, 1500);
      }
    } else if (key === 'sophie' && window.map) {
      var sc = MapData.getSophieCoords();
      window.map.flyTo([sc.lat, sc.lng], 6, { duration: 1.4 });
      setTimeout(function() {
        window.map.eachLayer(function(layer) {
          if (layer instanceof L.Marker) {
            var ll = layer.getLatLng();
            if (Math.abs(ll.lat - sc.lat) < 1 && Math.abs(ll.lng - sc.lng) < 1) layer.openPopup();
          }
        });
      }, 1500);
    }
    var detail = document.getElementById('char-detail-' + key);
    if (detail) {
      detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
    }
  }

  return {
    loadCharacters: function() { return Promise.resolve(); },
    getCharacter: getCharacter,
    getAllCharacters: getAllCharacters,
    buildPanelHtml: buildPanelHtml,
    toggle: toggle,
  };
})();
