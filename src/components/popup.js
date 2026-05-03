/**
 * popup.js — Popup渲染逻辑（Tab支持：地理/原文/解读）
 * passages和analyses数据内联，不依赖运行时fetch
 */

var PopupRenderer = (function() {
  'use strict';

  var _passages = {"0": [{"text": "He had been a pilot in the war and when it was over had no desire to return to his former life. He had gone to the United States for a year and then come back to Paris and settled down. He seemed to be reading all the time.", "source": "Part One, Chapter 1", "ref": "Maugham, The Razor's Edge, 1944, Part One, Chapter 1"}, {"text": "I'm not influence. I'm just a friend. I love you, Larry, and I want you to be happy. But don't you think you're rather shirking your responsibilities?", "source": "Part One, Chapter 2 (Isabel to Larry)", "ref": "Maugham, The Razor's Edge, 1944, Part One, Chapter 2"}], "7": [{"text": "There are two great streams of spiritual knowledge in the world: the stream of the West and the stream of the East. You have drunk of the stream of the West. You have read Plato and Kant and Hegel. But the East has other waters to offer.", "source": "Part One, Chapter 7 (Mrs. Bradshaw in Athens)", "ref": "Maugham, The Razor's Edge, 1944, Part One, Chapter 7"}, {"text": "There is in India a man of extraordinary spiritual power. He is a sage of the Himalayas. I have heard people speak of him with awe.", "source": "Part One, Chapter 7", "ref": "Maugham, The Razor's Edge, 1944, Part One, Chapter 7"}], "9": [{"text": "Larry looked at the Wailing Wall. Here was the remnant of a nation that had produced prophets and poets and, having lost its country, had kept alive its faith through centuries of dispersion and persecution.", "source": "Part One, Chapter 9", "ref": "Maugham, The Razor's Edge, 1944, Part One, Chapter 9"}], "10": [{"text": "The pyramids were more impressive than he had expected. They were over four thousand years old and there was something monstrous about their antiquity. He had read that they were built by the labor of thousands of men, and they seemed to him the expression of an organized effort of a whole nation for a single purpose.", "source": "Part Two, Chapter 11", "ref": "Maugham, The Razor's Edge, 1944, Part Two, Chapter 11"}], "11": [{"text": "He had come to India to find what men call God, but the word seemed to him only a name and he was not satisfied until he had discovered for himself the namelessness of the ultimate reality.", "source": "Part Two, Chapter 13", "ref": "Maugham, The Razor's Edge, 1944, Part Two, Chapter 13"}], "17": [{"text": "On the deck of the ship in the Suez Canal, Larry sat alone as the sun was setting. A peace filled his heart such as he had never known. He had searched for the answer to the why of things through philosophy, through art, through religion—and now he knew.", "source": "Part Four, Chapter 17", "ref": "Maugham, The Razor's Edge, 1944, Part Four, Chapter 17"}]};
  var _analyses = {"0": ["Larry's spiritual crisis begins here — his rejection of conventional success (money, status, career) marks him as a典型的'垮掉的一代'先驱人物.", "The contrast between materialistic Isabel (representing conventional values) and Larry (seeking absolute meaning) is established in Part One, Chapter 2 — their fundamental incompatibility foreshadows their breakup.", "The Latin Quarter attic represents the bohemian, intellectual Paris of the 1920s — a space of freedom where Larry can pursue his philosophical questions away from bourgeois expectations.", "Maugham uses Larry to explore the post-WWI existential crisis felt by a generation that survived the trenches but lost faith in traditional institutions."], "7": ["Athens is the pivotal turning point — Mrs. Bradshaw's encounter with Larry redirects his quest from European philosophy toward Eastern spirituality.", "The reference to India's spiritual sages connects to Maugham's own travels in the East; he visited India in 1938 and was influenced by Vedanta philosophy.", "This waypoint marks Larry's transition from passive reading to active pilgrimage — he will now physically journey East to seek enlightenment.", "The ancient Greek setting (birthplace of Western philosophy) juxtaposes East and West, suggesting that ultimate truth may lie in the Orient."], "9": ["Jerusalem offers Larry his first encounter with intense, organized faith — Judaism, Christianity, and Islam converge at this holy city.", "The Wailing Wall scene shows Maugham's respect for religious devotion while Larry remains an observer rather than a participant.", "This stop deepens Larry's understanding that different traditions offer different paths to the divine — yet none has fully answered his question about 'the why of things'."], "10": ["Cairo and the pyramids represent ancient, enduring wisdom — civilizations have risen and fallen, yet these monuments remain.", "Larry confronts the enormity of human history and time, which puts his personal spiritual search into a cosmic perspective.", "The pyramids also symbolize the human desire for transcendence — they were built as tombs pointing toward immortality, echoing Larry's own quest."], "11": ["Ahmedabad marks Larry's arrival in India proper — the land of his spiritual destination, where he will spend years studying Vedanta philosophy.", "Mrs. Bradshaw's connection to Gandhi (she knew him personally) grounds Larry's journey in historical reality while elevating the spiritual stakes.", "This waypoint represents the beginning of Larry's serious, sustained engagement with Eastern spiritual practice — meditation, yoga, and philosophical study.", "Maugham contrasts India's ancient wisdom tradition with the materialist West, suggesting that enlightenment requires leaving one's cultural comfort zone."], "17": ["Suez is the moment of enlightenment — Larry achieves the 'absolute' he has sought throughout the novel, a mystical union with the divine.", "The ship's deck functions as a threshold between East and West, between Larry's old self and his transformed self.", "Maugham deliberately frames Larry's spiritual achievement ambiguously — readers must decide for themselves whether Larry has genuinely attained liberation or merely thinks he has.", "This ending poses the novel's central question: Can spiritual seeking actually deliver on its promises, or is enlightenment ultimately unknowable?"]};

  function hasPassages(id) { return Array.isArray(_passages[id]) && _passages[id].length > 0; }
  function hasAnalyses(id) { return Array.isArray(_analyses[id]) && _analyses[id].length > 0; }

  function buildHtml(wp) {
    var tabsId = 'popup-tabs-' + wp.id;
    var geoTab = hasPassages(wp.id) || hasAnalyses(wp.id);

    var html = '<div class="popup-header">';
    html += '<div class="popup-title">' + wp.city + ' · ' + wp.zh + '</div>';
    html += '<div class="popup-yr">&#9201; ' + wp.year + (wp.key ? ' · ★ Key Event' : '') + '</div>';
    html += '</div>';

    // Tab buttons
    html += '<div class="popup-tabs" id="' + tabsId + '-btns">';
    html += '<button class="popup-tab-btn active" data-tab="geo" onclick="PopupRenderer.switchTab(' + wp.id + ', \'geo\')">地理</button>';
    html += '<button class="popup-tab-btn' + (hasPassages(wp.id) ? '' : ' disabled') + '" data-tab="passage" onclick="PopupRenderer.switchTab(' + wp.id + ', \'passage\')">原文</button>';
    html += '<button class="popup-tab-btn' + (hasAnalyses(wp.id) ? '' : ' disabled') + '" data-tab="analysis" onclick="PopupRenderer.switchTab(' + wp.id + ', \'analysis\')">解读</button>';
    html += '</div>';

    // Content
    html += '<div class="popup-tab-content" id="' + tabsId + '-content">';
    html += renderGeoTab(wp);
    html += '</div>';

    return html;
  }

  function renderGeoTab(wp) {
    return '<div class="popup-geo">' + wp.note + '</div>';
  }

  function renderPassageTab(wp) {
    if (!hasPassages(wp.id)) return '<div class="popup-empty">原文摘录待填充</div>';
    var html = '';
    _passages[wp.id].forEach(function(p) {
      html += '<div class="popup-passage">';
      if (p.source) html += '<div class="popup-passage-src">' + p.source + '</div>';
      html += '<div class="popup-passage-text">&#8220;' + p.text + '&#8221;</div>';
      if (p.ref) html += '<div class="popup-passage-ref">' + p.ref + '</div>';
      html += '</div>';
    });
    return html;
  }

  function renderAnalysisTab(wp) {
    if (!hasAnalyses(wp.id)) return '<div class="popup-empty">文学解读待填充</div>';
    var html = '';
    _analyses[wp.id].forEach(function(a) {
      html += '<div class="popup-analysis">' + a + '</div>';
    });
    return html;
  }

  function switchTab(wpId, tab) {
    var wp = MapData.getWaypoint(wpId);
    if (!wp) return;
    var btns = document.querySelectorAll('#popup-tabs-' + wpId + '-btns .popup-tab-btn');
    btns.forEach(function(b) { b.classList.toggle('active', b.dataset.tab === tab); });
    var content = document.getElementById('popup-tabs-' + wpId + '-content');
    if (!content) return;
    if (tab === 'geo') content.innerHTML = renderGeoTab(wp);
    else if (tab === 'passage') content.innerHTML = renderPassageTab(wp);
    else if (tab === 'analysis') content.innerHTML = renderAnalysisTab(wp);
  }

  return {
    loadContent: function() { return Promise.resolve(); },
    buildHtml: buildHtml,
    switchTab: switchTab,
  };
})();
