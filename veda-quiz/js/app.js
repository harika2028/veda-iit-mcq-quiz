/* ==========================================================================
   VEDA IIT · MCQ Power Book — app logic
   ========================================================================== */
(function(){
  "use strict";

  const STORAGE_PREFIX = "veda-mcq-";

  /* ---------------- state ---------------- */
  let currentTopic = null;
  let flatQuestions = [];   // [{section, q, options, correct, levelTag}]
  let answers = [];         // [{picked:int|null, correct:bool|null}]
  let currentIndex = 0;

  /* ---------------- element refs ---------------- */
  const screens = {
    home: document.getElementById('screen-home'),
    quiz: document.getElementById('screen-quiz'),
    score: document.getElementById('screen-score'),
    review: document.getElementById('screen-review'),
  };

  function showScreen(name){
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  }

  /* ---------------- storage helpers ---------------- */
  function getBest(topicId){
    try{
      const raw = localStorage.getItem(STORAGE_PREFIX + topicId);
      return raw ? JSON.parse(raw) : null;
    }catch(e){ return null; }
  }
  function setBest(topicId, pct, correct, total){
    try{
      const prev = getBest(topicId);
      if(!prev || pct >= prev.pct){
        localStorage.setItem(STORAGE_PREFIX + topicId, JSON.stringify({pct, correct, total, ts: Date.now()}));
      }
    }catch(e){ /* storage unavailable — ignore silently */ }
  }

  /* ---------------- home screen ---------------- */
  function renderHome(){
    const grid = document.getElementById('topic-grid');
    grid.innerHTML = '';
    QUIZ_DATA.forEach((topic, i) => {
      const total = topic.sections.reduce((s, sec) => s + sec.questions.length, 0);
      const best = getBest(topic.id);

      const card = document.createElement('button');
      card.className = 'topic-card';
      card.setAttribute('type','button');
      card.innerHTML = `
        <div class="topic-card-top">
          <span class="topic-index">0${i+1} / 05</span>
          <span class="topic-weight">${escapeHtml(topic.weight)}</span>
        </div>
        <h3>${escapeHtml(topic.title)}</h3>
        <p>${escapeHtml(topic.tagline)}</p>
        <div class="topic-meta">
          <span>${total} questions · ${topic.sections.length} sections</span>
          <span class="topic-best">${best ? best.pct + '% best' : 'Not attempted'}</span>
        </div>
        <div class="topic-progress-track"><div class="topic-progress-fill" style="width:${best ? best.pct : 0}%"></div></div>
      `;
      card.addEventListener('click', () => startQuiz(topic.id));
      grid.appendChild(card);
    });
  }

  function escapeHtml(str){
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------------- quiz flow ---------------- */
  function startQuiz(topicId){
    currentTopic = QUIZ_DATA.find(t => t.id === topicId);
    flatQuestions = [];
    currentTopic.sections.forEach(sec => {
      const n = sec.questions.length;
      sec.questions.forEach((q, idx) => {
        let levelTag = 'BASIC';
        if(idx >= Math.ceil(n * 2/3)) levelTag = 'ADVANCED';
        else if(idx >= Math.ceil(n / 3)) levelTag = 'INTERMEDIATE';
        flatQuestions.push({
          section: sec.name,
          q: q.q,
          options: q.options,
          correct: q.correct,
          levelTag
        });
      });
    });
    answers = flatQuestions.map(() => ({picked:null, correct:null}));
    currentIndex = 0;
    document.getElementById('q-total').textContent = flatQuestions.length;
    buildLedTrack();
    renderQuestion();
    showScreen('quiz');
  }

  function buildLedTrack(){
    const track = document.getElementById('led-track');
    track.innerHTML = '';
    flatQuestions.forEach(() => {
      const led = document.createElement('div');
      led.className = 'led';
      track.appendChild(led);
    });
    updateLedTrack();
  }

  function updateLedTrack(){
    const leds = document.querySelectorAll('#led-track .led');
    leds.forEach((led, i) => {
      led.className = 'led';
      const a = answers[i];
      if(i === currentIndex) led.classList.add('current');
      else if(a.picked !== null) led.classList.add(a.correct ? 'done-right' : 'done-wrong');
    });
  }

  function renderQuestion(){
    const item = flatQuestions[currentIndex];
    document.getElementById('quiz-topic-name').textContent = currentTopic.title;
    document.getElementById('quiz-section-name').textContent = item.section;
    document.getElementById('q-index').textContent = currentIndex + 1;

    const levelLabelMap = {BASIC:'LEVEL 1 · BASIC', INTERMEDIATE:'LEVEL 2 · INTERMEDIATE', ADVANCED:'LEVEL 3 · ADVANCED'};
    document.getElementById('q-level').textContent = levelLabelMap[item.levelTag];

    const qText = document.getElementById('q-text');
    qText.textContent = item.q;
    qText.classList.toggle('has-code', item.q.indexOf('\n') !== -1);

    const optsWrap = document.getElementById('options');
    optsWrap.innerHTML = '';
    const keys = ['A','B','C','D'];
    const existing = answers[currentIndex];

    item.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.setAttribute('type','button');
      btn.innerHTML = `<span class="option-key">${keys[idx]}</span><span class="option-label"></span>`;
      btn.querySelector('.option-label').textContent = optText;
      btn.addEventListener('click', () => selectOption(idx));
      optsWrap.appendChild(btn);
    });

    if(existing.picked !== null){
      lockOptions(existing.picked);
    }

    updateHint();
    updateNavButtons();
    updateLedTrack();
  }

  function selectOption(idx){
    const existing = answers[currentIndex];
    if(existing.picked !== null) return; // already answered

    const item = flatQuestions[currentIndex];
    const isCorrect = idx === item.correct;
    answers[currentIndex] = {picked: idx, correct: isCorrect};

    lockOptions(idx);
    updateHint();
    updateNavButtons();
    updateLedTrack();
  }

  function lockOptions(pickedIdx){
    const item = flatQuestions[currentIndex];
    const optionEls = document.querySelectorAll('#options .option');
    optionEls.forEach((el, idx) => {
      el.classList.add('locked');
      if(idx === item.correct){
        el.classList.add('reveal-correct');
      }
      if(idx === pickedIdx && pickedIdx !== item.correct){
        el.classList.add('selected-wrong');
      }
      if(idx !== item.correct && idx !== pickedIdx){
        el.classList.add('dim');
      }
    });
  }

  function updateHint(){
    const hint = document.getElementById('answer-hint');
    const a = answers[currentIndex];
    if(a.picked === null){
      hint.textContent = 'Pick an option to continue';
      hint.className = 'answer-hint';
    } else if(a.correct){
      hint.textContent = 'Correct!';
      hint.className = 'answer-hint correct';
    } else {
      hint.textContent = 'Not quite — correct answer highlighted in blue';
      hint.className = 'answer-hint wrong';
    }
  }

  function updateNavButtons(){
    document.getElementById('btn-back').disabled = currentIndex === 0;
    const nextBtn = document.getElementById('btn-next');
    const isLast = currentIndex === flatQuestions.length - 1;
    nextBtn.innerHTML = isLast
      ? 'See score <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      : 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function goNext(){
    if(currentIndex === flatQuestions.length - 1){
      finishQuiz();
      return;
    }
    currentIndex++;
    renderQuestion();
  }
  function goBack(){
    if(currentIndex === 0) return;
    currentIndex--;
    renderQuestion();
  }

  /* ---------------- score screen ---------------- */
  function finishQuiz(){
    const total = flatQuestions.length;
    const correct = answers.filter(a => a.correct === true).length;
    const attempted = answers.filter(a => a.picked !== null).length;
    const pct = Math.round((correct / total) * 100);

    setBest(currentTopic.id, pct, correct, total);

    document.getElementById('score-topic-name').textContent = currentTopic.title;
    document.getElementById('score-headline').textContent = headlineFor(pct);
    document.getElementById('gauge-pct').textContent = pct + '%';
    document.getElementById('gauge-frac').textContent = correct + ' / ' + total + (attempted < total ? ' · ' + (total-attempted) + ' skipped' : '');

    const circumference = 2 * Math.PI * 92;
    const fill = document.getElementById('gauge-fill');
    fill.style.strokeDasharray = circumference;
    fill.style.strokeDashoffset = circumference;
    fill.style.stroke = pct >= 60 ? 'var(--right)' : (pct >= 40 ? 'var(--amber)' : 'var(--wrong)');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fill.style.strokeDashoffset = circumference - (circumference * pct/100);
      });
    });

    renderBreakdown();
    showScreen('score');
  }

  function headlineFor(pct){
    if(pct >= 90) return 'Topper mindset! ' + pct + '%';
    if(pct >= 75) return 'Strong round — keep pushing';
    if(pct >= 60) return 'Good progress, refine the gaps';
    if(pct >= 40) return 'Building the foundation';
    return 'Re-attempt in 2 days — it will stick';
  }

  function renderBreakdown(){
    const wrap = document.getElementById('score-breakdown');
    wrap.innerHTML = '';
    let cursor = 0;
    currentTopic.sections.forEach(sec => {
      const n = sec.questions.length;
      const slice = answers.slice(cursor, cursor + n);
      const correct = slice.filter(a => a.correct === true).length;
      cursor += n;
      const pct = Math.round((correct / n) * 100);

      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <span class="breakdown-name">${escapeHtml(sec.name)}</span>
        <span class="breakdown-bar"><span class="breakdown-bar-fill" style="width:${pct}%"></span></span>
        <span class="breakdown-frac">${correct}/${n}</span>
      `;
      wrap.appendChild(row);
    });
  }

  /* ---------------- review screen ---------------- */
  function renderReview(){
    document.getElementById('review-topic-name').textContent = currentTopic.title;
    const list = document.getElementById('review-list');
    list.innerHTML = '';
    const keys = ['A','B','C','D'];

    flatQuestions.forEach((item, i) => {
      const a = answers[i];
      const status = a.picked === null ? 'skipped' : (a.correct ? 'right' : 'wrong');
      const statusLabel = status === 'right' ? 'CORRECT' : status === 'wrong' ? 'INCORRECT' : 'SKIPPED';

      const el = document.createElement('div');
      el.className = 'review-item';
      let optsHtml = '';
      item.options.forEach((opt, idx) => {
        let cls = '';
        if(idx === item.correct) cls = 'is-correct';
        else if(idx === a.picked) cls = 'was-picked-wrong';
        optsHtml += `<div class="review-opt ${cls}">${keys[idx]}. ${escapeHtml(opt)}</div>`;
      });

      el.innerHTML = `
        <div class="review-item-head">
          <span class="review-num">Q${i+1} · ${escapeHtml(item.section)}</span>
          <span class="review-status ${status}">${statusLabel}</span>
        </div>
        <p class="review-q"></p>
        <div class="review-opts">${optsHtml}</div>
      `;
      el.querySelector('.review-q').textContent = item.q;
      list.appendChild(el);
    });
  }

  /* ---------------- decorative circuit trace lines ---------------- */
  function drawTraces(){
    const g = document.querySelector('.trace-lines');
    if(!g) return;
    const paths = [
      "M0,120 H260 L300,160 H520",
      "M1600,200 H1340 L1300,160 H1080",
      "M0,700 H220 L260,660 H460 L500,700 H700",
      "M1600,760 H1380 L1340,720 H1120",
      "M120,0 V180 L160,220 V420",
      "M1480,900 V680 L1440,640 V440",
    ];
    paths.forEach(d => {
      const p = document.createElementNS('http://www.w3.org/2000/svg','path');
      p.setAttribute('d', d);
      p.setAttribute('stroke', '#1C2A36');
      p.setAttribute('stroke-width', '2');
      p.setAttribute('fill', 'none');
      g.appendChild(p);
      const dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
      dot.setAttribute('r', '3.5');
      dot.setAttribute('fill', '#45D6C6');
      dot.setAttribute('opacity', '0.55');
      const dotWrap = document.createElementNS('http://www.w3.org/2000/svg','circle');
      g.appendChild(dot);
      try{
        const len = p.getTotalLength();
        const pt = p.getPointAtLength(len);
        dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y);
      }catch(e){}
    });
  }

  /* ---------------- event wiring ---------------- */
  document.getElementById('btn-next').addEventListener('click', goNext);
  document.getElementById('btn-back').addEventListener('click', goBack);
  document.getElementById('btn-exit').addEventListener('click', () => { renderHome(); showScreen('home'); });
  document.getElementById('btn-home').addEventListener('click', () => { renderHome(); showScreen('home'); });
  document.getElementById('btn-retry').addEventListener('click', () => startQuiz(currentTopic.id));
  document.getElementById('btn-review').addEventListener('click', () => { renderReview(); showScreen('review'); });
  document.getElementById('btn-review-exit').addEventListener('click', () => showScreen('score'));

  document.addEventListener('keydown', (e) => {
    if(!screens.quiz.classList.contains('active')) return;
    if(e.key >= '1' && e.key <= '4'){
      const idx = parseInt(e.key, 10) - 1;
      const opts = document.querySelectorAll('#options .option');
      if(opts[idx]) opts[idx].click();
    } else if(e.key === 'ArrowRight' || e.key === 'Enter'){
      const a = answers[currentIndex];
      if(a.picked !== null) goNext();
    } else if(e.key === 'ArrowLeft'){
      goBack();
    }
  });

  /* ---------------- init ---------------- */
  renderHome();
  drawTraces();
  showScreen('home');

})();
